import { NavLink } from "solid-app-router";
import { Component, For } from "solid-js";
import { pageNumber } from "../pages/Home";

const Pagination: Component = () => {
  return (
    <nav aria-label="Page navigation example" class="my-3">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <NavLink class="page-link" href={`/${parseInt(pageNumber()) - 1}`}>
            Previous
          </NavLink>
        </li>
        <For
          each={[
            parseInt(pageNumber()),
            parseInt(pageNumber()) + 1,
            parseInt(pageNumber()) + 2,
          ]}
        >
          {(i) => (
            <li class="page-item">
              <NavLink
                class={`page-link ${
                  i === parseInt(pageNumber()) ? "active" : ""
                }`}
                href={`/${i}`}
              >
                {i}
              </NavLink>
            </li>
          )}
        </For>
        <li class="page-item">
          <NavLink class="page-link" href={`/${parseInt(pageNumber()) + 1}`}>
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
