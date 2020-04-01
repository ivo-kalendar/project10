import React from 'react'
import UserItem from './UserItem.jsx'

class Users extends React.Component {
	state = {
		users: [
			{
			    login: "mojombo",
			    id: 1,
			    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
			    html_url: "https://github.com/mojombo"
		    },
		    {
			    login: "defunkt",
			    id: 2,
			    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
			    html_url: "https://github.com/defunkt"
		    },
		    {
			    login: "pjhyett",
			    id: 3,
			    avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
			    html_url: "https://github.com/pjhyett"
		    }
		]
	}

	render() {
		return (
			<div className="row justify-content-around items">
				{this.state.users.map(user => {
					return (
						<UserItem  key={user.id} item={user} />
					)
				})}
			</div>
		)
	}
}

export default Users