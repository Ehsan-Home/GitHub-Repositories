import { Component } from "solid-js";

const Spinner: Component = () => {
  return (
    <div class="text-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
