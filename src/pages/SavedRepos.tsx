import { Component, createSignal, For } from "solid-js";
import CardRepo from "../components/CardRepo";
import { Card } from "../components/Interfaces";

const [savedRepos, setSavedRepos] = createSignal([] as Card[]);

const SavedRepos: Component = () => {
  return (
    <For each={savedRepos()}>
      {(savedRepo: Card) => <CardRepo repo={savedRepo} />}
    </For>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
