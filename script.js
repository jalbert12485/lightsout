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
    btnSelect[i].setAttribute("id", "a"+(Math.floor(i/5)+1)+""+ ((i % 5+1)));
    btnSelect[i].setAttribute("onclick", "buttonPress("+(Math.floor(i/5)+1)+"," +((i % 5)+1)+")");
}

var b=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];

function buttonPress(i,j){
    b[i][j]=(b[i][j]+1)%2;
    b[i+1][j]=(b[i+1][j]+1)%2;
    b[i][j+1]=(b[i][j+1]+1)%2;
    b[i-1][j]=(b[i-1][j]+1)%2;
    b[i][j-1]=(b[i][j-1]+1)%2;
    colorBoard();
    getScore();

}


function colorBoard(){
    for(j=1; j<6; j++){
        for(i=1; i<6; i++){
            if(b[i][j]==1){
                document.querySelector("#a"+i+""+j).style.backgroundColor="white";
            }
            if(b[i][j]==0){
                document.querySelector("#a"+i+""+j).style.backgroundColor="black";
            }
        }
    }

}

function buttonPressNoColor(i,j){
    b[i][j]=(b[i][j]+1)%2;
    b[i+1][j]=(b[i+1][j]+1)%2;
    b[i][j+1]=(b[i][j+1]+1)%2;
    b[i-1][j]=(b[i-1][j]+1)%2;
    b[i][j-1]=(b[i][j-1]+1)%2;

}


function startGame(){
    for(i=0; i<40; i++){
        buttonPressNoColor(Math.floor(5*Math.random()+1),Math.floor(5*Math.random()+1));
    }
    colorBoard();
}

createNewRow(conClass[0]);
var lastRow=conClass[0].lastElementChild;
createNewCol(lastRow);
createNewCol(lastRow);
var newButton=document.createElement("button");
newButton.setAttribute("id", "startBtn" );
newButton.setAttribute("class", "btn; bottomBtns" );
newButton.setAttribute("onclick", "startGame()" );
lastRow.children[0].appendChild(newButton);


document.querySelector("#startBtn").innerHTML="Start New Game";


var paragraph=document.createElement("h1");

paragraph.setAttribute("id","win");
paragraph.setAttribute("class","bottomBtns");
lastRow.children[1].appendChild(paragraph);

function getScore(){
    var score=0;
for(var k=1; k <6; k++){
    for(var l=1; l<6; l++){
        score=score+b[k][l];
    }
}
if(score > 0){
document.querySelector("#win").innerHTML="You have "+score+"lights left.";
}
if(score==0){
    document.querySelector("#win").innerHTML="You win!!!";
}
}




// startGame();

// btnSelect[0].setAttribute("style", "background-color: black");
// btnSelect[1].setAttribute("style", "background-color: white");


