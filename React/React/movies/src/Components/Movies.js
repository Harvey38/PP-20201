import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            movies:getMovies(),
            currSearchText:'',
        }
    }
    onDelete = (id)=>{
        let filterMovies = this.state.movies.filter(movieObj=>{
            return movieObj._id!=id
        })
        this.setState({
            movies:filterMovies
        })
    }
     
    handleChange=(e)=>{


       let task = e.target.value;
       this.setState({currSearchText:task});
    //    if(task=='')
    //    {
    //        this.setState({
    //            filterMovies:this.state.movies,
    //            currSearchText:''
    //        })
    //        return;
    //    }
    //    let filteredArr = this.state.movies.filter(movieObj=>{
    //        let title = movieObj.title.trim().toLowerCase();
         
    //        return title.includes(task.toLowerCase())
    //    })
    //    this.setState({
    //        filterMovies:filteredArr,
    //        currSearchText:task
    //    })
    }

    render() {
        let {movies,currSearchText} = this.state;
        let filterMovies =[];
        if(currSearchText!='')
        {
            filterMovies =movies.filter(movieObj=>{
                       let title = movieObj.title.trim().toLowerCase();
                     
                       return title.includes(currSearchText.toLowerCase())
                   })
        }
        else{
            filterMovies=movies;
        }
        return (
            <div className='row'>
              <div className='col-3'>
                  <h1>Hello</h1>
              </div>
              <div className='col-9'>
              <input value={this.state.currSearchText} onChange={this.handleChange} type='text'></input>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
    </tr>
  </thead>
  <tbody>
   {
       filterMovies.map(movieObj=>(
                <tr scope='row' key={movieObj._id} >
                    <td></td>
                    <td>{movieObj.title}</td>
                    <td>{movieObj.genre.name}</td>
                    <td>{movieObj.numberInStock}</td>
                    <td>{movieObj.dailyRentalRate}</td>
                    <td><button type='button' className='btn btn-danger' onClick={()=>this.onDelete(movieObj._id)}>Delete</button></td>
                </tr>
            ))  
          }
  </tbody>
</table>    
                  
              </div>  
            </div>
              
        )
    }
}


// {
//     