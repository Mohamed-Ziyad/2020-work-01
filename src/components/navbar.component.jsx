import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavbarComp = () => {
	return (
		<div>
			<Navbar color="primary" light style={{ height: '50px' }}>
				<NavbarBrand href="/" style={{ color: 'white', padding: '5px' }}>
					demo
				</NavbarBrand>
			</Navbar>
		</div>
	);
};

export default NavbarComp;
