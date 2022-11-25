const questions = [
	{
		question: "В каком варианте ответа пропущена одна буква И? A.Ед...ный Б.Глянц...вый В.Обидч...вый Г. Будн...чный",
		answers: ["А, Б, Г", "А, Б, В", "В,Г", "А, В, Г"],
		correct: 4,
	},
	{
		question: "В каком слове на месте прпуска пишется буква Е?",
		answers: [
			"Ове...ла",
			"Отта...в",
			"Ускор...вшийся",
			"Оштукатур...нный",
		],
		correct: 4,
	},
	{
		question: "В каком варианте ответа выделенное слово употребленно неверно?",
		answers: [
			"ГУМАННЫЕ законы возможны только в зрелом обществе",
			"Со временем ВОДНАЯ поверхность озера становится зеленоватой или красноватой, потому что в ней поселяются множество клеток микроводорослей",
			"Литература - ВЕЛИКОЕ достояние народа",
			"Марина Васильевна очень волновалась, но всё же прислушались к советам мудрой и ПРАКТИЧЕСКОЙ своей подруги",
		],
		correct: 4,
	},
	{
		question: "В каком варианте ответа указаны все цифры, на месте которых пишется буква Е? Люди, проживающие н(1)подалёку от истоков маленьких речушек с н(2)понятными, н(3)кем н(4) разгаданными названиями, оберегали эти родники, огораживая их, как колодцы?",
		answers: ["1,2,4", "2,3,4", "3,2,1", "4,1,3"],
		correct: 1,
	},
	{
		question: "Из предложений выпишите слово, образованное приставочно-суффиксальным способом? Воду берегли строго, чтобы хватило на обратную дорогу. Начав путь в тридцатиградусную жару, вскоре с удовольствием натянули на себя теплые куртки. До облаков чуть ли уже не руками доставали",
		answers: [
			"начав",
			"натянули",
			"вскоре",
			"тридцатиградусную",
		],
		correct: 3,
	},
	{
		question: "Найдите предложение с обособленным дополнением?",
		answers: [
			"Мы с вами попутчики, кажется?",
			"Поезд мчит меня к счастью",
			"Сверх всяких ожиданий, весь октябрь стояла сухая и теплая погода",
			"Одним словом, жизнь расцветает",
		],
		correct: 3,
	},
	{
		question: "В каком варианте ответа правильно указаны все цифры, на месте которых пишется одну буква Н? Но головка птенца, его глаза, вынесе(1)ые к затылку, розовый клюв - ничто как будто не выражало никакого беспокойства: головка была всё так же обиже(2)о опиуще(3)а, глаза с равнодушием полирова(4)ого камня смотрели на мир",
		answers: [
			"1,2",
			"1,3",
			"3",
			"4",
		],
		correct: 3,
	},
	{
		question: "В каком слове верно выделена буква, обозначающая ударный гласный звук?",
		answers: [
			"стАтуя",
			"щАвель",
			"мИзерный",
			"газопрОвод",
		],
		correct: 1,
	},
	{
		question: "Укажите правильное объяснение постановки запятой или её отсутствия в предложении: В расселине, скорчившись, лежала Гурвич( ) и из-под прожженной юбки косо торчали грубые кирзовые сапоги",
		answers: [
			"Сложносочинённое предложение, перед союзом И нужна запятая",
			"Простое предложение с однородными членами, перед союзом И запятая не нужна",
			"Простое предложение с однородными членами, перед союзом И нужна запятая",
			"Сложносочинённое предложение, перед союзом И запятая не нужна",
		],
		correct: 1,
	},
	{
		question: "Частица НЕ пишется раздельно со всеми словами в ряду",
		answers: [
			"он (не)богат; (не)готов к работе",
			"(не)довыполнить; (не)каждый",
			"(не)открыт; (не)пора ли заканчивать (правильный ответ)",
			"(не)простой, но красивый узор; (не)смотря на усталость",
		],
		correct: 3,
	},
	{
		question: "Укажите правильную морфологическую характеристику слова ЗАБРОШЕНА из предложения Он знал, что половина земель здесь заброшена и негодня для сельского хозяйства из-за оврагов",
		answers: [
			"краткое прилагательное",
			"кратное причастие",
			"глагол",
			"наречие",
		],
		correct: 2,
	},
	{
		question: "Укажите пример с ошибкой образовании формы слова",
		answers: [
			"новые паспорта",
			"у древних болгар",
			"менее удобнее",
			"к пятому января",
		],
		correct: 3,
	},
	{
		question: "Укажите верную характеристику предложения. Опасность попасться на глаза патрулю была уже позади, и теперь можно было спокойно шлепать босыми ногами по холодной до боли росе, забросив связанные ушками сапоги за спину",
		answers: [
			"сложное предложение с сочинительной и бессоюзной связью",
			"сложносочиненное предложение",
			"простое осложненное предложение",
			"бессоюзное предложение",
		],
		correct: 2,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
// Переменные теста
let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion(){

	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	
	headerContainer.innerHTML = title;
	
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']){
		const questionTemplate = 
		`<li>
			<label>
				<input value="%number%" type="radio" class="answer" name="answer" />
				<span>%answer%</span>
			</label>
		</li>`

		const answerHTML = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);

		listContainer.innerHTML += answerHTML;
		answerNumber++;
	}
} 

function checkAnswer(){
	console.log('checkAnswer started!');

	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	if (!checkedRadio){
		submitBtn.blur();
		return
	}
	const userAnswer = parseInt(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']){
		score++;
		
	}
	console.log('score = ', score);

	if (questionIndex !== questions.length - 1){
		console.log('Это не последний вопрос');
		questionIndex++;
		clearPage();
		showQuestion();
		return;
	} else {
		console.log('Это последний вопрос');
		clearPage();
		showResults();
	}
}
function showResults ()  {
	console.log('showResults started!');
	console.log(score);

	const resultsTemplate = `
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`; 

	let	title, message;
	if (score === questions.length){
		title = ' Поздравляем !';
		message = 'Ваша мудрость не знает границ, короли склоняются перед вашей волей';
	} else if ((score * 100)/questions.length >=50) {
		title = 'Средний результат, поднажмите !';
		message = 'Мы проанализирвали ваш уровень знаний, и подготовили для вас рекомендуемые темы для закрепления материала, нажмите, чтобы перейти по ССЫЛКЕ';
	} else {
		title = 'Ваш результат ниже среднего';
		message = 'Рекомендуется начать с азов для понимания тем, мы подготовили для вас систему полезны ресурсов, начнём !';
	}
	let result = `${score} из ${questions.length}`;

	const finalMessage = resultsTemplate.replace('%title%', title).replace('%message%', message).replace('%result%', result)

	headerContainer.innerHTML = finalMessage;
}	




