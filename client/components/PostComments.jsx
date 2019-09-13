import React from 'react'
import Comment from './Comment'
import { postComments } from '../apiClient'

export default class PostComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        postComments().then(res => {
            const data = res.body
            this.setState({
                comments: data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='display-comments'>
                    <h3> Read Comments </h3>
                    {this.state.comments.map((comment, i) => {
                        return (
                            <div className="row">
                                <div className="col-xl-4 col-sm-6">
                                    <div className="card card-dimensions zoom mb-4 shadow">
                                        <div >
                                            <img className="card-img-top card-img-top-dimensions" src={comment.url}></img>
                                            <div className="card-body">
                                                <p className="card-title text-center">{comment.text}</p>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>



            </React.Fragment>
        )
    }

}
