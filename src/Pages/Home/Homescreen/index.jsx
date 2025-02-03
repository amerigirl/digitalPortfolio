import HeroSection from '../../HeroSection/HeroSection';
import MySkills from '../../MySkills/MySkills';
import AboutMe from '../../AboutMe/AboutMe';
import MyPortfolio from '../../MyPortfolio/MyPortfolio';
import ContactMe from '../../ConctactMe/ContactMe';

export default function Home(){
    return (
      <>
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyPortfolio />
        <ContactMe />
      </>
    );
}