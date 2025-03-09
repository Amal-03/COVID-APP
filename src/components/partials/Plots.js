import React, { lazy, Suspense } from "react";
import { Card, Col, Row } from "react-bootstrap";
const PieChart = lazy(() => import("../../charts/PieChart"));
const BarChart = lazy(() => import("../../charts/BarChart"));

const CommonLayout = ({ children }) => {
  return (
    <Col lg={6} className="mb-3">
      <Card>
        <Card.Body>
          <Suspense fallback={<>Loading...</>}>{children}</Suspense>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Plots = (props) => {
  if (!props.selectedState) {
    return (
      <Card className="mt-4">
        <Card.Body>
          <h4 className="text-danger">
            <b>*Please select a state to view details </b>
          </h4>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <section className="mt-4">
        <Row className="justify-content-between">
          <CommonLayout>
            <PieChart key={`pie-${props.selectedState}`} {...props} />
          </CommonLayout>
          <CommonLayout>
            <BarChart key={`bar-${props.selectedState}`} {...props} />
          </CommonLayout>
        </Row>
      </section>
    </>
  );
};

export default Plots;
