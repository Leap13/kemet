<?php
/**
 * Kemet: Block Patterns
 *
 * @since Kemet  1.2.0
 */

if ( ! function_exists( 'kemet_register_block_patterns' ) ) :

/**
 * Registers block patterns and categories.
 *
 * @since Kemet  1.2.0
 */
function kemet_register_block_patterns() {
	$block_pattern_categories = array(
		'header' => array( 'label' => __( 'Header', 'kemet' ) ),
		'footer' => array( 'label' => __( 'Footer', 'kemet' ) ),
		'sidebar' => array( 'label' => __( 'Sidebar', 'kemet' ) ),
		'kemet-general' => array( 'label' => __( 'Kemet General', 'kemet' ) ),
	);

	
	/**
	 * Filters the theme block pattern categories.
	 *
	 * @since kemet  1.2.0
	 *
	 */
	$block_pattern_categories = apply_filters( 'kemet_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		register_block_pattern_category( $name, $properties );
	}

	$block_patterns = array(
		'header-with-top-bar',
		'header',
		'header-with-button-socialicons',
		'footer',
		'sidebar',
		'404-content',
		'kemet-left-right-loop',
		'two-columns-with-image-text-and-a-call-to-action',
		'two-columns-with-overlay-content-and-a-call-to-action',
		'information-blocks-for-gardening-services',
		'combined-columns-displays-business-services',
		'simple-call-to-action-section'
	);


	/**
	 * Filters the theme block patterns.
	 *
	 * @since Kemet 1.2.0
	 *
	 * @param $block_patterns array List of block patterns by name.
	 */
	$block_patterns = apply_filters( 'kemet_block_patterns', $block_patterns );

	foreach ( $block_patterns as $block_pattern ) {
		$pattern_file = KEMET_THEME_DIR . '/inc/patterns/' . $block_pattern . '.php';

		register_block_pattern(
			'kemet/' . $block_pattern,
			require $pattern_file
		);
	}
}

endif;

add_action( 'init', 'kemet_register_block_patterns', 9 );
