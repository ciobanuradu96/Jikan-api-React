import React from 'react'
import SearchPage from './SearchPage'

const Header = () => {
    return (
        <div className="bg-red-300 flex justify-between p-2">
            <h1 className="text-lg">animeClub</h1>
            <SearchPage></SearchPage>
        </div>
    )
}

export default Header
