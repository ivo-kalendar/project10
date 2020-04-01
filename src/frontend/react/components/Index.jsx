import React from 'react'
import NavBar from './NavBar.jsx'
import Users from  './Users.jsx'

class Index extends React.Component {
	render() {
		return (
			<div className="app">
				<NavBar />
				<div className="conatiner">
					<Users />
				</div>
			</div>
		)
	}
}

export default Index