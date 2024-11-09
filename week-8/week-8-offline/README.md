> 03-mongo

1 ## Create a course selling website

#Description

You need to implement a course selling app. Make sure you setup your own mongodb

instance before starting.

5//mongodb-srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/

6 It needs to support two types of users

e

ules

7

1. Admins

8

2. Users

9

10

Admins are allowed to sign up, create courses.

11

Users are allowed to sign up, view courses, purchase courses. This in the real world would translate to an app like udemy.

12

ock.json

13

14

son

This one doesn't use authentication the right way. We will learn how to do that in the next assignment.

nd

M

15

For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).

-with-jwt-auth

16

This is the reason why this assignment doesn't have a sign in route.

d

17

18

You need to use mongodb to store all the data persistently.



# Routes

21

22

23

S

24

25

26

27

28

json

-jwt-auth

29

30

M

31

32

33

Description: Creates a new admin account.

Input Body: { username] 'admin', password: 'pass' }

Output: { message: 'Admin created successfully' }

POST/admin/courses

Description: Creates a new course.

Input: Headers: { 'username': 'username', 'password': 'password' }, Body: {

title: 'course title', description: 'course description', price: 100,

imageLink: 'https://linktoimage.com'>

Output: { message: 'Course created successfully', courseId: "new course id" }

GET/admin/courses

Description: Returns all the courses.

Input: Headers: { 'username': 'username', 'password': 'password' }

Output: { courses: [ { id: 1, title: 'course title', description: 'course

description', price: 100, imageLink: 'https://linktoimage.com', published


## User routes

POST/users/signup I

Description: Creates a new user account.

Input: { username: 'user', password: 'pass' }

Output: { message: 'User created successfully' }

GET /users/courses

Description: Lists all the courses.

Input: Headers: { 'username': 'username',. 'password': 'password' }

Output: { courses: [ { id: 1, title: 'course title', description: 'course

description', price: 100, imageLink: 'https://linktoimage.com', published:

true }, ...]}

POST/users/courses/:courseId

Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.

Input: Headers: { 'username': 'username', 'password': 'password' }

Output: { message: 'Course purchased successfully' }

GET /users/purchasedCourses

Description: Lists all the courses purchased by the user.

Input: Headers: { 'username': 'username', 'password': 'password' }

Output: { purchasedCourses: [ { id: 1, title: 'course title',description: 'course description', price: 100, imagelink: 'https://linktoimage.com", published: true }, ...}}


