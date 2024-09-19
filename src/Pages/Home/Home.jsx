import HeroSecotion from '../../Components/Home/Hero';
import BrandLogo from '../../Components/Home/Brandlogo';
import NewArrivalSection from '../../Components/Home/NewArrival';
import TopSellingSection from '../../Components/Home/TopSelling';
import FeedbackSection from '../../Components/Home/Feedback';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div id='homePage' className='p-6'>
            <HeroSecotion />
            <BrandLogo />
            <section className='mt-20'>
                <NewArrivalSection />
                <TopSellingSection />
                <FeedbackSection />
            </section>
            <Footer />
        </div>
    )
}
export default Home;