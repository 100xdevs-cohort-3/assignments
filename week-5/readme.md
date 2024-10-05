# week 5 notes

> Notes : https://petal-estimate-4e9.notion.site/HTTP-Deep-dive-d59b6336fa5a46daa56c21063578d400

## Headers

HTTP headers are key-value pairs sent between a client (like a web browser) and a server in an HTTP request or response. They convey metadata about the request or response, such as content type, auth information etc.

> Imp. to note that server can also set headers in the response. Like it does in case of preflight request.

Headers get sent automatically. They are attached by default.

> Good practice : You should always specify the `content-type` header like `application/json`

## Middlewares

In Express.js, **middleware** refers to functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as

1. Modifying the request or response objects.
2. Ending the request-response cycle.
3. Calling the next middleware function in the stack.
4. The only way to pass data between the middlewares is to put the data in `req` object


## Route specific middlewares

**Route-specific middleware** in Express.js refers to middleware functions that are applied only to specific routes or route groups, rather than being used globally across the entire application

```jsx
const express = require('express');
const app = express();

// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
  
>💡Only the `/special` endpoint runs the middleware

## Commonly used middlware

### express.json()
- This middleware is essential for handling JSON payloads sent by clients in `POST` or `PUT` requests.

- `express.json()` inturn returns a function that is passed to app.use as a middleware

Like `app.use(express.json())` 




