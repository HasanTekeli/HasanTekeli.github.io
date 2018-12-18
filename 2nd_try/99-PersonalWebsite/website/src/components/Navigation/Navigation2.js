import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import Logo from './HAT_LogoV2.png'
import './Navigation2.css';

const Navigation = props => {
	return (
	<div>
	
	<header className="site-header">
		<div className="toolbar__toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
		</div>

		<div className="wrap">
			<div className="title-area">
				<p className="site-title" itemprop="headline">
					<a href="/">Hasan Ayhan Tekeli</a>
				</p>
			</div>
		</div>
	</header>
	<div className="navigation-container">
		<nav className="nav-primary">
			<div className="wrap">
				<ul id="menu-left-menu" className="menu genesis-nav-menu menu-primary responsive-menu">
					<li id="menu-item-2795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-2795">
						<a href="/" itemprop="url">
							<span itemprop="name">Home</span>
						</a>
					</li>
					<li id="menu-item-2793" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2791 current_page_item menu-item-2793">
						<a href="/portfolio" itemprop="url">
							<span itemprop="name">Portfolio</span>
						</a>
					</li>
					<li id="menu-item-2780" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2780">
						<a href="/contact" itemprop="url">
							<span itemprop="name">Contact</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<nav className="nav-secondary" aria-label="Secondary" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
			<div className="wrap">
				<ul id="menu-right-menu" className="menu genesis-nav-menu menu-secondary">
					<li id="menu-item-4344" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4344">
						<a href="http://www.facebook.com" itemprop="url">
							<span itemprop="name">Facebook</span>
						</a>
					</li>					
				</ul>
			</div>
		</nav>
	</div>
	</div>
	);
}

export default Navigation;