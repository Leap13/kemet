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
		)
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
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/button',
		array(
			'name'         => 'kmt-rounded',
			'label'        => __( 'Rounded', 'kemet' ),
			'inline_style' => '
			.is-style-kmt-rounded .wp-block-button__link{
				border-radius: 9999px;
			}
			.block-editor-block-list__block.is-style-kmt-rounded .wp-block-button__link{
				border-radius: 9999px !important;
			}
			',
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/button',
		array(
			'name'         => 'kmt-has-shadow',
			'label'        => __( 'With Shadow', 'kemet' ),
			'inline_style' => '
			.is-style-kmt-has-shadow .wp-block-button__link{
				box-shadow: 0px 2px 4px rgb(45 35 66 / 10%), 0px 7px 13px -3px rgb(45 35 66 / 30%);
			}',
		)
	);
}
add_action( 'init', 'register_block_styles' );
