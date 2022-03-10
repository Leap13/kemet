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
			'name'         => 'kmt-sticky',
			'label'        => __( 'Sticky', 'kemet' ),
			'inline_style' => '
			.is-style-kmt-sticky {
				position: sticky;
				top: 0px;
				height: 100vh;
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
				box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 25%);
			}',
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-flower',
			'label'        => __( 'Mask Flower', 'kemet' ),
			'inline_style' => '
			.is-style-image-mask-flower img{
				-webkit-mask-image: url( ' . KEMET_THEME_URI . 'assets/svg/flower.svg );
				-webkit-mask-size: contain;
				-webkit-mask-position: center;
				-webkit-mask-repeat: no-repeat;
				filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
			}',
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-sketch',
			'label'        => __( 'Mask Sketch', 'kemet' ),
			'inline_style' => '
			.is-style-image-mask-sketch img{
				-webkit-mask-image: url( ' . KEMET_THEME_URI . 'assets/svg/sketch.svg );
				-webkit-mask-size: contain;
				-webkit-mask-position: center;
				-webkit-mask-repeat: no-repeat;
				filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
			}',
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-blob',
			'label'        => __( 'Mask Blob', 'kemet' ),
			'inline_style' => '
			.is-style-image-mask-blob img{
				-webkit-mask-image: url( ' . KEMET_THEME_URI . 'assets/svg/blob.svg );
				-webkit-mask-size: contain;
				-webkit-mask-position: center;
				-webkit-mask-repeat: no-repeat;
				filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
			}',
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'kmt-has-shadow',
			'label'        => __( 'Shadow', 'kemet' ),
			'inline_style' => '
			.is-style-kmt-has-shadow img{
				box-shadow: 0px 2px 4px rgb(45 35 66 / 10%), 0px 7px 13px -3px rgb(45 35 66 / 30%);
			}',
		)
	);
}
add_action( 'init', 'register_block_styles' );
