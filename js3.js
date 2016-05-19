//phone number

var phone = prompt("Please enter your phone number. Please include dashes. NOTE: This will not be used for SPAM.");

alert((phone[3] == "-") && (phone[7] == "-"));

//Birth date
var bdate = prompt("Please enter your birth date in the following format" + ":" + "MM/DD/YY");

alert((bdate[2] == "/") && (bdate[5] == "/"));

//Postal code

var pcode = prompt("Please enter your postal code in the following format" + ":" + " " + "99999" + " " + "or" + " " + "99999-9999");

var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(pcode);
alert(isValidZip);

//State abbreviation

var sstates = prompt("Please enter your two letter state abbreviation here");

alert(ValidState(sstates));

function ValidState(sstate) {

	sstates = "wa|or|ca|ak|nv|id|ut|az|hi|mt|wy" +

				"co|nm|nd|sd|ne|ks|ok|tx|mn|ia|mo" +

				"ar|la|wi|il|ms|mi|in|ky|tn|al|fl" +

				"ga|sc|nc|oh|wv|va|pa|ny|vt|me|nh" +

				"ma|ri|ct|nj|de|md|dc";

	

	if (sstates.indexOf(sstate.toLowerCase() + "|") > -1) {

		return true;

		}

	

	return false;

	}
	
	
//Married prompt

var mstatus = prompt("Are you married? Please answer Yes or No");

alert(mstatus.toLocaleUpperCase("YES") || mstatus.toLocaleUpperCase("NO"));