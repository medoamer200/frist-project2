

let li = document.getElementsByTagName('link')
console.log(li[2].href);

let btnn = document.getElementsByTagName('button')
// console.log(btnn);
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let notaskes = document.getElementById('notaskes');
let alltaskes = document.getElementById('alltaskes');

function change(){
    // console.log(li);
    
    if( li[2].href == 'file:///D:/ssd%20acadimy/session10/task1/css/dark.css'){
        li[2].href = 'file:///D:/ssd%20acadimy/session10/task1/css/light.css'

    }else{
        li[2].href = 'file:///D:/ssd%20acadimy/session10/task1/css/dark.css'
    }
}

btnn[0].addEventListener('click' , change);

function addnewtask() {
    let data = input.value;


    if (data.trim() == '' || (data.length < 3 || data.length > 20)) {
        window.alert("please enter valid data")

    } else {
        alltaskes.innerHTML += `<div class="alert alert-info check"> ${data}
        <button class="btn btn-danger delete" style="float: right; margin:-7px">Delete</button></div>`
        notaskes.style.display = "none"
        input.value = '';


    }





}

btn.addEventListener('click', addnewtask)

function checkdiv() {

    if (alltaskes.childElementCount == 0) {
        notaskes.style.display = "block"
    }
}
document.addEventListener('click', function (e) {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        checkdiv()

    }

})

document.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('check')){
        e.target.classList.toggle('checked')
    }


})


