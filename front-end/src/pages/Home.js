


import Title from '../parts/Home/Title';
import PopularCategories from '../parts/Home/PopularCategories';
import CounterSection from '../parts/Home/CounterSection';

import About from '../parts/Home/About';
import ProjectCard from '../parts/ProjectsList/ProjectCard';
import Header from '../parts/Home/Header';
import Footer from '../parts/Home/Footer';
const Home = () => {
    return (
        <div>
            <Header />
            <Title />
            <PopularCategories />

            <About />
            {/*<CounterSection />*/}
            <Footer />

        </div>
    )
}

export default Home