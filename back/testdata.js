const TESTS = {

	TEST_ROUTE_3 : {
	    "bustime-response": {
	        "vehicle": [
	            {
	                "vid": "1350",
	                "tmstmp": "20191226 00:12:22",
	                "lat": "41.89377212524414",
	                "lon": "-87.61985778808594",
	                "hdg": "176",
	                "pid": 5343,
	                "rt": "3",
	                "des": "95th/CSU",
	                "pdist": 40,
	                "dly": false,
	                "tatripid": "1050569",
	                "tablockid": "3 -707",
	                "zone": ""
	            },
	            {
	                "vid": "1568",
	                "tmstmp": "20191226 00:12:42",
	                "lat": "41.83608966403537",
	                "lon": "-87.6174562242296",
	                "hdg": "175",
	                "pid": 5343,
	                "rt": "3",
	                "des": "95th/CSU",
	                "pdist": 26113,
	                "dly": false,
	                "tatripid": "1050567",
	                "tablockid": "3 -705",
	                "zone": ""
	            },
	            {
	                "vid": "7933",
	                "tmstmp": "20191226 00:12:43",
	                "lat": "41.72166699496182",
	                "lon": "-87.61334034312856",
	                "hdg": "85",
	                "pid": 5343,
	                "rt": "3",
	                "des": "95th/CSU",
	                "pdist": 68252,
	                "dly": false,
	                "tatripid": "1080329",
	                "tablockid": "N4  -793",
	                "zone": ""
	            },
	            {
	                "vid": "7964",
	                "tmstmp": "20191226 00:12:49",
	                "lat": "41.721105",
	                "lon": "-87.60931833333333",
	                "hdg": "153",
	                "pid": 5343,
	                "rt": "3",
	                "des": "95th/CSU",
	                "pdist": 69671,
	                "dly": false,
	                "tatripid": "1080327",
	                "tablockid": "N4  -792",
	                "zone": ""
	            }
	        ]
	    }
	},

	TEST_STOP_PREDICTION : { "bustime-response": {
					"prd": [
					{
					"vid": "7028",
					"tripid": "57217175",
					"schdtm": "20130104 15:08",
					"tmstmp": "20130104 15:00",
					"typ": "A",
					"stpnm": "87th Street \u0026 Wentworth",
					"stpid": "9405",
					"dstp": 0,
					"rt": "87",
					"rtdir": "Eastbound",
					"des": "91st/Commercial",
					"prdtm": "20191226 12:08",
					"tablockid": "87 -706",
					"tatripid": "1007569",
					"dly": false,
					"prdctdn": "8",
					"zone": ""
					},
					{
					"vid": "8021",
					"tripid": "57217175",
					"schdtm": "20130104 15:08",
					"tmstmp": "20130104 15:00",
					"typ": "A",
					"stpnm": "87th Street \u0026 Wentworth",
					"stpid": "9405",
					"dstp": 0,
					"rt": "87",
					"rtdir": "Westbound",
					"des": "91st/Commercial",
					"prdtm": "20191227 12:08",
					"tablockid": "87 -706",
					"tatripid": "1007569",
					"dly": false,
					"prdctdn": "8",
					"zone": ""
					},
					{
					"vid": "3021",
					"tripid": "57217175",
					"schdtm": "20130104 15:08",
					"tmstmp": "20130104 15:00",
					"typ": "A",
					"stpnm": "87th Street \u0026 Wentworth",
					"stpid": "9405",
					"dstp": 0,
					"rt": "87",
					"rtdir": "Eastbound",
					"des": "91st/Commercial",
					"prdtm": "20191227 3:08",
					"tablockid": "87 -706",
					"tatripid": "1007569",
					"dly": false,
					"prdctdn": "8",
					"zone": ""
					},
					{
					"vid": "8051",
					"tripid": "57217175",
					"schdtm": "20130104 15:08",
					"tmstmp": "20130104 15:00",
					"typ": "A",
					"stpnm": "87th Street \u0026 Wentworth",
					"stpid": "9405",
					"dstp": 0,
					"rt": "87",
					"rtdir": "Eastbound",
					"des": "91st/Commercial",
					"prdtm": "20191227 6:08",
					"tablockid": "87 -706",
					"tatripid": "1007569",
					"dly": false,
					"prdctdn": "8",
					"zone": ""
					}, {
					"vid": "9423",
					"tripid": "57217175",
					"schdtm": "20130104 15:08",
					"tmstmp": "20130104 15:00",
					"typ": "A",
					"stpnm": "87th Street \u0026 Wentworth",
					"stpid": "9405",
					"dstp": 0,
					"rt": "87",
					"rtdir": "Westbound",
					"des": "91st/Commercial",
					"prdtm": "20191227 4:23",
					"tablockid": "87 -706",
					"tatripid": "1007569",
					"dly": false,
					"prdctdn": "8",
					"zone": ""
					}
					]
				  }
				}
	
};

module.exports = TESTS;
