import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/:id" component={Home} />
        <Route path="/savedrepos" component={SavedRepos} />
      </Routes>
    </div>
  );
};

export default App;
