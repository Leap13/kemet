<?php
/**
 * Panel
 *
 * @package Kemet Addons
 */

define( 'KEMET_ADDONS_PANEL_DIR', KEMET_THEME_DIR . 'inc/kemet-panel/' );
define( 'KEMET_ADDONS_PANEL_URL', KEMET_THEME_URI . 'inc/kemet-panel/' );

if ( ! class_exists( 'Kemet_Panel' ) ) {

	/**
	 * Kemet Panel
	 *
	 * @since 1.0.0
	 */
	class Kemet_Panel {

		/**
		 * Default values
		 *
		 * @var array defaults
		 */
		private $defaults = array();

		/**
		 * Member Variable
		 *
		 * @var object instance
		 */
		private static $instance;

		/**
		 * Instance
		 *
		 * @return object
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Constructor
		 */
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'register_custom_menu_page' ), 100 );
			add_action( 'admin_bar_menu', array( $this, 'admin_bar_item' ), 1000 );
			add_action( 'enable_kemet_admin_menu_item', '__return_true' );
		}

		/**
		 * Add kemet panel to admin bar
		 *
		 * @param WP_Admin_Bar $admin_bar admin bar.
		 * @return void
		 */
		public function admin_bar_item( WP_Admin_Bar $admin_bar ) {
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}
			$admin_bar->add_menu(
				array(
					'id'     => 'menu-id',
					'parent' => null,
					'group'  => null,
					'title'  => __( 'Kemet', 'kemet' ), // you can use img tag with image link. it will show the image icon Instead of the title.
					'href'   => admin_url( 'admin.php?page=kemet_panel' ),
					'meta'   => array(
						'title' => __( 'Kemet', 'kemet' ), // This title will show on hover.
					),
				)
			);
		}

		/**
		 * Add kemet panel menu
		 *
		 * @return void
		 */
		public function register_custom_menu_page() {
			$page = add_submenu_page( 'kemet_panel', __( 'Settings', 'kemet' ), __( 'Settings', 'kemet' ), 'manage_options', 'kemet_panel', array( $this, 'render' ), null );
			if ( ! defined( 'KEMET_ADMIN_PAGE' ) ) {
				define( 'KEMET_ADMIN_PAGE', $page );
			}
			add_action( 'admin_print_styles-' . $page, array( $this, 'enqueue_admin_script' ) );
		}

		/**
		 * Render panel html
		 *
		 * @return void
		 */
		public function render() { ?>
			<div id="kmt-dashboard"></div>
			<?php
		}

		/**
		 * get_system_info
		 *
		 * @return array
		 */
		public static function get_system_info() {
			global $wpdb;

			$info = array(
				'home_url'          => home_url(),
				'site_url'          => get_option( 'siteurl' ),
				'version'           => get_bloginfo( 'version' ),
				'multisite'         => is_multisite(),
				'memory_limit'      => wp_convert_hr_to_bytes( WP_MEMORY_LIMIT ),
				'memory_limit_size' => size_format( wp_convert_hr_to_bytes( WP_MEMORY_LIMIT ) ),
				'theme_version'     => esc_html( KEMET_THEME_VERSION ),
				'wp_path'           => esc_html( ABSPATH ),
				'debug'             => defined( 'WP_DEBUG' ) && WP_DEBUG,
				'lang'              => esc_html( get_locale() ),
				'server'            => isset( $_SERVER['SERVER_SOFTWARE'] ) ? esc_html( sanitize_text_field( wp_unslash( $_SERVER['SERVER_SOFTWARE'] ) ) ) : '',
				'php_version'       => function_exists( 'phpversion' ) ? phpversion() : '',
				'mysql_version'     => $wpdb->db_version(),
				'max_upload'        => esc_html( size_format( wp_max_upload_size() ) ),
				'ini_get'           => function_exists( 'ini_get' ),
			);
			if ( function_exists( 'ini_get' ) ) {
				$info['php_memory_limit']   = esc_html( size_format( wp_convert_hr_to_bytes( ini_get( 'memory_limit' ) ) ) );
				$info['post_max_size']      = esc_html( size_format( wp_convert_hr_to_bytes( ini_get( 'post_max_size' ) ) ) );
				$info['max_execution_time'] = ini_get( 'max_execution_time' );
				$info['max_input_vars']     = esc_html( ini_get( 'max_input_vars' ) );
				$info['suhosin']            = extension_loaded( 'suhosin' );
			}

			$active_plugins = (array) get_option( 'active_plugins', array() );
			$plugins        = array();
			if ( is_multisite() ) {
				$network_activated_plugins = array_keys( get_site_option( 'active_sitewide_plugins', array() ) );
				$active_plugins            = array_merge( $active_plugins, $network_activated_plugins );
			}

			foreach ( $active_plugins as $plugin ) {
				$plugin_data    = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin );
				$dirname        = dirname( $plugin );
				$version_string = '';
				$network_string = '';

				if ( ! empty( $plugin_data['Name'] ) ) {
					$plugins[ $plugin ] = array(
						'name'    => $plugin_data['Name'],
						'author'  => $plugin_data['Author'],
						'version' => $plugin_data['Version'],

					);

					if ( ! empty( $plugin_data['PluginURI'] ) ) {
						$plugins[ $plugin ]['PluginURI'] = $plugin_data['PluginURI'];
					}
				}
			}

			$info['active_plugins'] = $plugins;

			return $info;
		}

		/**
		 * Enqueue a script in the WordPress admin on edit.php
		 *
		 * @param string $hook current location.
		 * @return void
		 */
		public function enqueue_admin_script() {
			$css_prefix = '.min.css';
			$dir        = 'minified';
			if ( SCRIPT_DEBUG ) {
				$css_prefix = '.css';
				$dir        = 'unminified';
			}
			if ( is_rtl() ) {
				$css_prefix = '-rtl.min.css';
				if ( SCRIPT_DEBUG ) {
					$css_prefix = '-rtl.css';
				}
			}
			wp_enqueue_style( 'kemet-panel-css', KEMET_ADDONS_PANEL_URL . 'assets/css/' . $dir . '/kemet-panel' . $css_prefix, false, KEMET_THEME_VERSION );
			wp_enqueue_script(
				'kemet-panel-js',
				KEMET_ADDONS_PANEL_URL . 'assets/js/build/index.js',
				array(
					'wp-i18n',
					'wp-components',
					'wp-element',
					'wp-media-utils',
					'wp-block-editor',
				),
				KEMET_THEME_VERSION,
				true
			);

			wp_localize_script(
				'kemet-panel-js',
				'KemetPanelData',
				array(
					'nonce'          => wp_create_nonce( 'kemet-panel' ),
					'system_info'    => self::get_system_info(),
					'kemet_redirect' => isset( $_GET['tab'] ) ? $_GET['tab'] : '',
				)
			);
		}
	}
	Kemet_Panel::get_instance();
}