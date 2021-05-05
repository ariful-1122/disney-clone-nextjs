import React from "react";
import Detail from "../../components/detail-page/Detail";
import connectDB from "../../config/db";
import Movie from "../../model/MovieModel";

function DetailPage(props) {
  const {movie} = props;

  if (props.hasError) {
    return <h2>This movie is Not Found!</h2>;
  }

  return (
    <div>
      <Detail movie={movie} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const {params} = context;

  const movieId = params.movieId;

  await connectDB();

  try {
    const getMovie = await Movie.findById({_id: movieId});
    return {props: {movie: JSON.parse(JSON.stringify(getMovie))}};
  } catch (error) {
    return {props: {hasError: true}};
  }
}

export default DetailPage;
