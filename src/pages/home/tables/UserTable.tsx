import { Button } from '@mui/material'
import React from 'react'

const UserTable = (props: any) => {
	return (
		<table>
			<thead>
				<tr>
					<td>Detalhamento</td>
					<td>Descrição</td>
					<td>Ações</td>
				</tr>
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
						<td colSpan={3}>Sem Recados</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default UserTable
