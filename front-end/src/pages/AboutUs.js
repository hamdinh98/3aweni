import AboutText from "../parts/AboutUs/AboutText"
import CounterBar from "../parts/AboutUs/CounterBar"
import PageTitle from "../parts/AboutUs/PageTitle"
import TeamMember from "../parts/AboutUs/TeamMember"
import Footer from "../parts/Home/Footer"
import Header from "../parts/Home/Header"


const AboutUs = () => {
    return (
        <div>
            <Header />
            <PageTitle />
            <AboutText />
            <TeamMember />
            <CounterBar />
            <Footer />
        </div>

    )
}


export default AboutUs