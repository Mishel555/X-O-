let divs = $('div');
divs = Array.from(divs);
let item = 'O';
let desk = [];
let num ;
// let draw = true;
for(let i in divs){
  desk[i]=0;
}
//////////////////////////
$(divs).mouseover(function() {
  $('body').css('cursor','pointer')
})
//////////////////////////
$(divs).on('click',function(event) {
  $(this).mouseover(function() {
    $('body').css('cursor','not-allowed')
  })
  switch (item) {
    case 'O':
    if(this.innerHTML==" "){
      let index = divs.indexOf(this);
      item = 'X';
      $(this).off()
      desk[index] = 1;
      num = 1;
    }
    this.innerHTML=item;
    break;
    case 'X':
    if(this.innerHTML==" "){
      let index = divs.indexOf(this);
      desk[index] = 2;
      item = 'O';
      $(this).off();
      num=2;
    }
    this.innerHTML=item;
    break;
  }
  checkWin()
  let replay = checkWin();
  if(replay){
    let restartBtn = document.createElement('button');
    restartBtn.innerHTML = 'Restart';
    restartBtn.classList.add("resBtn");
    restartBtn.addEventListener('click',function(){
      location.reload()
    })
    document.getElementById('main').appendChild(restartBtn);
  }
})

function checkWin() {
  if(desk[0] === num && desk[1] === num && desk[2] === num){
    console.log(num);
    console.log(desk);

    document.getElementById('screen').innerHtml= `The Winner Is <span>${item}</span>`;
    divs[0].style.backgroundColor = '#28940d';
    divs[1].style.backgroundColor = '#28940d';
    divs[2].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[0] === num && desk[4] === num && desk[8] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[0].style.backgroundColor = '#28940d';
    divs[4].style.backgroundColor = '#28940d';
    divs[8].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[0] === num && desk[3] === num && desk[6] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[0].style.backgroundColor = '#28940d';
    divs[3].style.backgroundColor = '#28940d';
    divs[6].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[3] === num && desk[4] === num && desk[5] === num) {
    document.getElementById('screen').innerHTML = `the winner is <span>${item}</span>`;
    divs[3].style.backgroundColor = '#28940d';
    divs[4].style.backgroundColor = '#28940d';
    divs[5].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[6] === num && desk[4] === num && desk[2] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[6].style.backgroundColor = '#28940d';
    divs[4].style.backgroundColor = '#28940d';
    divs[2].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[1] === num && desk[4] === num && desk[7] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[1].style.backgroundColor = '#28940d';
    divs[4].style.backgroundColor = '#28940d';
    divs[7].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[2] === num && desk[5] === num && desk[8] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[2].style.backgroundColor = '#28940d';
    divs[5].style.backgroundColor = '#28940d';
    divs[8].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }else if (desk[6] === num && desk[7] === num && desk[8] === num) {
    document.getElementById('screen').innerHTML = `The Winner Is <span>${item}</span>`;
    divs[6].style.backgroundColor = '#28940d';
    divs[7].style.backgroundColor = '#28940d';
    divs[8].style.backgroundColor = '#28940d';
    draw = false;
    $(divs).off();
    return true
  }
  let res = divs.every(function(item) {
    return item.innerHTML !== ' '
  })
  if(res){
    document.getElementById('screen').innerHTML = `Draw`;
    return true
  }

}
