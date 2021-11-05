import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import { GlobalStyle } from "./global.styles";
import ForecastPage from "./pages/forecast-page/forecast-page.component";
import HomePage from "./pages/home-page/home-page.component";
import NotFoundPage from "./pages/not-found-page/not-found-page.component";
import SearchPage from "./pages/search-page/search-page.component";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/:name" component={ForecastPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
