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
			add_filter( 'block_editor_settings_all', array( $this, 'filter_global_styles_settings' ) );
			// Custom REST route disabled to preserve style variations functionality
			// add_action( 'rest_api_init', array( $this, 'register_global_styles_rest_route' ), 20 );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_fonts_enqueue_scripts' ) );
			// Add fonts to admin area for block editor
			add_action( 'admin_enqueue_scripts', array( $this, 'add_fonts_enqueue_scripts' ) );
			// Add fonts early for better compatibility
			add_action( 'init', array( $this, 'add_fonts_enqueue_scripts' ), 1 );
			// Add fonts to block editor specifically
			add_action( 'enqueue_block_editor_assets', array( $this, 'add_fonts_enqueue_scripts' ) );
			// Ensure block styles work in editor
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_styles' ) );
			// Debug: Test font loading
			add_action( 'wp_footer', array( $this, 'debug_font_loading' ) );

		}

		/**
		 * Enqueue Editor styles.
		 */
		public function editor_styles() {
			// Directory and Extension
			$dir_name    = ( SCRIPT_DEBUG ) ? 'unminified' : 'minified';
			$file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min';
			if ( is_rtl() ) {
				$file_prefix = '-rtl.min';
				if ( SCRIPT_DEBUG ) {
					$file_prefix = '-rtl';
				}
			}

			// Generate CSS URL.
			$css_file = KEMET_THEME_URI . "assets/css/{$dir_name}/editor{$file_prefix}.css";

			// Enqueue styles for the editor.
			add_editor_style( 'kemet-editor-style', $css_file );

			// Add Google Fonts to editor.
			$google_fonts_url = $this->get_google_fonts_url();
			if ( $google_fonts_url ) {
				add_editor_style( 'kemet-editor-google-fonts', $google_fonts_url );
				
				// Add CSS variables for editor
				$this->add_editor_font_css();
				
				// Debug: Log when editor fonts are added
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					error_log( 'Kemet: Added Google Fonts to editor: ' . $google_fonts_url );
				}
			}
		}

		/**
		 * Enqueue block editor styles to ensure custom block styles work in editor
		 */
		public function enqueue_block_editor_styles() {
			// Directory and Extension
			$dir_name    = ( SCRIPT_DEBUG ) ? 'unminified' : 'minified';
			$file_prefix = ( SCRIPT_DEBUG ) ? '' : '.min';
			if ( is_rtl() ) {
				$file_prefix = '-rtl.min';
				if ( SCRIPT_DEBUG ) {
					$file_prefix = '-rtl';
				}
			}

			// Generate CSS URL for editor styles
			$css_file = KEMET_THEME_URI . "assets/css/{$dir_name}/editor{$file_prefix}.css";

			// Enqueue editor styles for block editor
			wp_enqueue_style(
				'kemet-block-editor-styles',
				$css_file,
				array( 'wp-edit-blocks' ),
				KEMET_THEME_VERSION
			);

			// Debug: Log when block editor styles are enqueued
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( 'Kemet: Enqueued block editor styles: ' . $css_file );
			}
		}

		/**
		 * Add CSS variables for editor
		 */
		public function add_editor_font_css() {
			$css_vars = '';
			$font_classes = '';

			// Get theme fonts from theme.json
			if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
				$theme_data = WP_Theme_JSON_Resolver::get_merged_data()->get_settings();
				
				if ( ! empty( $theme_data['typography']['fontFamilies']['theme'] ) ) {
					$theme_fonts = $theme_data['typography']['fontFamilies']['theme'];

					foreach ( $theme_fonts as $font ) {
						if ( ! empty( $font['slug'] ) && ! empty( $font['fontFamily'] ) ) {
							$slug = $font['slug'];
							$family = $font['fontFamily'];
							
							// Add CSS variable
							$css_vars .= "--wp--preset--font-family--{$slug}: {$family};";
							
							// Add utility class for editor
							$font_classes .= ".editor-styles-wrapper .has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
							$font_classes .= ".wp-block-editor .has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
						}
					}
				}
			}

			// Get additional fonts from options (like Borel)
			$additional_fonts = $this->get_additional_fonts();
			if ( $additional_fonts ) {
				foreach ( $additional_fonts as $font ) {
					if ( ! empty( $font['slug'] ) && ! empty( $font['fontFamily'] ) ) {
						$slug = $font['slug'];
						$family = $font['fontFamily'];
						
						// Add CSS variable
						$css_vars .= "--wp--preset--font-family--{$slug}: {$family};";
						
						// Add utility class for editor
						$font_classes .= ".editor-styles-wrapper .has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
						$font_classes .= ".wp-block-editor .has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
					}
				}
			}

			if ( $css_vars ) {
				// Generate comprehensive CSS for editor blocks
				$block_css = '';
				$css_vars_array = explode( ';', $css_vars );
				foreach ( $css_vars_array as $var ) {
					if ( strpos( $var, '--wp--preset--font-family--' ) !== false ) {
						$slug = str_replace( array( '--wp--preset--font-family--', ': ', ';' ), '', $var );
						$slug = trim( $slug );
						if ( $slug ) {
							$block_css .= ".editor-styles-wrapper .wp-block, .editor-styles-wrapper .wp-block * { --wp--preset--font-family--{$slug}: var(--wp--preset--font-family--{$slug}); }";
							$block_css .= ".editor-styles-wrapper .has-{$slug}-font-family, .editor-styles-wrapper .has-{$slug}-font-family * { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
							$block_css .= ".wp-block-editor .has-{$slug}-font-family, .wp-block-editor .has-{$slug}-font-family * { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
						}
					}
				}
				
				$css = ":root { {$css_vars} } {$font_classes} {$block_css}";
				add_editor_style( 'kemet-editor-font-vars', 'data:text/css;charset=utf-8,' . urlencode( $css ) );
				
				// Debug: Log editor CSS variables
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					error_log( 'Kemet: Added editor CSS variables: ' . $css_vars );
				}
			}
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
								'description'       => __( 'The theme identifier', 'kemet' ),
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

			// Check if the response is an error
			if ( is_wp_error( $response ) ) {
				return $response; // Return the error response
			}

			if ( isset( $response->data['settings'] ) ) {

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
		 * OPTIMIZATION: This function keeps the font dropdown lightweight by only showing
		 * essential fonts (theme.json fonts) in the dropdown, while still allowing all
		 * fonts (including additional Google fonts) to work when applied to blocks.
		 *
		 * @param array $settings Default editor settings.
		 *
		 * @return array Filtered editor settings.
		 */
		function filter_global_styles_settings( $settings ) {

			// Handle both old and new WordPress versions
			if ( isset( $settings['__experimentalFeatures'] ) ) {
				// Old WordPress version structure
				if ( isset( $settings['__experimentalFeatures']['typography']['fontFamilies']['theme'] ) ) {
					$fonts = $settings['__experimentalFeatures']['typography']['fontFamilies']['theme'];
					$settings['__experimentalFeatures']['typography']['fontFamilies']['theme'] = $this->merge_fonts_to_theme_fonts( $fonts );
				}
			} elseif ( isset( $settings['typography'] ) ) {
				// New WordPress version structure
				if ( isset( $settings['typography']['fontFamilies']['theme'] ) ) {
					$fonts = $settings['typography']['fontFamilies']['theme'];
					$settings['typography']['fontFamilies']['theme'] = $this->merge_fonts_to_theme_fonts( $fonts );
				}
			}

			// Ensure font families are available in the editor
			if ( ! isset( $settings['typography']['fontFamilies'] ) ) {
				$settings['typography']['fontFamilies'] = array();
			}
			if ( ! isset( $settings['typography']['fontFamilies']['theme'] ) ) {
				$settings['typography']['fontFamilies']['theme'] = array();
			}

			// Debug: Log the settings structure
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( 'Kemet: Block editor settings structure: ' . print_r( array_keys( $settings ), true ) );
				error_log( 'Kemet: Font families in settings: ' . print_r( $settings['typography']['fontFamilies']['theme'], true ) );
			}

			return $settings;
		}

		/**
		 * Debug font loading (temporary function for testing)
		 */
		public function debug_font_loading() {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG && current_user_can( 'manage_options' ) ) {
				$google_fonts_url = $this->get_google_fonts_url();
				echo '<!-- Kemet Font Debug: ' . ( $google_fonts_url ? 'Fonts URL: ' . $google_fonts_url : 'No fonts URL found' ) . ' -->';
				
				// Check if style files exist and are readable
				$style_files = glob( get_template_directory() . '/styles/*.json' );
				echo '<!-- Kemet Style Files: ' . count( $style_files ) . ' files found -->';
				foreach ( $style_files as $file ) {
					$filename = basename( $file );
					$is_readable = is_readable( $file ) ? 'readable' : 'not readable';
					echo '<!-- ' . $filename . ': ' . $is_readable . ' -->';
				}
			}
		}

		/**
		 * createSlug
		 *
		 * @param  string $str
		 * @param  string $delimiter
		 * @return string
		 */
		public function create_slug(string $str, string $delimiter = '-'): string
			{
				$slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^a-zA-Z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', str_replace(' ', '-', $str)))))));
				return $slug;
			}


		/**
		 * Google Font URL
		 * Combine multiple google font in one URL
		 *
		 * @link https://shellcreeper.com/?p=1476
		 * @param array $fonts      Google Fonts array.
		 * @param array $subsets    Font's Subsets array.
		 *
		 * @return string
		 */
		public static function google_fonts_url( $font_name, $variations = array() ) {

			$weights = array(
				'italic' => array(),
				'normal' => array(),
			);

			$weight_text = '';
			$font_name   = str_replace( ' ', '+', $font_name );
			$family      = "family={$font_name}";
			$weight_text = '';

			if ( ! empty( $variations ) && count( $variations ) > 1 ) {
				$weight_text = 'wght@';
				foreach ( $variations as  $variation ) {
					$variation_val = (int) $variation[1] * 100;
					if ( 'i' === $variation[0] ) {
						$weights['italic'][] = $variation_val;
					} else {
						$weights['normal'][] = $variation_val;
					}
				}
				sort( $weights['italic'] );
				sort( $weights['normal'] );

				if ( ! empty( $weights['normal'] ) ) {
					$weights['normal'] = array_unique( $weights['normal'] );
					foreach ( $weights['normal'] as $wght ) {
						$wghts[] = ! empty( $weights['italic'] ) ? '0,' . $wght : $wght;
					}
				}

				if ( ! empty( $weights['italic'] ) ) {
					$family           .= ':ital,';
					$weights['italic'] = array_unique( $weights['italic'] );
					foreach ( $weights['italic'] as $wght ) {
						$wghts[] = '1,' . $wght;
					}
				} else {
					$weight_text = ':wght@';
				}

				$weight_text .= implode( ';', $wghts );
			}

			return "{$family}{$weight_text}";
		}

		/**
		 * Returns additional fonts.
		 */
		function get_additional_fonts() {
			$google_fonts = get_option( 'kemet_google_fonts', array() );
			if ( ! $google_fonts ) {
				return;
			}
			$fonts = array();
			foreach ( $google_fonts as $font ) {
				$font_name       = $font['name'];
				$font_fallback   = $font['fallback'];
				$font_variations = $font['variations'];
				$slug            = $this->create_slug( $font_name );
				$url             = $this->google_fonts_url( $font_name, $font_variations );
				$fonts[]         = array(
					'fontFamily' => "{$font_name}, {$font_fallback}",
					'name'       => "{$font_name}",
					'slug'       => "{$slug}",
					'google'     => "{$url}",
				);
			}

			return $fonts;
		}

		/**
		 * Add_fonts_enqueue_scripts
		 *
		 * @return void
		 */
		public function add_fonts_enqueue_scripts() {
			// Get Google fonts URL from theme.json
			$google_fonts_url = $this->get_google_fonts_url();
			
			if ( $google_fonts_url ) {
				wp_enqueue_style( // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
					'kemet-theme-fonts',
					$google_fonts_url,
					array(),
					null
				);
				
				// Add CSS variables for font families
				$this->add_font_css_variables();
				
				// Debug: Log when fonts are enqueued
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					error_log( 'Kemet: Enqueued Google Fonts URL: ' . $google_fonts_url );
				}
			} else {
				// Debug: Log when no fonts URL is found
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					error_log( 'Kemet: No Google Fonts URL found' );
				}
			}
		}

		/**
		 * Add CSS variables for font families
		 */
		public function add_font_css_variables() {
			$css_vars = '';
			$font_classes = '';

			// Get theme fonts from theme.json
			if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
				$theme_data = WP_Theme_JSON_Resolver::get_merged_data()->get_settings();
				
				if ( ! empty( $theme_data['typography']['fontFamilies']['theme'] ) ) {
					$theme_fonts = $theme_data['typography']['fontFamilies']['theme'];

					foreach ( $theme_fonts as $font ) {
						if ( ! empty( $font['slug'] ) && ! empty( $font['fontFamily'] ) ) {
							$slug = $font['slug'];
							$family = $font['fontFamily'];
							
							// Add CSS variable
							$css_vars .= "--wp--preset--font-family--{$slug}: {$family};";
							
							// Add utility class
							$font_classes .= ".has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
						}
					}
				}
			}

			// Get additional fonts from options (like Borel)
			$additional_fonts = $this->get_additional_fonts();
			if ( $additional_fonts ) {
				foreach ( $additional_fonts as $font ) {
					if ( ! empty( $font['slug'] ) && ! empty( $font['fontFamily'] ) ) {
						$slug = $font['slug'];
						$family = $font['fontFamily'];
						
						// Add CSS variable
						$css_vars .= "--wp--preset--font-family--{$slug}: {$family};";
						
						// Add utility class
						$font_classes .= ".has-{$slug}-font-family { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
					}
				}
			}

			if ( $css_vars ) {
				// Generate comprehensive CSS for blocks
				$block_css = '';
				$css_vars_array = explode( ';', $css_vars );
				foreach ( $css_vars_array as $var ) {
					if ( strpos( $var, '--wp--preset--font-family--' ) !== false ) {
						$slug = str_replace( array( '--wp--preset--font-family--', ': ', ';' ), '', $var );
						$slug = trim( $slug );
						if ( $slug ) {
							$block_css .= ".wp-block, .wp-block * { --wp--preset--font-family--{$slug}: var(--wp--preset--font-family--{$slug}); }";
							$block_css .= ".has-{$slug}-font-family, .has-{$slug}-font-family * { font-family: var(--wp--preset--font-family--{$slug}) !important; }";
						}
					}
				}
				
				$css = ":root { {$css_vars} } {$font_classes} {$block_css}";
				wp_add_inline_style( 'kemet-theme-fonts', $css );
				
				// Also add to global styles for better compatibility
				wp_add_inline_style( 'global-styles', $css );
				
				// Debug: Log CSS variables
				if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					error_log( 'Kemet: Added CSS variables: ' . $css_vars );
				}
			}
		}

		/**
		 * Custom_google_fonts_url
		 *
		 * @param  string $default
		 * @return string
		 */
		public function custom_google_fonts_url() {

			$fonts = $this->get_additional_fonts();

			if ( ! $fonts ) {
				return;
			}
			foreach ( $fonts as $font ) {
				$enqueue_fonts[] = $font['google'];
			}

			return apply_filters( 'kemet_google_fonts_url', esc_url_raw( 'https://fonts.googleapis.com/css2?' . implode( '&', array_unique( array_values( $enqueue_fonts ) ) ) . '&display=swap' ) );
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

			if ( $new_fonts ) {
				foreach ( $new_fonts as $font ) {
					if ( in_array( $font['fontFamily'], array_column( $fonts, 'fontFamily' ) ) ) {
						continue;
					}
					$fonts[] = $font;
				}
			}

			return $fonts;
		}

		/**
		 * GET GOOGLE FONTS URL
		 *
		 * @return string
		 */
		public function get_google_fonts_url() {
			$font_family_urls = array();

			// Get fonts from theme.json
			if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
				$theme_data = WP_Theme_JSON_Resolver::get_merged_data()->get_settings();
				
				if ( ! empty( $theme_data['typography']['fontFamilies']['theme'] ) ) {
					$theme_data['typography']['fontFamilies']['theme'] = $this->merge_fonts_to_theme_fonts( $theme_data['typography']['fontFamilies']['theme'] );
					$theme_font_families = $theme_data['typography']['fontFamilies']['theme'];

					foreach ( $theme_font_families as $font_family ) {
						if ( ! empty( $font_family['google'] ) ) {
							$font_family_urls[] = $font_family['google'];
						}
					}
				}
			}

			// Get fonts from additional fonts (like Borel)
			$additional_fonts = $this->get_additional_fonts();
			if ( $additional_fonts ) {
				foreach ( $additional_fonts as $font ) {
					if ( ! empty( $font['google'] ) ) {
						$font_family_urls[] = $font['google'];
					}
				}
			}

			// If no fonts found, try custom method
			if ( empty( $font_family_urls ) ) {
				return $this->custom_google_fonts_url();
			}

			// Return a single request URL for all of the font families.
			$google_fonts_url = 'https://fonts.googleapis.com/css2?' . implode( '&', array_unique( $font_family_urls ) ) . '&display=swap';
			
			// Debug: Log the URL (remove this in production)
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				error_log( 'Kemet Google Fonts URL: ' . $google_fonts_url );
			}
			
			return apply_filters( 'kemet_google_fonts_url', esc_url_raw( $google_fonts_url ) );

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
