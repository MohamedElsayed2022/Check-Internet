let title = document.querySelector('.title');
let ul    = document.querySelector('ul');
let reload = document.querySelector('.reload');
let body   = document.querySelector("body")

if(window.navigator.onLine){
    online()
}else{
    offline()
}


window.addEventListener("online",function(){
    online()
})

window.addEventListener("offline",function()
{
    offline()
})

reload.onclick =function()
{
    window.location.reload()
}




function online()
{
    title.innerHTML = 'Online Now'
    title.style.color = 'white';
    body.style.backgroundColor = 'green'
    ul.classList.add("hide");
    reload.style.display = 'none'

}


function offline()
{
   ul.classList.remove("hide");
   body.style.backgroundColor = '#333'
   reload.style.backgroundColor='#666'



}