import React, { Suspense } from 'react';
import SinglePageApp from './components/Spa.jsx';

const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading Dashboard...</h3>}>
        <Dashboard />
        <SinglePageApp />
      </Suspense>

      
    </>
  );
}

export default App;
