import React from 'react'

function WatchlistItem(props) {
    return <li>{props.ticker}
        <button>Remove from Watchlist</button></li>
}

export default function Watchlist({ tickers }) {
    const TickersJsx = tickers.map(listItem => 
        <WatchlistItem
            key={listItem.id}
            id={listItem.id}
            ticker={listItem.ticker} />
    );

    return <ul>{TickersJsx}</ul>;
}


