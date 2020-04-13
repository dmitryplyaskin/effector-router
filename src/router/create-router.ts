import { createStore, combine } from 'effector'
import { initLocation } from './navigation'

interface Location {
	search: string
	hash: string
	pathname: string
}
const $location = createStore<Location>(initLocation())

$location.watch(console.log)

const createRouter = () => {
	const createRoute = (path: string) => {
		const $route = createStore(path)
		const $isMatch = combine(
			{ route: $route, location: $location },
			({ route, location }) => location.pathname === route
		)

		return {
			isMatch: $isMatch,
		}
	}
	return {
		createRoute,
	}
}

export { createRouter }
