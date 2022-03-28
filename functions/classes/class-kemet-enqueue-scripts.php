<?php
/**
 * Loader Functions
 *
 * @package     Kemet
 * @author      Kemet
 * @copyright   Copyright (c) 2019, Kemet
 * @link        https://kemet.io/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme Enqueue Scripts
 */
if ( ! class_exists( 'Kemet_Enqueue_Scripts' ) ) {

	/**
	 * Theme Enqueue Scripts
	 */
	class Kemet_Enqueue_Scripts {


		/**
		 * Class styles.
		 *
		 * @access public
		 * @var $styles Enqueued styles.
		 */
		public static $styles;

		/**
		 * Class scripts.
		 *
		 * @access public
		 * @var $scripts Enqueued scripts.
		 */
		public static $scripts;

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 1 );
			add_action( 'admin_init', array( $this, 'editor_styles' ), 1 );
			// add_filter( 'block_editor_settings_all', array( $this, 'filter_global_styles_settings' ) );
			// add_action( 'rest_api_init', array( $this, 'register_global_styles_rest_route' ), 20 );
		}

		/**
		 * Enqueue Editor styles.
		 */
		public function editor_styles() {
			/* Directory and Extension */
			$file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min';
			$dir_name    = ( SCRIPT_DEBUG ) ? 'unminified' : 'minified';

			if ( is_rtl() ) {
				$css_prefix = '-rtl.min.css';
				if ( SCRIPT_DEBUG ) {
					$css_prefix = '-rtl.css';
				}
			}

			// Generate CSS URL.
			$css_file = './assets/css/' . $dir_name . '/editor' . $file_prefix;

			add_editor_style(
				array(
					$css_file,
					$this->get_google_fonts_url(),
				)
			);
		}

		/**
		 * Updates the Global Styles controller route.
		 *
		 * @see WP_REST_Global_Styles_Controller.
		 */
		function register_global_styles_rest_route() {

			$controller = new WP_REST_Global_Styles_Controller();
			register_rest_route(
				'wp/v2',
				sprintf(
					'/%s/themes/(?P<stylesheet>%s)',
					'global-styles',
					'[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?'
				),
				array(
					array(
						'methods'             => WP_REST_Server::READABLE,
						'callback'            => array( $this, 'get_theme_item_global_styles' ),
						'permission_callback' => array( $controller, 'get_theme_item_permissions_check' ),
						'args'                => array(
							'stylesheet' => array(
								'description'       => __( 'The theme identifier' ),
								'type'              => 'string',
								'sanitize_callback' => array( $controller, '_sanitize_global_styles_callback' ),
							),
						),
					),
				),
				true
			);
		}

		/**
		 * Returns the given theme global styles config.
		 *
		 * @param WP_REST_Request $request The request instance.
		 * @return WP_REST_Response|WP_Error
		 */
		function get_theme_item_global_styles( $request ) {

			$controller = new WP_REST_Global_Styles_Controller();
			$response   = $controller->get_theme_item( $request );

			if ( $response->data['settings'] ) {
				$settings = $response->data['settings'];
				$fonts    = $settings['typography']['fontFamilies']['theme'];
				$settings['typography']['fontFamilies']['theme'] = $this->merge_fonts_to_theme_fonts( $fonts );
				$response->data['settings']                      = $settings;
			}
			return $response;
		}

		/**
		 * Updates post editor settings to add fonts and width settings.
		 *
		 * @param array $settings Default editor settings.
		 *
		 * @return array Filtered editor settings.
		 */
		function filter_global_styles_settings( $settings ) {

			if ( isset( $settings['__experimentalFeatures'] ) ) {
				$fonts = $settings['__experimentalFeatures']['typography']['fontFamilies']['theme'];
				$settings['__experimentalFeatures']['typography']['fontFamilies']['theme'] = $this->merge_fonts_to_theme_fonts( $fonts );
			}

			return $settings;
		}
		/**
		 * Returns additional fonts.
		 */
		function get_additional_fonts() {
			$fonts = array(
				array(
					'fontFamily' => '"Alegreya", serif',
					'slug'       => 'alegreya',
					'name'       => 'Alegreya',
					'src'        => 'Alegreya:ital,wght@0,400..900;1,400..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Cabin", sans-serif',
					'slug'       => 'cabin',
					'name'       => 'Cabin',
					'src'        => 'Cabin:ital,wght@0,400..700;1,400..700',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Crimson Pro", serif',
					'slug'       => 'crimson-pro',
					'name'       => 'Crimson Pro',
					'src'        => 'Crimson+Pro:ital,wght@0,200..900;1,200..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"EB Garamond", serif',
					'slug'       => 'eb-garamond',
					'name'       => 'EB Garamond',
					'src'        => 'EB+Garamond:ital,wght@0,400..800;1,400..800',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Inter", sans-serif',
					'slug'       => 'inter',
					'name'       => 'Inter',
					'src'        => 'Inter:wght@100..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Libre Franklin", sans-serif',
					'slug'       => 'libre-franklin',
					'name'       => 'Libre Franklin',
					'src'        => 'Libre+Franklin:ital,wght@0,100..900;1,100..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Lora", serif',
					'slug'       => 'lora',
					'name'       => 'Lora',
					'src'        => 'Lora:ital,wght@0,400..700;1,400..700',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Open Sans", sans-serif',
					'slug'       => 'open-sans',
					'name'       => 'Open Sans',
					'src'        => 'Open+Sans:ital,wght@0,300..800;1,300..800',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Playfair Display", serif',
					'slug'       => 'playfair-display',
					'name'       => 'Playfair Display',
					'src'        => 'Playfair+Display:ital,wght@0,400..900;1,400..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Raleway", sans-serif',
					'slug'       => 'raleway',
					'name'       => 'Raleway',
					'src'        => 'Raleway:ital,wght@0,100..900;1,100..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Roboto Serif", serif',
					'slug'       => 'roboto-serif',
					'name'       => 'Roboto Serif',
					'src'        => 'Roboto+Serif:ital,wght@0,100..900;1,100..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Roboto Slab", serif',
					'slug'       => 'roboto-slab',
					'name'       => 'Roboto Slab',
					'src'        => 'Roboto+Slab:wght@100..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Roboto Mono", monospace',
					'slug'       => 'roboto-mono',
					'name'       => 'Roboto Mono',
					'src'        => 'Roboto+Mono:ital,wght@0,100..700;1,100..700',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Rubik", sans-serif',
					'slug'       => 'rubik',
					'name'       => 'Rubik',
					'src'        => 'Rubik:ital,wght@0,300..900;1,300..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Source Sans 3", sans-serif',
					'slug'       => 'source-sans-3',
					'name'       => 'Source Sans 3',
					'src'        => 'Source+Sans+3:ital,wght@0,200..900;1,200..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Source Serif 4", serif',
					'slug'       => 'source-serif-4',
					'name'       => 'Source Serif 4',
					'src'        => 'Source+Serif+4:ital,wght@0,200..900;1,200..900',
					'provider'   => 'google',
				),
				array(
					'fontFamily' => '"Work Sans", sans-serif',
					'slug'       => 'work-sans',
					'name'       => 'Work Sans',
					'src'        => 'Work+Sans:ital,wght@0,100..900;1,100..900',
					'provider'   => 'google',
				),
			);
			return $fonts;
		}


		/**
		 * Merge our additional fonts with the theme fonts and make sure the values are unique.
		 *
		 * @param array $theme_fonts The theme fonts.
		 * @return array             The merged fonts.
		 */
		function merge_fonts_to_theme_fonts( $theme_fonts ) {
			$new_fonts = $this->get_additional_fonts();
			$fonts     = $theme_fonts ? $theme_fonts : array();

			foreach ( $new_fonts as $font ) {
				if ( in_array( $font['fontFamily'], array_column( $fonts, 'fontFamily' ) ) ) {
					continue;
				}
				$fonts[] = $font;
			}
			return $fonts;
		}

		/**
		 * GET GOOGLE FONTS URL
		 *
		 * @return string
		 */
		public function get_google_fonts_url() {

			if ( ! class_exists( 'WP_Theme_JSON_Resolver_Gutenberg' ) ) {
				return '';
			}

			$theme_data = WP_Theme_JSON_Resolver_Gutenberg::get_merged_data()->get_settings();

			if ( empty( $theme_data['typography']['fontFamilies'] ) ) {
				return '';
			}

			$theme_font_families = ! empty( $theme_data['typography']['fontFamilies']['theme'] ) ? $theme_data['typography']['fontFamilies']['theme'] : array();

			if ( ! $theme_font_families ) {
				return '';
			}

			$font_family_urls = array();

			foreach ( $theme_font_families as $font_family ) {
				if ( ! empty( $font_family['google'] ) ) {
					$font_family_urls[] = $font_family['google'];
				}
			}

			if ( ! $font_family_urls ) {
				return '';
			}

			// Return a single request URL for all of the font families.
			return apply_filters( 'kemet_google_fonts_url', esc_url_raw( 'https://fonts.googleapis.com/css2?' . implode( '&', $font_family_urls ) . '&display=swap' ) );

		}

		/**
		 * List of all assets.
		 *
		 * @return array assets array.
		 */
		public static function theme_assets() {
			$default_assets = array(

				// handle => location ( in /assets/js/ ) ( without .js ext).
				'js'  => array(),

				// handle => location ( in /assets/css/ ) ( without .css ext).
				'css' => array(
					'kemet-theme-css' => 'style',
				),
			);

			return apply_filters( 'kemet_theme_assets', $default_assets );
		}

		/**
		 * Enqueue Scripts
		 */
		public function enqueue_scripts() {
			$kemet_enqueue = apply_filters( 'kemet_enqueue_theme_assets', true );

			if ( ! $kemet_enqueue ) {
				return;
			}

			/* Directory and Extension */
			$file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min';
			$dir_name    = ( SCRIPT_DEBUG ) ? 'unminified' : 'minified';

			$js_uri  = KEMET_THEME_URI . 'assets/js/' . $dir_name . '/';
			$css_uri = KEMET_THEME_URI . 'assets/css/' . $dir_name . '/';

			// All assets.
			$all_assets = self::theme_assets();
			$styles     = $all_assets['css'];
			$scripts    = $all_assets['js'];

			if ( is_array( $styles ) && ! empty( $styles ) ) {
				// Register & Enqueue Styles.
				foreach ( $styles as $key => $style ) {

					// Generate CSS URL.
					$css_file = $css_uri . $style . $file_prefix . '.css';

					// Dependencies.
					$dependencies = apply_filters( 'kemet_style_dependencies', array( 'kemet-styles-google-fonts' ) );

					// Register.
					wp_register_style( $key, $css_file, $dependencies, KEMET_THEME_VERSION, 'all' );

					// Enqueue.
					wp_enqueue_style( $key );

					// RTL support.
					wp_style_add_data( $key, 'rtl', 'replace' );
				}
			}

			// Google Fonts support.
			wp_register_style( 'kemet-styles-google-fonts', $this->get_google_fonts_url(), array(), KEMET_THEME_VERSION );

			if ( is_array( $scripts ) && ! empty( $scripts ) ) {
				// Register & Enqueue Scripts.
				foreach ( $scripts as $key => $script ) {

					// Register.
					wp_register_script( $key, $js_uri . $script . '.js', array(), KEMET_THEME_VERSION, true );

					// Enqueue.
					wp_enqueue_script( $key );
				}
			}
		}
	}


	new Kemet_Enqueue_Scripts();
}
