import { Component } from "solid-js";
import { CardProps } from "./Interfaces";

const CardRepo: Component<CardProps> = ({ repo }) => {
  return (
    <div class="card">
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
        <button class="btn btn-success">Save</button>
      </div>
    </div>
  );
};

export default CardRepo;
