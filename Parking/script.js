let url = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json#';
let percent;
let mainDiv = document.getElementById('mainDiv');
let oldData = [];

function fetchParkingData() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    
        mainDiv.innerHTML = "";
        for(let i = 0; i < data.length; i++) {

            let parkingData = {
                name: data[i].name,
                totalCapacity: data[i].parkingStatus.totalCapacity,
                availableCapacity: data[i].parkingStatus.availableCapacity,
            }

            oldData.push(parkingData.availableCapacity);

            let parkingDiv = document.createElement('div');
                parkingDiv.className = 'parking-div';
            let name = document.createElement('h2');
            let totalCapacity = document.createElement('h3');
            let availableCapacity = document.createElement('h4');
            let indicator = document.createElement('p');

            name.innerHTML = parkingData.name;
            totalCapacity.innerHTML = 'Capaciteit: ' + parkingData.totalCapacity;
            availableCapacity.innerHTML = 'Beschikbaar: ' + parkingData.availableCapacity;
    
            mainDiv.appendChild(parkingDiv);
            parkingDiv.appendChild(name);
            parkingDiv.appendChild(totalCapacity);
            parkingDiv.appendChild(availableCapacity);
            parkingDiv.appendChild(indicator);
            
            percent =  Math.floor(parkingData.availableCapacity / parkingData.totalCapacity * 100);
    
            // Change backgroundcolor to indicate availability
            if(percent < 20) {
                parkingDiv.style.backgroundColor = 'red';
            } if(percent >= 20 && percent <= 50) {
                parkingDiv.style.backgroundColor = 'orange';
            } if(percent > 50) {
                parkingDiv.style.backgroundColor = 'green';
            }

            if(localStorage.getItem('oldData') != null) {
                for(let i = 0; i < oldData.length; i++) {
                    if(oldData[i] > parkingData.availableCapacity) {
                        indicator.innerHTML = '<i class="fas fa-arrow-down"></i>';
                    } if(oldData[i] < parkingData.availableCapacity) {
                        indicator.innerHTML = '<i class="fas fa-arrow-up"></i>'; 
                    } if(oldData[i] == parkingData) {
                        indicator.innerHTML = '<i class="fas fa-equals"></i>';
                    } 
                }
            }

        };
        localStorage.setItem('oldData', oldData.toString());

    })

    .catch(function(error) {
        // error handling
        parkingDiv.innerHTML = 'Data could not be fetched';
    });
}

fetchParkingData();
setInterval(fetchParkingData, 1000);

let clearStorage = document.getElementById('clearStorage');
clearStorage.addEventListener('click', clearIt);
function clearIt() {
    localStorage.clear();
}