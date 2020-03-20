import React from 'react';
import NavBar from './navbar.component';
import { Container, Row, Col } from 'reactstrap';
const FooterComp = () => {
	return (
		<div>
			<Container fluid style={{ backgroundColor: ' #f9f6ef' }}>
				<Row>
					<Col md="3" style={{ fontSize: '12px' }}>
						<br />
						<br />
						<br />
						<p>About the company</p>
						<p>Our address</p>
						<p>Our Contact details</p>
						<p>our email Address</p>
						<br />
						<br />
					</Col>
					<Col md="3" style={{ fontSize: '12px' }}>
						<br />
						<br />
						<br />
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<br />
						<br />
					</Col>
					<Col md="3" style={{ fontSize: '12px' }}>
						<br />
						<br />
						<br />
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<br />
						<br />
					</Col>
					<Col md="3" style={{ fontSize: '12px' }}>
						<br />
						<br />
						<br />
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<p>Somthing goes here</p>
						<br />
						<br />
					</Col>
				</Row>
			</Container>
			<NavBar />
		</div>
	);
};

export default FooterComp;
