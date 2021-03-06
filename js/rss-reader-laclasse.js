var RSSRequestObject = false; // XMLHttpRequest Object

var Backend = 'http://www.laclasse.com/v2/cache/rss/index-141-10.rss';
//var Backend = '../rsslaclasse.xml';
window.setInterval("update_timer()", 1200000); // update the data every 20 mins


if (window.XMLHttpRequest) // try to create XMLHttpRequest
	RSSRequestObject = new XMLHttpRequest();

if (window.ActiveXObject)	// if ActiveXObject use the Microsoft.XMLHTTP
	RSSRequestObject = new ActiveXObject("Microsoft.XMLHTTP");


/*
* onreadystatechange function
*/
function ReqChange() {

	// If data received correctly
	if (RSSRequestObject.readyState==4) {
	
		// if data is valid
		if (RSSRequestObject.responseText.indexOf('invalid') == -1) 
		{ 	
			// Parsing RSS
			var node = RSSRequestObject.responseXML.documentElement; 
			
			
			// Get Channel information
			var channel = node.getElementsByTagName('channel').item(0);
			var title = channel.getElementsByTagName('title').item(0).firstChild.data;
			var link = channel.getElementsByTagName('link').item(0).firstChild.data;
			var description = channel.getElementsByTagName('description').item(0).firstChild.data;
			
			<!--content = '<div class="channeltitle"><a href="'+link+'">'+title+'</a></div><ul>';-->
			content = '';
		
			// Browse items
			var items = channel.getElementsByTagName('item');
			for (var n=0; n < items.length; n++)
			{
				var itemTitle = items[n].getElementsByTagName('title').item(0).firstChild.data;
				var itemLink = items[n].getElementsByTagName('link').item(0).firstChild.data;
				var itemDescription = items[n].getElementsByTagName('description').item(0).firstChild.data;
				try 
				{ 
					var itemPubDate = '['+items[n].getElementsByTagName('pubDate').item(0).firstChild.data+'] ';
				} 
				catch (e) 
				{ 
					var itemPubDate = '';
				}
				
			
				content += '<h4 class="couleur">'+itemTitle+'</h4><p>'+itemDescription+'<p><a href="'+itemLink+'&TB_iframe=true&height=630&width=980" target="_blank">Lire la suite</a>';
			}
			
			
			<!--content += '</ul>';-->
			// Display the result
			document.getElementById("ajaxreader").innerHTML = content;

			// Tell the reader the everything is done
			document.getElementById("status").innerHTML = "Done.";
			
		}
		else {
			// Tell the reader that there was error requesting data
			document.getElementById("status").innerHTML = "<div class=error>Error requesting data.<div>";
		}
		
		HideShow('status');
	}
	
}

/*
* Main AJAX RSS reader request
*/
function RSSRequest() {

	// change the status to requesting data
	HideShow('status');
	document.getElementById("status").innerHTML = "Requesting data ...";
	
	// Prepare the request
	RSSRequestObject.open("GET", Backend , true);
	// Set the onreadystatechange function
	RSSRequestObject.onreadystatechange = ReqChange;
	// Send
	RSSRequestObject.send(null); 
}

/*
* Timer
*/
function update_timer() {
	RSSRequest();
}


function HideShow(id){
	var el = GetObject(id);
	if(el.style.display=="none")
	el.style.display='';
	else
	el.style.display='none';
}

function GetObject(id){
	var el = document.getElementById(id);
	return(el);
}

