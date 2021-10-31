import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <div class="p-5 mb-4 bg-light border rounded-3">
      <Container>
        <Row>
          <Col>
            <h2>Code Austin Code</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
