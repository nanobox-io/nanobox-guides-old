---
title: Adding a New Project
project: contribute
---

## Add the Project to projects.yml
`/data/projects.yml` is used to build the guide list on the home page of the Nanobox guides. In order for the project to appear in the list, it must be added to this file. Each project needs four pieces of information: name, icon, link, tags.

```yaml
- name: 'Project Name'
  icon: 'project.svg'
  link: '/project/'
  tags: 'search tags'
```

#### name
Pretty self-explanatory. This is the name of the project.

#### icon
Each project needs an icon svg. Project icons should be stored in `/source/images/icons` If you aren't up to creating, no worries. Just [reach out](https://github.com/nanobox-io/nanobox-guides/issues/new) and we'll create one for you.

#### link
This specifies the link to the root of your project. It should include a leading and trailing slash.

#### tags
Tags are used to search/filter projects on the home page.

## Create a Project .yml File
Every project needs a project.yaml file stored inside of `/data`. This file includes information necessary for building project-specific guides. More information is available in the [project.yml File guide](/contribute/project-yml/).

## Create a Project Directory
Each project must have it's own subdirectory inside of `/source`. This directory is what's reference by the [project link](#link). Inside the project directory, create an index.html.md to act as a landing page/root-article for the project.

### Add Project styles
Inside your project directory, be sure to create a `project_styles.scss` file. The simplest thing to do is to copy project styles an existing project and just replace the color variables and the background image.

**Note:** Feel free to [reach out to us](https://github.com/nanobox-io/nanobox-guides/issues/new) to create a header background image for your project.
