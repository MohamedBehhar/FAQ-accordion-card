const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
	const btn		= question.querySelector('.qst-btn');
	const arrow		= question.querySelector('.arrow');
	const header	= question.querySelector('.header');
	const openAnswer = question.querySelector('.answer');

	btn.addEventListener('click', function(){
			openAnswer.classList.toggle('show-answer');
			arrow.classList.toggle('rotate-arrow');
			header.classList.toggle('header-bold');
	})
})