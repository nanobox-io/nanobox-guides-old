# Nanobox Guides

These are the repo used to build the Nanobox guides for using popular languages, frameworks, CMSs, and services on [Nanobox](https://nanobox.io). If you'd like like to contribute to these guides, checkout the [contribution guidelines and instructions](https://guides.nanobox.io/contribute/).

## Running the Guides in Nanobox
Clone this repo to your local machine. If you havent't already, [install Nanobox](https://docs.nanobox.io/getting-started/install-nanobox/). From inside the repo, run:

```bash
$ nanobox build --skip-compile
```

Once the build is complete, start a dev container and console into with:

```bash
$ nanobox dev console
```

Inside the console, run:

```bash
$ bundle install
```

Once the gems are loaded, start middleman server:

```bash
$ bundle exec middleman server
```

Before accessing the guides in your browser, add the 'guides.nanobox.dev' DNS alias to your dev app:

```bash
$ nanobox dev dns add guides.nanobox.dev
```

Ok, now you can access the running guides at guides.nanobox.dev:4567 in your browser. Changes to the guides will auto-refresh the browser.
