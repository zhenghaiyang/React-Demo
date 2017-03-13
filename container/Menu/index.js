module.exports = {
	path: '/menu',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./Menu'))
		})
	}
}
