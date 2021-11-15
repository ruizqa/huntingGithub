$('#query').on('click', function(){
    $.get("https://api.github.com/users/ruizqa", function(data){
        $('h1').text(data.name);
    })});
    

function queryGithub(resolve,reject){

    let data = fetch('https://api.github.com/users/ruizqa')
    .then(response => response.json())
    resolve(data);

}

function getName(){

let h1 = document.querySelector('h1');
let data = new Promise(function(resolve,reject){
    queryGithub(resolve,reject)
});

data.then(function(data){
    h1.innerText = data.name;
})

data.catch(function(){
    console.log('Error!');
})


}

let queryb = document.querySelector('#query-b')
queryb.addEventListener('click', getName);



