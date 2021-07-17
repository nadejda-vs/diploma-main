import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { AboutMe, Porfolio, Contacts } from '../index';
import { useHistory } from 'react-router-dom';
export const CustomRouter = () => {
	const hist = useHistory();

	return (
		<Router>
			<BackgroundImage>
				<Background>
					<Link to="/">
						<img src="/images/logo1.png"></img>
					</Link>

					<div>
						<CustomUl>
							<li>
								<CustomLink
									exact
									activeStyle={{ borderBottom: `2px solid black` }}
									to="/"
								>
									Обо мне
								</CustomLink>
							</li>
							<li>
								<CustomLink
									exact
									activeStyle={{ borderBottom: `2px solid black` }}
									to="/porfolio"
								>
									Портфолио
								</CustomLink>
							</li>
							<li>
								<CustomLink
									exact
									activeStyle={{ borderBottom: `2px solid black` }}
									to="/contacts"
								>
									Контакты
								</CustomLink>
							</li>
						</CustomUl>
					</div>
				</Background>
			</BackgroundImage>

			<Route exact path="/">
				<AboutMe />
			</Route>
			<Route path="/porfolio">
				<Porfolio />
			</Route>
			<Route path="/contacts">
				<Contacts />
			</Route>
		</Router>
	);
};

const Background = styled.div`
	width: 100%;
	list-style: none;
	background: rgba(77, 81, 100, 0.5);
	font-size: 16px;
	position: fixed;
	z-index: 3;
	display: flex;
	justify-content: space-between;
	padding-left: 35px;
`;
const BackgroundImage = styled.div`
	background-image: url(/images/photo1.jpg);
	background-repeat: no-repeat;
	width: 100%;
	height: 400px;

	background-size: 100% 500px;
`;
const CustomUl = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	width: 827px;
	height: 70px;
	margin: 0 auto;
	align-items: center;
`;

const CustomLink = styled(NavLink)`
	text-decoration: none;
	color: white;
`;
