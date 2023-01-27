import { Route, Routes } from "solid-app-router";
import { Component, createEffect, createSignal } from "solid-js";
import { Card } from "./components/Interfaces";
import Nav from "./components/Nav";
import Home, { setIsLoading } from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const [username, setUsername] = createSignal("Ehsan-Home");
const [repos, setRepos] = createSignal([]);

const App: Component = () => {
  createEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username()}/repos`)
      .then((res) => res.json())
      .then((res: []) => {
        setRepos(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // createEffect(async () => {
  //   const data = await fetch(
  //     `https://api.github.com/users/${username()}/repos`
  //   );
  //   setRepos(await data.json());
  //   setIsLoading(false);
  // });

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

export { setUsername, repos };
export default App;
