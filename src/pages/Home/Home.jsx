import React from 'react'
import HeroSection from '../../sections/Home/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import OurMission from '../../sections/Home/OurMission/OurMission'
import DiscoverSection from '../../sections/Home/DiscoverSection/DiscoverSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <OurMission />
            <DiscoverSection />
            <Footer />
        </>
    )
}

export default Home