<?php
/**
 * Default Header
 */
return array(
	'title'      => __( 'Default Header', 'kemet' ),
	'categories' => array( 'kemet', 'header' ),
	'blockTypes' => array( 'core/template-part/header' ),
	'content'    => '
    <!-- wp:group {"tagName":"header","style":{"spacing":{"blockGap":"0px","padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"backgroundColor":"background","layout":{"inherit":true}} -->
<header class="wp-block-group has-background-background-color has-background" style="padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","allowOrientation":false}} -->
<div class="wp-block-group"><!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:site-title {"level":3} /--></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:navigation -->
<!-- wp:page-list /-->
<!-- /wp:navigation --></div>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"right"}} -->
<div class="wp-block-group"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"tertiary"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-tertiary-background-color has-background">Click Here</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></header>
<!-- /wp:group -->

<!-- wp:separator {"color":"#dedede","className":"is-style-wide"} -->
<hr class="wp-block-separator has-text-color has-background is-style-wide"/>
<!-- /wp:separator -->',
);
