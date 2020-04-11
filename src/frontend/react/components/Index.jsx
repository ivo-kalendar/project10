import React, { Component } from 'react'
import NavBar from './NavBar.jsx'
import Users from  './Users.jsx'
import axios from 'axios'

class Index extends Component {
	state = { users: [], loading: true }

	async componentDidMount() {
		const res = await axios.get('https://api.github.com/users')
		this.setState({ users: res.data, loading: false })
	}

	render() {
		return (
			<div className="app">
				<NavBar />
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		)
	}
}

export default Index