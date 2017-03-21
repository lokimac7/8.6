function getTriangleArea(a, h) {
	var checked = true;

	if (a > 0 && h > 0) {
		checked = true;
	} else {
		checked = false;
	}
	return checked ? (a * h / 2) : console.log("Nieprawidlowe dane");
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(20, 30),
	triangle3Area = getTriangleArea(2, 40);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);