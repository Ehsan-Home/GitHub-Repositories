import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";

const Pagination: Component = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <NavLink
            class="page-link"
            href={`prev`}
            tabindex="-1"
            aria-disabled="true"
          >
            Previous
          </NavLink>
        </li>
        <For each={[1, 2, 3]}>
          {(i) => (
            <li class="page-item">
              <NavLink class="page-link" href={`/${i}`}>
                {i}
              </NavLink>
            </li>
          )}
        </For>
        <li class="page-item">
          <NavLink
            class="page-link"
            href={`next`}
            tabindex="-1"
            aria-disabled="true"
          >
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
