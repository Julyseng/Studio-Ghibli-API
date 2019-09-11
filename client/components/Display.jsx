import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import films from '../import'

class Display extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../castle.jpg" />
                    <Card.Body>
                        <Card.Title>Castle in the Sky</Card.Title>
                        <Card.Text>
                            film description go here
                        </Card.Text>
                        <Button> ❤️ Likes {this.state.count} </Button>
                    </Card.Body>
                </Card>
            </React.Fragment>

        )
    }
}
export default Display

// className Form extends React.Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//         card-subtitle: 'Count',
//         count: 0
//       }

//       // this.handleClick = this.handleClick.bind(this)
//     }

//     // handleClick() {
//     //   this.setState({
//     //     count: this.state.count + 1
//     //   })
//     // }

//     handleClick = () => {

//       this.setState({
//         count: this.state.count + 1
//       })
//     }

//     render() {
//       return (
//         <React.Fragment>
//           <h1>{this.state.card-subtitle} - {this.state.count}</h1>
//           <button onClick={this.handleClick}>Click me!</button>
//         </React.Fragment>
//       )
//     }
//   }

//   export default Form

{/* <section className='hero is primary'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='subtitle'>Studio Ghibli Films</h1>
                        <h2 className='subtitle'> ~ Better Than Disney ~ </h2>
                    </div>
                </div>
            </section>
            {/* ---columns---- */}
            // <div className='columns'>
            //     <div className='column'>
            //         <div className='card'>
            //             <div className='card-content'>
            //                 <div className='card-subtitle'>Film Title</div>
            //                 <div className='card-subtitle'>rt_score</div>
            //                 <footer className='className-footer'>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is success'>
            //                             <i className='fo-fo-thumbs-o-up'> </i>
            //                         </a>
            //                     </div>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is danger' >
            //                             <i className='fo-fo-thumbs-o-down'> </i>
            //                         </a>
            //                     </div>
            //                 </footer>
            //             </div>
            //         </div>
            //     </div>
            //     <div className='column'>
            //         <div className='card'>
            //             <div className='card-content'>
            //                 <div className='card-subtitle'>Film Title</div>
            //                 <div className='card-subtitle'>rt_score</div>
            //                 <footer className='className-footer'>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is success' >
            //                             <i className='fo-fo-thumbs-o-up'> </i>
            //                         </a>

            //                     </div>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is danger' >
            //                             <i className='fo-fo-thumbs-o-down'> </i>
            //                         </a>

            //                     </div>


            //                 </footer>
            //             </div>
            //         </div>
            //     </div>
            //     <div className='column'>
            //         <div className='card'>
            //             <div className='card-content'>
            //                 <div className='card-subtitle'>Film Title</div>
            //                 <div className='card-subtitle'>rt_score</div>
            //                 <footer className='className-footer'>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is success' >
            //                             <i className='fo-fo-thumbs-o-up'> </i>
            //                         </a>

            //                     </div>
            //                     <div className='card-footer-item'>
            //                         <a href="#" className='button is danger' >
            //                             <i className='fo-fo-thumbs-o-down'> </i>
            //                         </a>

            //                     </div>


            //                 </footer>
            //             </div>
            //         </div>
            //     </div>
            // </div> */}