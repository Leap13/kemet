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
define( 'KEMET_THEME_VERSION', '1.2.0' );
define( 'KEMET_THEME_DIR', get_template_directory() . '/' );
define( 'KEMET_THEME_URI', get_template_directory_uri() . '/' );
define( 'KEMET_THEME_SETTINGS', 'kemet-settings' );

/**
 * Functions.
 */
require_once KEMET_THEME_DIR . 'inc/blocks/class-kemet-blocks-settings.php';

/**
 * Options.
 */
// require_once KEMET_THEME_DIR . 'inc/react-options/class-kemet-options.php';


if ( ! function_exists( 'kemet_support' ) ) :
	function kemet_support() {

		// Adding support for core block visual styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );
	}
	add_action( 'after_setup_theme', 'kemet_support' );
endif;

/**
 * Enqueue scripts and styles.
 */
function kemet_scripts() {
	// Enqueue theme stylesheet.
	wp_enqueue_style( 'kemet-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get( 'Version' ) );
}

add_action( 'wp_enqueue_scripts', 'kemet_scripts' );
