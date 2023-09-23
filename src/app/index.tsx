import AppRouter from 'pages';
import './index.css';
import { withProviders } from './providers';

function App() {
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default withProviders(App);
