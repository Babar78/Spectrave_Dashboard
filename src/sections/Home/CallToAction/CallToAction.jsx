import React from 'react'
import CustomButton from '../../../components/CustomButton/CustomButton'

const CallToAction = () => {
    return (
        <section className="md:pb-20 pb-10">
            <div className="content_container">
                <div className='p-14 space-y-5 flex flex-col justify-center items-center bg-gray-90 rounded-[40px]'>
                    <h2 className="font-bold text-[2.5rem] text-white text-center">
                        Ready to harness the power of the sun?
                    </h2>
                    <p className="text-[16px] text-gray-300 text-center">
                        Discover our solar solutions and take the first step towards a sustainable future!
                    </p>
                    <CustomButton variant="btn_primary_gradient" title="Get Started" type="button" />
                </div>
            </div>
        </section>
    )
}

export default CallToAction