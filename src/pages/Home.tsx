import { useParams } from "solid-app-router";
import { Component, createSignal, createEffect, For, Show } from "solid-js";
import CardRepo from "../components/CardRepo";
import Empty from "../components/Empty";
import { Card } from "../components/Interfaces";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const [username, setUsername] = createSignal("Ehsan-Home");
const [repos, setRepos] = createSignal([]);
const [isLoading, setIsLoading] = createSignal(true);
const [pageNumber, setPageNumber] = createSignal("1");

const Home: Component = () => {
  // createEffect(async () => {
  //   const data = await fetch(
  //     `https://api.github.com/users/${username()}/repos`
  //   );
  //   setRepos(await data.json());
  //   setIsLoading(false);
  // });

  createEffect(() => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username()}/repos?page=${params.id}`)
      .then((res) => res.json())
      .then((res: []) => {
        setRepos(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const params = useParams();
  createEffect(() => {
    setPageNumber(params.id);
  });

  const extractUserName = (event: Event) => {
    event.preventDefault();
    const usernameTextInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    setUsername(usernameTextInput.value);
  };

  return (
    <div>
      <div class="my-4">
        <h4>Repositories of {username()}</h4>
      </div>
      <form
        class="row row-cols-lg-auto g-3 align-items-center mb-4"
        onSubmit={(event) => extractUserName(event)}
      >
        <div class="col-12">
          <label class="visually-hidden" for="inlineFormInputGroupUsername">
            Username
          </label>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input
              id="username"
              type="text"
              class="form-control"
              placeholder="Username"
            />
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <Show when={!isLoading()} fallback={<Spinner />}>
        <div class="row">
          <For each={repos()} fallback={<Empty />}>
            {(repo: Card) => <CardRepo repo={repo} />}
          </For>
        </div>
      </Show>
      <Pagination />
    </div>
  );
};

export { setIsLoading, pageNumber };
export default Home;
