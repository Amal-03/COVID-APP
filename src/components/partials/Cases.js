import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const labels = {
  total: "Total Cases",
  active: "Active Cases",
  recovered: "Recovered Cases",
  deaths: "Total Deaths",
};

const Cases = ({ summary }) => {
  // Filter out the source key from the summary object
  const filteredSummary = Object.entries(summary).filter(
    ([key]) => key !== "source"
  );

  return (
    <section className="cases-section pb-4">
      <Row>
        {filteredSummary.map(([key, value]) => (
          <Col className="mb-2" md={6} lg={3} key={key}>
            <Card className="cases">
              <Card.Body>
                <p className="mb-0">{labels[key]}</p>
                <h3>{value}</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Cases;
