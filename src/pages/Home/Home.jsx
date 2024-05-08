import React from 'react'
import HeroSection from '../../sections/Home/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import OurMission from '../../sections/Home/OurMission/OurMission'

const Home = () => {
    return (
        <>
            <div className=''>
                <HeroSection />
                <OurMission />
            </div>
            <Footer />
        </>
    )
}

export default Home