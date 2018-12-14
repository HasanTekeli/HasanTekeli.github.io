import React from 'react';
import './SideDrawer.css';


const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show){
		drawerClasses = 'side-drawer open';
	}

	return (<nav className={drawerClasses}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Portfolio</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Resume</a></li>
			<li><a href="/">Blog</a></li>
			<li><a href="/">Contact</a></li>
			<hr />
			<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
			<li><a href="https://twitter.com" target="_blank">Twitter</a></li>
			<li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
		</ul>
	</nav>
	);
};

export default sideDrawer;