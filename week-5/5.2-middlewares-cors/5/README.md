You have to create a middleware for logging the number of errors on a server

You have been given an express server which has a few endpoints.

Your task is to

1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
