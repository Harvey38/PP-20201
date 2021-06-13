import React, { Component } from 'react'
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            currSearchText: '',
            currPage: 1,
            limit: 4
        }
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
        console.log(className);
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
        if (className == 'fas fa-sort-up') {
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                return movieA.numberInStock - movieB.numberInStock;
            })
        }
        else {
            sortedArr = this.state.movies.sort((movieA, movieB) => {
                return movieB.numberInStock - movieA.numberInStock;
            })
        }
        this.setState({
            movies: sortedArr
        })
    }
    handlePageChange=(pageNumber)=>{
        this.setState({currPage:pageNumber});
    }
    handleLimit = (e) => {
        let num = Number(e.target.value)
        this.setState({ limit: num })
    }

    render() {
        let { movies, currSearchText, limit, currPage } = this.state;
        let filterMovies = [];

        if (currSearchText != '') {
            filterMovies = movies.filter(movieObj => {
                let title = movieObj.title.trim().toLowerCase();

                return title.includes(currSearchText.toLowerCase())
            })
        }
        else {
            filterMovies = movies;
        }
        let numberofPages =Math.ceil(filterMovies.length/limit);
        let pageNumberArr =[];
        for(let i=0;i<numberofPages;i++)
        {
            pageNumberArr.push(i+1);
        }
        let si = (currPage - 1) * limit;
        let ei = si + limit;
        filterMovies = filterMovies.slice(si, ei);

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <h1>Hello</h1>
                    </div>
                    <div className='col-9'>
                        <input value={this.state.currSearchText} onChange={this.handleChange} type='text'></input>
                        <input value={this.state.limit > filterMovies.length ? filterMovies.length : this.state.limit}
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
                            <ul class="pagination">

                                {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">2</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li> */}

                                {
                                    pageNumberArr.map(pageNumber=>{
                                        let classStyleName = pageNumber==currPage? 'page-item active' : 'page-item'
                                        return(
                                            <li onClick={()=>this.handlePageChange(pageNumber)} className={classStyleName} key={pageNumber} >
                                                <span class="page-link">{pageNumber}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        )
    }
}


// {
//     