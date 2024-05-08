import React from 'react'
import HeroSection from '../../sections/Home/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import OurMission from '../../sections/Home/OurMission/OurMission'
import DiscoverSection from '../../sections/Home/DiscoverSection/DiscoverSection'
import TestimonialSection from '../../sections/Home/TestimonialSection/TestimonialSection'
import CallToAction from '../../sections/Home/CallToAction/CallToAction'

const Home = () => {
    return (
        <>
            <HeroSection />
            <OurMission />
            <DiscoverSection />
            <TestimonialSection />
            <CallToAction />
            <Footer />
        </>
    )
}

export default Home