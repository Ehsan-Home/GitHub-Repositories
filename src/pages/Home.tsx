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

  const extractUserName = (event: Event) => {
    event.preventDefault();
    const usernameTextInput = document.getElementById(
      "username"
    ) as HTMLInputElement;
    setUsername(usernameTextInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => extractUserName(event)}>
        <input id="username" type="text" class="p-1 align-middle" required />
        <button class="ms-3 btn btn-dark">Search</button>
      </form>
      <h3>Repos</h3>
      <Show when={!isLoading()} fallback={<Spinner />}>
        <Show when={repos().length !== 0} fallback={<Empty />}>
          <For each={repos()}>{(repo: Card) => <CardRepo repo={repo} />}</For>
        </Show>
      </Show>
      <Pagination />
    </div>
  );
};

export { setIsLoading };
export default Home;
