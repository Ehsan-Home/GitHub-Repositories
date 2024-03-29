import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Nav from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import SavedRepos from "./pages/SavedRepos";
import Home from "./pages/Home";

const App: Component = () => {
  return (
    <>
      <Nav />
      <div class="container">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/:id" component={Dashboard} />
          <Route path="/savedrepos" component={SavedRepos} />
        </Routes>
      </div>
    </>
  );
};

export default App;
