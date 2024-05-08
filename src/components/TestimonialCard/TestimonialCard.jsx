import React from 'react'
import star from '../../assets/images/star.svg'

const TestimonialCard = ({
    name,
    experience,
    imageSrc,
    description,
    rating,
}) => {
    return (
        <div className="py-12 md:px-12 w-full">
            <div className="mx-auto xl:px-32">
                <div className="lg:flex items-center justify-center">
                    <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 lg:block flex justify-center">
                        <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14 max-w-[552px] min-h-[300px]">
                            <div className="flex gap-3 items-center">
                                <img
                                    src={imageSrc}
                                    className="rotate-[6deg] rounded-full shadow-lg h-[70px] w-[70px] object-cover object-center lg:hidden block"
                                    alt="person"
                                />
                                <div className="space-y-1 lg:space-y-2">
                                    <h2 className="text-3xl font-bold dark:text-white text-green-90">
                                        {name}
                                    </h2>
                                    <p className="font-semibold text-green-50">{experience}</p>
                                </div>
                            </div>
                            <p className="mb-6 text-gray-30 regular-16 mt-4">{description}</p>
                            <div className="flex justify-center lg:justify-start">
                                {Array(rating)
                                    .fill(1)
                                    .map((_, index) => (
                                        <img
                                            src={star}
                                            key={index}
                                            alt="star"
                                            className='w-[24px] h-[24px]'
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:mb-12 lg:mb-0 lg:block hidden">
                        <img
                            src={imageSrc}
                            className="rotate-[6deg] rounded-lg shadow-lg dark:shadow-black/20 h-[350px] w-[250px] object-cover object-center"
                            alt="person"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard