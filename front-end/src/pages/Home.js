


import Title from '../parts/Home/Title';
import PopularCategories from '../parts/Home/PopularCategories';
import CounterSection from '../parts/Home/CounterSection';

import About from '../parts/Home/About';
import ProjectCard from '../parts/ProjectsList/ProjectCard';
const Home = () => {
    return (
        <div>

            <Title />
            <PopularCategories />

            <About />
            <CounterSection />

        </div>
    )
}

export default Home