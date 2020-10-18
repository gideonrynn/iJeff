# iJeff
Fish care upkeep repository using Node, Sequelize, Express, and React


# Setup

1. Once logged in with [GitHub account](https://github.login/), clone the repo locally using link:

  ```sh
    git clone https://github.com/gideonrynn/jeff.git
  ```

2. Install dependencies:
```sh
  npm i
```

3. Load createjeff.sql, update password in local .env file.

4. Run in command line.
```sh
  npm start
```

Also see: [Cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


# Seed

## Seed only

1. Update seed and save

2. Run sequelize seed command
```sh
  npx sequelize db:seed:all
```

## Seed and clear table

1. Update seed and save

2. In server.js, update to dbsync force:true

3. Run in command line.
```sh
  node server
```

4. Exit

5. Run sequelize seed command
```sh
  npx sequelize db:seed:all
```

6. In server.js, update to dbsync force:false
