// import PageNotFound from './PageNotFound';
//
// export{
//   PageNotFound
// };

module.exports = {
	path: '404',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./PageNotFound'))
		});
	}
};
