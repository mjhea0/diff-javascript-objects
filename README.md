# diff-javascript-objects

Given two arrays of objects return a new array showing the structural differences between the two.

## Steps

1. Fork/Clone
1. `npm i`
1. `npm test`

## Example

### Inputs

```javascript
const oldList = [
  { id: 1, name: 'Michael', quantity: 9 },
  { id: 2, name: 'Charlie', quantity: 8 },
  { id: 3, name: 'Robert', quantity: 7 }
];

const updatedList = [
  { id: 1, name: 'Michael', quantity: 8 },
  { id: 3, name: 'Peter', quantity: 99 },
  { id: 4, name: 'Ashley', quantity: 6 }
];
```

### Output

```javascript
[
  { id: 1, type: 'CHANGE', quantity: 8 },
  { type: 'REMOVED', id: 2 },
  { id: 3, type: 'CHANGE', name: 'Peter', quantity: 99 },
  { id: 4, name: 'Ashley', quantity: 6, type: 'ADD' }
]
```
