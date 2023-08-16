import React from 'react'

function WatchlistItem(props) {
    function deleteClicked() {
        props.deleteTicker( props.id );
    }

    return <li>{props.ticker}
        <button onClick={deleteClicked}>Remove from Watchlist</button></li>
}

export default function Watchlist({ tickers, deleteTicker }) {
    const TickersJsx = tickers.map(listItem => 
        <WatchlistItem
            key={listItem.id}
            id={listItem.id}
            ticker={listItem.ticker}
            deleteTicker={deleteTicker} />
    );

    return <ul>{TickersJsx}</ul>;
}


