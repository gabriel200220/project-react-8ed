// Registro
interface User {
	name: string
	email: string
	password: string
	notes: Array<UserData>
}

// Login
interface LoggedUser {
	name: string
	email: string
	notes: Array<UserData>
}

// Home
interface UserData {
	name: string
	username: string
	id: number
}

export type { User, UserData, LoggedUser }
