Create an HTTP server with Express that handles arithmetic operations through POST requests at the following routes:

1. `http://localhost:3000/sum`
2. `http://localhost:3000/subtract`
3. `http://localhost:3000/multiply`
4. `http://localhost:3000/divide`

For each route, send a POST request with the numbers to be processed in the request body. Here's the format for the request body:

```json
{
  "a": 1,
  "b": 2
}
```


**For Example:**

Request and Response Details:

1. Sum
- URL: `http://localhost:3000/sum`
- Request Body:
  ```json
  {
    "a": 5,
    "b": 3
  }
  ```
- Response:
  ```json
  {
    "result": 8
  }
  ```

2. Subtract
- URL: `http://localhost:3000/subtract`
- Request Body:
  ```json
  {
    "a": 10,
    "b": 4
  }
  ```
- Response:
  ```json
  {
    "result": 6
  }
  ```

3. Multiply
- URL: `http://localhost:3000/multiply`
- Request Body:
  ```json
  {
    "a": 7,
    "b": 6
  }
  ```
- Response:
  ```json
  {
    "result": 42
  }
  ```

4. Divide
- URL: `http://localhost:3000/divide`
- Request Body:
  ```json
  {
    "a": 8,
    "b": 2
  }
  ```
- Response:
  ```json
  {
    "result": 4
  }
  ```