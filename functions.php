<?php
/**
 * Kemet functions and definitions.
 *
 * @see https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kemet
 */

/**
 * Define Constants.
 */
define( 'KEMET_THEME_VERSION', wp_get_theme( 'Kemet' )->get( 'Version' ) );
define( 'KEMET_THEME_DIR', get_template_directory() . '/' );
define( 'KEMET_THEME_URI', get_template_directory_uri() . '/' );
define( 'KEMET_THEME_SETTINGS', 'kemet-settings' );

/**
 * Functions.
 */
require_once KEMET_THEME_DIR . 'inc/blocks/class-kemet-blocks-settings.php';


if ( ! function_exists( 'kemet_support' ) ) :
	function kemet_support() {

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Language support
		load_theme_textdomain( 'kemet', KEMET_THEME_DIR . 'languages' );
	}
	add_action( 'after_setup_theme', 'kemet_support' );
endif;

/**
 * Enqueue scripts and styles.
 */
if ( ! function_exists( 'kemet_scripts' ) ) :
	function kemet_scripts() {
		// Google Fonts support
		wp_register_style( 'kemet-styles-google-fonts', kemet_get_google_fonts_url() );

		wp_enqueue_style( 'kemet-style', kemet_get_google_fonts_url(), array(), null );

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'kemet-style', KEMET_THEME_URI . 'style.css', array(), KEMET_THEME_VERSION );
	}

	add_action( 'wp_enqueue_scripts', 'kemet_scripts' );
endif;

/**
 * Enqueue Editor styles.
 */

if ( ! function_exists( 'kemet_editor_styles' ) ) :
	function kemet_editor_styles() {

		add_editor_style(
			array(
				'./assets/css/editor.css',
				kemet_get_google_fonts_url(),
			)
		);

	}
	add_action( 'admin_init', 'kemet_editor_styles' );
endif;

/*
* GET GOOGLE FONTS URL
*/


function kemet_get_google_fonts_url() {

	if ( ! class_exists( 'WP_Theme_JSON_Resolver_Gutenberg' ) ) {
		return '';
	}

	$theme_data = WP_Theme_JSON_Resolver_Gutenberg::get_merged_data()->get_settings();

	if ( empty( $theme_data['typography']['fontFamilies'] ) ) {
		return '';
	}

	$theme_font_families = ! empty( $theme_data['typography']['fontFamilies']['theme'] ) ? $theme_data['typography']['fontFamilies']['theme'] : array();
	$user_font_families = ! empty( $theme_data['typography']['fontFamilies']['user'] ) ? $theme_data['typography']['fontFamilies']['user'] : array();

	$fonts = array_merge( $theme_font_families, $user_font_families );

	if ( ! $fonts ) {
		return '';
	}

	$font_family_urls = array();

	foreach ( $fonts as $font ) {
		if ( ! empty( $font["google"] ) ) {
			$font_family_urls[] = $font["google"];
		}
	}

	if ( ! $font_family_urls ) {
		return '';
	}

	// Return a single request URL for all of the font families.
	return apply_filters( 'kemet_google_fonts_url', esc_url_raw( 'https://fonts.googleapis.com/css2?' . implode( '&', $font_family_urls ) . '&display=swap' ) );

	}

