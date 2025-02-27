<?php

function custom_service() {
    register_post_type('cardpost',
        array(
            'labels' => array(
                'name'          => __('Services'),
                'singular_name' => __('Service'),
                'add_new'       => __('Add New Service'),
                'add_new_item'  => __('Add New Service'),
                'edit_item'     => __('Edit Service'),
                'new_item'      => __('New Service'),
                'view_item'     => __('View Service'),
                'not_found'     => __('No services found.'),
            ),
            'public'            => true,
            'publicly_queryable'=> true,
            'show_ui'           => true,
            'show_in_menu'      => true,
            'query_var'         => true,
            'rewrite'           => array('slug' => 'cardpost'),
            'capability_type'   => 'post',
            'has_archive'       => true,
            'hierarchical'      => false,
            'menu_position'     => null,
            'supports'          => array('title', 'editor', 'thumbnail', 'excerpt'),
        )
    );
}
add_action('init', 'custom_service');