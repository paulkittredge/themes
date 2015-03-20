<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie6 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 9]>    <html class="ie9 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if !IE]> --> <html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <!-- <![endif]-->
<head>
  <?php print $head; ?>
  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,initial-scale=1.0">
  <title><?php print $head_title; ?></title>
  <link href="//fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic|Oswald:300,400,700" rel="stylesheet" type="text/css">
  <?php print $styles; ?>
  <!-- IE 6-8 media query support, only works with CSS aggregation enabled. -->
  <!--[if lt IE 9]>
    <script src="/<?php print drupal_get_path('theme', 'nvbase'); ?>/js/respond.min.js"></script>
  <![endif]-->
  <?php print $scripts; ?>
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>

<body class="<?php print $classes; ?> <?php if (!empty($body_bg_type)) { print $body_bg_type; } ?> <?php if (!empty($body_bg_classes)) { print $body_bg_classes; } ?> <?php if (!empty($front_heading_classes)) { print $front_heading_classes; } ?> <?php if (!empty($breadcrumb_classes)) { print $breadcrumb_classes; } ?> <?php if (!empty($border_classes)) { print $border_classes; } ?> <?php if (!empty($corner_classes)) { print $corner_classes; } ?>" <?php print $attributes;?> <?php if (!empty($body_bg_classes)): ?>style="background: url('<?php print file_create_url(theme_get_setting('body_bg_path')); ?>') repeat top left;" <?php endif; ?>>
	<?php print $page_top; ?>
	<?php print $page; ?>
	<?php print $page_bottom; ?>
</body>

</html>
