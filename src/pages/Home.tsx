import { Component, For } from "solid-js";
import { setUsername, repos } from "../App";
import CardRepo from "../components/CardRepo";
import { Card } from "../components/Interfaces";

const Home: Component = () => {
  const extractUserName = (event: Event) => {
    event.preventDefault();
    const usernameTextInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    setUsername(usernameTextInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => extractUserName(event)}>
        <input id="username" type="text" class="p-1 align-middle" required />
        <button class="ms-3 btn btn-dark">Search</button>
      </form>
      <h3>Repos</h3>
      <For each={repos()}>{(repo: Card) => <CardRepo repo={repo} />}</For>
    </div>
  );
};

export default Home;
