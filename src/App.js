import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';

const SHop = () => {
  return <h3>Shop Page</h3>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route exact path='shop' element={<SHop />} />
      </Route>
    </Routes>
  );
}

export default App;
