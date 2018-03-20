<?php get_header(); ?>

<?php while(have_posts()) : the_post(); ?>
<div class="wrapper" id="wrapper-page">

	<main class="page">
  </main><!-- Container end -->

</div><!-- Wrapper end -->
<?php endwhile; ?>

<?php get_footer(); ?>
