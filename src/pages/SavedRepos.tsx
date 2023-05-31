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
      <div class="my-4">
        <h4>My List</h4>
      </div>
      <Show when={savedRepos().length !== 0} fallback={<Empty />}>
        <div class="row">
          <For each={savedRepos()}>
            {(savedRepo: Card) => <CardRepo repo={savedRepo} />}
          </For>
        </div>
      </Show>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
