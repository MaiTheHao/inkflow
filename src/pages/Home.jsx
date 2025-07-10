import WelcomeSection from '../components/pages/home/welcome-section/WelcomeSection';
import FeaturedTattoos from '../components/pages/home/featured-tattoos/FeaturedTattoos';
import OurStory from '../components/pages/home/our-story/OurStory';
import FeaturedArtists from '../components/pages/home/featured-artists/FeaturedArtists';
import WorkProcess from '../components/pages/home/work-process/WorkProcess';
import CustomerFeedback from '../components/pages/home/customer-feedback/CustomerFeedback';
import FAQ from '../components/pages/home/faq/FAQ';

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
			<WorkProcess />
			{/* Testimonials */}
			<CustomerFeedback />
			{/* Quick FAQ */}
			<FAQ />
		</>
	);
}

export default Home;
