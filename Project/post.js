//Создаю переменные
let let_head=document.querySelector('.head');
let let_textArticle=document.querySelector('.textArticle');
let autor_comment=document.querySelector('.commentsAutor');
let comment=document.querySelector('.comments');
let ul = document.createElement('ul');
let div = document.getElementById('list');


//Асинхронная функция запроса детальной информации  выбранной статьи
async function loadArticle(){
const pageParams = new URLSearchParams(window.location.search); 
const numberArticles=pageParams.get('id');
const urlArticles=`https://gorest.co.in/public-api/posts/`+numberArticles;

const response = await fetch(urlArticles,{headers:{
	Autorization:'Bearer e0631930e37a0134e55adcc3bb3dbee15648238b85b7d40d2eb942d41a7f7afb',
'Content-Type':'application/json'}}); 
const resultArticles = await response.json();
return resultArticles;
}

//Построение выбранной статьи детально 
function renderArticles(data){

//получаю и вывожу заголовок статьи
let_head.innerHTML=data.data.title;
document.body.append(let_head);


//получаю и вывожу основной текст статьи
let_textArticle.innerHTML=data.data.body;
document.body.append(let_textArticle);
}


//Функция вызова функций 2 запроса 	
function requestArticlesDetails()
{
	loadArticle().then((data)=>{renderArticles(data)});
	
}

//Функция вызова построения списка
loadArticle().then((data) => {
	renderArticles(data);
	
});
///////////////////////////////////////////////Работа с комментариями
//Асинхронная функция запроса комментарий
async function loadСomments(){
let pageParams = new URLSearchParams(window.location.search); 
let numberArticles=pageParams.get('id');
let urlArticles=`https://gorest.co.in/public-api/comments?post_id=`+numberArticles;

let response = await fetch(urlArticles,{headers:{
	Autorization:'Bearer e0631930e37a0134e55adcc3bb3dbee15648238b85b7d40d2eb942d41a7f7afb',
'Content-Type':'application/json'}}); 
let resultComments = await response.json();
return resultComments;
}
//Функция вызова функций 3 запроса 	
function requestArticlesDetails()
{
	loadArticle().then((data)=>{renderArticles(data)});
	
}
//Рендерю список комментариев
function renderСomments(data){
	
	
	//for(i=0;i<=data.data.length-1;i++){
	//let li=document.querySelector('.comment');
	//li.innerHTML=data.data[i].name+"-"+data.data[i].body;
	//console.log(li);
	//document.body.append(li)
	let list=document.createElement('ul')
	document.body.append(list)
	
	for(i=0;i<=data.data.length;i++){
	
	let li=document.createElement('li')
       li.innerHTML = data.data[i].name+"-"+data.data[i].body;
	   list.appendChild(li);
   }
	
}	
   	


//Функция вызова построения списка комментариев
loadСomments().then((data) => {
	renderСomments(data);
	
});








