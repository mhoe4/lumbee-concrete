import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";

class lumbee extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {<img alt='lumbee' src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/43393923_279810209537432_5561921732798840832_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=2f376f1da2411d87c711161034ad6ccf&oe=5D9D37AE" />}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default lumbee;

