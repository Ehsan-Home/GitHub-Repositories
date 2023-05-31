export interface Card {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  watchers_count: string;
  language: string;
  owner: {
    login: string;
  };
}

export interface CardProps {
  repo: Card;
}
