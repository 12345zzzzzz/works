
   const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let numberPairs = 0;
const maxNumberPairs = 8;
let hasOpenCard=false;
let flag=false;
let firstCard,secondCard;

function reset(){
	flag=false;
	firstCard=0;
	secondCard=0;
	hasOpenCard=false;
	
	
}

function closeCards(){
  flag=true;
	setTimeout(()=>{
		firstCard.textContent="";
	    secondCard.textContent="";
	reset();
},500)
}
function disableCards(){
	firstCard.removeEventListener('click', btnClick);
	secondCard.removeEventListener('click', btnClick);
	if(numberPairs===maxNumberPairs){
		alert("Вы открыли все пары!Поздравляем!!!Игра завершена")
	}
	
}

function check(){
  if(firstCard.value===secondCard.value){
		
		numberPairs =numberPairs +1;
		disableCards()
		return;
	}
	
		closeCards();
		
}




function btnClick(){
if (flag===true)	
{return}
	if (this===firstCard){
		return;
	}
this.classList.remove('hidden');
this.textContent=this.value;
if(!hasOpenCard){
	hasOpenCard=true;
firstCard=this;
return;	
}	

secondCard=this;
hasOpenCard=false;
check();
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(array);

for (let i = 0; i < 16; ++i) {
    let div = document.createElement('div');
    div.style.width = "200px";
    div.value = array[i];
    div.style.height = "200px";
    div.style.backgroundColor = "green";
    div.style.marginLeft = "25px";
    div.style.marginBottom = "10px";
    div.style.float = "left";
    div.style.fontSize="165px";
	div.style.color="white";
	div.classList.add('hidden');
	
    if (i === 4 || i === 8 || i === 12) {
        div.style.clear = "both";
    }
    div.addEventListener(`click`,btnClick);
    document.body.append(div);
} 
        
  

