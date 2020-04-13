import { createEvent } from 'effector'

const pushHistory = createEvent<string>()
pushHistory.watch(path => window.history.pushState({}, 'title', path))

export { pushHistory }
