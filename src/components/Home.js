import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Cases from "./partials/Cases";
import PlotsAndSelect from "./partials/PlotsAndSelect";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidData } from "../reducers/CovidSlice";
import Map from "./partials/Map";

const Home = () => {
  const dispatch = useDispatch();
  // get all needed data from store
  const { data, status, dataWithCoordinates } = useSelector(
    (state) => state.covid
  );

  // fetch data on loading
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovidData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Oops....Something went wrong!</div>;
  }

  if (!data) {
    return null;
  }

  const summary = data.data["unofficial-summary"][0];

  return (
    <>
      <Header />
      <Container>
        {/* displays overall cases in india */}
        <Cases summary={summary} />
        {/* contains plots & select option */}
        <PlotsAndSelect />
        {/* contains map */}
        <Map data={dataWithCoordinates} />
      </Container>
    </>
  );
};

export default Home;
