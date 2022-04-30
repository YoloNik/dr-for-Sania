const params = [
	{main:['счастья','здоровья','не болеть','всего самого самого',
	 'всего наилучшего','чтобы сбылись все мечты',
	 'чтобы все желания исполнились','любви, большой любви',
	 'семейного благополучия','счастья в личной жизни',
	 'радости','богатства','достатка','надежды','успехов',
	 'решения всех проблем','чтобы печали прошли стороной',
	 'горя не знать','только ясных дней, светлых дней','удачи',
	 'победы','добра','веселья, веселого настроения','долгих лет жизни',
	 'светлых чувств','везения во всех делах','преданных друзей',
	 'ярких впечатлений','мирских благ','душевного равновесия',
	 'море позитива']
	},
	
	 {toSee:['Памуккале, Турция','Пещеры Вайтомо, Новая Зеландия',
	 'Озеро Ретба, Сенегал','Драконовые деревья на острове Сокотра, Йемен',
	' Пещера Шондонг, Вьетнам','Солончак Уюни, Боливия','Разноцветные дюны в парке Лассен, США',
	'Гейзер Флай, США','Дорога гигантов, Ирландия']
	},
	
	 {transport:['Парусной лодке Джонка','Амфибусе','Велорикши','Пивном велосипеде',
	'Бамбуковом поезде','Санях Монте Тобогган','Коко-такси','Rolls Royce 103EX']
	},
	
	 {happyWhith:['любимой девушкой','любимым парнем','корманной киской',
	 'милфой','котом','собакой']
	},
	 {mony:[
	 `58000 AZN (азербайджанских манат)`,
	 `63700 BGN (болгарских лев)`,
	 `44000 CAD (канадских долларо)`,
	 `33300 CHF (швейцарских франков)`,
	 `226200 CNY (китайских юань женьминьби)`,
	 `799200 CZK (чешских крон)`,
	 `242500 DKK (датских крон)`,
	 `633100 EGP (египетских фунтов)`,
	 `32600 EUR (Евро)`,
	 `27500 GBP (фунхов стерлингов Велико­британии)`,
	 `268200 HKD (гонконгских долларов)`,
	 `246700 HRK (хорватских кун)`,
	 `12291700 HUF (венгерских форинтов)`,
	 `495392800 IDR (индонезийских рупий)`,
	 `114100 ILS (израильских шекелей)`,
	 `2616800 INR (индийских рупий)`,
	 `4474300 JPY (японских йен)`,
	 `43470700 KRW (южно -корейская вон)`,
	 `15252000 KZT (казахских тенге)`,
	 `631500 MDL (молдовских лей)`,
	 `699300 MXN (мексиканских песо)`,
	 `322900 NOK (норвежская крон)`,
	 `52900 NZD (ново­зеландских) долларов `,
	 `152900 PLN (польских злот)`,
	 `337000 SEK (шведских крон)`,
	 `47400 SGD (сингапурских) долларов`,
	 `34200 USD (долларов США)`,
	 `25500 XDR (СПЗ)`,
	 `545300 ZAR (южно-африканских рэнд)`
	]},
	{doInDota:['нагибать','ебошить',
	 'разьебывать','унижать','доминировать']},
	]

	
	const randomNumberLife = Math.floor(Math.random() * (100 - 50) + 50);
	let randomNumber = Math.floor(Math.random() *params[0].main.length)
	const machInDota = (randomNumberLife * 365 * 24 * 60) / 2
	
	const make_main = params[0].main.filter((el, idx) => {
		if( idx === randomNumber) {
		return document.createElement(`a`)
		
	}
	})

	
	randomNumber = Math.floor(Math.random() *params[1].toSee.length)
	const make_toSee = params[1].toSee.filter((el, idx) => {
		if( idx === randomNumber) {
		return el }
	})
	
	randomNumber = Math.floor(Math.random() *params[2].transport.length)
	const make_transport = params[2].transport.filter((el, idx) => {
		if( idx === randomNumber) {
		return el }
	})
	
	randomNumber = Math.floor(Math.random() *params[3].happyWhith.length)
	const make_happyWhith = params[3].happyWhith.filter((el, idx) => {
		if( idx === randomNumber) {
		return el }
	})
	
	randomNumber = Math.floor(Math.random() *params[4].mony.length)
	const make_mony = params[4].mony.filter((el, idx) => {
		if( idx === randomNumber) {
		return el
	}})
	
	randomNumber = Math.floor(Math.random() *params[5].doInDota.length)
	const make_doInDota = params[5].doInDota.filter((el, idx) => {
		if( idx === randomNumber) {
		return el }
	})
	
	const message1 = `Желаю тебе ${make_main}, 
	увидеть ${make_toSee}, добравшись туда на ${make_transport}. 
	Обрести счастье с ${make_happyWhith}. Зарабатывать минимум ${make_mony} примерно 1 000 000 грн.
	Ну и конечно же ${make_doInDota} на миду)`;

	const message2 =`Минимум ${randomNumberLife} лет.  A это ${randomNumberLife * 365} дней,
или ${randomNumberLife * 365 * 24} часов, или ${randomNumberLife * 365 * 24 * 60} минут,
	ну или ${randomNumberLife * 365 * 24 * 60 * 60} секунд.
	За это время ты можешь успеть ${(randomNumberLife * 365 * 24 * 60 * 60)/ 2.5} раза моргнуть 
	или сыграть ${machInDota} партий в турбо). ` ;

const mainBTN = document.getElementById(`mainEl`)
const mainDiv = document.querySelector("div")

//let btnForNextMessage = document.querySelectorAll(`.counter`)
//	btnForNextMessage.addEventListener(`click`, (event) => {
//	let	createBtn = document.createElement(`button`)
//	createBtn.classList.add(`counter`)
//	createBtn.textContent = `Увидеть`
//	mainDiv.append(createBtn)
// 	counter += 1;
//	if (counter >= 1) {
//mainBTN.setAttribute(`disabled`, true)
//}})

let counter = 0;
const message = [message1, message2]
const onBtnClick = (event, arr) => {
	
	const a = arr.filter((el, idx) => {
		if (idx === counter){
			return el
		}
	})

	let createDiv = document.createElement('div')
	createDiv.textContent = a
	mainDiv.append(createDiv)

	let createHreftosee = document.createElement(`a`)
	createHreftosee.textContent = make_toSee
	createHreftosee.setAttribute(`target`, `blank`)
	createHreftosee.setAttribute(`href`, `https://images.google.com/search?q=${make_toSee}`)
	mainDiv.appendChild(createHreftosee)

	let createHrefGo = document.createElement(`a`)
	createHrefGo.textContent = make_transport
	createHrefGo.setAttribute(`target`, `blank`)
	createHrefGo.setAttribute(`href`, `https://images.google.com/search?q=${make_transport}`)
	mainDiv.appendChild(createHrefGo)


 	let	createBtn = document.createElement(`button`)
	 createBtn.classList.add(`counter`)
	 createBtn.textContent = `Прожить`
	mainDiv.append(createBtn)

	createBtn.addEventListener(`click`,(event, arr) => {
			const message = [message1, message2]
					 const a = message.filter((el, idx) => {
						 if (idx === counter){
							 return el
						 }
					 });
		
		
					 createDiv = document.createElement('div')
					 createDiv.textContent = a
					mainDiv.append(createDiv)
		
		
					let refresh = document.createElement(`button`)
					refresh.textContent = `Поздравить еще`
					mainDiv.append(refresh)
					
					refresh.addEventListener(`click`, (event, arr) => {
						return window.location.reload()
					})
		
					//console.log (counter)

					if (counter <= 1 || counter>=2) {
						createBtn.setAttribute(`disabled`, true)
						}
						counter += 1;
		})


	counter += 1;
	if (counter >= 1) {
mainBTN.setAttribute(`disabled`, true)
}}

mainBTN.addEventListener(`click`,(event) =>{onBtnClick(event, message)})

