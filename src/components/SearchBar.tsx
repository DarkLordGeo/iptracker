
const SearchBar = ({ updateInput, inputValue }: any) => {

    return (
        <input
            type="text"
            value={inputValue}
            onChange={updateInput}
            placeholder='enter ip address'
            className='outline-none grow bg-transparent text-on-surface border-none h-14 px-6 font-body-lg focus:ring-0 placeholder:text-on-surface-variant/50 w-full md:w-25 '
        />
    )
}

export default SearchBar
