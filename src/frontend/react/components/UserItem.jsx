import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ item: { id, avatar_url, login, html_url } }) => {
	return (
		<div className="col item">
			<img 
				src={avatar_url} 
				alt="" 
				className="round"
				style={{ width: "120px", margin: "1rem" }}
			/>

			<h5>{login}</h5>

			<div>
				<a 
					href={html_url} 
					className="btn btn-dark btn-sm my-2">
					More
				</a>
			</div>
		</div>
	)
}

UserItem.PropTypes = { item: PropTypes.object.isRequired }

export default UserItem