<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen";

function App() {
  return (
    <>
      <HomeScreen />
    </>
  );
=======
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Box, Flex, Button, ButtonGroup, Heading, Divider } from '@chakra-ui/core';
import LazyHero from 'react-lazy-hero';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

function App() {
	const styles = {
		navLink: {
			marginRight: '15px',
			textDecoration: 'none',
			color: 'white'
		}
	};

	return (
		<ThemeProvider>
			<CSSReset />
			<Box style={{ height: '140vh',  }}>
				<Navbar
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: '#222',
						padding: '20px',
						alignItems: 'center'
					}}
				>
					<Navbar.Brand style={{ color: 'white', fontSize: '30px' }}>SchoolFlare</Navbar.Brand>
					<Nav>
						<Nav.Link style={styles.navLink}>Schools</Nav.Link>
						<Nav.Link style={styles.navLink}>Parents</Nav.Link>
						<Nav.Link style={styles.navLink}>Drivers</Nav.Link>
						<Nav.Link style={styles.navLink}>Trust & Safety</Nav.Link>
						<Nav.Link style={styles.navLink}>Our Story</Nav.Link>
					</Nav>
				</Navbar>
				<Box color="white">
					<LazyHero
						imageSrc={require('./assets/heroalt.jpg')}
						style={{ padding: '20px' }}
						isCentered={false}
						opacity={0}
						parallaxOffset={50}
					>
						<Box style={{ margin: '40px' }}>
							<h1 style={{ fontSize: '3rem' }}>I Flare to school so mom can get to work</h1>
							<br />
							<h1 style={{ fontSize: '1.6rem' }}>
								Your one-stop partner for safe & reliable student transportation
							</h1>
							<br />
							<br />

							<ButtonGroup spacing={4}>
								<Button variantColor="green" variant="solid">
									Solutions for Schools
								</Button>
								<Button variantColor="white" variant="outline">
									Apply to drive
								</Button>
							</ButtonGroup>
						</Box>
					</LazyHero>
				</Box>
				<Flex justify="space-evenly" style={{ marginTop: '2rem' }}>
					<Col xs="12">
						<Heading style={{ size: '20px', textAlign: 'center', fontFamily: 'Raleway', color: 'green' }}>
							5M{' '}
						</Heading>
						miles Driven
					</Col>
					<Col xs="12">
						<Heading style={{ size: '20px', textAlign: 'center', fontFamily: 'Raleway', color: 'green' }}>
							750K{' '}
						</Heading>
						Children Safely Transported
					</Col>
					<Col xs="12">
						<Heading style={{ size: '20px', textAlign: 'center', fontFamily: 'Raleway', color: 'green' }}>
							10K+
						</Heading>{' '}
						Schools Covered
					</Col>
					<Col xs="12">
						<Heading style={{ size: '20px', textAlign: 'center', fontFamily: 'Raleway', color: 'green' }}>
							4.9{' '}
						</Heading>
						Star Rating
					</Col>
				</Flex>
				<br/>
					<Divider/>
					<br/>
					<Heading textAlign='center' style={{fontFamily:'Raleway'  	}}>Our mission</Heading>
			</Box>
		</ThemeProvider>
	);
>>>>>>> 4d246df4cf2f4182826d23db9c78d8e3c7d77f05
}

export default App;
