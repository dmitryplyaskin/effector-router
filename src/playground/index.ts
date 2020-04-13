import { createRouter } from '../router'

const { createRoute } = createRouter()
const routeA = createRoute('/a')
routeA.isMatch.watch(x => console.log('a', x))
const routeB = createRoute('/b')
routeB.isMatch.watch(x => console.log('b', x))
