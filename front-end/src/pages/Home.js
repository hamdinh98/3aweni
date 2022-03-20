

import Header from '../parts/Home/Header';
import Title from '../parts/Home/Title';
import PopularCategories from '../parts/Home/PopularCategories';
import CounterSection from '../parts/Home/CounterSection';
import Footer from '../parts/Home/Footer';
import About from '../parts/Home/About';
const Home = () => {
    return (
        <div>
            <Header />
            <Title />
            <PopularCategories />
            <About />
            <CounterSection />
            <Footer />
        </div>
    )
}

export default Home