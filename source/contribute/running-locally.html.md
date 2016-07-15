---
title: Running Guides Locally
project: contribute
---

After cloning the guides to your local machine, it's simple to run and work on them. The guide are built using [Middleman](https://middlemanapp.com), a Ruby-based static site generator.

### 1. Install Dependencies
With the project cloned locally, `cd` into the `nanobox-guides` directory and run `bundle install`.

```bash
$ cd path/to/nanobox-guides

$ bundle install
```

This will install all the Ruby gems necessary to run Middleman.

### 2. Run Middleman Server
To run the Middleman server, just run `bundle exec middleman server` in your project directory.

```bash
$ bundle exec middleman server
```

This will start a local web-server and file-watcher that auto-refreshes when changes are detected.

## Running the Guides in Nanobox
Nanobox doesn't currently support file-watchers, but it will. Because of this, the auto-refresh will not work when running Middleman inside Nanobox. Once Nanobox supports file-watchers, this guide will be updated with steps that walk through running the guides in a local Nanobox VM.
