import React from 'react';
import './SideDrawer.css';


const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show){
		drawerClasses = 'side-drawer open';
	}

	return (<nav className={drawerClasses}>
		<ul>
			<li><a href="/">Lecturers</a></li>
			<li><a href="/">Schedule Maker</a></li>
			<li><a href="/">Register New Users</a></li>
		</ul>
	</nav>
	);
};

export default sideDrawer;