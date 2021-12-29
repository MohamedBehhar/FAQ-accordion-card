const questions = document.querySelectorAll(".question");
const answer	= document.querySelectorAll('.answer');
const arrow		= document.querySelectorAll('.arrow');


// questions.forEach((question) => {
// 	const btns
// })

questions.forEach(function(question){
	const btn		= question.querySelector('.qst-btn');
	const arrow		= question.querySelector('.arrow');
	const header	= question.querySelector('.header');
	const openAnswer = question.querySelector('.answer');

	btn.addEventListener('click', function(){
		answer.forEach((item) =>{
			console.log(question.lastElementChild);
			// // console.log(item);
			// if (question.lastElementChild !== item)
			// {
			// 	item.classList.remove('show-answer')
			// 	arrow.classList.remove('rotate-arrow');
			// 	header.classList.remove('header-bold');
			// }
			question.lastElementChild.classList.toggle('show-answer');
			arrow.classList.toggle('rotate-arrow');
			header.classList.toggle('header-bold');
		})
	})
})