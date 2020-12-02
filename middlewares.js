import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WhoTube";
  res.locals.routes = routes;
  next();
};