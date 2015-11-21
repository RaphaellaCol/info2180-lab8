window.onload = function(){
    
   var button = document.getElementById("lookup"); 
   var name = document.getElementById("term");
   var check = document.getElementById("all");
   button.addEventListener("click", function(){
       if (check.value == true){
          new Ajax.Request("world.php?all=" + 'true',
          {
              method: "get",
              onSuccess: respond
              
          });
       }else {
           new Ajax.Request("world.php?lookup=" + name.value,
            {
                method: "get",
                onSuccess: find
            });
       }
    });
        function find(data){
             document.getElementById("result").innerHTML = data.responseText;
             //alert(data.responseText);
        }
        function respond() {
          var xhttp, xmlResponse, txt;
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            xmlResponse = xhttp.responseXML;
            txt = "";
            document.getElementById("all").innerHTML = txt;
                    }
               };
 
           }
}



