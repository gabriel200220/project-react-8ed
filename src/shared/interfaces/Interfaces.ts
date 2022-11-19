// Registro
interface User {
	name: string
	email: string
	password: string
	notes: Array<UserData>
}

interface LoggedUser {
	name: string
	email: string
	notes: Array<UserData>
}

interface UserData {
	name: string
	username: string
	id: number
}

export type { User, UserData, LoggedUser }
