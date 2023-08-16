import { useState } from 'react'

export default function WatchlistForm(props) {
    const [ticker, setTicker] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTicker(ticker);
        setTicker("");
    }

    function handleTickerChange(event) {
        setTicker(event.target.value);
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="item"></label>
            <input
                type="text"
                id="ticker"
                name="ticker"
                value={ticker}
                onChange={handleTickerChange}
                required />
            <button type="submit">Add to Watchlist</button>
        </form>
    );
}
