---
title: Contributing to the Guides
project: contribute
---

Thanks for your interest in contributing to the Nanobox Guides. These guides is a work in progress, and we are willing to admit that we do not specialize in all languages and frameworks. Chances are you may know one better than we do, and we'd appreciate your input and contribution.

## Contribution Process

1. Fork, then clone the project.

    ```bash
    git clone git@github.com:nanobox-io/nanobox-guides.git
    ```

2. Create your update branch. The branch name should include the name of the project you're updating.

    ```bash
    git checkout -b project-content-update
    ```

3. Commit your changes. ***If you have multiple commits, squash merge them into a single commit (great tutorial [here](https://ariejan.net/2011/07/05/git-squash-your-latests-commits-into-one/))***.

    ```bash
    git commit -am 'Commit Message'
    ```

5. Push to the update branch.

    ```bash
    git push origin project-content-update
    ```

```bash
git push origin project-content-update 'test'
```

6. Create new pull request

## Contribution Guidelines
Pull requests must do the following in order to be merged.

1. Match the style of code already existing in the project.
2. Must not contain any merge conflicts *(Pull and merge master before submitting the pull request)*.
3. Include tests for the modifications in your commit.
