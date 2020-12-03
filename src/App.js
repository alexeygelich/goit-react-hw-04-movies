import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./shared/Navigation";
import NotFound from "./pages/NotFound";
import Layout from "./shared/Layout";
import routers from "./routers.js";
import Loader from "./shared/Loader";

const App = () => (
  <Layout>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={routers.home}
          exact
          component={lazy(() => import("./pages/Home.js" /* webpackChunkName: "home-page" */))}
        />
        <Route
          path={routers.MovieDetails}
          component={lazy(() => import("./pages/MovieDetails.js" /* webpackChunkName: "MovieDetails" */))}
        />
        <Route
          path={routers.movies}
          exact
          component={lazy(() => import("./pages/Movies.jsx" /* webpackChunkName: "Movies" */))}
        />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
