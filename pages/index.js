import React, {useEffect, useState} from "react";
import Home from "../components/Home";
import Movie from "../model/MovieModel";
import connectDB from "../config/db";
import {getSession} from "next-auth/client";
import {useRouter} from "next/router";
import Loader from "../components/loader/Loader";

function HomePage(props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  if (props.hasError) {
    return <h2>No Movie Found!</h2>;
  }

  useEffect(() => {
    getSession().then(session => {
      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loader />;
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
