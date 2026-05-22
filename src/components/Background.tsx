import React, { useEffect } from 'react'
import { MapPin } from 'lucide-react';
import useData from '../hooks/useData';
// import useFetchRequests from '../hooks/useFetchRequestsAvailable';

interface Props {
    children: React.ReactNode
}

const Background: React.FC<Props> = ({ children }) => {

    // const requests_available = useFetchRequests()
    // const setAvailableRequests = useData((state) => state.setAvailableRequests)
    // const available_requests = useData((state) => state.available_requests)
    // console.log(available_requests)

    // // useEffect(() => {
    // //     requests_available.then((data) => console.log(data)).catch(err => console.log(err))
    // // }, [])
    // useEffect(() => {
    //     console.log('side effect runs')
    //     requests_available.then((data) => console.log(data)).catch(err => console.log(err)).finally(() => console.log('failed'))

    // }, [])

    return (
        <>
            <section className='w-full pt-24 pb-36 md:pt-32 md:pb-48 overflow-hidden flex items-center justify-center'>
                <div className='w-3/4 z-10 px-6 md:px-0 flex flex-col items-center'>
                    <div className='w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-8 shadow-md'>
                        <MapPin color={'#fff'} />
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-black mb-4 text-center max-w-2xl">
                        IP Geolocation Tracker
                    </h2>
                    <p className="text-black font-body-lg text-center mb-10 max-w-lg mx-auto">
                        Accurately locate any IP address or domain globally with our this tracking tool.
                    </p>
                    <div className='w-full flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden p-1.5 border border-gray-300'>
                        {children}
                    </div>
                </div>
            </section>
            {/* <div className="w-full flex justify-center mb-6 animate-fade-in">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-green-50 border border-green-200/50 rounded-full shadow-sm">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500">Account balance</span>
                    </div>
                </div>
            </div> */}
        </>

    )
}

export default Background
