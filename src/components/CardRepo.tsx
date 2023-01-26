import { Component } from "solid-js";

const CardRepo: Component = () => {
  return (
    <div class="card">
      <div class="card-header">&#11088; starts: {5}</div>
      <div class="card-body">
        <a
          href=""
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>User</strong>Name of repo
        </a>
        <p class="card-text">description</p>
        <button class="btn btn-success">Save</button>
      </div>
    </div>
  );
};

export default CardRepo;
