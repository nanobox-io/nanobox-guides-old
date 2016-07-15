---
title: project.yml File
project: contribute
---

Every project needs a `.yml` stored inside of `/data` that houses information about the project. The name of the file should be name of the project. For example:

`ruby.yml` `rails.yml` `nodejs.yml`

## Project Data
The purpose of the project.yml file is to provide vital information about each project. This information is used to populate titles, icons, link paths, and project navigation.

#### Example project.yml
```yml
name: 'Rails'
icon: 'rails.svg'
root: '/rails/'

articles:
  - name: 'Getting Started'
    path: ''
  - name: 'Rails boxfile.yml'
    path: 'rails-boxfile/'
  - name: 'Configuring Services'
    path: 'configuring-services/'
    articles:
      - name: 'Database Config'
        path: 'configuring-services/database-config'

versions:
  - version: 5.0
    articles:
      - name: 'Getting Started'
        path: ''
  - version: 4.2
    default: true
```

### name
Specifies the name of the project. This is used to populate the header title in the project.

```yaml
name: 'Project Name'
```

### icon
Specifies which icon should be used for the project. All project icons should be SVGs and stored in `/images/icons`. If you're creating a new project, just [let us know](https://github.com/nanobox-io/nanobox-guides/issues/new), and we can create a new icon for you.

```yaml
icon: 'project.svg'
```

### root
Specifies the root of the project. All project files are housed inside a subdirectory inside `/source`. The project directory should be the name of the project. When specifying the root in your project.yml, be sure to include both a leading slash and a trailing slash.

```yaml
root: '/project-name/'
```

### articles
Specifies the article list for each project/version. This is used to build the left-nav for the project. Each article needs a `name` and a  `path`.

```yaml
articles:
  - name: 'Root Article Name'
    path: ''
  - name: 'Article Name'
    path: 'article-path/'
```

##### Things to Know About Article paths
1. For the root article of the project/version, the path should be an empty string `''`.
2. All article paths, other than the root article, **should include a trailing slash, but no leading slash**.
3. Article paths should be relative to your [project root](#root).

#### Sub-Articles
Articles can also include "sub-articles". Sub-articles can be nested as deeply as necessary. Sub-article paths should be relative to your [project root](#root). Please note that nested structure of your articles should be reflected in the file-structure of the project.

```yaml
articles:
  - name: 'Article Name'
    path: 'article-path/'
    articles:
      - name: 'Sub-Article Name'
        path: 'article-path/sub-article-path/'
```

### versions
Specifies different versions of the project with corresponding articles for each. More information is available in the [Project Versioning guide](/contribute/project-versioning/).

```yaml
versions:
  - version: 5.0
    articles:
      - name: 'Getting Started'
        path: ''
  - version: 4.2
    default: true
```
