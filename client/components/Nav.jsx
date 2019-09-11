import React from 'react'
// import {
//     Navbar,
//     Nav,
//     // NavDropdown,
//     // Form,
//     // FormControl,
//     // Button,
// } from 'react-bootstrap'

const Navs = props => {
    return (
        <React.Fragment>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Gallery</a></li>
                <li><a href="#Game">Game</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </React.Fragment>
    )
}

export default Navs

    // < Form inline >
    //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //     <Button variant="outline-success">Add Films</Button>
    //                 </Form >