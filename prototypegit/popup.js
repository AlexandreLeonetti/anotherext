let inputSubject = document.querySelector('#mailSubject');
let inputBody = document.querySelector('#mailBody');


inputSubject.addEventListener('change', e=> setSubjectValue(e.target.value));
inputBody.addEventListener('change', e=> setBodyValue(e.target.value));

async function setSubjectValue(valueSubject) {
	await browser.storage.local.set({valueSubject});
}
async function setBodyValue(valueBody) {
	await browser.storage.local.set({valueBody});
}




async function init() {
	let {valueSubject} = browser.local.storage.get('valueSubject');
	if(!valueSubject){
		valueSubject=0;
	}
	inputSubject.value=valueSubject;
	setSubjectValue(valueSubject);
	
	
	let {valueBody} = browser.local.storage.get('valueBody');
	if(!valueBody){
		valueBody=0;
	}
	inputBody.value=valueBody;
	setBodyValue(valueBody);
	
}


init().catch(e => console.error(e));