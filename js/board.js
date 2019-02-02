var baseUrl = 'https://cors-anywhere.herokuapp.com/https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3690',
    'X-Auth-Token': '87f9590e352f2ce8816a13c117d3ff44'
}
var board = {
    name: 'Kanban Board',
    addColumn: function(column) {
        this.element.appendChild(column.element);
    },
    element: document.querySelector('#board .column-container')
};


document.querySelector('#board .create-column').addEventListener('click', function() {
    var name = prompt('Enter a column name');
    var data = new FormData();

    data.append('name', name);

    fetch(baseUrl + '/column', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            var column = new Column(resp.id, name);
            board.addColumn(column);
        });
});