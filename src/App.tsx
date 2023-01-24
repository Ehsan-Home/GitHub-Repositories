import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SavedRepos from "./pages/SavedRepos";

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/savedrepos" component={SavedRepos} />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </div>
  );
};

export default App;
