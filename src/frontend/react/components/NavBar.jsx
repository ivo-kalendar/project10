import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
	static defaultProps = {
		title: ["Home", "Messages", "Friends"],
		icon: ["fas fa-home", "fas fa-envelope-open", "fas fa-users"]
	}

	static propTypes = {
		title: PropTypes.array.isRequired,
		icon: PropTypes.array.isRequired
	}

	

	render() {
		return (
			<nav className="navbar">
				<a href="/home"><h1><i className={this.props.icon[0]}></i> {this.props.title[0]}</h1></a>
				<a href="/home"><h1><i className={this.props.icon[1]}></i> {this.props.title[1]}</h1></a>
				<a href="/home"><h1><i className={this.props.icon[2]}></i> {this.props.title[2]}</h1></a>
			</nav>
		)
	}
}

export default NavBar