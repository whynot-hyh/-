let wrapper = document.getElementById('wrapper');
let initWrapperHeight;
let initHeight;
let turnHeight;
// 初始化图片大小
let imgs = document.querySelectorAll('img');
window.onload = function(){
  initWrapperHeight = wrapper.offsetHeight;
  wrapper.style.height = `${(1/imgs.length) * initWrapperHeight}px`;
  initWidth = document.documentElement.clientWidth;
}
window.onresize = function(){
  turnWidth = document.documentElement.clientWidth;
  let prop = turnWidth / initWidth;
  let turnWrapperHeight = initWrapperHeight * prop;
  wrapper.style.height = `${(1/imgs.length) * turnWrapperHeight}px`;
  //为图片设置left值
  // for(let i=0; i< imgs.length; i++){
  //   imgs[i].style.left = `${-i * turnWidth}px`;
  //   console.log(imgs[i].style.left)
  // }
}



// let right = document.getElementsByClassName('right');
// right.onclick = function(){

// }