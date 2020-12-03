import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./shared/Navigation";
import Layout from "./shared/Layout";
import routers from "./routers.js";
import Loader from "./shared/Loader";

const home = lazy(() => import("./pages/Home.js" /* webpackChunkName: "home-page" */));
const MovieDetails = lazy(() => import("./pages/MovieDetails.js" /* webpackChunkName: "MovieDetails" */));
const Movies = lazy(() => import("./pages/Movies.jsx" /* webpackChunkName: "Movies" */));
const NotFound = lazy(() => import("./pages/NotFound" /* webpackChunkName: "NotFound" */));

const App = () => (
  <Layout>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path={routers.home} exact component={home} />
        <Route path={routers.MovieDetails} component={MovieDetails} />
        <Route path={routers.movies} exact component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
