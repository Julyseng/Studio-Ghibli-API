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
                            {/* post comments from form  */}
                            </div>
                        )
                    })}



                </div>



            </React.Fragment>
        )
    }

}
