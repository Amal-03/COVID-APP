import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Cases from "./partials/Cases";
import PlotsAndSelect from "./partials/PlotsAndSelect";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidData } from "../reducers/CovidSlice";
import Map from "./partials/Map";

const Error = ({ status = "", children }) => {
  const failedStatus = status == "failed";
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="d-flex justify-content-center align-items-center "
    >
      <p className={failedStatus ? "text-danger" : ""}>{children}</p>
    </div>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  // get all needed data from store
  const { data, status, dataWithCoordinates, error } = useSelector(
    (state) => state.covid
  );

  // fetch data on loading
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovidData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Error>Loading .....</Error>;
  }

  if (status === "failed") {
    return <Error status="failed">{error}</Error>;
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
