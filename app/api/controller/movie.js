const movieModel = require("../models/movies");

module.exports = {
  create: (req, res, next) => {
    movieModel.create(req.body, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Movie added successfully",
          data: null,
        });
      }
    });
  },

  updateById: (req, res, next) => {
    movieModel.findByIdAndUpdate(
      req.params.movieId,
      req.body,
      (err, movieInfo) => {
        if (err) {
          next(err);
        } else {
          res.json({
            status: "success",
            message: "Movie updated successfully",
            data: null,
          });
        }
      }
    );
  },

  deleteById: (req, res, next) => {
    movieModel.findByIdAndRemove(req.params.movieId, (err, movieInfo) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Movie deleted successfully",
          data: null,
        });
      }
    });
  },

  getAll: (req, res, next) => {
    let movieList = [];
    movieModel.find({}, (err, movies) => {
      if (err) {
        next(err);
      } else {
        movies.forEach((movie) => {
          movieList.push({
            id: movie._id,
            name: movie.name,
            releaseDate: movie.releaseDate,
          });
        });

        res.json({
          status: "success",
          message: "Movie list found",
          data: movieList,
        });
      }
    });
  },

  getById: (req, res, next) => {
    movieModel.findById(req.params.movieId, (err, movieInfo) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Movie found successfully",
          data: movieInfo,
        });
      }
    });
  },
};
