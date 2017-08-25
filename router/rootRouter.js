import App from '../app/App';


const rootRouter={
  childRoutes:[
    {
      path:'/',
      component:App,
      childRoutes:[
        require("../container/Menu"),//Menu
        require("../NotFontpage")
      ]
    }
  ]
}
export default rootRouter;
