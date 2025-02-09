console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============
	// 1. create a section tag with an id of middle-earth
function makeMiddleEarth() {
	const middleEarth = document.createElement('selection')
	middleEarth.setAttribute('id', "middle-earth")
	

	// 2. use a for loop to iterate over the lands array that does the following:
}for (let i = 0; i < lands.length; i++) {
	const land = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
	land.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
	const landName = document.createElement('h1')
	landName.innerText = lands[i]
	land.appendChild(landName)

	//  2d. appends each land to the middle-earth section
	middleEarth.appendChild(land)
	// 3. append the section to the body of the DOM.
	const body = document.querySelector('body')
	body.appendChild(middleEarth)
	makeMiddleEarth()

}
console.log(makeMiddleEarth)
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const theShire = document.getElementById('The-Shire')
	const hobbit = document.createElement('ul')
	// give each hobbit a class of `hobbit`
	for (i =1; i<hobbits.length; i++){
		const listI = document.createElement('li')
		const hobbitName = hobbits[i]
		listI.append(hobbitName)
		listI.classList.add('hobbit')
		hobbits.appendChild(listI)
	}
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const divRing = document.createElement('div')
	divRing.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	divRing.setAttribute('class', 'magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
const mordor = document.getElementById('Mordor')
const ul = document.createElement('ul')
	// give each of the baddies a class of "baddy"
for ( i = 0; i < baddies.length; i++) {
		document.createElement('li')
		document.setAttribute('class', 'baddy')
}
	// i.className = baddies[i]
	// remember to append them to Mordor
	mordor.appendChild(ul)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
const aside = document.createElement('tag')
	// put an `unordered list` of the `'buddies'` in the aside
const buddies = document.createElement('ul')
for (i = 0; i < buddies.length; i++) {
	const newBuddies = document.createElement('li')
	newBuddies.innerText = buddies[i]
	buddies.appendChild(newBuddies)

}
	// insert your aside as a child element of `rivendell`
	const theRivendell = document.getElementById('#Rivendell')
	theRivendell.appendChild(aside)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const theShire = document.getElementById('The-Shire')
	const theRivendell = document.getElementById('Rivendell')
	theRivendell.appendChild(hobbits)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
const name =document.getElementById('Strider')
name.innerText = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const newDiv = document.createElement('div')
	newDiv.id = 'the-fellowship'
		const rivendell = document.getElementById('Rivendell')
		rivendell.appendChild(newDiv)
		const hobbit = document.getElementById('hobbits')
		const buddy = document.getElementById('buddies')
		newDiv.appendChild(hobbit, buddy)
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const gan =document.getElementById('Gandalf')
	gan.innerText = ('Gandalf the White')
	gan.style.background = 'white'
	gan.style.borderColor = 'grey'
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert('the horn of gondor has been blown. BOromors been killed by the Urik-hai!')
	const boro = document.getElementById('Boromir')
	boro.remove()
		
		
		
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	const frodoSam = document.getElementById('Frodo')
	cosnt samFrodo = document.getElementById('Sam')
	const mordor = document.getElementById('Mordor')
	mordor.appendChild('Frodo')
	mordor.appendChild('Sam')
	 const div = document.createElement('div')
	 div.id = "mount-doom"
	 mordor.appendChild(div)




	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	const mordor1 = document.getElementById('Mordor') 
		const gollum3 = document.createElement('div')
		div.id = "gollum"
		gollum3.appendChild(div)
			
		
}
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	const gollum = document.getElementById("Gollum")
	gollum.remove()
	const hobbit = document.getElementById('hobbits')
	The-Shire.appendChild(hobbits)
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
