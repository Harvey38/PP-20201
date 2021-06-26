import React, { Component } from 'react'
import { getMovies } from './getMovies';
import axios from 'axios'
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currSearchText: '',
            currPage: 1,
            limit: 4,
            cGenre: 'All Genres',
            genres: [{ _id: 'abcd', name: 'All Genres' }]
        }
    }
    async componentDidMount() {
        console.log('Component DID Mount');
        let promise = axios.get('https://backend-react-movie.herokuapp.com/movies');
        let promise2 = axios.get('https://backend-react-movie.herokuapp.com/genres');
        let data = await promise;
        let data2 = await promise2;
        console.log(data2.data.genres);
        this.setState({
            movies: data.data.movies,
            genres: [...this.state.genres, ...data2.data.genres]
        })
    }
    onDelete = (id) => {
        let filterMovies = this.state.movies.filter(movieObj => {
            return movieObj._id != id
        })
        this.setState({
            movies: filterMovies
        })
    }
    handleChange = (e) => {


        let task = e.target.value;
        this.setState({ currSearchText: task });
    }
    sortByRatings = (e) => {
        let className = e.target.className;
        // console.log(className);
        let sortedArr = [];
        if (className == 'fas fa-sort-up') {
            //ascending order m sort
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                return movieA.dailyRentalRate - movieB.dailyRentalRate
            });
        }
        else {
            //descending order
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                return movieB.dailyRentalRate - movieA.dailyRentalRate
            })
        }
        this.setState({
            movies: sortedArr
        });

    }
    sortByStock = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        //We have applied the same click event on both the arrows of the stock column
        // so we have to identify whether we have to sort in descending or ascending order.
        //  for this we have used the class Names as a condition
        if (className == 'fas fa-sort-up') {
            // We need to provide JS with how to compare the two elements when we are trying to sort an array of derived data-types
            // such as objects.
            // a-b is used for sorting in ascending order
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                return movieA.numberInStock - movieB.numberInStock;
            })
        }
        else {
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                // b-a is used for sorting in descending order.
                return movieB.numberInStock - movieA.numberInStock;
            })
        }
        this.setState({
            movies: sortedArr
        })
    }
    handlePageChange = (pageNumber) => {
        this.setState({ currPage: pageNumber });
    }
    handleLimit = (e) => {
        let num = Number(e.target.value)
        this.setState({ limit: num })
    }
    handleGenreChange=(genre)=>{
        this.setState({
            cGenre:genre
        })
    }
    render() {
        console.log('render');
        let { movies, currSearchText, limit, currPage,cGenre,genres } = this.state;
        let filterMovies = [];
        // searching
        if (currSearchText != '') {
            filterMovies = movies.filter(movieObj => {
                let title = movieObj.title.trim().toLowerCase();

                return title.includes(currSearchText.toLowerCase())
            })
        }
        else {
            filterMovies = movies;
        }
        if(cGenre!='All Genres')
        {
            filterMovies =filterMovies.filter(function(movieObj){
                return movieObj.genre.name == cGenre;
            })
        }
        ////////////////////////
        //Pagination & limit
        let numberofPages = Math.ceil(filterMovies.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < numberofPages; i++) {
            pageNumberArr.push(i + 1);
        }
        let si = (currPage - 1) * limit;
        let ei = si + limit;
        filterMovies = filterMovies.slice(si, ei);
        /////////////////////////////
        return (
            <>
                {
                    this.state.movies.length == 0 ?
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <ul className="list-group">
                                   {
                                       genres.map((genreObj)=>(
                                           <li onClick={()=>this.handleGenreChange(genreObj.name)} key={genreObj._id} className='list-group-item'>
                                               {genreObj.name}
                                           </li>
                                       ))
                                   }
                                    </ul>
                                    <h5>Current Genre {cGenre}</h5>
                                </div>
                                <div className='col-9'>
                                    <input value={this.state.currSearchText} onChange={this.handleChange} type='text'></input>
                                    <input value={this.state.limit > filterMovies.length ? filterMovies.length : this.state.limit}
                                        // suppose we limit of 4 and we type th we have only 2 movies of type th ....
                                        // this would lead to a bug where we ony have 2 movies in filter Array but in input tag we have 4 as our default limit

                                        onChange={this.handleLimit} min='1' max={movies.length} type='number'></input>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Genre</th>

                                                <th scope="col">
                                                    <i className="fas fa-sort-up" onClick={this.sortByStock}></i>
                                                    Stock
                                                    <i className="fa fa-sort-down" onClick={this.sortByStock} ></i>
                                                </th>

                                                <th scope="col">
                                                    <i className="fas fa-sort-up" onClick={this.sortByRatings} ></i>
                                                    Rate
                                                    <i className="fa fa-sort-down" onClick={this.sortByRatings} ></i>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filterMovies.map(movieObj => (
                                                    <tr scope='row' key={movieObj._id} >
                                                        <td></td>
                                                        <td>{movieObj.title}</td>
                                                        <td>{movieObj.genre.name}</td>
                                                        <td>{movieObj.numberInStock}</td>
                                                        <td>{movieObj.dailyRentalRate}</td>
                                                        <td><button type='button' className='btn btn-danger' onClick={() => this.onDelete(movieObj._id)}>Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <nav aria-label="...">
                                        <ul className="pagination">

                                            {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">2</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li> */}

                                            {
                                                pageNumberArr.map(pageNumber => {
                                                    let classStyleName = pageNumber == currPage ? 'page-item active' : 'page-item'
                                                    // the above let variable is used to define the class too be put on the li element.
                                                    //  As this decides the blue backgroound.
                                                    return (
                                                        <li onClick={() => this.handlePageChange(pageNumber)} className={classStyleName} key={pageNumber} >
                                                            <span className="page-link">{pageNumber}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
}


// {
//     