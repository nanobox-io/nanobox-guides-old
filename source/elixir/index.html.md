---
title: Getting Started
project: elixir
---

Getting a Elixir app up and running on Nanobox can be done in a few simple steps.

## Install Nanobox
If you haven't already, [download and install Nanobox](https://nanobox.io/download). Nanobox enables you to create virtualized, local development environments identical to production environments deployed through Nanobox.

## Create a boxfile.yml
The first step to using Nanobox is to create a file named `boxfile.yml` in the root of your project. The [boxfile.yml](https://docs.nanobox.io/app-config/boxfile/) houses all configuration for Nanobox apps.

### Specify the Elixir Engine
"Engines" build your code's runtime environment and expose runtime configuration options. Nanobox provides an [official Elixir engine](https://github.com/nanobox-io/nanobox-engine-elixir). Engines are specified in the [`code.build`](https://docs.nanobox.io/app-config/boxfile/code-build/) of your boxfile.yml.

To use the official Nanobox Elixir engine, specify `elixir` as your `engine`:

```yaml
code.build:
  engine: elixir
```

## Setup Your Project
With the Elixir engine specified, you're ready to setup your project. The [Project Setup](./project-setup/) doc walks through this process.
