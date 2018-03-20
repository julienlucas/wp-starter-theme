<?php get_header(); ?>

<div class="wrapper" id="wrapper-search">

	<main class="search">
		
		<?php if ( have_posts() ) : ?>

		<?php else : ?>
			Aucun bien n'a été trouvé. Réessayez avec d'autres critères
		<?php endif; ?>

	</main><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
