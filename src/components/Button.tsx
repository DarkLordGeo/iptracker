// import React from 'react'
//@ts-nocheck
import { ChevronRight } from 'lucide-react';
// import api from '../client/api'
import useFetchIp from '../hooks/useFetchIp';
import useData from '../hooks/useData';
// import useFetchRequests from '../hooks/useFetchRequestsAvailable';

const Button = (searchTerm: any) => {

    const setData = useData((state) => state.setData)

    const searchFunction = (searchTerm: string) => {
        const data = useFetchIp(searchTerm)
        data.then((data) => setData(data))
    }

    return (
        <button
            className=' bg-black hover:bg-black/90 text-on-secondary rounded-xl h-14 w-14 flex items-center justify-center transition-all active:scale-95 shrink-0 cursor-pointer'
            onClick={() => searchFunction(searchTerm)}
        >
            <ChevronRight color='#fff' />
        </button>
    )
}

export default Button
