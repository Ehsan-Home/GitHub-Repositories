import { Component } from "solid-js";
import img from "../static/images/github.png";

const Home: Component = () => {
  return (
    <>
      {/* <div class="text-center">
        <i class="fa-brands fa-square-github fa-spin fa-2xl"></i>
      </div> */}
      <img
        src={img}
        class="mx-auto d-block mt-3"
        width={200}
        height={200}
        alt="GitHub logo"
      ></img>
      <div class="text-center mt-3">
        <h1 class="display-1">GitHubVentory</h1>
      </div>
      <p class="lead text-center">👋🏻 Say goodbye to scattered bookmarks</p>
      <p class="text-center text-secondary">
        With countless repositories hosting innovative projects, it's no wonder
        developers find themselves lost in a sea of inspiring code bases. That's
        where GitHubVentory comes in—a powerful and user-friendly web
        application designed to revolutionize the way you store and explore your
        favorite GitHub repositories.
      </p>
      <div class="d-flex justify-content-center">
        <div class="p-2">
          <button class="btn btn-lg btn-primary">Dashboard</button>
        </div>
        <div class="p-2">
          <button class="btn btn-lg btn-warning">My list</button>
        </div>
      </div>
    </>
  );
};

export default Home;
