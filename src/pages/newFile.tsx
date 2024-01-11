import Layout from '../layouts/default.astro';
import heroImg from '../images/sandwich-hero.jpg';

<Fragment>
	<Layout>
		<section class="block hero">
			<div class="cta">
				<h1>All sandwiches. All the time.</h1>
				<p class="lede">{`
				The world's leading sandwich connoisseurs turst sndwch.
			`}</p>
				<a href="/shop" class="big-link">
					Shop Sandwich Kits
				</a>
			</div>

			<img
				src={heroImg}
				alt="A sandwich on a plate. This sandwich is a taco."
				class="hero-image"
				loading="eager"
				decoding="async"
			/>
		</section>
	</Layout>
</Fragment>;
