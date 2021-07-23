// My DECK = ARRAY DI OGGETTI CHE CONTIENE PIù CARTE

// RIFERIMENTO DOM

// CARD OBJECTS

const deck = [
	{
		id: 1,
		name: "Anaba Shaman",
		manaCost: ["3", "R"],
		combinedManaCost: 4,
		cardType: "Creature",
		subType: "Minotaur Shaman",
		expansion: {
			reprintId: 9,
			name: "Ninth Edition",
			rarity: "Common",
			collectionNr: "177/350 ",
		},

		flavorText: {
			quote: "Just try taking this bull by the horns.",
			author: "",
		},
		abilities: [
			{
				launchCost: ["R", "T"],
				description:
					"Anaba Shaman deals 1 damage to target creature or player.",
			},
		],
		illustration: {
			id: 1,
			author: "Simon Bisley",
			image: "./img/Onatah.jpg",
		},
		constitution: 2,
		strength: 2,
		borderColor: "#000",
		background: {
			color: "red",
			source: "./img/background.jpg",
		},
	},
	{
		id: 2,
		name: "Krosan Cloudscraper",
		manaCost: ["7", "G", "G", "G"],
		combinedManaCost: 4,
		cardType: "Creature",
		subType: "Beast Mutant",
		expansion: {
			reprintId: 9,
			name: 'Time Spiral "Timeshifted"',
			rarity: "Special",
			collectionNr: "82/350 ",
		},

		flavorText: {
			quote: "",
			author: "",
		},
		abilities: [
			{
				launchCost: ["G", "G"],
				description:
					"at the beginning of your unkeep, sacrifice Krosan Cloudscraper unless you pay.",
			},
			{
				launchCost: ["7", "G", "G"],
				description:
					"You may play this face down as a 2/2 creature for 3. Turn it face up any time for its morph cost.",
			},
		],
		illustration: {
			id: 2,
			author: "Ron Spears",
			image: "./img/Cloudscraper.jpg",
		},
		constitution: 13,
		strength: 13,
		borderColor: "#000",
		background: {
			color: "green",
			source: "./img/background.jpg",
		},
	},
];

console.log(deck);

// CREIAMO IL TEMPLATE DI OGNI CARTA

const setCardTemplate = (card) => {
	const subType = card.subType ? `- ${card.subType}` : "";
	const Author = card.flavorText.author
		? `${card.flavorText.author}`
		: `<em>none</em>`;
	let abilitiesContent = `<em>none</em>`;
	if (card.abilities.length > 0) {
		abilitiesContent = "<ul>";
		for (let i = 0; i < card.abilities.length; i++) {
			currentAbility = card.abilities[i];
			abilitiesContent += `<li><strong>Ability description:</strong> ${currentAbility.description}</li>`;
			abilitiesContent += `<li><strong>Launch cost:</strong> ${currentAbility.launchCost.join(
				" "
			)}</li>`;
		}
		abilitiesContent += "</ul>";
	}
	console.log(abilitiesContent);

	const cardTemplate = `
	<div class="col single-card">
	<ul>
	<img src="${card.illustration.image}" alt="" class='py-3'>
	<li><strong>Id:</strong> ${card.id}</li>
	<li><strong>Name:</strong> ${card.name}</li>
	<li><strong>Mana cost:</strong> ${card.manaCost.join(" ")}</li>
	<li><strong>Total mana cost:</strong> ${card.combinedManaCost}</li>
	<li><strong>Card type:</strong> ${card.cardType} ${subType}</li>
	<li><strong>Reprint Id:</strong> ${card.expansion.reprintId}</li>
	<li><strong>Exspansion name:</strong> ${card.expansion.name}</li>
	<li><strong>Rarity:</strong> ${card.expansion.rarity}</li>
	<li><strong>collectionNr:</strong> ${card.expansion.collectionNr}</li>
	<li><strong>Text description:</strong> ${card.flavorText.quote}</li>
	<li><strong>Author:</strong> ${Author}</li>
	<li><strong>Abilities:</strong> ${abilitiesContent}</li>
	<li><strong>Id illustration:</strong> ${card.illustration.id}</li>
	<li><strong>Author illustration:</strong> ${card.illustration.author}</li>
	<li><strong>Constitution Points:</strong> ${card.constitution}</li>
	<li><strong>Strength Points:</strong> ${card.strenght}</li>
	<li><strong>Card color:</strong> ${card.borderColor}</li>
	<li><strong>Background color:</strong> ${card.background.color}</li>
	</ul>
	</div>
	`;
	return cardTemplate;
};

// RENDER DECK

const printDeck = (deck, targetElement) => {
	let deckTemplate = "";
	for (let i = 0; i < deck.length; i++) {
		const currentCard = deck[i];
		deckTemplate += setCardTemplate(currentCard);
	}

	targetElement.innerHTML = deckTemplate;
};

const cardSection = document.getElementById("cards");
printDeck(deck, cardSection);

// FILTER LOGIC

const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

// intercetto cambiamento tendina

selectField.addEventListener("change", () => {
	const currentValue = selectField.nodeValue;

	if (currentValue !== "all") {
		inputField.classList.remove("hidden"); // AGGIUNGERE CLASSE HIDDEN ALLA SEARCH SECTION
	} else {
		inputField.classList.add("hidden");
	}
});

button.addEventListener("click", () => {
	const inputValue = inputField.Value;
	const selectValue = selectField.Value;

	if (selectValue === "all") {
		printDeck(deck, cardSection);
		return;
	}

	const filteredDeck = [];

	for (let i = 0; i < deck.length; i++) {
		const currentCard = deck[i];

		switch (selectValue) {
			case "id":
			case "constitution":
			case "strength":
			case "combinedManaCost":
				if (currentCard[selectedValue] == inputValue) {
					filteredDeck.push(currentCard);
				}
				break;
			case "flavorText-author":
				if (currentCard.flavorText.author.includes(inputValue)) {
					filteredDeck.push(currentCard);
				}
				break;
			case "flavorText-quote":
				if (currentCard.flavorText.quote.includes(inputValue)) {
					filteredDeck.push(currentCard);
				}
				break;
		}
	}
	console.log(filteredDeck);
	console.log(deck);
	printDeck(filteredDeck, cardSection);
});
