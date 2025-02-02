import AboutMe from '../AboutMe';
import HeroSection from './HeroSection/HeroSection';
import MySkills from './MySkills/MySkills';

export default function Home(){
    return (
      <>
        <HeroSection />
        <MySkills />
        <AboutMe />
      </>
    );
}