var form = document.querySelector('.form-add');
var input = form.querySelector('.input-value');
var addBtn = form.querySelector('.add');
var formCheck = document.querySelector('.form-check');
var inputCheck = formCheck.querySelector('.input-check');
var checkBtn = formCheck.querySelector('.check');
var shopingList = document.querySelector('.shoping-list');
var answerCheck = document.querySelector('.answer-check');
var shopingListArray = ['uzum','olma','nok','anor'];


form.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  var inputValue = input.value.trim();
  shopingListArray.push(inputValue);
  
  if (!inputValue){
    alert("xato xato xato xato xato xato xato xato xato xato");
    return;
  }

  var newLI = document.createElement("LI");
  newLI.classList.add("list-group-item")
  newLI.textContent = inputValue;
  shopingList.appendChild(newLI);
  
  input.value = '';
  input.focus();
});

formCheck.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  console.log(inputCheck.value);
  var inputCheckValue = inputCheck.value.trim();

  if (shopingListArray.includes(inputCheckValue)){
    answerCheck.classList.remove('d-none','alert-success','alert-warning');
    answerCheck.classList.add('alert-success');
    answerCheck.textContent = 'Bor';
  }else{
    input.value = inputCheckValue;
    answerCheck.classList.remove('d-none','alert-success','alert-warning');
    answerCheck.classList.add('alert-warning');
    answerCheck.textContent = `afsuski bu narsa yo'q ekan qo'shiishingiz mumkin`;
    
  }
});
