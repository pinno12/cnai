AOS.init();

console.log(`Welcome to 
╭━━━┳━╮╱╭┳━━━┳━━╮
┃╭━╮┃┃╰╮┃┃╭━╮┣┫┣╯
┃┃╱╰┫╭╮╰╯┃┃╱┃┃┃┃
┃┃╱╭┫┃╰╮┃┃╰━╯┃┃┃
┃╰━╯┃┃╱┃┃┃╭━╮┣┫┣╮
╰━━━┻╯╱╰━┻╯╱╰┻━━╯
You can check job openings at https://bit.ly/cnaijob`)

if (window.location.href.search('/en')>0){
  document.getElementById("enFooter").innerHTML = `
  CNAI <br />
  Company Registration Number ｜CEO : Wonseop Lee <br />
  29-9 Seoripul-gil, Seocho-gu, Seoul ｜ 4F, 101, Jungang-ro, Jung-gu, Daejeon<br />
  © 2022. CNAI Inc. all rights reserved.  
  `;

  var links = document.querySelectorAll('.goEng');
  for(var i = 0; i < links.length; i++){
    links[i].href  = '/en' + links[i].pathname;
  }
}

goGlobal = () => {
  if (window.location.href.search('/en')>0){
    let toGo = window.location.href.replace('/en','')
    console.log(toGo)
    window.location.href = toGo;

  } else{
    window.location.href = '/en' + window.location.pathname;
  }
}




// console.log(zc['c1'])

showUp = (myId, category) => {
  let blur = myId + '-img';
  let title = myId + '-title';
  let btn = myId + '-btn';
  let say = '.' + myId;
  
  document.getElementsByClassName(btn)[0].classList.toggle("c-btn-active");
  $(say)
  .transition('fade up')
  ;
  document.getElementsByClassName(blur)[0].classList.toggle("bg-blur");
  if (category == 'home'){
    document.getElementsByClassName(title)[0].classList.toggle("text-white");
  }else{
    // document.getElementsByClassName(blur)[0].classList.toggle("bg-blur");

  }
}

// $('#bars1,#bars2').click(function(){
//   $(this).addClass('d-none');
//   $('#back').removeClass('d-none');
// });

burgerAction = (x,y)=>{
  $(x).click(function(){
    $(this).addClass('d-none');
    $(y).removeClass('d-none');
  });
}
burgerAction('#bars1','#back1')
burgerAction('#back1','#bars1')
burgerAction('#bars2','#back2');burgerAction('#back2','#bars2')

$('#back').click(function(){
  $(this).addClass('d-none');
  $('#bars').removeClass('d-none');
});

changeColor = (item) =>{
  let id = item.id ;  
  document.getElementById(id).classList.add('Gray_5')
}
removeColor = (item) =>{
  let id = item.id 
  // + '1';  
  document.getElementById(id).classList.remove('Gray_5')
}

// showList = () => {
//   document.getElementsByClassName('drop-1-box')[0].classList.add("open");
//   console.log('in')
// }

// $gnbList.mouseenter(function(){  document.getElementsByClassName('drop-1-box')[0].classList.add("open");
// console.log('in')});


// $gnbList.mouseleave(function(){
  
//   document.getElementsByClassName('drop-1-box')[0].classList.remove("open"); console.log('out')
// });


// gnb_return = () => {
//   document.getElementsByClassName('drop-1-box')[0].classList.remove("open");
// }

homeShow = (myId) =>{
  let blur = myId + '-img';
  let title = myId + '-title';
  let btn = myId + '-btn';
  
  let say = '.' + myId;

  
  $(say)
    .transition('fade up')
    ;
}




$('.masthead')
.visibility({
  once: false,
  onBottomPassed: function() {
    $('.fixed.menu').transition('fade in');
  },
  onBottomPassedReverse: function() {
    $('.fixed.menu').transition('fade out');
  }
})


;
$('.ui.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  // .sidebar('toggle')
  .sidebar('attach events', '.open.button', 'show')
  .sidebar('setting','dimPage', false )
;

$('.ui.modal')
.modal('show')
;

$('.tool-tip').popup();


$('.ui.dropdown')
  .dropdown()
;
$('.ui.checkbox')
.checkbox()
;
