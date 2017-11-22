
// анимация блока PROFESSIONAL SKILLS при скролле

var window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('div.skills-list');
    var top = document.body.scrollTop;
    var find = false;
    elements.forEach(function (el) {
        var el_top = el.offsetTop;
        if (el_top > top && ((el.clientHeight + el_top) < (top + window_height))) {
            $('div.progressBar2').addClass('animation').css('width', '400px'); //
        }
    });
}); // конец анимации блока при скролле

// Recent post вывод дат на линию

// var dates = $(".postDate"),
//     posts = $(".currentPost"),
//     start = 0,
//     end = 5,
//     datesArray = dates.slice(start,end),
//     postsArray = posts.slice(start,end);
//
// $(".postDate, .currentPost").css({"display":"none"});
// $(posts[0]).css({"display":"block"});
// $(datesArray).each(function () {
// 	$(this).css({"display":"inline-block"});
// });


//
// getPost(datesArray, postsArray);
//
// $(".next").click(function(){
// 	if (end < dates.length){
//         start += 5;
//         end += 5;
//         var nextDates = dates.slice(start, end),
//             currentPost = posts.slice(start, end);
//         $(".postDate").css({"display":"none"});
//         $(nextDates).each(function () {
//             $(nextDates).css({"display":"inline-block"});
//             getPost(nextDates, currentPost);
//         });
// 	}
// });
//
// $(".prev").click(function(){
//     if (start > 0){
//         start -= 5;
//         end -= 5;
//         var prevDates = dates.slice(start,end),
//             currentPost = posts.slice(start, end);
//         $("nextDates, .postDate").css({"display":"none"});
//         $(prevDates).each(function () {
//             $(prevDates).css({"display":"inline-block"});
//             getPost(prevDates, currentPost);
//         });
//     }
// });
//
// function getPost (date, post) {
//
//   $(date).each(function() {
//      $(this).click(function() {
//          console.log("ugyg");
//         var index = $(this).index(),
//             display = $(".currentPost").css("display");
//         if (display == "block") {
//             display = "none";
//             $(".currentPost").css("display", display);
//             $(post[index]).css({"display":"block"});
//         }
//      });
// });
// };
function nextPostBlock(start, end){
  var nextDates = $(".postDate").slice(start, end),
      currentPost = $(".currentPost").slice(start, end);
  $(".postDate").hide();
  $(nextDates).each(function () {
      $(nextDates).css({"display":"inline-block"});
  });
}

$( document ).ready(function() {
  var posts = $(".currentPost"),
      start = 0,
      end = 5,
      datesArray = $(".postDate").slice(start,end),
      postsArray = $(".currentPost").slice(start,end);

  $(".postDate, .currentPost").css({"display":"none"});
  $(posts[0]).css({"display":"block"});
  $(datesArray).each(function () {
  	$(this).css({"display":"inline-block"});
  });

  $('.postDate').on('click', function(){
    var current = $(this).data('current');
    $(".currentPost").hide();
    $(".currentPost[data-post='"+current+"']").show();
  });


  $(".next").click(function(){
  	if (end < $(".postDate").length){
          start += 5;
          end += 5;
          nextPostBlock(start, end);
  	}
  });

  $(".prev").click(function(){
      if (start > 0){
          start -= 5;
          end -= 5;
          nextPostBlock(start, end);
      }
  });

});
