import React from 'react'
import CustomButton from '../../../components/CustomButton/CustomButton'

// image import
import discoverImg from '../../../assets/images/discover.jpg'

const DiscoverSection = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center h-full py-[50px] min-h-[400px] flex items-center justify-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)
        ), url(${discoverImg})`,
    }}>
      <div className="content_container text-center flex flex-col items-center gap-5">
        <h2 className='text-[2.5rem] font-bold text-white'>
          Experience the Power of Solar with Spectrave
        </h2>
        <p className='text-white text-[16px]'>
          At Spectrave, we're more than just a solar energy company; we're a community united by our passion for sustainable living and a brighter future. Our mission is to inspire, inform, and empower individuals to embrace clean, renewable energy solutions and reduce their carbon footprint. With a team of dedicated experts leading the way, we're committed to providing you with the tools, knowledge, and support you need to harness the sun's energy and power your world sustainably. Join us as we celebrate the beauty of solar energy and the endless possibilities it offers for a cleaner, greener tomorrow.
        </p>
        <CustomButton
          type="button"
          title="Explore More"
          variant="btn_primary_gradient"
        />
      </div>
    </section>
  )
}

export default DiscoverSection