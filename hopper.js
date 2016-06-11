var win = false;
var hops = 0;

// hopper([1, 0], 0);
// hopper([2, 9, 0], 0);
// hopper([2, 0, 1, 4, 5], 0);
// hopper([2, 4, 1, 0, 5], 0);
// hopper([2, 0, 1, 2, 1], 4);


// hopper([2, 0, 1, 1, 1], 4);
// hopper([2, 3, 1, 2, 1, 0, 2], 0);
// hopper([1, 5, 4, 1, 0, 3, 3, 1, 3, 1, 2, 1, 1], 0);
// hopper([2, 2, 3, 1, 0, 3, 2], 0);  /** fail case **/
hopper(genRandomArray(), 0) /** random, because it's fun! **/

console.log(win);

//move right or left in an array until you reach zero
function hopper(arr, index) {
	var distance = arr[index];
	var left = arr[index - distance];
	var right = arr[index + distance];

	if(left === 0 || right === 0) {
		win = true;
		return;
	} else if ((!left && !right) || (hops > arr.length)) {
		return;
	} else {
		hops++;
		index += (left) ? -distance : distance;
		hopper(arr, index);
	}
}

function genRandomArray() {
	var max = 20;
	var min = 1;
	var arr = new Array(genRandomInt(min, max));
	var length = arr.length;

	for(var i = 0; i < length; i++) {
		arr[i] = genRandomInt(1, 5);
	}

	arr[genRandomInt(0, arr.length)] = 0;
	console.log(arr)
	return arr;
}

function genRandomInt(min, max) {
	return (Math.floor(Math.random() * (max - min + 1)) + min);
}