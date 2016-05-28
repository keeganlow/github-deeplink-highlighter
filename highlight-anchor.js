$(function() {

  highlightAchorTarget = function() {
    var highlightColor = 'rgb(248, 238, 199)';

    var hash = window.location.hash.substring(1);

    var targetItem = $('#' + hash);

    // scope the selection to the header for comments on PRs, issues, etc
    if (targetItem.find('.timeline-comment-header').length > 0) {
      targetItem = targetItem.find('.timeline-comment-header')
    }

    var oldBackground = targetItem.css('background-color');

    targetItem.css({
      background: highlightColor,
      transition: 'background-color 3s ease'
    });

    setTimeout(function() {
      targetItem.css({
        background: oldBackground,
        transition: 'background-color 5s ease'
      });
    }, 3000);
  };

  highlightAchorTarget();

  $(window).on('hashchange',function(){ 
    highlightAchorTarget();
  });

});
