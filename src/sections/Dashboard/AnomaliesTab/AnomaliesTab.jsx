import React from 'react'
import anomalyImg from "../../../assets/images/defect01.png";

const AnomaliesTab = () => {
    return (
        <div className='flex flex-col gap-4 overflow-auto h-[calc(100vh-140px-2.5rem)] pr-5'>
            <img src={anomalyImg} alt="Anomaly" className='rounded-lg w-full max-h-[600px] object-contain' />
            <span className='text-center'>
                The table shows data for the delta temperature of active bypass diodes (ABD1 and ABD2). According to reference data (e.g., Appendix A, Table 1), the delta temperature for ABD1 is 3.69 and the corrected delta temperature is 4.69. For ABD2, the delta temperature is 9.64 and the corrected delta temperature is 10.86. It's important to consult the device specifications or relevant guidelines to determine the acceptable range for these temperatures.
            </span>
        </div>
    )
}

export default AnomaliesTab