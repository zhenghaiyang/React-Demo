// import PageNotFound from './PageNotFound';
//
// export{
//   PageNotFound
// };

module.exports = {
	path: '*',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./PageNotFound'))
		});
	}
};
