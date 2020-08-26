# VUTTR

**Bossabox Challange.**

## Index

- [API Rest](#-api-rest)
- [Techs And Tools](#-tech-and-tools)
- [Getting Started](#-getting-started)
- [End Points](#-end-points)
- [Author](#-author)

## API Rest

>The Application is a simple repository to manager tools and their name, links, descriptions and tags. [bossabox](https://app.bossabox.com/)

### Tech and Tools

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite3](https://sqlite.org/version3.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

#### Getting Started

>Yarn and NPM **REQUIRED**.

```bash
  # Clone this repository.
  $ git clone https://github.com/cezarcozta/api-vuttr.git


  # Access repository cloned folder
  $ cd api-vuttr

  # Install all dependencies
  $ yarn

  # Run Database migrations
  $ yarn typeorm migration:run

  # Run development server
  $ yarn dev
```

#### End Points

- Tools

  ```bash
    GET:    /tools
    GET:    /tools/:id
    GET:    /tools/?tag=desing
    POST:   /tools
    PUT:    /tools/:id
    DELETE: /tools/:id
  ```

- Tags

  ```bash
    GET:    /tags
    GET:    /tags/:id
    POST:   /tags
    PUT:    /tags/:id
    DELETE: /tags/:id
  ```

----------------------------------------------------------------------------

#### Developed by

- César Augusto Costa :sunglasses: :sunglasses: :sunglasses:
  - [cezarcozta.com](https://cezarcozta.com)
  - cezarcozta@gmail.com
  - [Linkedin/cezarcozta](www.linkedin.com/in/cezarcozta)
  - [Twitter@cezarcozta](www.twitter.com/cezarcozta)
  - [Instagram@cezarcozta](www.instagram.com/cezarcozta)
  - [Facebook/cezarcozta](www.facebook.com/cezarcozta)
