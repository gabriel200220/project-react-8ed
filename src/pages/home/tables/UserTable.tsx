import React from 'react'

const UserTable = (props: any) => {
	return (
		<table>
			<thead>
				<th>
					<tr>Detalhamento</tr>
					<tr>Descrição</tr>
					<tr>Ações</tr>
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
									Editar
								</button>
								<button
									onClick={() => props.deleteUser(user.id)}
									className='button muted-button'
								>
									Deletar
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
