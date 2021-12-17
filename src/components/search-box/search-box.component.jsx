import React from 'react'

export default function SearchBox(props) {
    return (
        <div className="container">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleSearch} />

        </div>
    )
}
