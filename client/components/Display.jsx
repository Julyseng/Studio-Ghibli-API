import React from 'react'


function Display() {
    return (
        <React.Fragment>
            <section className='hero is primary'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='title'>Studio Ghibli Films</h1>
                        <h2 className='subtitle'> ~ Better Than Disney ~ </h2>

                    </div>
                </div>
            </section>

            {/* ---columns---- */}
            <div className='columns'>
                <div className='column'>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='title'>Film Title</div>
                            <div className='subtitle'>rt_score</div>
                            <footer className='class-footer'>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is success' >
                                        <i className='fo-fo-thumbs-o-up'> </i>
                                    </a>

                                </div>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is danger' >
                                        <i className='fo-fo-thumbs-o-down'> </i>
                                    </a>

                                </div>


                            </footer>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='title'>Film Title</div>
                            <div className='subtitle'>rt_score</div>
                            <footer className='class-footer'>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is success' >
                                        <i className='fo-fo-thumbs-o-up'> </i>
                                    </a>

                                </div>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is danger' >
                                        <i className='fo-fo-thumbs-o-down'> </i>
                                    </a>

                                </div>


                            </footer>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <div className='card-content'>
                            <div className='title'>Film Title</div>
                            <div className='subtitle'>rt_score</div>
                            <footer className='class-footer'>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is success' >
                                        <i className='fo-fo-thumbs-o-up'> </i>
                                    </a>

                                </div>
                                <div className='card-footer-item'>
                                    <a href="#" className='button is danger' >
                                        <i className='fo-fo-thumbs-o-down'> </i>
                                    </a>

                                </div>


                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Display




// class Form extends React.Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//         title: 'Count',
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
//           <h1>{this.state.title} - {this.state.count}</h1>
//           <button onClick={this.handleClick}>Click me!</button>
//         </React.Fragment>
//       )
//     }
//   }

//   export default Form