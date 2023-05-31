import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <>
      <div class="text-center mt-5">
        <h1 class="display-1">GitHubVentory</h1>
      </div>
      <p class="lead text-center">
        The Ultimate Hub for Storing and Discovering Your Favorite GitHub
        Repositories
      </p>
      <p class="text-center text-secondary">
        With countless repositories hosting innovative projects, it's no wonder
        developers find themselves lost in a sea of inspiring code bases. That's
        where GitHubVentory comes in—a powerful and user-friendly web
        application designed to revolutionize the way you store and explore your
        favorite GitHub repositories. Say goodbye to scattered bookmarks and
        hello to an organized, personalized hub that enhances your development
        journey like never before.
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
