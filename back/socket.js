const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const date = require('date-and-time');
const config = require('config-yml');



const ROUTE_INFO_URL = config.api.baseurl + 
			"/getvehicles?key=" + 
			config.api.key +
			"&rt=" +
			config.api.route +
			"&tmres=s&format=json";

const doEveryMinute = (socket) => {
	setInterval(() => {
		http.get(ROUTE_INFO_URL, (resp) => {
		 		 let data = '';

				  // a chunk of data has been recieved.
				  resp.on('data', (chunk) => {
				    data += chunk;
				  });

				  // the whole response has been received. print out the result.
				  resp.on('end', () => {
				    console.log(JSON.parse(data) );
				  });

			}).on("error", (err) => {
			  console.log("error: " + err.message);
			});



		console.log( ROUTE_INFO_URL );
		//socket.emit(1, 'myData', data);
   	}, 3000) ;
}

doEveryMinute(null);

io.on('connection', (socket) => {
    doEveryMinute(socket);
});


server.listen(3000);
