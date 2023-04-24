const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.dropdown-content');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(userInput) {
	let results = [];

	if(userInput !== "") {
		results = fruit.filter(function(value) {

			if(value.toLowerCase().includes(userInput.toLowerCase())) return true;
			suggestions.style.display = "none";
		});
	}

	return results;
}

function searchHandler() {
	suggestions.innerHTML = "";

	if(input.value === "") suggestions.style.display = "none";

	showSuggestions(search(this.value));
}

function showSuggestions(results) {
	results.forEach(function(value) {
		const newChild = document.createElement('li');

		newChild.innerText = value;

		suggestions.appendChild(newChild);

		if(suggestions.children.length > 0) suggestions.style.display = "block"; 
	})
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);