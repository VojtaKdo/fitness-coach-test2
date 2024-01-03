import { createRoot } from 'react-dom/client';
import { AppRoutes } from './pages/AppRoutes/AppRoutes';

const root = createRoot(document.getElementById("wrapper"));
root.render(<AppRoutes />);