const myPosition = [navigator.geolocation.getCurrentPosition(position => console.log(position.coords.latitude)), navigator.geolocation.getCurrentPosition(position => console.log(position.coords.longitude))]

const friendsPositions = [[40.779437,-73.963244],[40.738527,-74.005363],[40.729975,-73.980926]]

function findClosestFriend(friendsPositions, myPosition) {
	
}