import React from 'react'
import { postfilms } from '../apiClient'


export default class Comment extends React.Component {
    state = {
       comment: ''
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({comment: value})
    }

    handleSubmit= (e) => {
        e.prevenDefault()
        const data = { 
            comment: this.state.comment
        }
        postfilms(data)
    }
        
    

    render() {
        return (
            <React.Fragment> 
                <div className='leaveComment'> ~~ Leave Comments on your Favourite Films ~~ 
                <form onSubmit={this.handleSubmit}>
                    <div className='control'> 
                    <input className='input is-rounded'
                            type='text'
                            name='comment'
                            placeholder='leave a comment'
                            value={this.state.comment}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className='control'>
                        <input className='submit-button' type='submit' value='Submit'/>
                    </div>
                </form>
                </div>
            </React.Fragment>
        )
    }

}

