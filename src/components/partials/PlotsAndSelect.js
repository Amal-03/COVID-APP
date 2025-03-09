import React, { useMemo } from "react";
import Plots from "./Plots";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedState } from "../../reducers/CovidSlice";

const PlotsAndSelect = () => {
  const dispatch = useDispatch();
  const { data, selectedState } = useSelector((state) => state.covid);

  const regionalData = data.data.regional;
  const states = regionalData.map((state) => state.loc);

  const handleChange = (e) => {
    dispatch(setSelectedState(e.target.value));
  };

  const options = (
    <>
      <option>Select State</option>
      {states.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </>
  );

  const selectedStateWiseData = useMemo(() => {
    return regionalData.find(({ loc }) => loc === selectedState);
  }, [regionalData, selectedState]);

  return (
    <>
      <section className="my-4">
        <Row>
          <Col sm={12} lg={3} className="offset-lg-9">
            <Form.Select onChange={handleChange}>{options}</Form.Select>
          </Col>
          <Col lg={12}>
            <Plots data={selectedStateWiseData} selectedState={selectedState} />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default PlotsAndSelect;
