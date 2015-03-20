<?php
/* Search Form Block */
function navso_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title_display'] = 'invisible';
    $form['search_block_form']['#attributes']['class'][] = 'input-medium search-query';
    $form['search_block_form']['#attributes']['placeholder'] = t('Search this site');
    $form['actions']['submit']['#attributes']['class'][] = 'btn-search';
    $form['actions']['submit']['#type'] = 'image_button';
    $form['actions']['submit']['#src'] = drupal_get_path('theme', 'navso') . '/images/Search-Icon.png';
  }
}