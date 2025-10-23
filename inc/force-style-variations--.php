<?php
/**
 * Force Style Variations Registration for Kemet Theme
 * 
 * This file ensures that style variations are properly registered
 * and available in the WordPress editor.
 *
 * @package Kemet
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Force WordPress to recognize style variations
 */
add_action( 'after_setup_theme', function() {
	// Ensure style variations support is added
	add_theme_support( 'style-variations' );
}, 20 );

/**
 * Register style variations directly with WordPress
 */
add_action( 'init', function() {
	// Get style variations from JSON files
	$styles_dir = get_template_directory() . '/styles/';
	$variations = array();
	
	if ( is_dir( $styles_dir ) ) {
		$style_files = glob( $styles_dir . '*.json' );
		foreach ( $style_files as $style_file ) {
			$style_data = file_get_contents( $style_file );
			$style_json = json_decode( $style_data, true );
			
			if ( isset( $style_json['title'] ) ) {
				$variations[] = array(
					'title' => $style_json['title'],
					'styles' => isset( $style_json['styles'] ) ? $style_json['styles'] : array(),
					'settings' => isset( $style_json['settings'] ) ? $style_json['settings'] : array(),
				);
			}
		}
	}
	
	// Store variations globally
	if ( ! empty( $variations ) ) {
		$GLOBALS['kemet_style_variations'] = $variations;
		update_option( 'kemet_style_variations', $variations );
	}
}, 5 );

/**
 * Force theme.json to include style variations
 */
add_filter( 'wp_theme_json_data_theme', function( $theme_json ) {
	$data = $theme_json->get_data();
	
	// Get variations from global or options
	$variations = isset( $GLOBALS['kemet_style_variations'] ) ? $GLOBALS['kemet_style_variations'] : get_option( 'kemet_style_variations', array() );
	
	if ( ! empty( $variations ) ) {
		$style_variations = array();
		foreach ( $variations as $variation ) {
			$style_variations[] = array(
				'title' => $variation['title']
			);
		}
		$data['styleVariations'] = $style_variations;
	}
	
	return new WP_Theme_JSON_Data( $data );
}, 10 );

/**
 * Force user theme.json to include style variations
 */
add_filter( 'wp_theme_json_data_user', function( $theme_json ) {
	$data = $theme_json->get_data();
	
	// Get variations from global or options
	$variations = isset( $GLOBALS['kemet_style_variations'] ) ? $GLOBALS['kemet_style_variations'] : get_option( 'kemet_style_variations', array() );
	
	if ( ! empty( $variations ) ) {
		$style_variations = array();
		foreach ( $variations as $variation ) {
			$style_variations[] = array(
				'title' => $variation['title']
			);
		}
		$data['styleVariations'] = $style_variations;
	}
	
	return new WP_Theme_JSON_Data( $data );
}, 10 );

/**
 * Add style variations to global styles REST API
 */
add_filter( 'rest_prepare_global_styles', function( $response, $post, $request ) {
	// Get variations from global or options
	$variations = isset( $GLOBALS['kemet_style_variations'] ) ? $GLOBALS['kemet_style_variations'] : get_option( 'kemet_style_variations', array() );
	
	if ( ! empty( $variations ) ) {
		$data = $response->get_data();
		$data['style_variations'] = $variations;
		$response->set_data( $data );
	}
	
	return $response;
}, 10, 3 );

/**
 * Debug function to show style variations status
 */
function kemet_show_style_variations_debug() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	
	$variations = get_option( 'kemet_style_variations', array() );
	
	echo '<div style="background: #e7f3ff; padding: 15px; margin: 10px; border: 1px solid #0073aa; border-radius: 4px;">';
	echo '<h3>🎨 Kemet Style Variations Debug</h3>';
	echo '<p><strong>Registered Variations:</strong> ' . count( $variations ) . '</p>';
	
	foreach ( $variations as $variation ) {
		echo '<p>✓ ' . $variation['title'] . '</p>';
	}
	
	// Check if theme supports style variations
	$theme_support = get_theme_support( 'style-variations' );
	echo '<p><strong>Theme Support:</strong> ' . ( $theme_support ? '✅ Enabled' : '❌ Disabled' ) . '</p>';
	
	// Test REST API
	$rest_url = home_url( '/wp-json/wp/v2/global-styles/themes/kemet/variations' );
	echo '<p><strong>REST API:</strong> <a href="' . $rest_url . '" target="_blank">Test Endpoint</a></p>';
	
	echo '</div>';
}

// Add debug to admin footer
add_action( 'admin_footer', 'kemet_show_style_variations_debug' );

/**
 * Force style variations to be available in the editor
 */
add_action( 'enqueue_block_editor_assets', function() {
	// Get variations from global or options
	$variations = isset( $GLOBALS['kemet_style_variations'] ) ? $GLOBALS['kemet_style_variations'] : get_option( 'kemet_style_variations', array() );
	
	if ( ! empty( $variations ) ) {
		// Add inline script to register style variations
		$script = "
		wp.domReady(function() {
			if (wp.data && wp.data.dispatch) {
				// Force style variations to be available
				var variations = " . json_encode( $variations ) . ";
				console.log('Kemet Style Variations:', variations);
			}
		});
		";
		wp_add_inline_script( 'wp-edit-post', $script );
	}
});

/**
 * Add style variations to theme.json data at the earliest possible time
 */
add_filter( 'wp_theme_json_data_theme', function( $theme_json ) {
	$data = $theme_json->get_data();
	
	// Force style variations to be present
	if ( ! isset( $data['styleVariations'] ) || empty( $data['styleVariations'] ) ) {
		$styles_dir = get_template_directory() . '/styles/';
		$variations = array();
		
		if ( is_dir( $styles_dir ) ) {
			$style_files = glob( $styles_dir . '*.json' );
			foreach ( $style_files as $style_file ) {
				$style_data = file_get_contents( $style_file );
				$style_json = json_decode( $style_data, true );
				
				if ( isset( $style_json['title'] ) ) {
					$variations[] = array(
						'title' => $style_json['title']
					);
				}
			}
		}
		
		if ( ! empty( $variations ) ) {
			$data['styleVariations'] = $variations;
		}
	}
	
	return new WP_Theme_JSON_Data( $data );
}, 5 );
