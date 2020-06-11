	
function send(a) { 
	return new Promise(
		function (n, e) { 
			a.nocache = Math.floor(1e6 * Math.random() + 1),a.Action = "Send"; 

			let t = JSON.stringify(a); 
						console.log(t);
			ajaxPost(
					"https://smtpjs.com/v3/smtpjs.aspx?", 
					t, 
					function (e) {
							n(e) ;
							console.log(e);
							console.log(n(e));
						}
			) 
		}
	) 
}			
			
			
			
			
function ajaxPost(e, n, t) { 
	let cors = createCORSRequest("POST", e); 
	console.log(cors);
			cors.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
			cors.onload = function () { 
						let e = cors.responseText; 
						console.log(e);
							null != t && t(e) 
						},
			cors.send(n) 
}
			/*
 function ajax(e, n) { 
					var t = createCORSRequest("GET", e); 
						t.onload = function () { 
									var e = t.responseText; 
									console.log(e);
									null != n && n(e) 
								}, 
						t.send() 
}
*/			
			
function createCORSRequest (e, n){ 
			let t = new XMLHttpRequest();
			console.log("createCORSRequest");
			console.log(t);
			return (
				"withCredentials" in t ? t.open(e, n, !0) : 
				"undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) 	: t = null, 
				t 
		)
	} 	
			
			
			
function sendEmail() {

console.log("send");


	send({
		alert("email "+ message);
		
	});
}
