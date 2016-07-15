---
title: Project Versioning
project: contribute
---

If a project has different versions that require different sets of guides, you can create version-specific content and navigation for each.

## Defining Versions
Versions are defined in the [project's .yml file](/contribute/project-yml/). Each version includes the list of articles associated with the version.

#### Example of Project Versions
```yaml
versions:
  - version: 7.0
    default: true

  - version: 5.6
    articles:
      - name: 'Getting Started'
        path: ''
      - name: 'boxfile.yml'
        path: 'boxfile/'

  - version: 5.5
    articles:
      - name: 'Getting Started'
        path: ''
      - name: 'boxfile.yml'
        path: 'boxfile/'

  - version: 5.4
    articles:
      - name: 'Getting Started'
        path: ''
      - name: 'boxfile.yml'
        path: 'boxfile/'
```

### Setting a Default Version
The default version is loaded whenever users navigate to the project guide. To set a default version, just include `default: true` under the version you'd like to be the default.

```yaml
versions:
  - version: 7.0
    default: true
```

Default versions should not include a list of articles. They will use the [base article list](/contribute/project-yml/#articles) provided for the project.

## Version File-Structure
Content for non-default version should all be housed in a subdirectory of the project directory. The name of the version directory must match the `version` value in the project's .yml file. For example, if you have `version: 5.0`, the name of the version subdirectory must be `5.0`.

Content for the default version is housed in the root of the project directory.
