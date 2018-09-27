// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// get json data
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    
    // show error
    if(error) {
        
        // do something here
        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];

        // do magic here
        let mainDiv = document.getElementById('container');

        let parkingOverview = document.createElement('div');
        parkingOverview.className = 'parkingOverview';
        mainDiv.appendChild(parkingOverview);

        let parkingInfo = document.createElement('div');
        parkingInfo.className = document.createElement('parkingInfo');
        parkingOverview.appendChild(parkingInfo);

        let parkingName = document.createElement('h2');
        parkingName.className = 'parkingName';
        parkingName.innerHTML = parking.name;
        parkingInfo.appendChild(parkingName);

        let parkingList = document.createElement('ul');
        parkingList.className = 'parkingList';
        parkingInfo.appendChild(parkingList);

        let parkingCapacity = document.createElement('li');
        parkingCapacity.className = 'parkingCapacity';
        parkingCapacity.innerHTML = 'Aantal plaatsen: ' + parking.parkingStatus.totalCapacity;
        parkingList.appendChild(parkingCapacity);

        let parkingAvailable = document.createElement('li');
        parkingAvailable.className = 'parkingAvailable';
        parkingAvailable.innerHTML = 'Momenteel beschikbaar: ' +parking.parkingStatus.availableCapacity;
        parkingList.appendChild(parkingAvailable);
























    }
});

