<?php

/*-----------------------------------------------------------------------------------*/
/*  WP +3.0
/*-----------------------------------------------------------------------------------*/
if (function_exists('add_theme_support')) {
    add_theme_support('post-thumbnails');
}

/*-----------------------------------------------------------------------------------*/
/*  Register menu(s)
/*-----------------------------------------------------------------------------------*/

// Register navigation menu
register_nav_menus(
  array(
    'main-menu' => esc_html__('Main menu')
  )
);

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
	echo '&copy;'.date('Y').' - Made with &hearts;';
}
add_filter('admin_footer_text', 'remove_footer_admin');
?>
