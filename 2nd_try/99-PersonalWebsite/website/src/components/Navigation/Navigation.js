import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from './HAT_LogoV2.png'
import './Navigation.css';

const Navigation = props => {
	return (
	<header className="toolbar">
		<nav className="toolbar__navigation">
			<div className="toolbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/">Portfolio</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Resume</a></li>
					<li><a href="/">Blog</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</div>
			<div className="toolbar__logo"><a href="/"> <img src={Logo} alt="logo" /></a></div>
			<div className="toolbar_navigation-social">
				<ul>
					<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
					<li><a href="https://twitter.com" target="_blank">Twitter</a></li>
					<li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
				</ul>
			</div>
		</nav>
	</header>
	);
}

export default Navigation;