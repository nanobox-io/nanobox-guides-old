---
title: Configure Your App
project: go
---

All app/engine configuration is all handled in your boxfile.yml. The Go engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of Boxfile Configuration Options
```yaml
code.build:
  config:
    # Go Settings
    runtime: go-1.6
    package: 'github.com/username/code'
    fetch: 'go get'
    build: 'go build'

    # Node.js Settings
    nodejs_runtime: nodejs-4.4
```

### Go Settings
The following setting allows you to define your Go runtime environment.

#### runtime
Specifies which Golang runtime to use. The following runtimes are available:

- go-1.4  
- go-1.5  
- go-1.6 *(default)*

```yaml
code.build:
  config:
    runtime: go-1.6
```

#### package *(required)*
Specifies the path to the directory in which your code is stored. This can be a local or remote directory.

```yaml
code.build:
  config:
    package: 'github.com/username/code'
```

#### fetch
Defines the command to run to load dependencies in the build process.

```yaml
code.build:
  config:
    fetch: 'go get'
```

#### build
Defines the command to run to compile your code in the build process.

```yaml
code.build:
  config:
    build: 'go build'
```

### Node.js Settings
Many applications utilize Javascript tools in some way. This engine allows you to specify which Node.js runtime you'd like to use.

#### nodejs_runtime
Specifies which Node.js runtime and version to use. You can view the available Node.js runtimes in the [Node.js engine documentation](https://github.com/nanobox-io/nanobox-engine-nodejs#runtime).

```yaml
code.build:
  config:
    nodejs_runtime: nodejs-4.4
```

## Configure Your Web Server
Whatever web server you decide to use with your Go app is up to you. Just be sure the necessary config files are included in your project.

#### Your Web Server Must Listen on Port 8080
In your web server configuration file, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: './site'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Scala engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
