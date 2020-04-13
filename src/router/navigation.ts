import { createEvent } from 'effector'

const pushHistory = createEvent<string>()
pushHistory.watch(path => window.history.pushState({}, 'title', path))

const initLocation = () => {
	const { search, hash, pathname } = window.location
	return { search, hash, pathname }
}

export { pushHistory, initLocation }
