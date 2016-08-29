---
title: Configure Your App
project: nodejs
---

All app/engine configuration is all handled in your boxfile.yml. The Node.js engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of boxfile.yml Configuration Options
```yaml
code.build:
  config:
    # Node.js Settings
    runtime: nodejs-4.4
```

### Node.js Settings
Very little Node.js configuration is required when using the [Node.js engine](https://github.com/nanobox-io/nanobox-engine-nodejs) and is only necessary if you need to deviate from the defaults.

#### runtime
Specifies which Node.js runtime and version to use. The following runtimes are available:

- nodejs-0.8
- nodejs-0.10
- nodejs-0.12
- nodejs-4.0
- nodejs-4.1
- nodejs-4.2
- nodejs-4.3
- nodejs-4.4
- nodejs-5.0
- nodejs-5.1
- nodejs-5.2
- nodejs-5.3
- nodejs-5.4
- nodejs-5.5
- nodejs-5.6
- nodejs-5.7
- nodejs-5.8
- nodejs-5.9
- nodejs-6.0
- nodejs-6.1
- nodejs-6.2
- iojs-2.3

```yaml
code.build:
  config:
    runtime: 'nodejs-4.4'
```


## Configure Your Web Server

### Your Web Server Must Listen on Port 8080
In your web server configuration, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'node server.js'
```
