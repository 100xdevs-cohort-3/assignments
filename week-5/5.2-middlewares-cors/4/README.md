You have to create a middleware for rate limiting a users request based on their username passed in the header

You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second

-   If a user sends more than 5 requests in a single second, the server should block them with a 404.
-   User will be sending in their user id in the header as 'user-id'
-   You have been given a numberOfRequestsForUser object to start off with which clears every one second