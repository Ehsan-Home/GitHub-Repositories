import { Component, createSignal, For, Show } from "solid-js";
import CardRepo from "../components/CardRepo";
import Empty from "../components/Empty";
import { Card } from "../components/Interfaces";

const savedReposFromLsInString = localStorage.getItem("savedRepos") ?? "[]";
const savedReposFromLocalStorage: Card[] = JSON.parse(savedReposFromLsInString);
const [savedRepos, setSavedRepos] = createSignal(savedReposFromLocalStorage);

const SavedRepos: Component = () => {
  return (
    <div>
      <h3>Saved Repos</h3>
      <Show when={savedRepos().length !== 0} fallback={<Empty />}>
        <For each={savedRepos()}>
          {(savedRepo: Card) => <CardRepo repo={savedRepo} />}
        </For>
      </Show>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
