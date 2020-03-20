import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavBar from './components/navbar.component';
import InputComp from './components/input.component';
import FooterComp from './components/footer.component';

const App = props => {
	return (
		<div>
			{' '}
			<NavBar />
			<Container fluid>
				<Row></Row>
				<br />
				<br />
				<br />
				<Row>
					<Col md="4"></Col>
					<Col md="4">
						<InputComp />
					</Col>
					<Col md="4"></Col>
				</Row>
				<Row></Row>
			</Container>
			<br />
			<br />
			<br />
			<br />
			<FooterComp />
		</div>
	);
};

export default App;
