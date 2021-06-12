import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies()
        }
    }
    render() {
        let {movies} = this.state;
        return (
            <div>
               {
                 movies.map(movieObj=>(
                     <div className='movie-item' key={movieObj._id} >
                         <span>{movieObj.title}</span>
                         <span>{movieObj.genre.name}</span>
                         <span>{movieObj.numberInStock}</span>
                         <span>{movieObj.dailyRentalRate}</span>
                         <button>Delete</button>
                     </div>
                 ))  
               }
            </div>
        )
    }
}
