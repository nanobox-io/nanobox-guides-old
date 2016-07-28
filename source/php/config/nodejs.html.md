---
title: Node.js Settings
project: php
---

Many PHP applications utilize Javascript tools in some way. The most common use is static asset compilation. This engine allows you to specify which Node.js runtime you'd like to use.

### nodejs_runtime
Specifies which Node.js runtime and version to use. You can view the available Node.js runtimes in the [Node.js engine documentation](https://github.com/nanobox-io/nanobox-engine-nodejs#nodejs_runtime).

```yaml
code.build:
  config:
    nodejs_runtime: 'nodejs-4.2'
```
