# query-string-data

A tiny library that helps convert a javascript object into valid query string parameters.

## Example Usage

```javascript
const {queryString} = require('query-string-object')
const queryObject = {
  firstName: 'Stephen',
  lastName: 'Kenigbolo'
}
console.log(queryString(queryObject))

// expected output -> ?firstName=Stephen&lastName=Kenigbolo
```
