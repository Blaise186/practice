document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#spinner").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#spinner").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
        };

        if (!navigator.geolocation) {
          throw new Error("No Geolocation Available");
          }
          
          function succes(pos){
          
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          <a href="https://www.openstreetmap.org/map=16/$(lat)/$(lng)">Your current positon: latitude: $(lat), longitude: $(lng)</a>
          ;
          
          document.getElementById('output').innerHTML = markup;
          }
          navigator.geolocation.getCurrentPosition(success, error, options);
          