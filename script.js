let menuBtn = document.getElementById('menuBtn');
let sideNav = document.getElementById('sideNav');
let menu = document.getElementById('menu');
sideNav.style.right == '-250px'
menuBtn.onclick = function () {
	if (sideNav.style.right == '-250px') {

		sideNav.style.right = '0px';
		menu.src = "images/close.png"
	}
	else {
		sideNav.style.right = '-250px';
		menu.src = "images/menu.png";
	}
}
// let greet = (name, owner) => {return (name == owner)? "Hello boss":"Hello guest"};
// function filte(arr){
// 	let evens = [];
// 	arr.forEach(ar => {
// 		if(ar % 2 == 0)
// 			evens.push(ar)
// 	}
// 	)
// 	return evens;

// }
// console.log(filte( [1, 2, 3, 4, 5, 6]));