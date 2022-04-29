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
	
	 {transport:['парусной лодке джонка','амфибусе','велорикши','пивном велосипеде',
	'бамбуковом поезде','санях Монте Тобогган','коко-такси','Rolls Royce 103EX']
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
	 `12291700HUF (венгерских форинтов)`,
	 `495392800 IDR (индонезийских рупий)`,
	 `114100 ILS (израильских шекелей)`,
	 `2616800 INR (индийских рупий)`,
	 `4474300JPY (японских йен)`,
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
	 `545300ZAR (южно-африканских рэнд)`
	]},
	{doInDota:['нагибать','сосать','посасывать','ебошить',
	 'разьебывать','унижать','доминировать']},
	]
	
	
	const randomNumberLife = Math.floor(Math.random() *100);
	let randomNumber = Math.floor(Math.random() *params[0].main.length)
	
	const make_main = params[0].main.filter((el, idx) => {
		if( idx === randomNumber) {
		return el }
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
	
	const message1 = `C ДНЕМ РОЖДЕНИЯ. Желаю тебе ${make_main},`
	const message2 =`Увидеть ${make_toSee},`
	const message3 =`добравшись туда на ${make_transport}.`
	const message4 =`Обрести счастье с ${make_happyWhith},`
	const message5 =`Зарабатывать минимум ${make_mony} (примерно 1 000 000 грн),`
	const message6 =`Конечно же ${make_doInDota} на миду)`
	const message7 =`Прожить минимум ${randomNumberLife} лет, а это ${randomNumberLife * 365} дней,
или ${randomNumberLife * 365 * 24} часов, или ${randomNumberLife * 365 * 24 * 60} минут,
	ну или ${randomNumberLife * 365 * 24 * 60 * 60} секунд.`
	const message8 =	`За это время ты можешь успеть ${(randomNumberLife * 365 * 24 * 60 * 60)/ 2.5} раза моргнуть `
	const message9 =`или сыграть ${(randomNumberLife * 365 * 24 * 60) / 2} партий в турбо)`;

const mainBTN = document.getElementById(`mainEl`)
const mainDiv = document.querySelector("div")

//console.log(mainDiv)

let counter = 0;


const message = [message1, message2, message3, message4, message5, message6, message7, message8, message9 ]



const onBtnClick = (event, arr) => {
	
	const a = arr.filter((el, idx) => {
		if (idx === counter){
			return el
		}
	})

	let newDiv = document.createElement('div')
	newDiv.textContent = a
	newDiv = mainDiv.append(newDiv)


	let btnForNextMessage = document.createElement(`button`)
	btnForNextMessage.textContent = `Увидеть`
	mainDiv.append(btnForNextMessage)
	

	btnForNextMessage.addEventListener(`click`,(event, arr) => {
		const message = [message1, message2, message3, message4, message5, message6, message7, message8, message9]
	 			const s = message.filter((el, idx) => {
	 				if (idx === counter){
	 					return el
	 				}
	 			});


				newDiv = document.createElement('div')
				newDiv.textContent = s
				newDiv = mainDiv.append(newDiv)


				let btnForNextMessage = document.createElement(`button`)
				btnForNextMessage.textContent = `Увидеть`
				mainDiv.append(btnForNextMessage)
				
				if (counter >= 1) {
					btnForNextMessage.setAttribute(`disabled`, true)
					}
						counter += 1;
	})

	if (counter >= 0) {
mainBTN.setAttribute(`disabled`, true)
}
	counter += 1;
}

mainBTN.addEventListener(`click`,(event) =>{onBtnClick(event, message)})

//onBtnClick(event,message)