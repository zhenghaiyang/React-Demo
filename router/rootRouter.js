import App from '../app/App';
import PageNotFound from '../404page';


const rootRouter={
  childRoutes:[
    {
      path:'/',
      component:App,
      childRoutes:[
        require("../container/Menu"),//Menu
        // {
        // path: '*',
				// name: 'Page not found',
				// component: PageNotFound
        // },
        require('../404page')
        // PageNotFound
      ]
    }
  ]
}
export default rootRouter;
