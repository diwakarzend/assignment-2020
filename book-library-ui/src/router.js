import React, {Suspense, lazy} from "react";
// import { Router, Route, IndexRoute, Switch } from "react-router";
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { history } from "./store/index";

const Book = lazy(() => import('./Pages/Book'));

const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Suspense fallback ={<div>loading...</div>}>
    <Switch>
    <Redirect exact from="/" to="/book" />
     <Route path="/" component={Book} />
       
    <Route path="/book" component={Book} />
    </Switch>
    </Suspense>
  </Router>
);

export default router;