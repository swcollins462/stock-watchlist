import { useState, useEffect } from 'react';
import './App.css';
import Watchlist from './Components/Watchlist/Watchlist';
import WatchlistForm from './Components/WatchlistForm/WatchlistForm';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const loadData = () => {
    fetch('https://qmdg53-8080.csb.app/api/tickers')
      .then(x => x.json())
      .then(response => {
        setWatchlist(response);
      });
  }

  useEffect(loadData, []);

  const addTicker = (ticker) => {
    fetch("https://qmdg53-8080.csb.app/api/tickers/new", {
      method: "POST",
      body: JSON.stringify({ticker}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: 'cors'
    }).then(loadData);
  }

  const deleteTicker = (id) => {
    fetch("https://qmdg53-8080.csb.app/api/tickers/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors",
    }).then(loadData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Watchlist</h1>
      </header>
      <main>
        <WatchlistForm addTicker={addTicker} />
        <Watchlist tickers={watchlist} deleteTicker={deleteTicker} />
      </main>
    </div>
  );
}

export default App;
