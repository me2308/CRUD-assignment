var nameInput =document.getElementById('name');
var urlInput =document.getElementById('url');
var submitBtn = document.getElementById('submitBtn')
var bookList=[];
if (localStorage.getItem('bookMark')!=null) {
    bookList = JSON.parse(localStorage.getItem('bookMark'));
    displayData();
}else{
    bookList=[];
}

function addBook() {
    var bookMark={
        name:nameInput.value,
        url:urlInput.value 
    }
    if(nameInput.classList.contains('is-valid')&&
        urlInput.classList.contains('is-valid')){
            bookList.push(bookMark);
            localStorage.setItem('bookMark',JSON.stringify(bookList))
            clear();
            displayData();
        }
    

}
function clear() {
    nameInput.value='';
    urlInput.value='';
}
function displayData() {
    var cartoona=``
    for (var i = 0; i < bookList.length; i++) {
        cartoona+=`
                <tr>
                    <td>${i+1}</td>
                    <td>${bookList[i].name}</td>
                    <td><a href="${bookList[i].url}"><button onclick="visitLink(${i})" class="btn btn-success"> <i class="fa-solid fa-eye"></i> Visit</button></a></td>
                    <td><button onclick="deleteData(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>
        `
        
    }
    document.getElementById('tbody').innerHTML= cartoona
}
function deleteData(index){
    bookList.splice(index,1);
    localStorage.setItem('bookMark',JSON.stringify(bookList));
    displayData();
}

function validate(element) {
    var regex={
        name:/^[A-Z a-z]{3,25}$/,
        url:/^(https:|www\.)?[\w]+\.com$/
    };
    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        submitBtn.removeAttribute('disabled')
    }else{
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
    }
}






