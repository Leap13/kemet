<?php
/**
 * Block styles.
 *
 * @package kemet
 */

/**
 * Register block styles
 */
function register_block_styles() {
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'         => 'fit-to-screen',
			'label'        => __( 'Fit to Screen', 'kemet' ),
			'inline_style' => '
			.is-style-fit-to-screen {
				height: 100vh;
				margin: 0 !important;
				position: relative;
			}',
		),
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'         => 'full-height',
			'label'        => __( 'Full Height', 'kemet' ),
			'inline_style' => '
			.is-style-full-height {
				height: 100vh;
			}',
		),
	);
}
add_action( 'init', 'register_block_styles' );
