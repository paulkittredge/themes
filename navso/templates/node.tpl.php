<?php

/**
 * @file
 * Default theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $submitted: Submission information created from $name and $date during
 *   template_preprocess_node().
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 */
?>
<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['field_documents']);
      hide($content['field_topics']);
      hide($content['field_hide_share_icons']);
      $fieldDocuments = field_get_items('node', $node, 'field_documents');
      $documentsCount = count(field_get_items('node', $node, 'field_documents'));
      $fieldImage = field_get_items('node', $node, 'field_primary_image');
      $fieldCaption = field_get_items('node', $node, 'field_caption');
      $fieldByline = field_get_items('node', $node, 'field_byline');
      $fieldAuthor = field_get_items('node', $node, 'field_author');
      $fieldSource = field_get_items('node', $node, 'field_source');
      $fieldDate = field_get_items('node', $node, 'field_date');
      $fieldTopics = field_get_items('node', $node, 'field_topics');
      $fieldHideIcons = $node->field_hide_share_icons[und][0]['value'];
    ?>
    
    <?php
    // create some classes to hook off; change from Document to Documents if there are more than one.
    if ($documentsCount <= 1): $documentsClass = ' single'; $documentsTitle = 'Document';
    else: $documentsClass = ' multiple'; $documentsTitle = 'Documents';
    endif;
    ?>
    
    <?php if ($fieldImage): // Show the image, and caption, if they exist ?>
    	<figure>
    		<?php print render($content['field_primary_image']); ?>
    		<?php if ($fieldCaption): ?>
    			<?php print render($content['field_caption']); ?>
    		<?php endif; ?>
    	</figure>
    <?php endif; ?>
    
    <?php if ($display_submitted): ?>
    	<p class="submitted"><?php print $submitted; ?></p>
    <?php endif; ?>
   
    <?php if ($fieldSource): // Show the source, and byline, if they exist ?>
    	<p class="source">
    		<?php if ($fieldByline): ?>
    			<?php print render($content['field_byline']); ?> | 
    		<?php endif; ?>
    		<?php print render($content['field_source']); ?>
    	</p>
    <?php endif; ?>
    
    <?php if ($fieldDate): // Show the date if it exists ?>
    	<p class="publication-date"><?php print render($content['field_date']); ?></p>
    <?php endif; ?>
    
    <?php if ($fieldAuthor): // Show the author(s) if s/he exists ?>
    	<p class="author"><span>Author:</span> <?php print render($content['field_author']); ?></p>
    <?php endif; ?>
    
    <?php print render($content); ?>

    <?php if ($fieldDocuments): // Show the document, if it exists ?>
    	<dl class="documents<?php print $documentsClass; ?>">
    		<dt><?php print $documentsTitle; ?></dt>
    		<?php print render($content['field_documents']); ?>
    	</dl>
    <?php endif; ?>
    
    <?php if ($fieldTopics): // Show the topics, if they exist ?>
    	<dl class="topics">
    		<dt>Topics</dt>
    		<?php print render($content['field_topics']); ?>
    	</dl>
    <?php endif; ?>
    
    <?php
    if ($fieldHideIcons == 1): // If the Hide Share Icons box is checked, don't show anything. Otherwise show the icons (also show if this field doesn't exist on a particular content type)
    else: // print the share icons
    	print '<dl class="share-icons">
    		<dt>Share</dt>
    		<dd class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=http://www.navso.org' . $node_url . '" class="icon-facebook" target="_blank"></a></dd>
    		<dd class="twitter"><a href="http://www.twitter.com/share?url=http://www.navso.org' . $node_url . '&text=' . $title . '" class="icon-twitter" target="_blank"></a></dd>
    		<dd class="email"><a href="mailto:?subject=From%20NAVSO:%20' . $title . '&amp;body=Original%20Article:%20http://www.navso.org' . $node_url . '" class="icon-envelope-alt"></a></dd>
    	</dl>';
    endif; ?>
  </div>

  <?php print render($content['links']); ?>
  <?php print render($content['comments']); ?>

</article>
