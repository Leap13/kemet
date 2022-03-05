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
<div class="wp-block-group"><!-- wp:heading {"level":4} -->
<h4 id="latest-posts">' . esc_html__( 'About Us', 'kemet') . '</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Leap13 is a 5 Stars rated WordPress-focused web development firm specialized in building Premium WordPress Themes and Plugins.', 'kemet') . '</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->
<h4 id="latest-posts">' . esc_html__( 'Latest Posts', 'kemet') . '</h4>
<!-- /wp:heading -->

<!-- wp:latest-posts /-->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->
<h4 id="categories">' . esc_html__( 'Follow Us', 'kemet') . '</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>' . esc_html__( 'Vestibulum ante ipsum primis in faucibus orci luctus et.', 'kemet') . '</p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"background","iconColorValue":"#ffffff","iconBackgroundColor":"quinary","iconBackgroundColorValue":"#022538","className":"is-style-default"} -->
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