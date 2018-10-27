let url = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json#';
let available = [];
let total = [];
let percent;


function fetchParkingData() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    
        for(let i = 0; i < data.length; i++) {
            let parkingData = {
                name: data[i].name,
                totalCapacity: data[i].parkingStatus.totalCapacity,
                availableCapacity: data[i].parkingStatus.availableCapacity,
            }
    
            let mainDiv = document.getElementById('mainDiv');
            let parkingDiv = document.createElement('div');
            parkingDiv.className = 'parking-div';
            let name = document.createElement('h2');
            let totalCapacity = document.createElement('h3');
            let availableCapacity = document.createElement('h4');
            let indicator = document.createElement('p');
            
            name.innerHTML = parkingData.name;
            totalCapacity.innerHTML = 'Capaciteit: ' + parkingData.totalCapacity;
            availableCapacity.innerHTML = 'Beschikbaar: ' + parkingData.availableCapacity;
            if(availableCapacity )
    
            mainDiv.appendChild(parkingDiv);
            parkingDiv.appendChild(name);
            parkingDiv.appendChild(totalCapacity);
            parkingDiv.appendChild(availableCapacity);
            
            percent =  Math.floor(parkingData.availableCapacity / parkingData.totalCapacity * 100);
            console.log(percent);
    
            if(percent < 20) {
                parkingDiv.style.backgroundColor = 'red';
            } if(percent >= 20 && percent <= 50) {
                parkingDiv.style.backgroundColor = 'orange';
            } if(percent > 50) {
                parkingDiv.style.backgroundColor = 'green';
            }


        };
    
    })
    .catch(function(error) {
        // error handling
        parkingDiv.innerHTML = 'Data could not be fetched';
    });
}

fetchParkingData();

// setTimeout(function(){
//     window.location.reload(1);
//  }, 5000);






