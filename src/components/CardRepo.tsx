import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";
import { Card, CardProps } from "./Interfaces";

const saveClicked = (repo: Card) => {
  setSavedRepos([repo, ...savedRepos()]);
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
        <button class="btn btn-success" onClick={() => saveClicked(repo)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CardRepo;
