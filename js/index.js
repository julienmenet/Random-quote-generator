var rqg = new Array()
 rqg[0] = '<blockquote><h2>There are two ways to be rich: One is by acquiring much, and the other is by desiring little<br /><footer> Jackie French Koller</footer></h2></blockquote>'
  rqg[1] = '<blockquote><h2>The simplest things are often the truest<br /><footer> Richard Bach</footer></h2></blockquote>'
  rqg[2] = '<blockquote><h2>Smile, breathe and go slowly.<br /><footer> Thich Nhat Hanh</footer></h2></blockquote>'
  rqg[3] = '<blockquote><h2>Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.<br /><footer> Antoine de Saint-Exupery</footer></h2></blockquote>'
  rqg[4] = '<blockquote><h2>Reduce the complexity of life by eliminating the needless wants of life, and the labors of life reduce themselves.<br /><footer> Edwin Way Teale</footer></h2></blockquote>'
  rqg[5] = '<blockquote><h2>Less is more.<br /><footer> Mies Van Der Rohe</footer></h2></blockquote>'
  rqg[6] = '<blockquote><h2>Make things as simple as possible but no simpler.<br /><footer> Albert Einstein</footer></h2></blockquote>'
 
  
  var msg;
  function bird() {
  tweet($(msg).text()); 
  }

  function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags=julienme.net&text= '   + encodeURIComponent(message));
  }

  $('#birdie').on('click', bird);
  $(document).ready(function() {
  $("#quoteIt").on("click", function()   {
    var randomquote=Math.floor(Math.random()*(rqg.length));
    msg=rqg[randomquote];
    $(".message").html(msg);
    });
    });
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help
