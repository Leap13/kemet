<?php
/**
 * Sidebar
 */
return array(
	'title'      => __( 'Default Header', 'kemet' ),
	'categories' => array( 'kemet', 'sidebar' ),
	'blockTypes' => array( 'core/template-part/sidebar' ),
	'content'    => '
	<!-- wp:group -->
	<div class="wp-block-group"><!-- wp:search {"label":"","buttonText":"Search"} /-->
	
	<!-- wp:spacer {"height":"20px"} -->
	<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
	
	<!-- wp:heading {"level":4} -->
	<h4 id="latest-posts">About Us</h4>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph -->
	<p>Leap13 is a 5 Stars rated WordPress-focused web development firm specialized in building Premium WordPress Themes and Plugins.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:spacer {"height":"20px"} -->
	<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
	
	<!-- wp:heading {"level":4} -->
	<h4 id="latest-posts">Latest Posts</h4>
	<!-- /wp:heading -->
	
	<!-- wp:latest-posts /-->
	
	<!-- wp:spacer {"height":"20px"} -->
	<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
	
	<!-- wp:heading {"level":4} -->
	<h4 id="categories">Follow Us</h4>
	<!-- /wp:heading -->
	
	<!-- wp:paragraph -->
	<p>Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
	<!-- /wp:paragraph -->
	
	<!-- wp:social-links {"iconColor":"background","iconColorValue":"#ffffff","iconBackgroundColor":"tertiary","iconBackgroundColorValue":"#022538","className":"is-style-default"} -->
	<ul class="wp-block-social-links has-icon-color has-icon-background-color is-style-default"><!-- wp:social-link {"url":"#","service":"facebook"} /-->
	
	<!-- wp:social-link {"url":"#","service":"twitter"} /-->
	
	<!-- wp:social-link {"url":"#","service":"linkedin"} /-->
	
	<!-- wp:social-link {"url":"#","service":"instagram"} /-->
	
	<!-- wp:social-link {"url":"#","service":"youtube"} /--></ul>
	<!-- /wp:social-links -->
	
	<!-- wp:spacer {"height":"20px"} -->
	<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer --></div>
	<!-- /wp:group -->',
);