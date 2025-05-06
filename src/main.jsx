import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './app/App.jsx';
import './index.css';

const root = document.getElementById('root');

if (root) {
	ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
} else {
	console.error('Root element not found');
}
