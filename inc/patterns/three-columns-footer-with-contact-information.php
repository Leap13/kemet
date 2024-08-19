<?php
/**
 * Title: Three Columns Footer with Contact Information
 * Slug: kemet/three-columns-footer-with-contact-information
 * Keywords: Three Columns Footer with Contact Information
 */
return array(
	'title'      => __( 'Three Columns Footer with Contact Information', 'kemet' ),
	'categories' => array( 'kemet-patterns', 'footer' ),
	'keywords'   => array( 'footer', 'three columns' ), 
	'blockTypes' => array( 'core/template-part/footer' ),
	'content'    => '<!-- wp:cover {"url":"' . esc_url( get_template_directory_uri() ) . '/assets/images/lined-bg.jpg","id":2119,"dimRatio":90,"overlayColor":"tertiary","contentPosition":"center center","metadata":{"patternName":"kemet/three-columns-footer-with-contact-information","name":"3 Columns Footer with Contact Information"},"align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-tertiary-background-color has-background-dim-90 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-2119" alt=""  src="' . esc_url( get_template_directory_uri() ) . '/assets/images/lined-bg.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"60px","bottom":"60px","left":"10px","right":"10px"}}},"layout":{"inherit":true,"type":"constrained"}} -->
<div class="wp-block-group alignfull" style="padding-top:60px;padding-right:10px;padding-bottom:60px;padding-left:10px"><!-- wp:group {"layout":{"inherit":true,"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4,"className":"is-style-kmt-horizontal-border"} -->
<h4 class="wp-block-heading is-style-kmt-horizontal-border"><strong>About Us</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Leap13 is a 5 Stars rated WordPress-focused web development firm specialized in building Premium WordPress Themes and Plugins.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">View More →</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4,"className":"is-style-kmt-horizontal-border"} -->
<h4 class="wp-block-heading is-style-kmt-horizontal-border"><strong>Contact Info</strong></h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>☎ (+132)1-001-234-5678</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>✉ info@example.com</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>🏛️ 3 Rockaway St., New Rochelle, NY 10801</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"level":4,"className":"is-style-kmt-horizontal-border"} -->
<h4 class="wp-block-heading is-style-kmt-horizontal-border"><strong>Recent Articles</strong></h4>
<!-- /wp:heading -->

<!-- wp:query {"queryId":51,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"asc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"default","columnCount":3}} -->
<!-- wp:post-title {"level":5,"isLink":true,"style":{"spacing":{"margin":{"bottom":"3px"}},"elements":{"link":{"color":{"text":"var:preset|color|background"}}},"typography":{"fontStyle":"normal","fontWeight":"500"}}} /-->

<!-- wp:post-date /-->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"padding":{"left":"10px","right":"10px"}}},"layout":{"inherit":true,"type":"constrained"}} -->
<div class="wp-block-group" style="padding-right:10px;padding-left:10px"><!-- wp:separator {"className":"has-text-color has-alpha-channel-opacity has-background is-style-wide"} -->
<hr class="wp-block-separator has-alpha-channel-opacity has-text-color has-background is-style-wide"/>
<!-- /wp:separator --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"10px","right":"10px"}}},"layout":{"inherit":true}} -->
<div class="wp-block-group" style="padding-top:20px;padding-right:10px;padding-bottom:20px;padding-left:10px"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
<div class="wp-block-group"><!-- wp:navigation {"textColor":"base","className":"is-style-justify-right","style":{"typography":{"fontSize":"16px"},"spacing":{"blockGap":"56px"}},"fontFamily":"system-font","layout":{"type":"flex","orientation":"horizontal","justifyContent":"left","flexWrap":"wrap"}} -->
<!-- wp:navigation-link {"label":"Home","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"About","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Blog","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Contact","url":"#","kind":"custom","isTopLevelLink":true} /-->
<!-- /wp:navigation -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:social-links {"iconColor":"background","iconColorValue":"#ffffff","size":"has-small-icon-size","className":"is-style-logos-only","style":{"spacing":{"blockGap":"15px"}},"layout":{"type":"flex","justifyContent":"right"}} -->
<ul class="wp-block-social-links has-small-icon-size has-icon-color is-style-logos-only"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"instagram"} /-->

<!-- wp:social-link {"url":"#","service":"youtube"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->',
);