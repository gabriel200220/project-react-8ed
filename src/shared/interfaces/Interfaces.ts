// Registro
interface User {
	name: string
	email: string
	password: string
	notes: Array<Notes>
}

// Login
interface LoggedUser {
	name: string
	email: string
	notes: Array<Notes>
}

// Home
interface Notes {
	title: string
	description: string
	id: string
}

export type { User, Notes, LoggedUser }
