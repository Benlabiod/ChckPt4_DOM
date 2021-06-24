let iconLike1 = document.querySelector("#iconLike1");
let iconLike2 = document.querySelector("#iconLike2");
let iconLike3 = document.querySelector("#iconLike3");

const btnAdd1 = document.querySelector("#add1");
const btnAdd2 = document.querySelector("#add2");
const btnAdd3 = document.querySelector("#add3");

const btnMinus1 = document.querySelector("#minus1");
const btnMinus2 = document.querySelector("#minus2");
const btnMinus3 = document.querySelector("#minus3");

var count1 = parseInt(compteur1.innerText);
var count2 = parseInt(compteur2.innerText);
var count3 = parseInt(compteur3.innerText);

const price1 = parseInt(document.getElementById("price1").innerText);
const price2 = parseInt(document.getElementById("price2").innerText);
const price3 = parseInt(document.getElementById("price3").innerText);

iconLike1.addEventListener("click", () => {
	if (iconLike1.style.color == "blue") {
		iconLike1.style.color = "black";
	} else {
		iconLike1.style.color = "blue";
	}
});

iconLike2.addEventListener("click", () => {
	if (iconLike2.style.color == "blue") {
		iconLike2.style.color = "black";
	} else {
		iconLike2.style.color = "blue";
	}
});

iconLike3.addEventListener("click", () => {
	if (iconLike3.style.color == "blue") {
		iconLike3.style.color = "black";
	} else {
		iconLike3.style.color = "blue";
	}
});

const calcSubSum1 = () => {
	let sousTotal1 = count1 * price1;
	return sousTotal1;
};

btnAdd1.addEventListener("click", () => {
	count1 = count1 + 1;
	compteur1.innerHTML = count1;
	document.getElementById("subSum1").value = calcSubSum1();
	console.log(document.getElementById("subSum1").value);
});

btnMinus1.addEventListener("click", () => {
	if (count1 !== 0) {
		count1 = count1 - 1;
		compteur1.innerHTML = count1;
	}
});

// document.getElementById("subSum1").value = calcSubSum1();
