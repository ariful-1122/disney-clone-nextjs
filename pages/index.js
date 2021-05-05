import React from "react";
import Home from "../components/Home";
import Movie from "../model/MovieModel";
import connectDB from "../config/db";

function HomePage(props) {
  if (props.hasError) {
    return <h2>NO Movie Found!</h2>;
  }

  return (
    <div>
      <Home movies={props.movies} />
    </div>
  );
}

export async function getStaticProps() {
  await connectDB();
  try {
    const getMovie = await Movie.find({});

    return {
      props: {
        movies: JSON.parse(JSON.stringify(getMovie)),
      },
    };
  } catch (error) {
    return {
      props: {
        hasError: true,
      },
      revalidate: 60,
      // notFound: true,
      // redirect: {
      //   destination: "/",
      // },
    };
  }
}

export default HomePage;
