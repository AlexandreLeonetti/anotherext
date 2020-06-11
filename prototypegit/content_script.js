
alert("okok");
let divSub = document.getElementById('subject');
let divBody = document.getElementById('body');
	browser.storage.onChanged.addListener((changes, area) => {
		if (area === 'local' && 'valueSubject' in changes){
			updateSub(changes.valueSubject.newValue);
		}
	});
	browser.storage.onChanged.addListener((changes, area) => {
		if (area === 'local' && 'valueBody' in changes){
			updateBody(changes.valueBody.newValue);
		}
	});


function updateSub(val) {
	divSub.innerText = ""+val;
}
function updateBody(val) {
	divBody.innerText = ""+val;
	sendEmail();
	
}
browser.storage.local.get('valueSubject').then(result => updateSub(result.valueSubject));
browser.storage.local.get('valueBody').then(result => updateBody(result.valueBody));



