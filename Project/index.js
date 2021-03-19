///Объявлем переменные
let linck = document.createElement('a');
let br = document.createElement('br');
let div = document.createElement('div');
let countpage=20;
let number_page=0;

//Асинхронная функция запроса списка статей
async function loadposts(numberListArticles){
let url=`https://gorest.co.in/public-api/posts?page=`+numberListArticles;
document.body.innerHTML='';
let response = await fetch(url,{headers:{
	Autorization:'Bearer e0631930e37a0134e55adcc3bb3dbee15648238b85b7d40d2eb942d41a7f7afb',
'Content-Type':'application/json'}}); 
let result = await response.json();
console.log(result)
return result;

}

//Построение и отображение списка статей
function renderPosts(data){
for(let i=0;i<=data.data.length;i++){
    br = document.createElement('br');
	linck=document.createElement('a');
	linck.href="post.html?id="+data.data[i].id;
	
	linck.textContent=data.data[i].title;
		if (((number_page*i)<countpage)&(number_page<1)){
		document.body.append("Статья"+(i+1)+"-");
	}
	  else{
		document.body.append("Статья"+((i)+(number_page*countpage))+"-");
	}
	linck.addEventListener( "click" , () => requestArticles());
	document.body.append(linck);
	document.body.append(br);
	document.body.append(br);
	document.body.append(br);
	
	}
	
}


//Функция вызова функций 1 запроса построение списка статей	
function requestListArticles(numberListArticles)
{
	number_page=numberListArticles;
	loadposts(numberListArticles).then((data)=>{renderPosts(data)});
	pagination_func();
}


//Функция вызова построения списка
loadposts().then((data) => {
	renderPosts(data);
	
});
//создание и отображение меню пагинации
function pagination_func(){
loadposts().then((meta) => {
  totalpage=meta.meta.pagination.total;
  pagination=totalpage/countpage;

for(i=1;i<=pagination+2;i++){
  
  div = document.createElement('div');
  div.textContent=i;
  div.style.backgroundColor='green';
  div.style.float="left";
  div.style.width='35px';
  div.style.marginLeft='4px';
  div.style.marginTop='5px';
  div.style.color="white";
  div.style.textAlign="center";
  div.addEventListener( "click" , () => requestListArticles(event.target.innerHTML));
  document.body.append(div);
  }
});
}
//первичный вызов функции создания пагинации
pagination_func();