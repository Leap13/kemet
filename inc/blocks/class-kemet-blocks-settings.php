<?php
/**
 * Kemet Blocks Settings
 *
 * @package     Kemet
 * @author      Kemet
 * @copyright   Copyright (c) 2019, Kemet
 * @link        https://kemet.io/
 * @since       Kemet 1.2.0
 */

/**
 * Blocks Settings Loader
 */
if ( ! class_exists( 'Kemet_Blocks_Settings' ) ) {

	/**
	 * Blocks Settings Loader
	 */
	class Kemet_Blocks_Settings {

		/**
		 * Instance
		 *
		 * @access private
		 * @var object
		 */
		private static $instance;

		/**
		 * Blocks Attrs.
		 *
		 * @access private
		 * @var array
		 */
		private static $blocks_attrs = array();

		/**
		 * Global Settings.
		 *
		 * @access private
		 * @var array
		 */
		private static $global_settings = array();

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'enqueue_block_editor_assets', array( $this, 'script_enqueue' ) );
			// add_filter( 'render_block_{block_name}', array( $this, 'call_back' ), 10, 2 ); example
			add_filter( 'block_type_metadata', array( $this, 'add_blocks_attrs' ) );
			add_filter( 'pre_render_block', array( $this, 'edit_core_logo_block' ), 10, 2 );
			add_filter( 'render_block_core/template-part', array( $this, 'edit_header_template' ), 10, 2 );
			add_filter( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) );
		}

		public function edit_header_template( $block_content, $source_block ) {
			if ( 'header' === $source_block['attrs']['slug'] ) {
				$sticky_header  = isset( $source_block['attrs']['enableStickyHeader'] ) ? $source_block['attrs']['enableStickyHeader'] : false;
				$overlay_header = isset( $source_block['attrs']['enableOverlayHeader'] ) ? $source_block['attrs']['enableOverlayHeader'] : false;
				$classes        = array();
				if ( $sticky_header ) {
					$classes[] = ' kmt-sticky-header';
				}
				if ( $overlay_header ) {
					$classes[] = ' kmt-overlay-header';
				}
				$class         = trim( 'class="wp-block-template-part' . implode( '', $classes ) );
				$block_content = str_replace( 'class="wp-block-template-part', $class, $block_content );
			}
			return $block_content;
		}
		/**
		 * edit_core_logo_block
		 *
		 * @param  string $block_content
		 * @param  array  $block
		 * @return string
		 */
		public function edit_core_logo_block( $block_content, $block ) {
			if ( 'core/site-logo' === $block['blockName'] ) {
				$attrs = $block['attrs'];
				if ( isset( $attrs['mobileLogoId'] ) && 0 !== $attrs['mobileLogoId'] ) {
					self::$global_settings['mobile_logo'] = $attrs['mobileLogoId'];
					add_filter( 'kemet_has_custom_logo', '__return_true' );
					add_filter( 'get_custom_logo', array( $this, 'kemet_mobile_logo' ), 10, 2 );
				}
			}

			return $block_content;
		}

		/**
		 * mobile header markup
		 *
		 * @param string $html logo html.
		 * @return string
		 */
		public function kemet_mobile_logo( $html ) {
			add_filter( 'wp_get_attachment_image_attributes', array( $this, 'replace_mobile_logo_attr' ), 10, 3 );
			$custom_logo_id = self::$global_settings['mobile_logo'];
			$size           = 'full';
			$html          .= sprintf(
				'<a href="%1$s" class="custom-logo-link custom-mobile-logo" rel="home" itemprop="url">%2$s</a>',
				esc_url( home_url( '/' ) ),
				wp_get_attachment_image(
					apply_filters( 'kemet_custom_mobile_logo_id', $custom_logo_id ), // Attachment id.
					'kmt-logo-size', // Attachment size.
					false, // Attachment icon.
					array(
						'class' => 'custom-logo',
					)
				)
			);
			return $html;
		}

		/**
		 * Replace mobile header attributes
		 *
		 * @param object $attr
		 * @param object $attachment
		 * @param mixed  $size
		 * @return object
		 */
		public function replace_mobile_logo_attr( $attr, $attachment, $size ) {
			$custom_logo_id = self::$global_settings['mobile_logo'];
			if ( $custom_logo_id == $attachment->ID ) {
				$attach_data = array();
				if ( ! is_customize_preview() ) {
					$attach_data = wp_get_attachment_image_src( $attachment->ID, 'full' );
					if ( isset( $attach_data[0] ) ) {
						$attr['src'] = $attach_data[0];
					}
				}
				$attr['srcset'] = '';

				if ( '' !== $custom_logo_id ) {
					$cutom_logo     = wp_get_attachment_image_src( $custom_logo_id, 'full' );
					$cutom_logo_url = $cutom_logo[0];
					$attr['srcset'] = $cutom_logo_url;
				}
				$attr['srcset'] = $cutom_logo_url;
			}
			return $attr;
		}

		/**
		 * add_blocks_attrs
		 *
		 * @param  array $block_data
		 * @return array
		 */
		public function add_blocks_attrs( $block_data ) {
			self::$blocks_attrs[ $block_data['name'] ] = $block_data;
			return $block_data;
		}

		/**
		 * get_default_attrs_values
		 *
		 * @param  array $attrs
		 * @return array
		 */
		public function get_default_attrs_values( $attrs ) {
			$defaults = array();
			foreach ( $attrs as $attr => $value ) {
				if ( isset( $value['default'] ) ) {
					$defaults[ $attr ] = $value['default'];
				}
			}

			return $defaults;
		}

		/**
		 * Enqueue Script for Meta options
		 */
		public function script_enqueue() {
			$current_screen = get_current_screen();
			if ( 'site-editor' !== $current_screen->id ) {
				return;
			}
			wp_enqueue_script(
				'kemet-blocks-settings',
				KEMET_THEME_URI . 'inc/blocks/react/build/index.js',
				array(
					'wp-edit-post',
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
				'kemet-blocks-settings',
				'KemetBlocksSettingsData',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'kemet-block-settings' ),
				)
			);
		}
	}
}

/**
 *  Kicking this off by calling 'get_instance()' method
 */
Kemet_Blocks_Settings::get_instance();
