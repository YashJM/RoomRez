import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index Component={Dashboard} />
          {/* Route not found */}
          <Route path='*' Component={PageNotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
