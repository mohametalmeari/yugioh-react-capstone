import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './routes/HomePage';
import DetailsPage from './routes/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
