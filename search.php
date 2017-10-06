<?php get_header(); ?>

<div class="wrapper" id="search-wrapper">

	<div class="l-container">

		<?php if ( have_posts() ) : ?>

					<h1 class="page-title"><?php printf(
					 esc_html__( 'Search Results for: %s'),
						'<span>' . get_search_query() . '</span>' ); ?></h1>

			<?php while ( have_posts() ) : the_post(); ?>
			<?php endwhile; ?>

		<?php else : ?>
		<?php endif; ?>

	</div><!-- Container end -->

</div><!-- Wrapper end -->

<?php get_footer(); ?>
