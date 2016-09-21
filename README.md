# Nanobox Guides

These are the repo used to build the Nanobox guides for using popular languages, frameworks, CMSs, and services on [Nanobox](https://nanobox.io). If you'd like like to contribute to these guides, checkout the [contribution guidelines and instructions](https://guides.nanobox.io/contribute/).

## Running the Guides in Nanobox
Clone this repo to your local machine. If you havent't already, [install Nanobox](https://docs.nanobox.io/getting-started/install-nanobox/). From inside the repo, run:

```bash
# build the code, but skip the compile process
nanobox build --skip-compile

# start your dev environment
nanobox dev start

# add a convenient way to access the dev guides from the browser
nanobox dev dns add guides.nanobox.dev

# console into the dev container
nanobox dev console

# install gems
bundle install

# start middleman server
bundle exec middleman server
```

With the Middleman server running, you can access the guides at `guides.nanobox.dev:4567` in your browser of choice. Changes to the guides will auto-refresh the browser.
