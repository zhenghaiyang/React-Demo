import App from '../app/App';
import PageNotFound from '../404page';


const rootRouter={
  childRoutes:[
    {
      path:'/',
      component:App,
      childRoutes:[
        require("../menu"),//Menu
        {
        path: '*',
				name: 'Page not found',
				component: PageNotFound
        },
      ]
    }
  ]
}
export default rootRouter;
