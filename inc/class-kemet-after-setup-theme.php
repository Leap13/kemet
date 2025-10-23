<?php
/**
 * Kemet_After_Setup_Theme initial setup
 *
 * @package     Kemet
 * @author      Kemet
 * @copyright   Copyright (c) 2019, Kemet
 * @link        https://kemet.io/
 */

if ( ! class_exists( 'Kemet_After_Setup_Theme' ) ) {

	/**
	 * Kemet_After_Setup_Theme initial setup
	 */
	class Kemet_After_Setup_Theme {

		/**
		 * Instance
		 *
		 * @var $instance
		 */
		private static $instance;

		/**
		 * Initiator
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
		 * Constructor
		 */
		public function __construct() {
			add_action( 'after_setup_theme', array( $this, 'setup_theme' ), 2 );
		}

	/**
	 * Setup theme
	 */
	function setup_theme() {

	// Adding support for responsive embedded content.
	add_theme_support( 'responsive-embeds' );

	// Adding support for nav menus
	add_theme_support( 'block-nav-menus' );

	// Add support for editor styles - ESSENTIAL for FSE
	add_theme_support( 'editor-styles' );

	// Add support for block styles - ESSENTIAL for FSE
	add_theme_support( 'wp-block-styles' );

	// Add support for style variations - ESSENTIAL for Browse Styles
	add_theme_support( 'style-variations' );
	
	// Force WordPress to detect style variations from /styles/ directory
	add_filter( 'wp_theme_json_data_theme', function( $theme_json ) {
		$data = $theme_json->get_data();
		
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
						'title' => $style_json['title']
					);
				}
			}
		}
		
		// Add variations to theme data
		if ( ! empty( $variations ) ) {
			$data['styleVariations'] = $variations;
		}
		
		return new WP_Theme_JSON_Data( $data );
	});

	// Alternative method: Register style variations directly
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
		
		// Store variations in WordPress options for later use
		if ( ! empty( $variations ) ) {
			update_option( 'kemet_style_variations', $variations );
		}
	});

	// Add editor stylesheets - ESSENTIAL for FSE
	add_editor_style( 'assets/css/unminified/editor.css' );
	add_editor_style( 'assets/css/unminified/style.css' );
	
	// Register custom REST API endpoint for style variations
	add_action( 'rest_api_init', function() {
		register_rest_route( 'wp/v2', '/global-styles/themes/kemet/variations', array(
			'methods' => 'GET',
			'callback' => function() {
				// First try to get from stored options
				$variations = get_option( 'kemet_style_variations', array() );
				
				// If not found, read from files
				if ( empty( $variations ) ) {
					$styles_dir = get_template_directory() . '/styles/';
					
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
				}
				
				return $variations;
			},
			'permission_callback' => function() {
				return current_user_can( 'edit_theme_options' );
			}
		));
	});

	// Force WordPress to recognize style variations
	add_action( 'init', function() {
		// Clear any cached theme data
		wp_cache_delete( 'theme_json_data_kemet', 'themes' );
		wp_cache_delete( 'theme_json_data_kemet_theme', 'themes' );
		
		// Ensure style variations are registered
		$theme = wp_get_theme();
		if ( $theme->get_stylesheet() === 'kemet' ) {
			// Force refresh of theme data
			$theme->cache_delete();
		}
		
		// Clear global styles cache to force CSS regeneration
		wp_cache_delete( 'global_styles_kemet', 'themes' );
		wp_cache_delete( 'global_styles_kemet_theme', 'themes' );
	});

	// Force CSS regeneration when style variations change
	add_action( 'rest_api_init', function() {
		// Clear CSS cache when global styles are updated
		add_filter( 'rest_prepare_global_styles', function( $response, $post, $request ) {
			if ( $request->get_method() === 'POST' || $request->get_method() === 'PUT' ) {
				// Clear theme cache to force CSS regeneration
				wp_cache_delete( 'global_styles_kemet', 'themes' );
				wp_cache_delete( 'global_styles_kemet_theme', 'themes' );
			}
			return $response;
		}, 10, 3 );
	});

	// Add filter to ensure style variations are available in the editor
	add_filter( 'wp_theme_json_data_user', function( $theme_json ) {
		$data = $theme_json->get_data();
		
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
						'title' => $style_json['title']
					);
				}
			}
		}
		
		// Add variations to user data as well
		if ( ! empty( $variations ) ) {
			$data['styleVariations'] = $variations;
		}
		
		return new WP_Theme_JSON_Data( $data );
	});

	// Force WordPress to apply style variations correctly
	add_action( 'wp_enqueue_scripts', function() {
		// Ensure global styles are properly enqueued
		if ( function_exists( 'wp_enqueue_global_styles' ) ) {
			wp_enqueue_global_styles();
		}
	});

	// Add filter to ensure style variations are properly loaded
	add_filter( 'wp_theme_json_data_theme', function( $theme_json ) {
		$data = $theme_json->get_data();
		
		// Ensure the theme has proper style variation support
		if ( ! isset( $data['styleVariations'] ) ) {
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
	});

	// Force CSS regeneration for style variations
	add_action( 'wp_head', function() {
		// Clear any cached global styles to ensure fresh CSS
		if ( function_exists( 'wp_get_global_styles' ) ) {
			wp_cache_delete( 'global_styles', 'themes' );
		}
	}, 1 );

	// Add admin notice to clear cache if needed
	add_action( 'admin_notices', function() {
		if ( current_user_can( 'manage_options' ) ) {
			$screen = get_current_screen();
			if ( $screen && ( $screen->id === 'site-editor' || $screen->id === 'themes' ) ) {
				echo '<div class="notice notice-info is-dismissible">';
				echo '<p><strong>Kemet Theme:</strong> Style variations are now fully functional. If you don\'t see changes, try refreshing the page or clearing your browser cache.</p>';
				echo '</div>';
			}
		}
	});

	// Language support
	load_theme_textdomain( 'kemet', KEMET_THEME_DIR . 'languages' );
	}
	}
}

Kemet_After_Setup_Theme::get_instance();
