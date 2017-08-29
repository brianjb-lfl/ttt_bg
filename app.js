'use strict';

const appState = {
  lastMarkedCell: null,
  currBoard: ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;'],
  currCell: null,
  currMarker: 'X',
  winCombo: null,   //element in winning combo array
  winCombos: [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6] 
  ]
};


let count = 0;
function cellHandler(){
  $('.board').on('click', '.cell', event => {
    //console.log('logging ' + $(event.currentTarget).attr('id'));
    if($(event.currentTarget).find('p').text().trim() === ''){
      console.log('running update board');
// currCellID = parseInt($(event.currentTarget).attr('id'));
      appState.currBoard[parseInt($(event.currentTarget).attr('id'))] = appState.currMarker;
      count += 1;
      if (count % 2 === 1){
        appState.currMarker = 'O';
      } else {
        appState.currMarker = 'X';
      }
    }
    renderTicTacToe();
    console.log(appState.currBoard);
  });
}


function btnHandler(){
  $('#new-game').on('click',  event => {
    console.log('new-game ran');
    
  });

}

function renderTicTacToe(){
  let str = '<div class="row">';
  for(let i = 0; i < 9; i++){
    
    str += 
      `<div class="cell" id="${i}">
        <p>${appState.currBoard[i]}</p>
      </div>`;
    if((i+1) % 3 === 0){
      str+=`</div>
            <div class="row">`;
    }
    
  }
  str += '</div>';
  $('.board').html(str);
}

function handleTTTApp(){
  renderTicTacToe();
  cellHandler();
  btnHandler();
}

$(handleTTTApp);



