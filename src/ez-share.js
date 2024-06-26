/*
 * ezShare - JavaScript Social Share Plugin
 * Version: 1.0.0
 * License: MIT License
 * Author: Shakil Ahmed
 * GitHub: https://github.com/shakilahmed0369
 * Website: https://shakilahmeed.com
 * 
 * ezShare is a lightweight JavaScript plugin that enables easy sharing of content on various social media platforms.
 */

"use strict";

var ezShare = (function (ez) {
  /** variables */
  const facebook = document.querySelectorAll(".ez-facebook");
  const linkedin = document.querySelectorAll(".ez-linkedin");
  const pinterest = document.querySelectorAll(".ez-pinterest");
  const pocket = document.querySelectorAll(".ez-pocket");
  const reddit = document.querySelectorAll(".ez-reddit");
  const telegram = document.querySelectorAll(".ez-telegram");
  const x = document.querySelectorAll(".ez-x");

  var options = {
    facebook: function (params) {
      return `https://www.facebook.com/sharer/sharer.php?u=${params.url}${params.hashtags ? `&hashtag=%23${params.hashtags}` : ""
        }`;
    },
    linkedin: function (params) {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${params.url}`;
    },
    pinterest: function (params) {
      return `https://pinterest.com/pin/create/button/?url=${params.url}&description=${params.description
        }${params.media ? `&media=${params.media}` : ""}`;
    },
    pocket: function (params) {
      return `https://getpocket.com/edit.php?url=${params.url}`;
    },
    reddit: function (params) {
      return `https://www.reddit.com/submit?title=${params.title ?? ""}&url=${params.url}`;
    },
    telegram: function (params) {
      return `https://telegram.me/share/url?url=${params.url}${params.text ? `&text=${params.text}` : ""
        }`;
    },
    x: function (params) {
      return `https://twitter.com/intent/tweet?url=${params.url}&text=${params.text
        }${params.via ? `&via=${params.via}` : ""}${params.hashtags ? `&hashtags=${params.hashtags}` : ""}`;
    },
  }

  ez.execute = function () {
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

    linkedin.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const params = { url };
        const shareUrl = options.linkedin(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

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

    pocket.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const params = { url: url };
        const shareUrl = options.pocket(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

    reddit.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const title = item.getAttribute("data-title");
        const params = { url: url, title: title };
        const shareUrl = options.reddit(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

    reddit.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const title = item.getAttribute("data-title");
        const params = { url: url, title: title };
        const shareUrl = options.reddit(params);
        window.open(shareUrl, "_blank", "width  =640,height=440");
      });
    });

    telegram.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const text = item.getAttribute("data-text");
        const params = { url: url, text: text };
        const shareUrl = options.telegram(params);
        window.open(shareUrl, "_blank", "width=640,height=440");
      });
    });

    x.forEach(item => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const url = item.getAttribute("data-url") || location.href;
        const text = item.getAttribute("data-text");
        const via = item.getAttribute("data-via");
        const hashtags = item.getAttribute("data-hashtags");
        const params = { url: url, text: text, via: via, hashtags: hashtags };
        const shareUrl = options.x(params);
        window.open(shareUrl, "_blank", "width=640,height=440");
      });
    });
  }

  return ez;

})({});