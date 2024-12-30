import { Header } from '~/components/header/header';
import { HeroSection } from '~/components/hero-section/hero-section';
import { AboutSection } from '~/components/about-section/about-section';
import { StackCard } from '~/components/stack-card/stack-card';
import { ProjectsSection } from '~/components/projects-section/projects-section';
import { Footer } from '~/components/site-footer/site-footer';

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <StackCard />
            <ProjectsSection />
            <Footer />
        </>
    );
}
