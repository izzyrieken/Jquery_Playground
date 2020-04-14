const app = {

  move: function () {
    $('.box').keydown(function () {
      $(this).toggleClass('moveme2')
    });

    $('.circle').hover(function () {
      $(this).toggleClass('moveMe')
    });
  },

  color: function() {
    $('.box').dblclick(function () {
      $(this).toggleClass('colorChange')
    });

    $('.circle').dblclick(function () {
      $(this).toggleClass('colorChange')
    });
  },

  size: function() {
    $('.box').hover(function () {
      $(this).toggleClass('transform')
    });

    $('.circle').click(function () {
      $(this).toggleClass('transform')
    });
  }
}
