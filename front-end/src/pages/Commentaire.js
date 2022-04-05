import Title from '../parts/Home/Title';
import PopularCategories from '../parts/Home/PopularCategories';
import CounterSection from '../parts/Home/CounterSection';
import Commentaire_Part from '../parts/Commentaire/Commentaire_Part'
import Comments_List from '../parts/Commentaire/Comments_List'
import ProjectExample from '../parts/ProjectsList/ProjectExample'

import About from '../parts/Home/About';
import ProjectCard from '../parts/ProjectsList/ProjectCard';
const Commentaire = () => {
    return (
        <div>
            {/* <ProjectExample/> */}
            <Comments_List/>
            <Commentaire_Part />


        </div>
    )
}

export default Commentaire;