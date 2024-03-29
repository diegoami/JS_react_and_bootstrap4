import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './layout.css';

export default class Example extends React.Component {
    render() {
        return (
            <Container classname={"container"}>
                <Row>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col xs="3">.col-3</Col>
                    <Col xs="auto">.col-auto - variable width content</Col>
                    <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                    <Col xs="6">.col-6</Col>
                    <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col sm="4">.col-sm-4</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>.col-sm-12 .col-md-6 .col-md-offset-3</Col>
                </Row>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
                </Row>
            </Container>
        );
    }
}
