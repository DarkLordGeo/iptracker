import React, { useEffect, useState } from 'react'
import useData from '../hooks/useData'

const Details = () => {
    const data = useData((state) => state.data)

    return (
        <div className='w-3/4 mb-12 p-10 flex items-center justify-center gap-12 text-left'>
            <div className='flex justify-center items-center md:px-8 border-r last:border-r-0 border-gray-300'>
                <>
                    <div className='flex justify-center flex-col items-start md:px-8 border-r last:border-r-0 border-gray-300'>
                        <span className='font-medium text-black mb-3'>
                            IP ADDRESS
                        </span>
                        <span className='font-medium text-gray-500 mb-3'>
                            {data.ip}
                        </span>

                    </div>
                    <div className='flex justify-center flex-col items-start md:px-8 border-r last:border-r-0 border-gray-300'>
                        <span className='font-medium text-black mb-3'>
                            REGION
                        </span>
                        <span className='font-medium text-gray-500 mb-3'>
                            {data.location?.region}
                        </span>
                    </div>
                    <div className='flex justify-center flex-col items-start md:px-8 border-r last:border-r-0 border-gray-300'>
                        <span className='font-medium text-black mb-3'>
                            ISP
                        </span>
                        <span className='font-medium  text-gray-500 mb-3'>
                            {data.isp}
                        </span>
                    </div>
                    <div className='flex justify-center flex-col items-start md:px-8 border-r last:border-r-0 border-gray-300'>
                        <span className='font-medium text-black mb-3'>
                            Timezone
                        </span>
                        <span className='font-medium text-gray-500 mb-3'>
                            {data.location?.timezone}
                        </span>
                    </div>
                </>
                {/* ))} */}
            </div>
        </div>
    )
}


export default Details
