import React from 'react'
import CustomButton from '../../../components/CustomButton/CustomButton'

// image import
import heroImg from '../../../assets/images/heroImg.jpg'
import star from '../../../assets/images/star.svg'

const HeroSection = () => {
    return (
        <section className='bg-cover bg-no-repeat bg-center h-full py-[50px] min-h-[600px]' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)
              ), url(${heroImg})`,
        }}>
            <div className="grid md:grid-cols-2 gap-5 items-center content_container">
                <div className="">
                    <h1 className="font-black text-[2rem] lg:text-[3rem] text-primary-gradient">Empowering the Future with Clean Energy</h1>
                    <p className="text-[16px] mt-6 text-white xl:max-w-[520px]">
                        We are dedicated to accompanying you on your quest for sustainable living by harnessing the power of the sun. Our mission is to guide you through an eco-conscious journey while exploring the undeniable beauty and potential of solar energy.
                    </p>

                    <div className="my-11 flex flex-wrap gap-5">
                        <div className="flex items-center gap-2">
                            {Array(5)
                                .fill(1)
                                .map((_, index) => (
                                    <img
                                        src={star}
                                        key={index}
                                        alt="star"
                                    />
                                ))}
                        </div>

                        <p className="bold-16 lg:bold-20 text-white">
                            198k
                            <span className="regular-16 lg:regular-20 ml-1">
                                Excellent Reviews
                            </span>
                        </p>
                    </div>

                    <CustomButton
                        type="button"
                        title="Explore More"
                        variant="btn_primary_gradient"
                    />

                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection