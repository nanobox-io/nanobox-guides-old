---
title: Configure Your App
project: java
---

All app/engine configuration is all handled in your boxfile.yml. The Java engine exposes config options, which are specified in the `code.build > config` section of your boxfile.yml.

#### Overview of Basic Boxfile Configuration Options

```yaml
code.build:
  config:
    # Java Settings
    runtime: openjdk8

    # Maven Settings
    maven_version: 3.3

    # Node.js Settings
    nodejs_runtime: nodejs-4.4
```

##### Quick Links
[Java Settings](#java-settings)  
[Maven Settings](#maven-settings)  
[Node.js Settings](#node-js-settings)

### Java Settings
The following setting allows you to define your Java runtime environment.

#### runtime
Specifies which Java runtime and version to use. The following runtimes are available:

- openjdk7
- openjdk8 *(default)*
- oraclejdk8
- sun-jdk6
- sun-jdk7
- sun-jdk8

```yaml
code.build:
  config:
    runtime: openjdk8
```

### Maven Settings
The following setting allows you to configure Maven to your specific needs.

#### maven_version
Defines which version of Maven to use. Available versions depend on which version of Java you're using.

##### Java 6
- 3.0
- 3.1
- 3.2

##### Java 7
- 3.0
- 3.1
- 3.2
- 3.3

##### Java 8
- 3.0
- 3.1
- 3.2
- 3.3

```yaml
code.build:
  config:
    maven_version: 3.3
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
Whatever web server you decided to use with your Scala app is up to you. Just be sure the necessary config files are included in your project.

#### Your Web Server Must Listen on Port 8080
In your web server configuration file, make sure the server listens on port 8080 for HTTP/HTTPS requests. All HTTP/HTTPS requests are forwarded to port 8080. This cannot be changed.

### Provide a Start Command
Every web component needs a start command that starts the web server. This is specified in your boxfile.yml.

```yaml
web.site:
  start: 'java -jar target/app.jar'
```

## Other boxfile.yml Options
There are many other configuration options available in the boxfile.yml that are not unique to the Scala engine. These are all covered in the [boxfile.yml documentation](https://docs.nanobox.io/app-config/boxfile/).
