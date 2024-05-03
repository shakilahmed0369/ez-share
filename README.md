# 🚀 ezShare - JavaScript Social Share Plugin

ezShare is a lightweight JavaScript plugin for easy sharing of content on various social media platforms.

## Installation

You can install ezShare by including the JavaScript file in your project. You have two options:

1. **Download**: You can download the JavaScript file from the [GitHub repository](https://github.com/shakilahmed0369/ez-share) and include it in your project manually.

2. **CDN**: Alternatively, you can use the ezShare script directly from the CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/shakilahmed0369/ez-share/dist/ez-share.min.js"></script>
```

## Usage

To activate ezShare, call the `execute` method after the DOM has loaded:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  ezShare.execute();
});
```

## Available Platforms and Parameters

| Platform  | Class      | Parameters   | Description                                                                                     |
|-----------|------------|--------------|-------------------------------------------------------------------------------------------------|
| Facebook  | `ez-facebook` | `data-url`, `data-hashtags` | Share URL to Facebook. Optionally add hashtags. If no `data-url`, current URL will be used.  |
| LinkedIn  | `ez-linkedin` | `data-url`   | Share URL to LinkedIn. If no `data-url`, current URL will be used.                             |
| Pinterest | `ez-pinterest` | `data-url`, `data-description`, `data-media` | Share URL to Pinterest. Optionally add description and media. If no `data-url`, current URL will be used. |
| Pocket    | `ez-pocket` | `data-url`   | Save URL to Pocket for later reading. If no `data-url`, current URL will be used.               |
| Reddit    | `ez-reddit` | `data-url`, `data-title` | Share URL to Reddit. Optionally add title. If no `data-url`, current URL will be used.          |
| Telegram  | `ez-telegram` | `data-url`, `data-text` | Share URL to Telegram. Optionally add custom message. If no `data-url`, current URL will be used.|
| X         | `ez-x`     | `data-url`, `data-text`, `data-via`, `data-hashtags` | Share URL to Twitter. Customize tweet text, source, and hashtags. If no `data-url`, current URL will be used. |

## Example

```html
<!-- Use any HTML element (button, a, etc.) with appropriate classes and data attributes -->
<button class="ez-facebook" data-url="https://example.com/article" data-hashtags="news,technology">Share on Facebook</button>
<a href="#" class="ez-linkedin" data-url="https://example.com/article">Share on LinkedIn</a>
<div class="custom-button ez-pinterest" data-url="https://example.com/article" data-description="Check out this cool website!" data-media="https://example.com/image.jpg">Pin it on Pinterest</div>
<!-- Add buttons for other platforms as needed -->
```

## Note

- ezShare does not provide any predefined styles for the share buttons. Users have the freedom to style them according to their design preferences.
- Ensure each button element has the appropriate class (`ez-PLATFORM`) and data attributes (`data-url`, `data-description`, etc.) for the desired platform and parameters.
