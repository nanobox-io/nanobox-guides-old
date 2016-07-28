---
title: Web Server Settings
project: php
---

The following setting is used to select which web server to use in your application.

- [webserver](#webserver)
- [document_root](#document_root)

### webserver
The following web servers are available:

- apache *(default)*
- nginx
- builtin ([PHP's built-in web server](http://php.net/manual/en/features.commandline.webserver.php) available in 5.4+)

```yaml
code.build:
  config:
    webserver: 'apache'
```

*Web server specific settings are available in the [Apache Settings](apache/), [Nginx Settings](nginx/), & [Built-In PHP Web Server Settings](#builtin/) guides.*

### document_root
The public root of your web application. For instance, if you like to house your app in `/public` for security or organizational purposes, you can specify that here. The default is the `/`.

```yaml
code.build:
  config:
    document_root: '/'
```
