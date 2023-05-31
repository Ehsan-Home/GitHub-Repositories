import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
import { savedRepos } from "../pages/SavedRepos";

const Nav: Component = () => {
  return (
    <nav class="mt-5 mb-5">
      <NavLink
        href="/1"
        class="me-2 btn btn-primary"
        activeClass="btn-success"
        end
      >
        Home
      </NavLink>
      <NavLink
        href="/savedrepos"
        class="me-2 btn btn-primary"
        activeClass="btn-success"
      >
        Saved repos ~ {savedRepos().length}
      </NavLink>
    </nav>
  );
};

export default Nav;
