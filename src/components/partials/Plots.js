import React, { lazy, Suspense } from "react";
import { Card, Col, Row } from "react-bootstrap";
const PieChart = lazy(() => import("../../charts/PieChart"));
const BarChart = lazy(() => import("../../charts/BarChart"));

const CommonLayout = ({ children }) => {
  return (
    <Col lg={6} className="mb-3">
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </Col>
  );
};

const Plots = (props) => {
  if (!props.data) {
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
            <Suspense fallback={<>Loading...</>}>
              <PieChart key={`pie-${props.selectedState}`} {...props} />
            </Suspense>
          </CommonLayout>
          <CommonLayout>
            <Suspense fallback={<>Loading...</>}>
              <BarChart key={`bar-${props.selectedState}`} {...props} />
            </Suspense>
          </CommonLayout>
        </Row>
      </section>
    </>
  );
};

export default Plots;
