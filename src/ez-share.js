
/** variables */
const facebook = document.querySelectorAll(".facebook");

var ezShare = (function (x) {
  "use strict";

  var options = {
    facebook: function (params) {
      return `https://www.facebook.com/sharer/sharer.php?u=${params.url}${params.hashtags ? `&hashtag=%23${params.hashtags}` : ""
        }`;
    },
  }


  x.execute = function () {
    facebook.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const hashtags = item.getAttribute("data-hashtags");
        const params = { url, hashtags: hashtags ? hashtags.replace(/,/g, "%23") : "" };
        const shareUrl = options.facebook(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

  }

  return x;

})({});

