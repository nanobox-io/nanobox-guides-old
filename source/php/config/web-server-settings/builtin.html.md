---
title: Built-In Web Server Settings
project: php
---

The following setting is used to configure the built-in PHP web server available in PHP 5.4+. These settings only apply when using `builtin` as your `webserver`.

### builtin\_document\_root
The public root of your web application. For instance, if you like to house your app in `/public` for security or organizational purposes, you can specify that here. The default is the `/`.

**Note:** If both this setting and the [global `document_root`](../#document_root) are set, the `builtin_document_root` will take precedence.

```yaml
code.build:
  config:
    builtin_document_root: '/'
```
