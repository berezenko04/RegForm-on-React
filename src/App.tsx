import { Routes, Route } from 'react-router-dom'

import Home from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/RegForm-on-React' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App