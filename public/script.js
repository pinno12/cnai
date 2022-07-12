AOS.init();

console.log(`Welcome to 
╭━━━┳━╮╱╭┳━━━┳━━╮
┃╭━╮┃┃╰╮┃┃╭━╮┣┫┣╯
┃┃╱╰┫╭╮╰╯┃┃╱┃┃┃┃
┃┃╱╭┫┃╰╮┃┃╰━╯┃┃┃
┃╰━╯┃┃╱┃┃┃╭━╮┣┫┣╮
╰━━━┻╯╱╰━┻╯╱╰┻━━╯
You can check job openings at https://defiant-sodalite-85a.notion.site/Beta-6dfeaaf6dd024663a7467620ca7dad24`)

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

showUp = (myId, category) => {
  let bright = myId + '-img';
  let title = myId + '-title';
  let btn = myId + '-btn';
  let say = '.' + myId;
  let blur = myId + '-bg';
  
  document.getElementsByClassName(btn)[0].classList.toggle("c-btn-active");
  $(say)
  .transition('fade up')
  ;
  document.getElementsByClassName(bright)[0].classList.toggle("bg-blur");
  if (category == 'home'){
    document.getElementsByClassName(title)[0].classList.toggle("text-white");
    document.getElementsByClassName(blur)[0].classList.toggle("bgBlur");
  }else{
    // document.getElementsByClassName(blur)[0].classList.toggle("bg-blur");

  }
}


burgerAction = (x,y)=>{   
    $(x).addClass('d-none');
    console.log($(this))
    $(y).removeClass('d-none');
  
}

changeColor = (item) =>{
  let id = item.id ;  
  document.getElementById(id).classList.add('Gray_5')
}
removeColor = (item) =>{
  let id = item.id 
  // + '1';  
  document.getElementById(id).classList.remove('Gray_5')
}

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
