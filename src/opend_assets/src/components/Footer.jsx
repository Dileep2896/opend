import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <footer>
        <Container fluid="md">
          <Row>
            <Col>
              <p>
                <span STYLE="font-weight:bold">Created By</span> - Dileep Kumar
                Sharma
              </p>
            </Col>
            <Col>{/* <p>SDP - Mini Project</p> */}</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
