import ReactDOM from 'react-dom/client';
import App from './app';
import { setupStore } from 'shared';


export const store=setupStore()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);


