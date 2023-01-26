import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";
import fetchRepos from "./networks/FetchRepos";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const App: Component = () => {
  const [username, SetUsername] = createSignal("Ehsan-Home");
  const [repos, setRepos] = createSignal([]);

  createEffect(async () => {
    const data = await fetch(
      `https://api.github.com/users/${username()}/repos`
    );
    setRepos(await data.json());
  });

  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/savedrepos" component={SavedRepos} />
      </Routes>
    </div>
  );
};

export default App;
