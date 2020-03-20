import React from 'react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Button,
} from 'reactstrap';

const InputComp = props => {
	return (
		<div>
			<h2
				style={{
					textAlign: 'center',
				}}
			>
				What items do you need?
			</h2>
			<br />
			<InputGroup>
				<Input
					style={{ borderRadius: ' 30px 0 0 30px ', borderRightColor: 'white' }}
					placeholder="Enter item here... "
				/>
				<InputGroupAddon addonType="append">
					<InputGroupText
						style={{
							borderRadius: ' 0 30px 30px 0',
							backgroundColor: 'white',
						}}
						className="fa fa-search"
					></InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<br />
			<br />
			<InputGroup>
				<InputGroupAddon addonType="append">
					<InputGroupText
						style={{
							borderRadius: '5px',
							borderColor: 'white',
							backgroundColor: 'white',
							fontSize: '14px',
						}}
					>
						{' '}
						Item{' '}
					</InputGroupText>
				</InputGroupAddon>
				<Input placeholder="" style={{ borderColor: 'white' }} />
				<InputGroupAddon addonType="append">
					<InputGroupText
						style={{
							borderRadius: '5px',
							borderColor: 'white',
							backgroundColor: 'white',
							fontSize: '14px',
						}}
					>
						Urgency
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<br />
			<InputGroup size="lg">
				<Input
					placeholder="Medicine from CVS"
					style={{
						borderRadius: ' 30px 0 0 30px ',
						fontSize: '16px',
					}}
				/>
				<InputGroupAddon addonType="append">
					<Button
						color="danger"
						style={{
							borderRadius: ' 0 30px 30px 0',
							borderLeftWidth: '30px',
							fontSize: '16px',
							textAlign: 'center',
						}}
					>
						Need Today
					</Button>
				</InputGroupAddon>
			</InputGroup>
			<br />
			<InputGroup size="lg">
				<Input
					placeholder="Canned Food"
					style={{
						borderRadius: ' 30px 0 0 30px ',
						fontSize: '16px',
					}}
				/>
				<InputGroupAddon addonType="append">
					<Button
						color="warning"
						style={{
							borderRadius: ' 0 30px 30px 0',
							borderLeftWidth: '55PX',
							fontSize: '16px',
							textAlign: 'center',
						}}
					>
						1-3 days
					</Button>
				</InputGroupAddon>
			</InputGroup>
			<br />
			<InputGroup size="lg">
				<Input
					placeholder="Dog Food"
					style={{ borderRadius: ' 30px 0 0 30px ', fontSize: '16px' }}
				/>
				<InputGroupAddon addonType="append">
					<Button
						color="success"
						style={{
							borderRadius: ' 0 30px 30px 0',
							borderLeftWidth: '40PX',
							fontSize: '16px',
							textAlign: 'center',
						}}
					>
						Next Week
					</Button>
				</InputGroupAddon>
			</InputGroup>
			<br />
			<Button
				color="primary"
				size="lg"
				block
				style={{
					borderRadius: ' 30px 30px 30px 30px',

					fontSize: '16px',
				}}
			>
				Order Now
			</Button>
		</div>
	);
};

export default InputComp;
