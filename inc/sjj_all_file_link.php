<?php
function sjj_all_file_link_here(){
    // all css file added
wp_enqueue_style('stylefile',get_stylesheet_uri());
wp_register_style('bootstrap',get_template_directory_uri().'/css/bootstrap.css',array(),'1.0.0','all');
wp_register_style('custom',get_template_directory_uri().'/css/custom.css',array(),'1.0.0','all');




wp_enqueue_style('bootstrap');
wp_enqueue_style('fontawasome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css', false);
wp_enqueue_style('custom');







//all js file added
wp_enqueue_script('jquery');
wp_enqueue_script('bootstrap', get_template_directory_uri().'/js/bootstrap.js', array(), '5.0.2', 'true' );
wp_enqueue_script('main', get_template_directory_uri().'/js/main.js', array(), '1.0.0', 'true' );
}
add_action('wp_enqueue_scripts','sjj_all_file_link_here');








