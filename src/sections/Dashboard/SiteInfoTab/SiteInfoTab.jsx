import React from 'react'
import siteInfoImg from "../../../assets/images/site_model.jpeg"

const SiteInfoTab = () => {
    return (
        <div className='overflow-auto h-[calc(100vh-140px-2.5rem)] pr-5'>
            <div className='flex flex-col gap-4'>
                <img src={siteInfoImg} alt="Anomaly" className='rounded-lg w-fit max-h-[400px] object-cover' />
                <div className='description'>
                    <h2 className='text-2xl font-bold text-primary'>Site Model Description:</h2>
                    <p>
                        Welcome to our solar-powered future! This site model showcases a sustainable and efficient approach to energy production.
                    </p>
                    <h3 className='text-xl font-bold'>
                        Key Features:
                    </h3>
                    <ol className="list-decimal ps-5">
                        <li>
                            <b>
                                Solar Panels:
                            </b>
                            The sleek array of solar panels adorning the roof captures the sun's energy, converting it into clean electricity. Each panel is strategically positioned to maximize sunlight absorption throughout the day.
                        </li>
                        <li>
                            <b>
                                Energy Efficiency:
                            </b>
                            Our design emphasizes energy efficiency, utilizing advanced technologies to minimize energy waste and maximize output. From LED lighting to smart appliances, every aspect of this model is geared towards reducing environmental impact.
                        </li>
                        <li>
                            <b>
                                Integration with Nature:
                            </b>
                            Embracing the harmony between architecture and nature, this site model seamlessly integrates green spaces and natural elements. Lush vegetation surrounds the building, providing shade and improving air quality.
                        </li>
                        <li>
                            <b>
                                Smart Grid Connectivity:
                            </b>
                            The solar panel system is seamlessly integrated with a smart grid, enabling efficient energy distribution and storage. Excess energy generated during peak hours is stored for later use or fed back into the grid, ensuring optimal energy utilization.
                        </li>
                    </ol>

                </div>
            </div>
        </div>

    )
}

export default SiteInfoTab