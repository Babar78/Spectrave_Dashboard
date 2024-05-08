import React from 'react'
import StatsCard from '../../../components/StatsCard/StatsCard.jsx'
import CustomBarChart from '../../../components/CustomBarChart/CustomBarChart.jsx'

// Importing Data
import { statsData, faultTypeData, accPowerLossData, faultTypeDist, accFinLossData } from '../../../constants/data.js'
import CustomPieChart from '../../../components/CustomPieChart/CustomPieChart.jsx'


const DashboardTab = () => {
    return (
        <div className='overflow-auto h-[calc(100vh-140px-2.5rem)] pr-5'>
            <div className="flex flex-wrap xl:justify-between justify-center gap-10">
                {statsData.map((data) => (
                    <StatsCard key={data.id} title={data.title} value={data.value} unit={data.unit} />
                ))}
            </div>
            <div className='grid xl:grid-cols-2 gap-10 min-[1440px]:gap-20'>
                <div className='w-full h-[300px] mt-10 text-center'>
                    <p className='text-[20px] font-semibold'>
                        Fault Type Distribution
                    </p>
                    <CustomBarChart data={faultTypeData} />
                </div>
                <div className='w-full h-[300px] mt-10 text-center'>
                    <p className='text-[20px] font-semibold'>
                        Accomulative Power Loss (Per Fault Type)
                    </p>
                    <CustomBarChart data={accPowerLossData} />
                </div>
                <div className='w-full h-[300px] mt-10 text-center'>
                    <p className='text-[20px] font-semibold'>
                        Fault Type Distribution (Percentage)
                    </p>
                    <CustomPieChart data={faultTypeDist} />
                </div>
                <div className='w-full h-[300px] mt-10 text-center'>
                    <p className='text-[20px] font-semibold'>
                        Accomulative Financial Loss (Per Fault Type)
                    </p>
                    <CustomBarChart data={accFinLossData} />
                </div>
            </div>
        </div>
    )
}

export default DashboardTab