import { Component, Show } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";
import { Card, CardProps } from "./Interfaces";

const saveClicked = (repo: Card) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unsaveClicked = (repoId: string) => {
  const nextStateSavedRepos = savedRepos().filter((repo) => repo.id !== repoId);
  setSavedRepos(nextStateSavedRepos);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const isRepoSaved = (repoId: string) => {
  const foundRepo = savedRepos().filter((repo) => repo.id === repoId);
  return foundRepo.length > 0;
};

const CardRepo: Component<CardProps> = ({ repo }) => {
  return (
    <div class="card mb-3">
      <div class="card-header">&#11088; starts: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        <Show
          when={isRepoSaved(repo.id)}
          fallback={
            <button class="btn btn-success" onClick={() => saveClicked(repo)}>
              Save
            </button>
          }
        >
          <button class="btn btn-danger" onClick={() => unsaveClicked(repo.id)}>
            UnSave
          </button>
        </Show>
      </div>
    </div>
  );
};

export default CardRepo;
