// RIFERIMENTO DOM

const cardSection = document.getElementById("cards");

// CARD OBJECTS

const card = {
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
			description: "Anaba Shaman deals 1 damage to target creature or player.",
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
};

console.log(card);

// STAMPA

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
	<ul>
	<img src="${card.illustration.image}" alt="" class='py-3'>
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
	`;
	return cardTemplate;
};

cardTemplate = setCardTemplate(card);
cardSection.innerHTML = cardTemplate;
