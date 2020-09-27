var conClass=document.querySelectorAll(".container");
var rowClass=document.querySelectorAll(".row");

function createNewRow(container){
var newRow=document.createElement("div");
newRow.setAttribute("class", "row" );
container.appendChild(newRow);
}

function createNewCol(row){
    var newCol=document.createElement("div");
    newCol.setAttribute("class", "col" );
    row.appendChild(newCol);
    }

function createNewButton(col){
        var newButton=document.createElement("button");
        newButton.setAttribute("class", "btn; padding" );
        col.appendChild(newButton);
        }

var i=0;
var j=0;

for(j=0; j<conClass.length; j++){
for(i=0; i <5; i++){
    createNewRow(conClass[j]);
}
}

var rowClass=document.querySelectorAll(".row");


for(j=0; j<rowClass.length; j++){
    for(i=0; i <5; i++){
        createNewCol(rowClass[j]);
    }
    }

var colClass=document.querySelectorAll(".col");


for(i=0; i< colClass.length; i++){
    createNewButton(colClass[i]);
}

var btnSelect=document.querySelectorAll("button");

for(i=0; i< btnSelect.length; i++){
    btnSelect[i].setAttribute("id", "a"+Math.floor(i/5)+""+ (i % 5));
}


// btnSelect[0].setAttribute("style", "background-color: black");
// btnSelect[1].setAttribute("style", "background-color: white");


