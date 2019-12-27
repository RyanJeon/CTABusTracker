const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { origins: '*:*'});
const date = require('date-and-time');
const config = require('config-yml');
const TESTS = require('./testdata.js');



const ROUTE_INFO_URL = config.api.baseurl + 
			"/getvehicles?key=" + 
			config.api.key +
			"&rt=" +
			config.api.route +
			"&tmres=s&format=json";

const STOP_PREDICTION_URL = config.api.baseurl +
			    "/getpredictions?key=" +
			    config.api.key +
			    "&rt=" +
			    config.api.route +
			    "&stpid=" +
			    config.api.stopid +
			    "&format=json";


const parseCTADate = (date) => {

	const dateArray = date.split(" ");
	const year = dateArray[0].slice(0,4);
	const month = dateArray[0].slice(4,6);
	const day = dateArray[0].slice(6,8);
	const time = dateArray[1] + ":00 CST";

	const isoFormat = [month, day, year, time].join(" ");
	
	return isoFormat;
}

const microsecondToTimeString = (ms) => {
	const h = Math.floor(ms / 3600000);
	const m = Math.floor((ms % 3600000) / 60000);

	if(h == 0) return m + " minutes";
	else return h + " hours " + m + " minutes";

}

// Accepts an array of predictions
const beautifyPredictions = (data) => {
	if(!data) return null;
	predictions = data["bustime-response"]["prd"];
	if(!predictions) return null;

	const n = predictions.length;
	
	for(let i = 0; i < n; i++) {
		const parsedTime = parseCTADate( predictions[i]["prdtm"] );
		const remainingTime = Date.parse(parsedTime) - Date.now();

		predictions[i]["prdtm"] = parsedTime;
		predictions[i]["remaining-time"] = remainingTime;

		predictions[i]["remaining-time-string"] = microsecondToTimeString(remainingTime);
		
	}
}


const broadcastBuses = () => {

	http.get(ROUTE_INFO_URL, (resp) => {
			 let data = '';

			  // a chunk of data has been recieved.
			  resp.on('data', (chunk) => {
			    data += chunk;
			  });

			  // the whole response has been received. print out the result.
			  resp.on('end', () => {
			    data = JSON.parse(data);
			    io.emit('broadcast', data["bustime-response"]["vehicle"] );
			  });

	}).on("error", (err) => {
		 console.log("error: " + err.message);
	});

}

const broadcastPredictions = () => {
	if(config.env == "dev") {	
		data = TESTS.TEST_STOP_PREDICTION
		beautified = JSON.parse(JSON.stringify( data));
		beautifyPredictions( beautified );
		io.emit('broadcast', beautified["bustime-response"]["prd"]  );
		return;
	}
	http.get(STOP_PREDICTION_URL, (resp) => {
			 let data = '';

			  // a chunk of data has been recieved.
			  resp.on('data', (chunk) => {
			    data += chunk;
			  });

			  // the whole response has been received. print out the result.
			  resp.on('end', () => {
			    data = JSON.parse( data );
			    beautified = JSON.parse(JSON.stringify( data));
			    beautifyPredictions( beautified );
			    io.emit('broadcast', beautified["bustime-response"]["prd"] );
			  });

	}).on("error", (err) => {
		 console.log("error: " + err.message);
	});

}

// Broadcast buses every minute
const doEveryMinute = (socket) => {
	setInterval(() => {
		if(config.env == "prod") {
			broadcastBuses();
		} else {
			data = TESTS.TEST_ROUTE_3;
			io.emit('broadcast', data["bustime-response"]["vehicle"] );
		}
   	}, 3000) ;

	console.log(TESTS);	
}

console.log("Starting the server in the mode: " + config.env);

io.on('connection', (socket) => {
	console.log("socket");
	broadcastPredictions();
});


server.listen(8000);
