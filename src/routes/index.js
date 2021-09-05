import auth from "./auth";

export default (app) => {
  const appPrefix = "";
  /**
   * @param  {object} route
   * @param  {string} prefix
   */
  const routes = (route, prefix = appPrefix) => {
    app.use(prefix + route.prefix, route.route());
    // console.log(prefix + route.prefix);
  };
  routes(auth);
};
