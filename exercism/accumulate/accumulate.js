function accumulate(arr, acc) {
	return arr.map(function (num) {
		return acc(num);
	});
}
module.exports = accumulate