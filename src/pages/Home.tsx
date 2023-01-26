import { Component, createEffect } from "solid-js";
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

  const repoExample: Card = {
    id: "1",
    description: "this is description",
    html_url: "URL",
    name: "ehsan",
    owner: {
      login: "Ehsan-Home",
    },
    stargazers_count: "10",
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => extractUserName(event)}>
        <input id="username" type="text" class="p-1 align-middle" required />
        <button class="ms-3 btn btn-dark">Search</button>
      </form>
      <CardRepo repo={repoExample} />
    </div>
  );
};

export default Home;
