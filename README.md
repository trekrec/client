trekrec
====

###Getting Started###

Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone https://github.com/trekrec/trekrec.git
	> cd trekrec
	> npm install
	> gulp -> navigates you to localhost:8000
```

To run server:

```
  > cd server/
  > nodemon --harmony server.js
```

To test database queries:

```
  > cd server/db/pg/specs
  > mocha --harmony QUERY_SPEC_NAME.js
```
