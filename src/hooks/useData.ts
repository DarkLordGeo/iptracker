import { create } from 'zustand'

interface IData {
    setData?: (data: {}) => void
}


const useData = create<IData>((set) => ({
    data: {},
    available_requests: 0,
    setData: (data: {}) => set((): any => ({ data: data })),
    setAvailableRequests: (digit: number) => set((): any => ({ available_requests: digit }))
}))

export default useData