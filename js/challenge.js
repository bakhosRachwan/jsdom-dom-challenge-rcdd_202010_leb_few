let count = 0;
let t;
timedCount() 
function timedCount() {
  document.getElementById("counter").innerText = count++;
  t = setTimeout(timedCount, 1000);
}

let plus = document.querySelector('#plus');
plus.addEventListener('click', function(){
  document.getElementById('counter').innerText = count++;
});

let minus = document.querySelector('#minus');
minus.addEventListener('click', function(){
  document.getElementById('counter').innerText = count--;
});

document.querySelector("#comment-form").addEventListener('submit', function(e){
  let input = document.querySelector('#comment-input').value;
  let list =document.querySelector('#list');
  list.innerHTML +=`<li> ${input}</li>`;
  
    e.preventDefault();
    e.target.reset();

});

times=1;
let likeBtn = document.querySelector('#heart');
likeBtn.addEventListener('click', function(){
let like=document.getElementById('counter').innerText;

  if(like == like){
  
  document.querySelector('.likes').innerHTML  = `<li>${like} was liked ${times++} times </li>`;
  }
  else {
    times=1;
    document.querySelector('.likes').innerHTML += `<li>${like} was liked ${times} times </li>`;
  }
});

let submit = document.querySelector('#submit');
let button = document.querySelector('#pause');
let myInterval = -1;

button.addEventListener('click', function(event){
  let st;
  if(myInterval == -1){
    
    button.innerHTML = "Resume";
    likeBtn.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    submit.disabled = true;
    myInterval=0;
    clearTimeout(t);
  }
  else {
    button.innerHTML = "pause";
    likeBtn.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
    submit.disabled = false;
    myInterval=-1;
    timedCount();
    
  }
});

