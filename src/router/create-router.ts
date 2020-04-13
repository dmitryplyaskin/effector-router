import { createStore } from 'effector'

const initLocation = () => {
	const { search, hash, pathname } = window.location
	return { search, hash, pathname }
}

interface Location {
	search: string
	hash: string
	pathname: string
}
const $location = createStore<Location>(initLocation())

$location.watch(console.log)

const createRouter = () => {}

export { createRouter }
