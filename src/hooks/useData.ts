import { create } from 'zustand'

const useData = create((set) => ({
    data: {},
    available_requests: 0,
    setData: (data: {}) => set(() => ({ data: data })),
    setAvailableRequests: (digit: number) => set(() => ({ available_requests: digit }))
}))

export default useData