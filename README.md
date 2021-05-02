# [dantran.fr](https://dantran.fr)

Frontend of https://dantran.fr, deployed with CloudFlare Pages

Playing with React and the following backend stack:
* Python (FastAPI)
* MongoDB
* MinIO

See [MrDanao/api](https://github.com/MrDanao/api)


## Run locally

The following requirements must be installed on your local host:
* Node.js (only tested with v15.14.0)
* Yarn (only tested with v1.22.10)

Optional: [nvm-sh/nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of Node.js

### Development

Install dependencies:

```
$ yarn install
```

Run it (development mode!):

```
$ yarn start
```

Access to the website: `https://<localhost|host_ip>:3000`

It will be recompiled at each changes

### Tests

No tests for the moment
