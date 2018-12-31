# query-string-data

[![Build Status](https://travis-ci.org/kenigbolo/query-string-data.svg?branch=master)](https://travis-ci.org/kenigbolo/query-string-data)

A tiny library that helps convert a javascript object into valid query string parameters.

## Example Usage

```javascript
const {queryString} = require('js-query-string-object')
const queryObject = {
  firstName: 'Stephen',
  lastName: 'Kenigbolo'
}
console.log(queryString(queryObject))

// expected output -> ?firstName=Stephen&lastName=Kenigbolo
```

## Note

This package was built as a tiny utility to enable query string formatting from javascript objects which are being used as query params for get request. If you require a more extensive use case or robust parameter support kindly make a feature request and lets work together to help you with whatever your request might be.