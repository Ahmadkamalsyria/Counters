import React, { Component } from "react";

class GenreFilter extends Component {
  render() {
    const {
      genre: genres,
      genreFilter,
      Name,
      id,
      onItemSelect,
      selectedItem
    } = this.props;
    console.log("genre", genres, "selected", selectedItem);
    return (
      <ul className="list-group">
        {genres.map(genre => (
          <li
            key={genre[id]}
            className={
              genre === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(genre)}
          >
            {genre[Name]}
          </li>
        ))}
      </ul>
    );
  }
}

GenreFilter.defaultProps = {
  Name: "name",
  id: "_id"
};

export default GenreFilter;
