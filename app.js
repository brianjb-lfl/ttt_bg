'use strict';

const appState = {
  lastMarkedCell: null,
  currBoard: [null,null,null,null,null,null,null,null,null],
  currCell: null,
  currMarker: 'X',
  winCombo: null,   //element in winning combo array
  winCombos: [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6] 
  ]
};

let currCellID;

function cellHandler(){
  $('.board').on('click', '.cell', event => {
    //console.log('logging ' + $(event.currentTarget).attr('id'));
    if($(event.currentTarget).find('p').text().trim() === ''){
      console.log('running update board');
      currCellID = parseInt($(event.currentTarget).attr('id'));
      appState.currBoard[currCellID] = appState.currMarker;
    }
    console.log(appState.currBoard);
  });
}


function btnHandler(){
  $('#new-game').on('click',  event => {
    console.log('new-game ran');
    
  });

}

function handleTTTApp(){
  cellHandler();
  btnHandler();
}

$(handleTTTApp);
