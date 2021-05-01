import React from 'react'

const SearchResultList = ({ list = [], type }) => {

    return (
        <>
            {list.map((data, index) => {
                if (data && index < 3) {
                    if (type === 'anime') {
                        return (
                            <div key={data.mal_id}>
                                <h1>{data.title}</h1>
                            </div>
                        )
                    } else if (type === 'char') {
                        return (
                            <div key={data.mal_id}>
                                <h1>{data.name}</h1>
                            </div>
                        )
                    }
                }
                return null
            })}
        </>
    )
}

export default SearchResultList
