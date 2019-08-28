import React, { Component } from "react";
import { getMovies, getMovie } from "../Services/fakeMovieService";
import { getGenres } from "../Services/fakeGenreService";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import GenreFilter from "./common/filter";
import { Paginate } from "../functions/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    Movies: [],
    genre: [],
    pages: 4,
    currentpage: 1,
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    const genre = [{ _id: "", name: "All movies" }, ...getGenres()];
    this.setState({ Movies: getMovies(), genre });
  }
  deleteMovie = movie => {
    const newMovies = this.state.Movies.filter(m => m._id !== movie._id);
    this.setState({ Movies: newMovies });
  };
  likeHandle = movie => {
    const Movies = [...this.state.Movies];
    const index = Movies.indexOf(movie);
    Movies[index] = { ...movie };
    Movies[index].liked = !Movies[index].liked;
    this.setState({ Movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleItemSelect = genre => {
    this.setState({ selectedItem: genre, currentPage: 1 });
  };
  sortHandle = sortedColumn => {
    this.setState({ sortColumn: sortedColumn });
  };
  render() {
    const { length: count } = this.state.Movies;
    const {
      pages: pageSize,
      currentPage,
      Movies: Movies,
      selectedItem,
      sortColumn
    } = this.state;
    if (count === 0) return <p>Oops there are no movies</p>;
    const filtered =
      selectedItem && selectedItem._id
        ? Movies.filter(m => m.genre._id === selectedItem._id)
        : Movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);
    console.log("selectedItem", this.state.selectedItem);
    return (
      <div className="row">
        <div className="col-4">
          {" "}
          <GenreFilter
            genre={this.state.genre}
            onItemSelect={this.handleItemSelect}
            selectedItem={this.state.selectedItem}
          />
        </div>
        <div className="col">
          <h3>showing {filtered.length} Movies down below</h3>
          <MoviesTable
            movies={movies}
            likeHandle={this.likeHandle}
            deleteHandle={this.deleteMovie}
            onSort={this.sortHandle}
            sortColumn={sortColumn}
          />
          <Pagination
            totalMovies={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            pageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
