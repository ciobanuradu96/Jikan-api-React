import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'
import { useState } from 'react'


const SearchPage = () => {
    const [input, setInput] = useState('');
    const [animeList, setAnimeList] = useState();
    const [charList, setCharList] = useState();

    const fetchAnimeData = async () => {
        return await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}**`)
            .then(response => response.json())
            .then(data => {
                setAnimeList(data.results)
            });
    }
    const fetchCharData = async () => {
        return await fetch(`https://api.jikan.moe/v3/search/character?q=${input}**`)
            .then(response => response.json())
            .then(data => {
                setCharList(data.results)
            });
    }
    async function handleChange(newValue) {
        setInput(newValue);
        if (newValue !== '') {
            fetchAnimeData()
            fetchCharData()
        } else {
            setAnimeList([''])
            setCharList([''])
        }
    }


    return (

        <div>
            <SearchBar input={input} onChange={handleChange} />
            <SearchResultList list={animeList} type={'anime'} />
            <SearchResultList list={charList} type={'char'} />
        </div>
    )
}

export default SearchPage
