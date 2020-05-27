$(function () {
  
  //固定ヘッダー
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("body").css("margin-top", "0");
    }
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });
});

// スマホ用メニュー
$(function() {
  'use strict';
  
  $('#show').on('click', function () {
    document.body.className = "menu-open";
  });

  $('#hide').on('click', function () {
    document.body.className = "";
  });

  $('#cover').on('click', function () {
    document.body.className = "";
  });
});