---
title: Simulate a Full WordPress Deploy
project: wordpress
---

## Generate a New Build & Deploy
Nanobox provides a simulated environment that simulates a full production deploy. Once you're done making changes in dev and are ready to test your app, generate a new build and deploy the build into a 'sim' environment.

```bash
# Generate a new build
$ nanobox build

# Deploy to your sim environment
$ nanobox sim deploy
```

## Import Data & Uploads Into Sim
Although you may have already imported your data and uploads into your dev environment, dev and sim environments are completely isolated from each other. You'll need to import data and uploads into your sim environment.

[Importing Data](data-managment/import/)  
[Importing Uploads](uploads-management/import/)

## Add a DNS Alias to Your Sim App
```bash
$ nanobox sim dns add your-domain.sim
```

With the DNS added, you'll be able to access and test your running sim app at `http://your-domain.sim`.

## Test WordPress in Sim
With your app fully deployed into a simulated environment, run through and test everything. Once everything is functional and tested, you're ready to [deploy WordPress to production](deploy-to-production/).
