<?php
/*-----------------------------------------------------------------------------------*/
/*  WP +3.0
/*-----------------------------------------------------------------------------------*/
if (function_exists('add_theme_support')) {
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
}

/*-----------------------------------------------------------------------------------*/
/*  Thumbnails
/*-----------------------------------------------------------------------------------*/
add_image_size('thumbnail', 570, 270, true);


/*-----------------------------------------------------------------------------------*/
/*  Register menu(s)
/*-----------------------------------------------------------------------------------*/

function sw_primary_menu() {
    wp_nav_menu( array(
		'theme_location' => 'primary-menu',
		'container'      => false,
		'menu'           => 'Menu principal',
		'menu_class'     => 'navigation-main clearfix'
	));
}

/*-----------------------------------------------------------------------------------*/
/*	Excerpt Length
/*-----------------------------------------------------------------------------------*/

//fonction limitation de mots
function TruncText ($text , $size, $charset='utf-8'){
	$text = strip_tags ( html_entity_decode( $text , ENT_COMPAT, $charset ) );
	if ( strlen( $text) + 4 > $size ) {
		$text  = substr ( $text , 0 , $size).' ...' ;
	}
	return $text;
}

//fonction limitation de mots + btn
function TruncText_Btn ($text , $size, $charset, $link){
	if ( strlen( $text) + 4 > $size ) {
		$texte = strip_tags ( html_entity_decode( $text , ENT_COMPAT, $charset ) );
		$text2  = '<div class="news_content"><p>'.substr ( $texte , 0 , $size).' [...] </p><div class="lien"><a title="Lire la suite" class="btn">Lire la suite</a></div></div>' ;

		$text2 .= '<div class="news_content_more"><p>'.$text.'</p><div class="lien close"><a title="Fermer" class="btn">Fermer</a></div></div>';
	}else{
		$text2  = '<div class="news_content">'.$text.'</div>' ;
	}
	return $text2;
}

/*-----------------------------------------------------------------------------------*/
/*	Footer admin
/*-----------------------------------------------------------------------------------*/
function remove_footer_admin () {
	echo '&copy;'.date('Y').' - Conception et réalisation par <a href="http://julienlucas.com" target="_blank">Julien Lucas</a> et propulsé par Wordpress.';
}
add_filter('admin_footer_text', 'remove_footer_admin');

?>
