---
title: Adding a New Article
project: contribute
---

To add a new article, there are just a few things you need to know.

## Article Frontmatter
The Nanobox Guides are built using [Middleman](https://middlemanapp.com/), a Ruby-based static site generator. Middleman has what it calls "frontmatter", which allows you to provide specific information about the article that can be and is referenced to build the static output. Frontmatter is simply a collection of yaml key-value pairs at the beginning of the article.

Every article needs two pieces of information: title and project.

```yaml
---
title: Article Title
project: project-name
---
```

### title
As you can probably guess, this specifies the title of the article.

### project
This specifies to which project the article is related. Defining the project is important because this piece of frontmatter is used to reference and populate all project-specific information. It references the [project.yml file](/contribute/project-yml/) for the specific project. When defining the project, it should match the name of the associated project.yml file without the `.yml` extension.

## Github Flavored Markdown
Guide content is written using [Github Flavored Marked (GFM)](https://guides.github.com/features/mastering-markdown/). GFM is really simple and really flexible. It makes created syntax-highlighted code blocks really easy.

## File Extensions
Middleman uses file extensions as to know which templating processors to run when building the static file. Because articles are are written in markdown and eventually parsed into HTML, file extensions for articles should be `.html.md`.

## Update Project Navigation
Each project's navigation is built from the [project.yml](/contribute/project-yml/) file. When adding an article, be sure to update the [articles list in the project.yml file](/contribute/project-yml/#articles)
