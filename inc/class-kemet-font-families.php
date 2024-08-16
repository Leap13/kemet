<?php
/**
 * Helper class for font settings.
 *
 * @package     Kemet
 * @author      Kemet
 * @copyright   Copyright (c) 2019, Kemet
 * @link        https://kemet.io/
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Font info class for System and Google fonts.
 */
if ( ! class_exists( 'Kemet_Font_Families' ) ) :

	/**
	 * Font info class for System and Google fonts.
	 */
	final class Kemet_Font_Families {

		/**
		 * Google Fonts
		 *
		 * @var array
		 */
		public static $google_fonts = array();


		/**
		 * Custom Fonts
		 *
		 * @since 1.0.0
		 *
		 * @return Array All the custom fonts in KEMEt
		 */
		public static function get_custom_fonts() {
			$custom_fonts = array();

			return apply_filters( 'kemet_custom_fonts', $custom_fonts );
		}

		/**
		 * Google Fonts used in kemet.
		 * Array is generated from the google-fonts.json file.
		 *
		 * @return Array Array of Google Fonts.
		 */
		public static function get_google_fonts() {

			if ( empty( self::$google_fonts ) ) {
		
				$google_fonts_file = apply_filters( 'kemet_google_fonts_json_file', KEMET_THEME_DIR . 'assets/fonts/google-fonts.json' );
		
				if ( ! file_exists( $google_fonts_file ) ) {
					return array();
				}
		
				$file_contents     = file_get_contents( $google_fonts_file );
				$google_fonts_json = json_decode( $file_contents, true );
				
				// Check if 'items' key exists in the decoded JSON
				if ( ! isset( $google_fonts_json['items'] ) ) {
					return array(); // Return empty array if 'items' doesn't exist
				}
		
				$google_fonts_json = $google_fonts_json['items'];
		
				foreach ( $google_fonts_json as $font ) {
					$variants = array();
		
					foreach ( $font['variants'] as $variant_key => $variant ) {
		
						$prefix = 'n';
						$suffix  = '4';
						$value  = strtolower( trim( str_replace( ' ', '', $variant ) ) ); // Clean up the variant value
		
						// Handle numeric values
						if ( is_numeric( $value[0] ?? '' ) ) { // Using null coalescing to avoid undefined index warnings
							$suffix  = $value[0];
							$prefix = 'n';
						}
		
						// Handle 'italic'
						if ( strpos( $value, 'italic' ) !== false ) {
							if ( isset( $value ) && is_string( $value ) && strpos( $value, 'italic' ) !== false ) {
								$suffix  = '4';
								$prefix = 'i';
							} else {
								$value = str_replace( 'italic', '', $value );
								if ( is_numeric( $value[0] ?? '' ) ) {
									$suffix  = $value[0];
									$prefix = 'i';
								}
							}
						}
		
						// Handle 'regular' or 'normal'
						if ( strpos( $value, 'regular' ) !== false || strpos( $value, 'normal' ) !== false ) {
							if ( $value === 'regular' || $value === 'normal' ) {
								$suffix  = '4';
								$prefix = 'n';
							} else {
								$value = str_replace( ['regular', 'normal'], '', $value );
								if ( is_numeric( $value[0] ?? '' ) ) {
									$suffix  = $value[0];
									$prefix = 'n';
								}
							}
						}
		
						// Store the variant with the correct prefix and suffix
						$variants[ $variant_key ] = "{$prefix}{$suffix}";
					}
		
					// Store the font data (variants and category)
					$font_data = array(
						$variants,
						$font['category'],
					);
					self::$google_fonts[ $font['family'] ] = $font_data;
				}
			}
		
			return apply_filters( 'kemet_google_fonts', self::$google_fonts );
		}
		

	}

endif;
