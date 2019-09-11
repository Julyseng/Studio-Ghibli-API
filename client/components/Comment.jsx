import React from 'react'
import { getFilms } from '../apiClient'

const defaultState = {
    name: ' ',
    comment: '',
    title: '',
    date: null
}



class Comment extends React.Component {
    state = {
        ...defaultState
    }

    componentDidMount = () => {
        getFilms()
            .then((result) => {
                this.setState({
                    films: result.body
                })

            })
    }


    handleSubmit = evt => {
        this.props.saveItem(this.state)
        this.setState({ ...defaultState })
        evt.preventDefault()
    }

    handleChange = evt => {
        const { name, value } = evt.target
        this.setState({
            [name]: value,
            [comment]: value,
            [title]: value,
            [date]: value
        })
    }

    render() {
        const { name, comment, title, date } = this.state
        return (
            <React.Fragment> 
                <div className='leaveComment'> ~~ Leave Comments on your Favourite Films ~~ </div>
            <form className='comment-section' onSubmit={this.handleSubmit} >
                <label htmlFor='name'>Name:  </label>
                <input type='text' name='name'
                    className='u-full-width'
                    onChange={this.handleChange}
                    value={name} />

                <label htmlFor='Comment'>Comment: </label>
                <input type="text" name='comment'
                    className='u-full-width'
                    onChange={this.handleChange}
                    value={comment} />

                <label htmlFor='title'> Choose Film: </label>
                <select name='title' className='u-full-width' onChange={this.handleChange} value={title}>

                </select>
                <input type='submit' className='button-primary' value='Add' />
            </form>
            </React.Fragment>
        )
    }

}

export default Comment 