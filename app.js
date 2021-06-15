const openBtn = document.querySelectorAll(".show-ans");
const answers = document.querySelectorAll(".answer");

const hideAnswer = function () {
	for (let ans of answers) {
		ans.classList.add("hide");
	}
};

//SHOW ANSWER
for (let btn of openBtn) {
	btn.addEventListener("click", function (e) {
		hideAnswer();
		let target = e.currentTarget;
		let a = target.nextElementSibling;
		console.log(a);
		a.classList.toggle("hide");
		console.log(a);
	});
}
