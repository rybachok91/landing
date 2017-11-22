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
});

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
    var visibleElement = $('.postDate:visible');
    var index = $(this).index();
    var koza = $(".currentPost");
    $(koza).hide();
    $(koza[index]).fadeIn('slow');
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

  // Вывод отзывов на страницу

    var feedbacks = $(".feedback-text");
    $(feedbacks).hide(); //скрываем все отзывы
    $(feedbacks[0]).show(); // показываем первый отзыв

    $('.client-image img').on('click', function(){ // при клике на кртинку выводим соответствующий отзыв
        var index = $(this).index();
        $(feedbacks).hide('slow');
        $(feedbacks[index]).show('slow');
    });

    // Ajax загрузка отзывов
    $('#moreFeedbacks').on('click', function(event) {
        event.preventDefault();
        $.ajax({
            url: "http://localhost/tanya/php/loadFeedbacks.php",
            type: "GET",
            dataType: "json",
            success: function(data) {
                $.each(data, function (idx, obj) {
                    console.log(obj.name, obj.feedback);
                    console.log(idx);
                    $('.feedback-text h2').text(obj.name);

                    //     console.log(newName[idx]);
                    //     $(newName[idx]).text(obj.name);
                })
            }
        });
        }
    );
});


