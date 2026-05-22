//@ts-nocheck
import useData from '../hooks/useData'

const Details = () => {
    const data = useData<any>((state) => state.data)
    return (
        <div className='flex md:flex-row flex-col w-full mb-12 p-10 items-start text-left  border border-gray-300 shadow-xl rounded-md '>
            <div className='flex justify-start flex-col items-start md:px-8 border-0 md:border-r last:border-r-0 border-gray-300 grow flex-1'>
                <span className='font-medium text-black mb-3'>
                    IP ADDRESS
                </span>
                <span className='font-medium text-gray-500 mb-3'>
                    {data.ip}
                </span>
            </div>
            <div className='flex justify-center flex-col items-start md:px-8 border-0 md:border-r last:border-r-0 border-gray-300 grow flex-1'>
                <span className='font-medium text-black mb-3'>
                    REGION
                </span>
                <span className='font-medium text-gray-500 mb-3'>
                    {data.location?.region}
                </span>
            </div>
            <div className='flex justify-center flex-col items-start md:px-8 border-0 md:border-r last:border-r-0 border-gray-300 grow flex-1'>
                <span className='font-medium text-black mb-3'>
                    ISP
                </span>
                <span className='font-medium  text-gray-500 mb-3'>
                    {data.isp}
                </span>
            </div>
            <div className='flex justify-center flex-col items-start md:px-8 border-0 md:border-r last:border-r-0 border-gray-300 grow flex-1'>
                <span className='font-medium text-black mb-3'>
                    Timezone
                </span>
                <span className='font-medium text-gray-500 mb-3'>
                    {data.location?.timezone}
                </span>
            </div>
        </div>
    )
}


export default Details
