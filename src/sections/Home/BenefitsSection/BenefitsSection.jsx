import React from 'react'

// Importing Icons
import { GiGreenPower, GiMoneyStack } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";
import { IoFootsteps } from "react-icons/io5";

const BenefitsSection = () => {
  return (
    <section className='content_container'>
      <div className='md:pt-20 pt-10'>
        <h2 className='text-primary text-[24px] text-center'>
          Why Solar Energy?
        </h2>
        <p className='text-gray-90 text-[2.5rem] font-bold text-center'>
          Benefits of Solar Energy
        </p>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-10 pt-10'>
          <div className='flex flex-col items-center text-center'>
            <GiGreenPower size={50} />
            <h3 className='text-gray-90 text-[20px] pt-5 font-bold'>
              Clean Energy
            </h3>
            <p className='text-gray-90 pt-5'>
              Solar energy produces no harmful emissions, reducing pollution and protecting the environment.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <MdAutorenew size={50} />
            <h3 className='text-gray-90 text-[20px] pt-5 font-bold'>
              Renewable Energy
            </h3>
            <p className='text-gray-90 pt-5'>
              The sun is an abundant and inexhaustible source of energy, providing a sustainable alternative to finite fossil fuels.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <GiMoneyStack size={50} />
            <h3 className='text-gray-90 text-[20px] pt-5 font-bold'>
              Cost-Effective
            </h3>
            <p className='text-gray-90 pt-5'>
              Solar power can significantly lower electricity bills and offer long-term savings on energy costs.

            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <IoFootsteps size={50} />
            <h3 className='text-gray-90 text-[20px] pt-5 font-bold'>
              Reduces Carbon Footprint
            </h3>
            <p className='text-gray-90 pt-5'>
              By harnessing solar energy, individuals and businesses can decrease their carbon footprint and combat climate change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection