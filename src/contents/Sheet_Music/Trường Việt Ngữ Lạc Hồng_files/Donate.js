var clientTop = "400px";
var clientLeft = "200px";

function showTip(event) {
    document.getElementById("modalContainer").className = "modalContainer";
    document.getElementById("modalContainer").style.marginLeft = "1px"
    //document.getElementById("modalContainer").style.height = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight) + "px";
    //document.getElementById("modalContainer").style.width = document.documentElement.clientWidth + "px";
    document.getElementById("modalContainer").style.height = screen.height + "px";
    document.getElementById("modalContainer").style.width = screen.width + "px";

    document.getElementById("modalContainer").style.marginTop = "1px"

	var theTip = document.getElementById("spnTip");
	//theTip.style.top = new String(event.clientY + 20) + "px";
	//theTip.style.left = new String(event.clientX) + "px";
	theTip.style.top = "200px";
	theTip.style.left = "200px";
	//theTip.innerHTML = "<table cellspacing='0' cellpadding='2' rules='all' style='border-collapse:collapse; font-size: 8pt;' border='1'>" +
	//           "<tr class='DriverHeader'><td colspan='3' align='center'><b>Driver-Patient History</b></td></tr>" +
	//           "<tr class='DriverHeader'><td><b>Patient</b></td><td><b>Appointment Date</b></td><td><b>Treatment Facility</b></td></tr>" +
	//           oSel +
	//           "</table>";
	theTip.style.visibility = "visible";


}

//hide tool tip
function hideTip() {
    document.getElementById("spnTip").style.visibility = "hidden";
    document.getElementById("modalContainer").className = "hiddenDiv";
}
