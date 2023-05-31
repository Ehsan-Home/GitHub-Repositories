import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import { savedRepos } from "../pages/SavedRepos";

const Nav: Component = () => {
  return (
    <nav
      class="navbar navbar-expand-lg"
      style={{ background: "rgba(0, 0, 0, 0.03)" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          GitHubVentory
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NavLink href="/1" class="nav-link" activeClass="active" end>
                Dashboard
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink href="/savedrepos" class="nav-link" activeClass="active">
                Saved({savedRepos().length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
