const dataURL = "https://api.myjson.com/bins/jcmhn";
const fieldsNew = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function getFormValuesNew() {
	let obj = {};

	fieldsNew.forEach(function(field, index) {
		obj[field] = $("input[name=" + field + "]")[0].value
	});

	return obj;
}

function handleButtonNew() {
	$.getJSON(dataURL, handlerNew);
	$("form").hide();
}

function handlerNew(dataU) {
	let finalMessage = "";

	let obj = getFormValuesNew();
	
	dataU["text"].forEach(function(item, index) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}

		finalMessage = finalMessage + item + "<BR>";
	});

	$("div#result").html(finalMessage);
}

function init() {
	$("#button-fetch").click(handleButtonNew);
}

$(document).ready(init);