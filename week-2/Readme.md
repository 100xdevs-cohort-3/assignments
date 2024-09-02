# Week 2 notes

## Promises Vs Callback approach

```js
// this is promise based approach

// promisifiedSetTimeout(3000).then(callback)
promisifiedSetTimeout(3000).then(() =>
  console.log("this is where you can pass callback")
);

// this is callback based approach

// setTimeout(callback, 3000)

setTimeout(() => {
  console.log(`Callback based approach`);
}, 3000);
```

