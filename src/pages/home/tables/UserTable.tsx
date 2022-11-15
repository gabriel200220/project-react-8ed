import React from 'react'

const UserTable = (props: any) => {
	return (
		<table>
			<thead>
				<th>
					<tr>Name</tr>
					<tr>Username</tr>
					<tr>Actions</tr>
				</th>
			</thead>
			<tbody>
				{props.users.length > 0 ? (
					props.users.map((user: any) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>
								<button
									onClick={() => {
										props.editRow(user)
									}}
									className='button muted-button'
								>
									Edit
								</button>
								<button
									onClick={() => props.deleteUser(user.id)}
									className='button muted-button'
								>
									Delete
								</button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={3}>No users</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default UserTable
