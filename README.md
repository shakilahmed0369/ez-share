# 🚀 ezShare - JavaScript Social Share Plugin

ezShare is a lightweight JavaScript plugin that enables easy sharing of content on various social media platforms.

## Installation

To use ezShare, simply include the JavaScript file in your project:

```javascript
<script src="ezShare.js"></script>
```

## Usage

To activate ezShare, call the `execute` method after the DOM has loaded:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  ezShare.execute();
});
```

## Available Platforms and Parameters

| Platform  | Parameters           | Description                                                                                                                                                       |
|-----------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Facebook  | `data-url`, `data-hashtags` | Shares the provided URL to Facebook. Optionally, you can add hashtags to the post. If `data-url` is not provided, the current URL will be used.                |
| LinkedIn  | `data-url`           | Shares the provided URL to LinkedIn. If `data-url` is not provided, the current URL will be used.                                                                 |
| Pinterest | `data-url`, `data-description`, `data-media` | Shares the provided URL to Pinterest. You can also specify a description and media (image or video). If `data-url` is not provided, the current URL will be used. |
| Pocket    | `data-url`           | Saves the provided URL to Pocket for later reading. If `data-url` is not provided, the current URL will be used.                                                  |
| Reddit    | `data-url`, `data-title` | Shares the provided URL to Reddit. You can also specify a title for the post. If `data-url` is not provided, the current URL will be used.                        |
| Telegram  | `data-url`, `data-text` | Shares the provided URL to Telegram. You can include a custom message with the shared URL. If `data-url` is not provided, the current URL will be used.          |
| X         | `data-url`, `data-text`, `data-via`, `data-hashtags` | Shares the provided URL to Twitter. You can customize the tweet text, specify via (source), and add hashtags to the tweet. If `data-url` is not provided, the current URL will be used. |

## Example

```html
<!-- You can use any HTML element like button, a, or any other tag for a shareable button -->
<button class="ez-facebook" data-url="https://example.com/article" data-hashtags="news,technology">Share on Facebook</button>

<a href="#" class="ez-linkedin" data-url="https://example.com/article">Share on LinkedIn</a>

<div class="custom-button ez-pinterest" data-url="https://example.com/article" data-description="Check out this cool website!" data-media="https://example.com/image.jpg">Pin it on Pinterest</div>
<!-- Add buttons for other platforms as needed -->
```

## Note

- ezShare does not provide any predefined styles for the share buttons. Users have the freedom to style them according to their design preferences.
- Ensure that each button element has the appropriate class (`ez-PLATFORM`) and data attributes (`data-url`, `data-description`, etc.) according to the desired platform and parameters.
