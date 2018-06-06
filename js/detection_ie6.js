function Is() {
agent = navigator.userAgent.toLowerCase();
this.major = parseInt(navigator.appVersion);
this.minor = parseFloat(navigator.appVersion);
this.ns = ((agent.indexOf('mozilla') != -1) &&
(agent.indexOf('spoofer') == -1) &&
(agent.indexOf('compatible') == -1) &&
(agent.indexOf('opera') == -1) &&
(agent.indexOf('webtv') == -1) &&
(agent.indexOf('hotjava') == -1));
this.ns2 = (this.ns && (this.major == 2));
this.ns3 = (this.ns && (this.major == 3));
this.ns4 = (this.ns && (this.major == 4));
this.ns6 = (this.ns && (this.major >= 5));
this.ie = ((agent.indexOf("msie") != -1) &&
(agent.indexOf("opera") == -1));
this.ie3 = (this.ie && (this.major < 4));
this.ie4 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 4") != -1));
this.ie5 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 5.") != -1) &&
(agent.indexOf("msie 5.5") == -1) &&
(agent.indexOf("mac") == -1));
this.iem5 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 5.") != -1) &&
(agent.indexOf("mac") != -1));
this.ie55 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 5.5") != -1));
this.ie6 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 6.") != -1));
this.ie7 = (this.ie && (this.major == 4) &&
(agent.indexOf("msie 7.0b") != -1));
this.nsdom = (this.ns4 || this.ns6);
this.ie5dom = (this.ie5 || this.iem5 || this.ie55);
this.iedom = (this.ie4 || this.ie5dom || this.ie6);
this.w3dom = (this.ns6 || this.ie6 ||this.ie7);
}

var is = new Is();

function checkBrowser () {
if (is.ie6) {
	alert("Ce site est optimisé pour les navigateurs à partir de Internet Explorer 7, nous vous invitons à mettre à jour votre navigateur pour profiter de toutes les fonctionnalités de environnement.laclasse.com"); 
}
}