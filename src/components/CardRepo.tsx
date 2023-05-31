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
  console.log(repo);

  return (
    <div class="col-sm-12 col-md-6 mb-4">
      <div class="card mb-3 h-100">
        <div class="card-header">
          <strong>{repo.name}</strong>
          <a href={repo.html_url} class="mx-1">
            <i class="fa-solid fa-folder-open"></i>
          </a>
        </div>
        <div class="card-body">
          <p class="card-text">{repo.description || <i>No description</i>}</p>
          <p class="card-text">
            <span class="text-secondary">Language</span>:{" "}
            {repo.language || <i>Not available</i>}
          </p>
        </div>
        <div class="card-footer">
          <div class="d-flex">
            <div class="me-auto p-1">
              <Show
                when={isRepoSaved(repo.id)}
                fallback={
                  <button
                    class="btn btn-primary btn-sm"
                    onClick={() => saveClicked(repo)}
                  >
                    Save
                  </button>
                }
              >
                <button
                  class="btn btn-danger btn-sm"
                  onClick={() => unsaveClicked(repo.id)}
                >
                  UnSave
                </button>
              </Show>
            </div>
            <div class="p-1">
              <i class="fa-solid fa-star p-1"></i>
              {repo.stargazers_count}
            </div>
            <div class="p-1">
              <i class="fa-solid fa-eye p-1"></i>
              {repo.watchers_count}
            </div>
            <div class="p-1">
              <i class="fa-solid fa-code-fork p-1"></i>
              {repo.forks_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRepo;
