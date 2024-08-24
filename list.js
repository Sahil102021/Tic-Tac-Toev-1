let addlist = [];
function abc(event) {
    event.preventDefault();
    let a = event.target;
    let fname = a.fname.value;
    let sname = a.sname.value;
    addlist.push({fname,sname});

console.log(addlist);
let dataValue = "";
for(let i = 0; i < addlist.length; i++) {  
        dataValue += `
        <tr>
            <td>${i + 1}
            <td>${addlist[i].fname}</td>
            <td>${addlist[i].sname}</td>
        </tr>
        `;
}
console.log(dataValue);

document.getElementById('showlist').innerHTML = dataValue ;
event.target.fname.value =  "";
event.target.sname.value =  "";
}