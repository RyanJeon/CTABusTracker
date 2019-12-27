import React, {useEffect, useState} from 'react';
import './App.css';
import socketIOClient from "socket.io-client";



function renderCards( data ) {

	if(!data) return;

	let cards = data.map( bus => {
		return (
		<div className="card">
        		<h1>{bus["rtdir"]}</h1>
        		<p>Arrives in { bus["remaining-time-string"] } </p>
      		</div>)
	});

	return cards;
}

function App() {
  const [datagram, setData] = useState("");

  useEffect(() => {
    console.log("mount");
    const endpoint = "http://127.0.0.1:8000";
    const socket = socketIOClient(endpoint);

    socket.on("broadcast", data => {
	console.log(data);
	if(data) data.sort((a, b) => (a["remaining-time"] > b["remaining-time"]) ? 1 : -1)
	setData( data );
    });


    socket.on("test", data => {
	console.log(data);
    });

  }, []);

  return (
    <div>
	<h1>Buses on Route 201 Church & Sherman</h1>
	{renderCards(datagram)}
    </div>
  );
}

export default App;
