var valueArray=[0,0,1]
var billAmount=document.querySelector('#bill-amount');
var groupBtn=document.querySelectorAll('.group-btn input');
var customInput=document.querySelector('#custom-input');
var people=document.querySelector('#people');

function main(){
  if(billAmount.value!='' && people.value!=''){
    var totalTipAmount=document.querySelector('#total-tip-amount');
    var totalAmount=document.querySelector('#total-amount');
    var calc=Math.ceil(((valueArray[0]*valueArray[1])/100)/valueArray[2]);
    totalTipAmount.innerHTML='$ '+calc;
    var sol=Math.ceil((valueArray[0]/valueArray[2])+calc);
    totalAmount.innerHTML='$ '+sol;
  }
}
billAmount.addEventListener('input',function(){
  valueArray[0]=parseInt(billAmount.value);
  main();
});
people.addEventListener('input',function(){
  valueArray[2]=parseInt(people.value);
  main();
});
for(let i=0;i<5;i++){
  groupBtn[i].addEventListener('click',function(){
    var val=groupBtn[i].value;
    valueArray[1]=parseInt(val.slice(0,val.length-1));
    main();
  });
}
customInput.addEventListener('input',function(){
  valueArray[1]=parseInt(customInput.value);
  main();
});

var mainBtn=document.querySelector('.main-btn');
mainBtn.addEventListener('click',function(){
  valueArray=[0,0,1];
  billAmount.value='';
  people.value='';
  customInput.value='';
  main();
});
