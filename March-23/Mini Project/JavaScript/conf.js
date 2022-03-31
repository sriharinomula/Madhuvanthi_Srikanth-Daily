const conferences = JSON.parse(localStorage.getItem('conferences'));

document.querySelector('.conferences-container').appendChild(newElement('table',{class:'table'},"",""));

const headRow = newElement('tr',{},"","");
headRow.appendChild(newElement('th',{},"S.no",""));
headRow.appendChild(newElement('th',{},"Destination",""));
headRow.appendChild(newElement('th',{},"Date",""));
headRow.appendChild(newElement('th',{},"Timing",""));
headRow.appendChild(newElement('th',{},"Number of Pe0ple",""));
headRow.appendChild(newElement('th',{},"Company",""));
document.querySelector('.table').appendChild(headRow);

let sNo = 1;
conferences.forEach(conference=>{
    const row = newElement('tr',{},'','');

    row.appendChild(newElement('td',{},sNo,""));
    row.appendChild(newElement('td',{},conference.destination,""));
    row.appendChild(newElement('td',{},conference.date,""));
    row.appendChild(newElement('td',{},conference.time,""));
    row.appendChild(newElement('td',{},conference.numberOfPeople,""));
    row.appendChild(newElement('td',{},conference.company,""));
    document.querySelector('.table').appendChild(row);
    sNo++;
});



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
//delete items
function deleteItems() {
    localStorage.clear();
  }
  
