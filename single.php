<?php get_header(); ?>

<?php while(have_posts()) : the_post(); ?>
<div class="wrapper" id="single-wrapper">

	<div class="l-container">
	</div><!-- Container end -->

</div><!-- Wrapper end -->
<?php endwhile; ?>

<?php get_footer(); ?>
