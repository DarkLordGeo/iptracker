import { useEffect, useState } from 'react'
import Background from '../components/Background'
import Button from '../components/Button'
import Details from '../components/Details'
import ResultMap from '../components/ResultMap'
import SearchBar from '../components/SearchBar'
import useData from '../hooks/useData'

const Main = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const searchBar = (e: any) => {
        const searchValue = e.target.value
        setSearchTerm(searchValue)
    }



    return (
        <main className='grow flex flex-col justify-center items-center'>

            <Background>
                <SearchBar updateInput={(e: any) => searchBar(e)} />
                <Button searchTerm={searchTerm} />
            </Background>

            <section className='w-3/4 items-center justify-center -mt-16 flex flex-col'>
                <Details />
                {/* <ResultMap /> */}
            </section>
  
        </main>
    )
}

export default Main
