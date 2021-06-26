import React from "react"

const Navigation = (props) => {
    console.log(props)
    return(
        <nav>
            <input 
                placeholder="Search Here" 
                value={props.search}
                onChange={props.searchHandler} 
            />
        </nav>
    )
}

export default Navigation