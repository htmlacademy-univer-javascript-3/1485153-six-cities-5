import { Main } from '../Main/Main';

interface AppProps {
  cardsCount: number;
}

export const App = ({ cardsCount }: AppProps) => (
  <Main cardsCount={cardsCount} />
);
