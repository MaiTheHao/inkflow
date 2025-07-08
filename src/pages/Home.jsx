import WelcomeSection from '../components/pages/home/welcome-section/WelcomeSection';
import FeaturedTattoos from '../components/pages/home/featured-tattoos/FeaturedTattoos';
import OurStory from '../components/pages/home/our-story/OurStory';
import FeaturedArtists from '../components/pages/home/featured-artists/FeaturedArtists';
import WrokProcess from '../components/pages/home/work-process/WrokProcess';

// Landing page for the Inkflow website
function Home() {
	return (
		<>
			{/* Welcome section */}
			<WelcomeSection />
			{/* Featured tattoos */}
			<FeaturedTattoos />
			{/* Our story */}
			<OurStory />
			{/* Nghệ sĩ nổi bật */}
			<FeaturedArtists />
			{/* Workflow */}
			<WrokProcess />
			{/* Testimonials */}
			<div></div>
			{/* Quick FAQ */}
			<div></div>
		</>
	);
}

export default Home;
