import React from 'react'
import Comment from './Comment'
import { getComments } from '../apiClient'

export default class DisplayComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [ ],
        }
    }

    componentDidMount() {
        getComments()
            .then(result => {
                // const data = result.body
                this.setState({
                    comments: result.body
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='display-comments'>
                    <h3> Comments </h3>
                    {this.state.comments.map((comment) => {
                        return (

                              <p> {comment.name} : {comment.film_title}
                              {comment.comment} - {comment.created}
                              
                             </p>  
                            
                        )
                    })}
                </div>

            </React.Fragment>
        )
    }

}
