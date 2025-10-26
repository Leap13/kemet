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
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'         => 'kmt-sticky',
			'label'        => __( 'Sticky', 'kemet' ),
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/group',
		array(
			'name'         => 'full-height',
			'label'        => __( 'Full Height', 'kemet' )
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/button',
		array(
			'name'         => 'kmt-rounded',
			'label'        => __( 'Rounded', 'kemet' ),
			'inline_style' => '
				.wp-block-button.is-style-kmt-rounded .wp-block-button__link {
					border-radius: 9999px !important;
				}
				.editor-styles-wrapper .wp-block-button.is-style-kmt-rounded .wp-block-button__link {
					border-radius: 9999px !important;
				}
			'
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/button',
		array(
			'name'         => 'kmt-has-shadow',
			'label'        => __( 'With Shadow', 'kemet' ),
			'inline_style' => '
				.wp-block-button.is-style-kmt-has-shadow .wp-block-button__link {
					box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 25%) !important;
				}
				.editor-styles-wrapper .wp-block-button.is-style-kmt-has-shadow .wp-block-button__link {
					box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 25%) !important;
				}
			'
		)
	);
	
	// Debug: Log button styles registration
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		error_log( 'Kemet: Button block styles registered - kmt-rounded, kmt-has-shadow' );
	}
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-flower',
			'label'        => __( 'Mask Flower', 'kemet' ),
			'inline_style' => '
				.wp-block-image.is-style-image-mask-flower img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/flower.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
				.editor-styles-wrapper .wp-block-image.is-style-image-mask-flower img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/flower.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
			'
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-sketch',
			'label'        => __( 'Mask Sketch', 'kemet' ),
			'inline_style' => '
				.wp-block-image.is-style-image-mask-sketch img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/sketch.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
				.editor-styles-wrapper .wp-block-image.is-style-image-mask-sketch img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/sketch.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
			'
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'image-mask-blob',
			'label'        => __( 'Mask Blob', 'kemet' ),
			'inline_style' => '
				.wp-block-image.is-style-image-mask-blob img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/blob.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
				.editor-styles-wrapper .wp-block-image.is-style-image-mask-blob img {
					-webkit-mask-image: url(' . get_template_directory_uri() . '/assets/svg/blob.svg);
					-webkit-mask-size: contain;
					-webkit-mask-position: center;
					-webkit-mask-repeat: no-repeat;
					filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
				}
			'
		)
	);
	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/image',
		array(
			'name'         => 'kmt-has-shadow',
			'label'        => __( 'Shadow', 'kemet' ),
			'inline_style' => '
				.wp-block-image.is-style-kmt-has-shadow img {
					box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 18px 0px;
				}
				.editor-styles-wrapper .wp-block-image.is-style-kmt-has-shadow img {
					box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 18px 0px;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/media-text',
		array(
			'name'         => 'kmt-has-shadow',
			'label'        => __( 'Shadow', 'kemet' ),
			'inline_style' => '
				.wp-block-media-text.is-style-kmt-has-shadow {
					box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 18px 0px;
				}
				.editor-styles-wrapper .wp-block-media-text.is-style-kmt-has-shadow {
					box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 18px 0px;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/media-text',
		array(
			'name'         => 'kmt-is-overlay',
			'label'        => __( 'Overlay', 'kemet' ),
			'inline_style' => '
				.wp-block-media-text.is-style-kmt-is-overlay.has-media-on-the-right .wp-block-media-text__content {
					margin-left: 0;
					margin-right: -120px;
				}
				.wp-block-media-text.is-style-kmt-is-overlay .wp-block-media-text__content {
					margin-left: -120px;
				}
				.editor-styles-wrapper .wp-block-media-text.is-style-kmt-is-overlay.has-media-on-the-right .wp-block-media-text__content {
					margin-left: 0;
					margin-right: -120px;
				}
				.editor-styles-wrapper .wp-block-media-text.is-style-kmt-is-overlay .wp-block-media-text__content {
					margin-left: -120px;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'         => 'kmt-top-border',
			'label'        => __( 'Top Border', 'kemet' ),
			'inline_style' => '
				.wp-block-heading.is-style-kmt-top-border {
					border-top: 2px solid var(--wp--preset--color--primary);
					padding-top: 10px;
				}
				.editor-styles-wrapper .wp-block-heading.is-style-kmt-top-border {
					border-top: 2px solid var(--wp--preset--color--primary);
					padding-top: 10px;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'         => 'kmt-bottom-border',
			'label'        => __( 'Bottom Border', 'kemet' ),
			'inline_style' => '
				.wp-block-heading.is-style-kmt-bottom-border {
					border-bottom: 2px solid var(--wp--preset--color--primary);
					padding-bottom: 10px;
				}
				.editor-styles-wrapper .wp-block-heading.is-style-kmt-bottom-border {
					border-bottom: 2px solid var(--wp--preset--color--primary);
					padding-bottom: 10px;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'         => 'kmt-horizontal-border',
			'label'        => __( 'Horizontal Border', 'kemet' ),
			'inline_style' => '
				.wp-block-heading.is-style-kmt-horizontal-border {
					border-top: 2px solid var(--wp--preset--color--primary);
					border-bottom: 2px solid var(--wp--preset--color--primary);
					padding: 10px 0;
				}
				.editor-styles-wrapper .wp-block-heading.is-style-kmt-horizontal-border {
					border-top: 2px solid var(--wp--preset--color--primary);
					border-bottom: 2px solid var(--wp--preset--color--primary);
					padding: 10px 0;
				}
			'
		)
	);

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/heading',
		array(
			'name'         => 'kmt-vertical-border',
			'label'        => __( 'Vertical Border', 'kemet' ),
			'inline_style' => '
				.wp-block-heading.is-style-kmt-vertical-border {
					border-left: 2px solid var(--wp--preset--color--primary);
					border-right: 2px solid var(--wp--preset--color--primary);
					padding: 0 10px;
				}
				.editor-styles-wrapper .wp-block-heading.is-style-kmt-vertical-border {
					border-left: 2px solid var(--wp--preset--color--primary);
					border-right: 2px solid var(--wp--preset--color--primary);
					padding: 0 10px;
				}
			'
		)
	);

	// List Styles

	register_block_style( // phpcs:ignore WPThemeReview.PluginTerritory.ForbiddenFunctions.editor_blocks_register_block_style
		'core/list',
		array(
			'name'         => 'kmt-aligned-vertical-border',
			'label'        => __( 'Vertical Border', 'kemet' ),
		)
	);

	register_block_style(
		'core/list',
		array(
			'name'  => 'kmt-list-dash',
			'label' => esc_html__( 'Dash icon', 'kemet' ),
		)
	);

	register_block_style(
		'core/list',
		array(
			'name'  => 'kmt-checkmark',
			'label' => esc_html__( 'Checkmark icon', 'kemet' ),
		)
	);

	register_block_style(
		'core/list',
		array(
			'name'  => 'kmt-arrow',
			'label' => esc_html__( 'Arrow icon', 'kemet' ),
		)
	);

	register_block_style(
		'core/list',
		array(
			'name'  => 'kmt-border-bottom',
			'label' => esc_html__( 'Border Bottom', 'kemet' ),
		)
	);
	
}
add_action( 'init', 'register_block_styles' );