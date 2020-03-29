import React from 'react'
import NavBar from './NavBar.jsx'
import Main from './Main.jsx'

class Index extends React.Component {
	render() {
		return (
			<div className="app">
				<NavBar />
				<Main />
			</div>
		)
	}
}

export default Index