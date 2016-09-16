---
title: Installing & Updating Plugins
project: wordpress
---

WordPress plugins are a major reason WordPress is so widely used. They provide a really simple way to quickly and easily extend WordPress to fit your specific needs.

Installing and updating plugins requires modifying the filesystem, which is why it's typically done through SFTP. However this poses a problem since the filesystem is read-only in production and sim apps on Nanobox. Luckily, Nanobox allows you to launch a local dev environment that gives you full write access to your filesystem where you can install and update plugins.

## Run WordPress in Dev
If you walked through the [Setting Up WordPress on Nanobox](/wordpress/) guide, that you've already created a dev environment in your local Nanobox virtual machine (VM). If you don't have a dev environment setup, the instructions are outlined in the
[Run WordPress in Dev](/wordpress/#run-wordpress-in-dev) section of that guide.

### Start Your WordPress app in Dev
The quickest way to start your app in dev is to run:

```bash
$ nanobox dev run
```

This will start your dev environment if it's not running, then run the [start commands specified in your boxfile.yml](/wordpress/advanced/boxfile-explained/#start).

## Install & Update Plugins Like You Would Normally
When using WordPress in dev, you can manage plugins the same way you normally would. You can either manually download plugins and include them in your `wp-content/plugins` directory or you can install/upgrade plugins through your WordPress admin panel in your dev app.

![Install Plugins](/wordpress/img/wp-plugins.png)

## Build & Deploy into Sim & Production
Once plugins are installed/updated in dev, you can generate a new build and deploy into `sim` for testing, then into production. The following guides walk through each:

[Simulate a Full WordPress Deploy](/wordpress/test-in-sim)  
[Deploy WordPress to Production](/wordpress/deploy-to-production)

### Active Plugins in Each Environment
When you deploy a build to sim or production updated with new plugins, you'll need to go into your WP admin panel in each environment and activate the plugin.

## Don't Store Plugins in a Network Directory
Network directories are stored in your persistent network file-storage and are shared between all web nodes. It can be tempting to specify `wp-content/plugins` or `wp-conent` as a `network_dirs` in your boxfile.yml, but this is a bad idea. Here's why:

### Slow Performance
Requests to network directories must traverse your app's network, adding latency to every request. While this latency is minimal, it can add up very quickly.

### Bytecode Caching
If you're using a bytecode cache like xCache or OPcache, PHP will cache it's first response it gets back from a file in your filesystem. If that file gets updated, PHP will never see it since a response is already cached.

If you're running in a multi-node web component, things can get even more complicated. Each node will store its own bytecode cache, potentially resulting in out-of-sync nodes serving inconsistent results.
