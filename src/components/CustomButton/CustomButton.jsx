import React from 'react'

const CustomButton = ({ type, title, icon, variant, full }) => {
    return (
        <button
            className={`flex justify-center items-center gap-3 rounded-full ${variant} ${full && 'w-full'}`}
            type={type}
        >
            {icon && <img src={icon} alt={title} className='w-[24px] h-[24px]' />}
            <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default CustomButton