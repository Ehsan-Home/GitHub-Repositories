import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav class="mt-5 mb-5">
      <NavLink
        href="/"
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
        Saved repos ~ 5
      </NavLink>
    </nav>
  );
};

export default Nav;
