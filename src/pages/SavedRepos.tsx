import { Component, createSignal, For } from "solid-js";
import CardRepo from "../components/CardRepo";
import { Card } from "../components/Interfaces";

const savedReposFromLsInString = localStorage.getItem("savedRepos") ?? "[]";
const savedReposFromLocalStorage: Card[] = JSON.parse(savedReposFromLsInString);
const [savedRepos, setSavedRepos] = createSignal(savedReposFromLocalStorage);

const SavedRepos: Component = () => {
  return (
    <div>
      <h3>Saved Repos</h3>
      <For each={savedRepos()}>
        {(savedRepo: Card) => <CardRepo repo={savedRepo} />}
      </For>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
