import React from 'react'
import HeroSection from '../../sections/Home/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className='content_container'>
                <HeroSection />
            </div>
            <Footer />
        </>
    )
}

export default Home