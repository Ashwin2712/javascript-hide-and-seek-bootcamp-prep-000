function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function deepestChild(){
  var divGrandNode = document.getElementById('grand-node')
  var noOfDivs = divGrandNode.querySelectorAll('div').length
  
  for(var i = 0; i < noOfDivs; i++){
    var current = divGrandNode.querySelectorAll('div')[i]
  }
  return current
}

function increaseRankBy(n){
  var allUL = document.querySelectorAll('ul.ranked-list')
  
  
  for(var i = 0; i < allUL.length; i++){
    allUL[i].innerHTML += n
  }
  return allUL
}