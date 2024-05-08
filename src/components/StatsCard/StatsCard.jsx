import React from 'react'

const StatsCard = ({ title, value }) => {
    return (
        <div className='border-[1px] border-gray-200 xl:w-[300px] w-[250px] rounded-lg'>
            <div className="head bg-gray-100 p-2 text-center">
                <h2 className='text-black'>
                    {title}
                </h2>
            </div>
            <div className="detail p-5 text-center">
                <p className='font-bold text-primary text-[20px]'>
                    {value}
                </p>
            </div>
        </div>
    )
}

export default StatsCard