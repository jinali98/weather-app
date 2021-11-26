import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Spinner from "./errors/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import ForecastPage from "./pages/forecast-page/forecast-page.component";
import HomePage from "./pages/home-page/home-page.component";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";
import SearchPage from "./pages/search-page/search-page.component";

// const HomePage = lazy(() => import("./pages/home-page/home-page.component"));
// const SearchPage = lazy(() =>
//   import("./pages/search-page/search-page.component")
// );
// const ForecastPage = lazy(() =>
//   import("./pages/forecast-page/forecast-page.component")
// );
// const NotFoundPage = lazy(() =>
//   import("./pages/not-found-page/not-found-page.component")
// );

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* <Suspense fallback={<Spinner />}> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/:name" component={ForecastPage} />
        <Route path="*" component={NotFoundPage} />
        {/* </Suspense> */}
      </Switch>
    </div>
  );
};

export default App;
