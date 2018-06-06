//http://www.i-gaia.com

var fichXml = "rss.xml";

var now = new Date();  
fichXml += "?now="+now.getTime();

function loadXml() {
  var xhr_object = null;
  var flag = true;
  
  if (window.XMLHttpRequest) { // Firefox
    xhr_object = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // Internet Explorer
    xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
  } else { // XMLHttpRequest non support par le navigateur
    alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
    return;
  }

  xhr_object.open("GET", fichXml, true);
    
  xhr_object.onreadystatechange = function() {
    //ajout d'un flag car avec IE la fonction s'excute encore une ou deux fois mme si readyState == 4
    if (xhr_object.readyState == 4 && flag) { 
       flag = false;
       readXML(xhr_object.responseXML);
    }
  }
  xhr_object.send(null);
}

var dom = (document.getElementById);

function chekBrowser() {
  if (dom) {
    loadXml();
  } else {
    alert("navigateur non compatible");
  }
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", chekBrowser, false); // for Mozilla
  document.addEventListener("load", chekBrowser, false); // for other good browsers
} else {
  window.attachEvent('onload',chekBrowser);
}


function readXML(objXml) {

  var maxNews = 5;

  var stringTxt = "";
  stringTxt += "<div id=\"rss\">"
  var title, lien, description;
  var bloc = objXml.getElementsByTagName("item");
  if (maxNews>bloc.length) {
    maxNews = bloc.length;
  }
  for (i=0; i<maxNews; i++) {
  //for (i=0; i<1; i++) {
    //var title = bloc[i].firstChild.firstChild.nodeValue;
    //alert(bloc[i].childNodes.length);
    var subxml = bloc[i].childNodes;

    for (j=0; j<subxml.length; j++) {
	  switch(subxml[j].tagName) {
	    case "title" :
		  title = subxml[j].firstChild.nodeValue;
	    break;
		case "link" :
		  lien = subxml[j].firstChild.nodeValue;
	    break;
		case "description" :
		  description = subxml[j].firstChild.nodeValue;
	    break;
	    }
    }
    //alert(title + "\n" + lien + "\n" + description);
    stringTxt += "<div class=\"rsstitle\"><a href=\"" + lien + "\">" + title + "</a></div>";
    stringTxt += "<div class=\"rssdescription\">" + description + "</div>";
  } 

  var jslist = document.getElementsByTagName("script");
  var tagTarget = "";
  for (k=0; k<jslist.length; k++) {
    if (jslist[k].getAttribute("src") == "rssreader.js") {
      tagTarget = jslist[k];
      var newDiv = document.createElement('div'); 
      newDiv.setAttribute("id","rsscontent");
      tagTarget.parentNode.insertBefore(newDiv,tagTarget.nextSibling);
      newDiv.innerHTML = "test ..."; 
      break;
    }
  }

  if (document.getElementById("rsscontent")) {
    document.getElementById("rsscontent").innerHTML = stringTxt;
  } else {
   alert("Item not found");
  }
}





