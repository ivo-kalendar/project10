import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ title, icon }) => {
	return (
		<nav className="navbar">
			{title.map((el,i) => {
				return (
					<a href="/home" key={`elementkey${i}`}>
						<h1><i className={icon[i]}></i> {el}</h1>
					</a>
				)
			})}	
		</nav>
	)
}

NavBar.defaultProps = {
	title: ["Home", "Messages", "Friends"],
	icon: ["fas fa-home", "fas fa-envelope-open", "fas fa-users"]
}

NavBar.propTypes = {
	title: PropTypes.array.isRequired,
	icon: PropTypes.array.isRequired
}

export default NavBar