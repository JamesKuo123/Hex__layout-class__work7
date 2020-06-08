// (function () {

//   var gearImage = document.querySelector('.introduce__gear .introduce__image'); // 介紹的 stripped 圖片

//   var stripImage = document.querySelector('.introduce__stripped .introduce__image'); // 收集的圖片

//   var collectionImage = document.querySelector('.collection__rider');

//   function scrollHandler() {
//     var scrollTop = window.scrollY;
//     var windowsHeight = window.innerHeight;

//     var _gearImage$getBoundin = gearImage.getBoundingClientRect(),
//         gearTop = _gearImage$getBoundin.top;

//     var _stripImage$getBoundi = stripImage.getBoundingClientRect(),
//         stripTop = _stripImage$getBoundi.top;

//     var _collectionImage$getB = collectionImage.getBoundingClientRect(),
//         collectionTop = _collectionImage$getB.top;

//     if (scrollTop + windowsHeight / 2 >= gearTop) {
//       gearImage.style['background-position'] = "-".concat(parseInt(scrollTop / 6), "px center");
//     }

//     if (scrollTop + windowsHeight / 2 >= stripTop) {
//       stripImage.style['background-position'] = "-".concat(parseInt(scrollTop / 6), "px center");
//     }

//     if (collectionTop >= scrollTop || collectionTop <= scrollTop) {
//       collectionImage.style['background-position'] = "center -".concat(parseInt(scrollTop / 5), "px");
//     }
//   }

//   window.addEventListener('scroll', scrollHandler);
// })();

// textAnima--scrollSlideLeft
(function () {

    var feature__bgLeft__bgimg = document.querySelector('.feature--bgLeft .imgAnima--scrollSlideRight');
    var feature__bgRight__bgimg = document.querySelector('.feature--bgRight .imgAnima--scrollSlideRight');
    var feature__bgLeft__title1 = document.querySelector('.feature--bgLeft .textAnima--scrollSlideLeft');
    var feature__bgLeft__title2 = document.querySelector('.feature--bgLeft .textAnima--scrollSlideRight');
    var feature__bgRight__title1 = document.querySelector('.feature--bgRight .textAnima--scrollSlideLeft');
    var feature__bgRight__title2 = document.querySelector('.feature--bgRight .textAnima--scrollSlideRight');
    var quote__bgimg = document.querySelector('.quote .imgAnima--scrollSlideUp');
  
    function scrollSlide() {
      var scrollTop = window.scrollY;
      var windowsHeight = window.innerHeight;
  
      var getRelativePosition = feature__bgLeft__bgimg.getBoundingClientRect();
      var getRelativeTop = getRelativePosition.top;
      if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
        feature__bgLeft__bgimg.style['background-position'] = "-".concat(parseInt(scrollTop / 10), "px center");
      }

      var getRelativePosition = feature__bgLeft__title1.getBoundingClientRect();
      var getRelativeTop = getRelativePosition.top;
      if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
        feature__bgLeft__title1.style['transform'] = `translateX(-${parseInt(scrollTop/30-20)}px)`;
        feature__bgLeft__title2.style['transform'] = `translateX(${parseInt(scrollTop/30-20)}px)`;
      }

      var getRelativePosition = feature__bgRight__bgimg.getBoundingClientRect();
      var getRelativeTop = getRelativePosition.top;
      if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
        feature__bgRight__bgimg.style['background-position'] = "-".concat(parseInt(scrollTop / 10), "px center");
      }

      var getRelativePosition = feature__bgRight__title1.getBoundingClientRect();
      var getRelativeTop = getRelativePosition.top;
      if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
        feature__bgRight__title1.style['transform'] = `translateX(-${parseInt(scrollTop/30-20)}px)`;
        feature__bgRight__title2.style['transform'] = `translateX(${parseInt(scrollTop/30-20)}px)`;
      }

      var getRelativePosition = quote__bgimg.getBoundingClientRect();
      var getRelativeTop = getRelativePosition.top;
      if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
        quote__bgimg.style['background-position'] = "center -".concat(parseInt(scrollTop / 5), "px");
      }
    }
  
    window.addEventListener('scroll', scrollSlide);
  })();