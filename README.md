# starter-react-express

My minimal starter for a React + Express project.

## Project setup
```
nvm use && npm install
```

### Bundles client w/hot-reloading and starts server for development
```
npm run dev
```

### Bundles client and starts server for production
```
npm run prod
```

### Lint files
```
npm run lint
```

### Running in docker
```
docker build -t starter-react-express .
docker run --rm starter-react-express -p 3000:3000
```
