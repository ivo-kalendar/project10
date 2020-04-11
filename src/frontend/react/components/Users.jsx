import React from 'react'
import UserItem from './UserItem.jsx'
import Spinner from './Spinner.jsx'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />
	} else {
		return (
			<div className="row justify-content-around items">
				{users.map(user => {
					return <UserItem key={user.id} item={user} />
				})}
			</div>
		)
	}
}

Users.protoTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

export default Users