import React from 'react'
import Comment from './Comment'
import { getComments } from '../apiClient'

export default class DisplayComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [ ],
        }
        this.handleAddChange = this.handleAddChange.bind(this);
    }

    handleAddChange = e => {
        this.setState({
            adding: {
                ...this.state.adding,
                [e.target.name]: e.target.value
            }
        })

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

                            <ul className='commentsForm' value={comment} onChange={this.handleAddChange}>
                                    <li>User_Name : {comment.name} -
                                     film_title: {comment.film_title} -
                                        Comment: {comment.comment} - 
                                        Date_Created: {comment.created}
                              
                             </li>
                            </ul> 
                            
                        )
                    })}
                </div>

            </React.Fragment>
        )
    }

}
