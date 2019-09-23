import React from 'react'

const Navs = props => {
    console.log(props)
    return (
        <React.Fragment>
            <ul>
                <li><a href="#home">|Home|</a></li>
                <li><a href="#LeaveComment">Leave A Comment|</a></li>
                <li><a href="#Game">Play Quiz|</a></li>
                <li><a href="#contact">Contact|</a></li>
            </ul>

        </React.Fragment>
    )
}

export default Navs

