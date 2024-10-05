# Notes

https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fa

# Code 
https://github.com/100xdevs-cohort-3/week-6-2


In token or jwt approach you send token everytime explicitly using headers


In case of cookies, cookie is sent automatcally
When user signs in , the server sets the header `set-cookie` is sent by the server
Now, for every request this cookie is sent automatically


JWT is self sufficient it itself and can contain information
we don't have to search to whom this token belongs to, we can encode info like username and id of the user in JWT token itself,

but in case of randomly generated token we have to query it to know whom this token belongs to.


