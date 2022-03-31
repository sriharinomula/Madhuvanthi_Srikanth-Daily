document.getElementById("submit").addEventListener('click',handleSaveQuery);

function handleSaveQuery(event){
    event.preventDefault();

    if(document.getElementById('name').value === '') return alert("Name shouldn't be empty");
    if(! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value))return alert('Invalid email format');
    if(! /[0-9]{10,10}/.test(document.getElementById('phno').value)) return alert('Invalid Phone number');
    if(document.getElementById('subject').value === '')return alert("Subject shouldn't be empty");

    let query = {};
    query.name = document.getElementById('name').value;
    query.email = document.getElementById('email').value;
    query.phone = document.getElementById('phno').value;
    query.country = document.getElementById('country').value;
    query.subject = document.getElementById('subject').value;

    let queries;
    if (!localStorage.getItem('queries')) queries = [];
    else queries = JSON.parse(localStorage.getItem('queries'));

    queries.push(query);
    localStorage.removeItem('queries')
    localStorage.setItem('queries', JSON.stringify(queries))
}

function renderAllQueries(){
    let queries;
    if (!localStorage.getItem('queries')) queries = [];
    else queries = JSON.parse(localStorage.getItem('queries'));

    document.querySelector('.queries-container').appendChild(newElement('div',{id:'table'},"",""));
    const headRow = newElement('tr',{},"","");
    headRow.appendChild(newElement("th",{},"S.no  ",{}));
    headRow.appendChild(newElement("th",{},"Name  ",""));
    headRow.appendChild(newElement('th',{},"Email ",""));
    headRow.appendChild(newElement('th',{},"Phone ",""));
    headRow.appendChild(newElement("th",{},"Country ",""));
    headRow.appendChild(newElement("th",{},"Subject ",""));
    document.querySelector('#table').appendChild(headRow);

    let sNo = 1;
    queries.forEach(query=>{
        const row = newElement('tr',{},"","");
        row.appendChild(newElement('td',{},sNo,""));
        row.appendChild(newElement('td',{},query.name,""));
        row.appendChild(newElement('td',{},query.email,""));
        row.appendChild(newElement('td',{},query.phone,""));
        row.appendChild(newElement('td',{},query.country,""));
        row.appendChild(newElement('td',{},query.subject,""));
        document.querySelector('#table').appendChild(row);
        sNo++;
    })
}


// Generate Html Components
function newElement (tag, attr, text, value) {
    let newElem = document.createElement(tag);

    for (let i in attr) {
        newElem.setAttribute(String(i), String(attr[String(i)]));
    }
    if (text) newElem.innerHTML = text;
    if (value) newElem.value = value;

    return newElem;
}

renderAllQueries();