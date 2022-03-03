<?php
/**
 * Header with Top Bar
 */
return array(
	'title'      => __( 'Header with top bar', 'kemet' ),
	'categories' => array( 'kemet', 'header' ),
	'blockTypes' => array( 'core/template-part/header' ),
	'content'    => '
    <!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"inherit":false}} -->
    <div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0px","padding":{"right":"0px","left":"0px"}}},"backgroundColor":"quinary","textColor":"senary","layout":{"inherit":true}} -->
    <div class="wp-block-group has-senary-color has-quinary-background-color has-text-color has-background" style="padding-right:0px;padding-left:0px"><!-- wp:group {"layout":{"inherit":true}} -->
    <div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","allowOrientation":false,"justifyContent":"space-between"}} -->
    <div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","allowOrientation":false}} -->
    <div class="wp-block-group"><!-- wp:site-tagline /--></div>
    <!-- /wp:group -->
    
    <!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"right"}} -->
    <div class="wp-block-group"><!-- wp:social-links {"iconColor":"background","iconColorValue":"#ffffff","size":"has-small-icon-size","className":"is-style-logos-only","layout":{"type":"flex","justifyContent":"space-between"},"style":{"spacing":{"blockGap":"15px"}}} -->
    <ul class="wp-block-social-links has-small-icon-size has-icon-color is-style-logos-only"><!-- wp:social-link {"url":"#","service":"facebook"} /-->
    
    <!-- wp:social-link {"url":"#","service":"twitter"} /-->
    
    <!-- wp:social-link {"url":"#","service":"instagram"} /-->
    
    <!-- wp:social-link {"url":"#","service":"youtube"} /--></ul>
    <!-- /wp:social-links --></div>
    <!-- /wp:group --></div>
    <!-- /wp:group --></div>
    <!-- /wp:group --></div>
    <!-- /wp:group -->
    
    <!-- wp:group {"style":{"spacing":{"padding":{"top":"2.5rem","bottom":"2.5rem"},"blockGap":"0px"}},"layout":{"inherit":true}} -->
    <div class="wp-block-group" style="padding-top:2.5rem;padding-bottom:2.5rem"><!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"space-between"}} -->
    <div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","allowOrientation":false}} -->
    <div class="wp-block-group"><!-- wp:site-logo /-->
    
    <!-- wp:site-title {"fontSize":"large"} /--></div>
    <!-- /wp:group -->
    
    <!-- wp:group {"layout":{"type":"flex","allowOrientation":false,"justifyContent":"right"}} -->
    <div class="wp-block-group">
    <!-- wp:navigation {"textColor":"background","layout":{"type":"flex","setCascadingProperties":true,"justifyContent":"right"}} -->
        <!-- wp:page-list /-->
    <!-- /wp:navigation -->
    </div>
    <!-- /wp:group --></div>
    <!-- /wp:group --></div>
    <!-- /wp:group -->
    
    <!-- wp:group {"style":{"border":{"radius":"0px"},"spacing":{"blockGap":"0px"}}} -->
    <div class="wp-block-group" style="border-radius:0px"><!-- wp:separator {"color":"secondary","className":"is-style-wide"} -->
    <hr class="wp-block-separator has-text-color has-background has-secondary-background-color has-secondary-color is-style-wide"/>
    <!-- /wp:separator --></div>
    <!-- /wp:group --></div>
    <!-- /wp:group -->',
);
