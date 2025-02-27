
<?php
// function custom_excerpt_length($length) {
//     return 30; 
// }
// add_filter('excerpt_length', 'custom_excerpt_length', 999);

function custom_excerpt_more_text($more) {
return ' <div class="btnclassfor pt-auto"><a href="' . get_permalink() . '" class="readmorebtnher">Read More </a></div>';
}
add_filter('excerpt_more', 'custom_excerpt_more_text');