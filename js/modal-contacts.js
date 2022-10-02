document.addEventListener('DOMContentLoaded', function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  // console.log(scrollbar);
  document.querySelector('[href="#openModal-1"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-1').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#openModal-2"]').addEventListener('click', function () {
    // document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-2').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal-1').style.marginLeft = '0px';
    document.querySelector('#openModal-2').style.marginLeft = '0px';
  });
});
