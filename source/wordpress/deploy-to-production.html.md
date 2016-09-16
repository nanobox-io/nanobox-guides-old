---
title: Deploy WordPress to Production
project: wordpress
---

With everything tested locally in both dev and sim, you're ready to deploy to production.

## Launch a New App
Login to your [Nanobox dashboard](https://dashboard.nanobox.io) and [launch a new app](https://docs.nanobox.io/getting-started/launch-app/).

## Link to Your New App
In order to deploy to your new app, you'll need to link it to your local WordPress codebase. This is done using the `nanobox link` command:

```bash
$ nanobox link app-name
```

## Deploy to Your App
With the app linked, you can deploy with:

```bash
$ nanobox deploy
```

Your app's build package will be uploaded to Nanobox and deployed to your app and all your app's components (web, database, storage) will be provisioned.

## Import Data & Uploads
With your production app up and running, you can import your database and uploads if necessary.

[Importing Data](data-managment/import/)  
[Importing Uploads](uploads-management/import/)

## Enjoy Your Live WordPress App
Congratulations. Your WordPress app is now live. The here's a few next steps you may want to go through:

[Use a Custom Domain](https://docs.nanobox.io/domains-networking/custom-domains/)  
[Adding SSL/TLS](https://docs.nanobox.io/domains-networking/ssl-tls/adding/)  
[Adding Team Members](https://docs.nanobox.io/teams/app-add-member/)
