interface User {
	name: string
	email: string
	password: string
	notes: Array<Notes>
}
interface LoggedUser {
	name: string
	email: string
	notes: Array<Notes>
}

interface Notes {
	title: string
	description: string
	id: string
}

export type { User, Notes, LoggedUser }
