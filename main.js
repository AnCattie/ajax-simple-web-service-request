function quote() {
  xhr = new XMLHttpRequest(); // new XML request object
  xhr.open("GET", "https://thatsthespir.it/api", true); // request van webserver vragen
  xhr.onload = function(){ 
    if (this.status == 200){ // als data van website volledig geladen is, doe het volgende.
      let json = JSON.parse(this.responseText);
      console.log(json); // data van de webserver
      document.getElementById("empty").innerHTML = json.quote;
      document.getElementById("author").innerHTML = json.author;
      }
      else if (state == 404)
      document.getElementById('empty').innerHTML = 'Not Found';
    }
  xhr.send() // send request
}

