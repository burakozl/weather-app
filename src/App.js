import './App.css';
import Weather from './components/Weather';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {
  
  const isApiGet = useSelector((state) => state.weather.isApiGet);
 
  return (
    <div className="App">
      <Header />
      {isApiGet && <Weather />}
    </div>
  );
}

export default App;
      