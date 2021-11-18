let url ={
    address:`https://api.github.com/users/`
} 

$('#username').on('change',function(){
    url.address = `https://api.github.com/users/` + $(this).val()
}
)


$('#query').on('click', function(){
    $.get(url.address, function(data){
        $('h1').text(data.name);
    }).fail(function(e){$('h1').text('Error: Type a valid username')})
})
    

function queryGithub(resolve,reject){

    let data = fetch(url.address)
    .then(response => response.json())
    

    resolve(data)
 

    

}

function getName(){

let h1 = document.querySelector('h1');
let data = new Promise(function(resolve,reject){
    queryGithub(resolve,reject)
});

data.then(function(data){
    
    if(data.message=='Not Found'){
        $('h1').text('Error: Type a valid username')
    }
    else{
        $('h1').text(data.name);
    }
})


}

let queryb = document.querySelector('#query-b')
queryb.addEventListener('click', getName);



