//Api Kodilla


var baseUrl = 'https://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3690',
    'X-Auth-Token': '87f9590e352f2ce8816a13c117d3ff44'
};



function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}




fetch(baseUrl + '/board', { headers: myHeaders })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(resp) {
        setupColumns(resp.columns);
    });



function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);

    });
}

function setupCards(col, cards) {
    cards.forEach(function(card) {
        var cardObj = new Card(card.id, card.name);
        col.addCard(cardObj);
    });
}