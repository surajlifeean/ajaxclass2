var xmlHttp=createXmlHttpRequestObject();
//object helps to communicate with the server
function createXmlHttpRequestObject(){
	var xmlHttp;
	if(window.ActiveXObject){  
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{ xmlHttp = false;
		}
	}else{
			try{
				xmlHttp = new XMLHttpRequest();
			        }
			catch(e){
				xmlHttp = false;
			         }
		        }
		if(!xmlHttp)
          alert("can not create object hoss");
       else
       	{
       		return xmlHttp;
       		
       	}

	  }                  
	function process()
		{
       if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
       {
         food=encodeURIComponent(document.getElementById("food").value);
         alert (food);
         xmlHttp.open("GET","foodstore.php?food"+food,true);
         xmlHttp.onreadystatechange = handleServerResponse;
         xmlHttp.send(null);
       }
       	else
       	{
           setTimeout('process()',1000);
       	}

	}
	function handleServerResponse(){
		if(xmlHttp.readyState==4)
		{
			if(xmlHttp.status==200)
			{  //communication session is ok
                 xmlResponse = xmlHttp.responseXML;
                 xmlDocumentElement=xmlResponse.documentElement;
                 
                 message = xmlDocumentElement.firstChild.data;
                 alert (message);
                 document.getElementById("wehave").innerHTML='<span style="color:blue">'+message+'</span>';

			     setTimeout('process()',5000);
			}
			else
			{
				alert('something went wrong!');
			}
		}
	}
