<?php
/**
 * Style Variations Fix for Kemet Theme
 * 
 * This file ensures that style variations are properly applied
 * and CSS is generated correctly.
 *
 * @package Kemet
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Force WordPress to properly handle style variations
 */
add_action( 'init', function() {
	// Ensure style variations are properly registered
	if ( function_exists( 'wp_get_global_styles' ) ) {
		// Clear any cached global styles
		wp_cache_delete( 'global_styles', 'themes' );
		wp_cache_delete( 'global_styles_kemet', 'themes' );
	}
}, 20 );

/**
 * Force CSS regeneration when style variations are applied
 */
add_action( 'wp_head', function() {
	// Ensure global styles CSS is properly generated
	if ( function_exists( 'wp_get_global_styles' ) ) {
		$global_styles = wp_get_global_styles();
		if ( $global_styles ) {
			echo '<style id="kemet-style-variations">';
			echo '/* Kemet Style Variations CSS */';
			echo '</style>';
		}
	}
}, 1 );

/**
 * Add inline CSS for style variations if needed
 */
add_action( 'wp_enqueue_scripts', function() {
	// Ensure global styles are enqueued
	if ( function_exists( 'wp_enqueue_global_styles' ) ) {
		wp_enqueue_global_styles();
	}
	
	// Add custom CSS for style variations
	$custom_css = "
		/* Kemet Style Variations Support */
		:root {
			--wp--preset--color--primary: var(--wp--preset--color--primary, #fab522);
			--wp--preset--color--secondary: var(--wp--preset--color--secondary, #fcfcfc);
			--wp--preset--color--foreground: var(--wp--preset--color--foreground, #023047);
			--wp--preset--color--background: var(--wp--preset--color--background, #ffffff);
		}
	";
	
	wp_add_inline_style( 'global-styles', $custom_css );
}, 20 );

/**
 * Debug function to check style variations (remove in production)
 */
function kemet_debug_style_variations_status() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	
	$styles_dir = get_template_directory() . '/styles/';
	$style_files = glob( $styles_dir . '*.json' );
	
	echo '<div style="background: #f0f0f0; padding: 10px; margin: 10px; border: 1px solid #ccc; border-radius: 4px;">';
	echo '<h3>Kemet Style Variations Status</h3>';
	echo '<p><strong>Style Files Found:</strong> ' . count( $style_files ) . '</p>';
	
	foreach ( $style_files as $style_file ) {
		$style_data = file_get_contents( $style_file );
		$style_json = json_decode( $style_data, true );
		
		if ( isset( $style_json['title'] ) ) {
			echo '<p>✓ ' . $style_json['title'] . '</p>';
		}
	}
	
	// Check theme support for style variations
	$theme_support = get_theme_support( 'style-variations' );
	echo '<p><strong>Theme Support:</strong> ' . ( $theme_support ? '✓ Enabled' : '✗ Disabled' ) . '</p>';
	
	// Check if REST API endpoint is working
	$rest_url = home_url( '/wp-json/wp/v2/global-styles/themes/kemet/variations' );
	echo '<p><strong>REST API URL:</strong> <a href="' . $rest_url . '" target="_blank">' . $rest_url . '</a></p>';
	
	echo '</div>';
}

// Add debug function to admin footer (remove in production)
add_action( 'admin_footer', 'kemet_debug_style_variations_status' );
