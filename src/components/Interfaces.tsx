export interface Card {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
}

export interface CardProps {
  repo: Card;
}
