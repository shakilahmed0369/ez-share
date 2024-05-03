
"use strict";

/** variables */
const facebook = document.querySelectorAll(".ez-facebook");
const linkedin = document.querySelectorAll(".ez-linkedin");
const pinterest = document.querySelectorAll(".ez-pinterest");
const pocket = document.querySelectorAll(".ez-pocket");


var ezShare = (function (x) {

  var options = {
    facebook: function (params) {
      return `https://www.facebook.com/sharer/sharer.php?u=${params.url}${params.hashtags ? `&hashtag=%23${params.hashtags}` : ""
        }`;
    },
    linkedin: function(params) {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${params.url}`;
    },
    pinterest: function(params) {
      return `https://pinterest.com/pin/create/button/?url=${params.url}&description=${
        params.description
      }${params.media ? `&media=${params.media}` : ""}`;
    },
    pocket: function(params) {
      return `https://getpocket.com/edit.php?url=${params.url}`;
    },
  }


  x.execute = function () {
    /**
     * available prams
     * url
     * hashtags
     */
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
    
    /**
     * available params
     * url
     */
    linkedin.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const params = { url };
        const shareUrl = options.linkedin(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

    /**
     * available params
     * url
     * description
     * media
     */
    pinterest.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const description = item.getAttribute("data-description");
        const media = item.getAttribute("data-media");
        const params = { url: url, description: description, media: media };
        const shareUrl = options.pinterest(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

    /**
     * available params
     * url
     */
    pinterest.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const params = { url: url };
        const shareUrl = options.pocket(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });
  }

  return x;

})({});

