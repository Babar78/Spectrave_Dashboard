import React from 'react'

// image import
import missionImg from '../../../assets/images/missionImg.png'

const OurMission = () => {
    return (
        <section className='content_container'>
            <div className='md:pt-20 py-10 grid md:grid-cols-2 gap-10'>
                <div className='first-div md:block hidden'>
                    <img src={missionImg} alt="Hero" className='w-auto' />
                </div>
                <div className='second-div'>
                    <h2 className='text-primary text-[24px]'>
                        Overview
                    </h2>
                    <span className='text-gray-90 text-[2.5rem] font-bold'>
                        Our Mission
                    </span>
                    <p className='mt-5 mb-2 text-[16px]'>
                        At SolarTech, our mission is to lead the charge towards a sustainable future by leveraging the abundant power of solar energy. We envision a world where clean, renewable energy sources are the norm, reducing our dependence on fossil fuels and mitigating the effects of climate change.
                    </p>
                    <img src={missionImg} alt="Hero" className='w-full md:hidden block' />
                    <div className='space-y-2'>

                        <div>
                            <h3 className='font-bold text-[18px]'>
                                Commitment to Clean Energy:
                            </h3>
                            <p className="text-[16px]">
                                We are committed to promoting clean energy solutions that not only benefit the environment but also empower individuals and communities. By harnessing solar power, we strive to minimize carbon emissions and pave the way for a more sustainable energy landscape.
                            </p>
                        </div>

                        <div>
                            <h3 className='font-bold text-[18px]'>
                                Values and Goals:
                            </h3>
                            <p className="text-[16px]">
                                Our core values revolve around innovation, integrity, and environmental stewardship. We aim to provide cutting-edge solar solutions while upholding the highest standards of ethical business practices. Our goal is to make solar energy accessible and affordable for everyone, driving positive change for future generations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission