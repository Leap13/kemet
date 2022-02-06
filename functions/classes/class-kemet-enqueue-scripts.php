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
		}

		/**
		 * Enqueue Editor styles.
		 */
		function editor_styles() {
			add_editor_style(
				array(
					'./assets/css/editor.css',
					$this->get_google_fonts_url(),
				)
			);
		}

		/*
		* GET GOOGLE FONTS URL
		*/
		function get_google_fonts_url() {

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
				'js'  => array(
					'kemet-theme-js' => 'style',
				),

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
			$js_uri  = KEMET_THEME_URI . 'assets/js/';
			$css_uri = KEMET_THEME_URI . 'assets/css/';

			// All assets.
			$all_assets = self::theme_assets();
			$styles     = $all_assets['css'];
			$scripts    = $all_assets['js'];

			if ( is_array( $styles ) && ! empty( $styles ) ) {
				// Register & Enqueue Styles.
				foreach ( $styles as $key => $style ) {

					// Generate CSS URL.
					$css_file = $css_uri . $style . '.css';

					// Dependencies
					$dependencies = apply_filters( 'kemet_style_dependencies', array( 'kemet-styles-google-fonts' ) );

					// Register.
					wp_register_style( $key, $css_file, $dependencies, KEMET_THEME_VERSION, 'all' );

					// Enqueue.
					wp_enqueue_style( $key );

					// RTL support.
					wp_style_add_data( $key, 'rtl', 'replace' );
				}
			}

			// Google Fonts support
			wp_register_style( 'kemet-styles-google-fonts', $this->get_google_fonts_url() );

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
