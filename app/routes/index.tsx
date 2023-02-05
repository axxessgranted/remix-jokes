import type { LinksFunction } from '@remix-run/node';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesUrl },
];

const IndexRoute = () => <h1>Hello index Route</h1>;
export default IndexRoute;
