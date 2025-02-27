<?php
function sjj_changelogo($wp_customize){
    $wp_customize->add_section('logoChnage',array(
        'title'=>__('logo upload','sjana'),
        'description'=> 'now you can change website logo'
    ));
    $wp_customize->add_setting('logoChange',array(
        'default' =>get_bloginfo('template_directory').'/img/github.webp'
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control(
        $wp_customize,'logoChange',array(
        'label' => 'logo upload',
        'description'=>'change your logo',
        'section' => 'logoChnage',
        'setting' => 'logoChange'
        )
        
    ));  

//for footer
    $wp_customize->add_section('footertext',array(
        'title'=>__('footer update','sjana'),
        'description'=> 'eenow you can change website logo'
    ));
    $wp_customize->add_setting('footertext',array(
        'default' =>'© 1996-2024 Daniel A. Tysver. All Rights Reserved.'
    ));
    $wp_customize->add_control('footertext',array(
        'label' => 'footer update',
        'description'=>'change your logo',
        'section' => 'footertext',
        'setting' => 'footertext'
        ));  

}
add_action('customize_register','sjj_changelogo');


