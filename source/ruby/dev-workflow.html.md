---
title: Dev Workflow
project: ruby
---

## Develop in Your Dev Platform
The Nanobox CLI provides a local development platform that allows you to develop your code in a local, virtualized environment identical to your production environment. To start your your dev platform along with your app's data components, run the following **inside your project root**.

#### Start Your Dev Platform & Data Components
```bash
$ nanobox dev up
```

### Console Into Your Dev Platform
When the dev platform is started, all data components are provisioned and started, but web and worker processes are not. To start these, console into dev platform using the `console` command:

```bash
$ nanobox dev console
```

Once consoled in, you can run dependency managers such as [Bundler](http://bundler.io/) and start your web and worker process. When it comes to starting your web/worker processes, you have two options. You can either manually run each of the `start` commands, or you can use the `dev run` command (oustide of your dev console). This will run all your start commands for you.

#### Starting Web/Worker Processes
```bash
$ bin/puma config.ru
$ rb workers/jobs.rb

# Starting all web/worker processes (outside of your dev console)
$ nanobox dev run
```

### Craft Some Code
With your dev platform running and webs/workers started, you're ready to develop code. When running a dev platform, your local codebase is mounted into your Nanobox VM. Any changes locally will be reflected in your virtualized app.

## Start Your Sim Platform
Once your code is at a point where you're ready to test it, you can deploy it into a local simulated platform. The Nanobox CLI's `sim` command manages the simulated environment. Running the following command will start your sim platform, generate a deployable build package, deploy the package into the simulated environment, then provision and start all app components. This will perfectly simulate a production deploy:

#### Start Your Sim Platform & App Components
```bash
$ nanobox sim up
```

When running a sim platform, your local code isn't mounted into your VM, so to apply any changes to your code, you'll need to generate a new build and deploy that build into your sim platform:

```bash
# Generate a new build
$ nanobox build

# Deploy the build into your sim platform
$ nanobox sim deploy
```

## Deploy to Production
Once everything is tested locally, you're ready to deploy to production.

#### Deploying to Production
```bash
$ nanobox deploy
```

If you haven't already, you'll need to [link your local codebase to your production app](https://docs.nanobox.io/cli/link/).
