import React from 'react'
import { postComments } from '../apiClient'
import { getFilms } from '../apiClient'


export default class Comment extends React.Component {
    state = {
        data: { 
       name: '',
       film_title: '',
       comment: '',
       Created: undefined
        },
        films : [ ]
    }
    componentDidMount = () => {
        getFilms()
            .then((result) => {
                this.setState({
                    films: result.body
                })

            })
    }
    

    handleChange = (e) => {
        let { name, value } = e.target
        console.log(name, value)
        this.setState({ 
            data: {
                ...this.state.data,
               [name] : value 
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        postComments (this.state.data)
        .then(() => {
            console.log('comment is saved')
        })
    }
        
    render() {
        // console.log(this.state.data)
       let {name, film_title, comment, Created} = this.state.data
        return (
            <React.Fragment> 
                <div className='leaveComment'> 
                
                <form  onSubmit={this.handleSubmit}>
                    <div className='control'>
                    <label className='Form-name'>Name: </label> 
                    <input className='input is-rounded'
                            type='text'
                            name='name'
                            placeholder='name'
                            value={name}
                            onChange={this.handleChange}
                            />
                    
                    <label className='Film-title'>film_Title: </label> 
                    <select name='film_title' className='select-title' onChange={this.handleChange} value={film_title}> 
                    {this.state.films.map(film => (
                        <option key={film.id} value={film.title}> {film.title} </option>
                    ))}


                    </select>
                    {/* <input className='input is-rounded'
                            type='select'
                            name='film_title'
                            placeholder='title'
                            value={film_Title}
                            onChange={this.handleChange}
                            /> */}

                    <label className='Form-comment'>Comment: </label> 
                    <input className='input is-rounded'
                            type='textArea'
                            name='comment'
                            placeholder='leave a comment'
                            value={comment}
                            onChange={this.handleChange}
                            />

                    <label className='submit-date'>Created: </label>        
                    <input className='input is-rounded'
                            type='date'
                            name='Created'
                            value={Created}
                            onChange={this.handleChange}
                            />
                    
                    </div>
                    <div className='control'>
                    <input className='submit-button' type='submit' value='Submit' /> 
                    </div>
                </form>
                </div>
            </React.Fragment>
        )
    }

}

