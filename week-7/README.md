# Coursify
**Your task is to create a course-selling website where admin can publish/create courses and user can purchase courses.**

# Frontend

**There are two Client folders**
- if you are **not** familiar with **React**, pick `client-easy`.
- if you are familiar with **React**, pick `client`.

**Tips**: you can try cloning the UI of **app.100xdevs.com**.
# Backend

# Admin Routes Structure

### POST /admin/signup 
**Description**: Creates a new admin account.  
**Input**: 
```json
{ 
  "username": "admin", 
  "password": "pass" 
}
```  
**Output**: 
```json
{ 
  "message": "Admin created successfully", 
  "token": "jwt_token_here" 
}
```

---

### POST /admin/login 
**Description**: Authenticates an admin. It requires the admin to send username and password in the headers.  
**Input**:  
**Headers**: 
```json
{ 
  "username": "admin", 
  "password": "pass" 
}
```  
**Output**: 
```json
{ 
  "message": "Logged in successfully", 
  "token": "jwt_token_here" 
}
```

---

### POST /admin/courses 
**Description**: Creates a new course.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Body**: 
```json
{ 
  "title": "course title", 
  "description": "course description", 
  "price": 100, 
  "imageLink": "https://linktoimage.com", 
  "published": true 
}
```  
**Output**: 
```json
{ 
  "message": "Course created successfully", 
  "courseId": 1 
}
```

---

### PUT /admin/courses/:courseId 
**Description**: Edits an existing course. `courseId` in the URL path should be replaced with the ID of the course to be edited.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Body**: 
```json
{ 
  "title": "updated course title", 
  "description": "updated course description", 
  "price": 100, 
  "imageLink": "https://updatedlinktoimage.com", 
  "published": false 
}
```  
**Output**: 
```json
{ 
  "message": "Course updated successfully" 
}
```

---

### GET /admin/courses 
**Description**: Returns all the courses.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Output**: 
```json
{ 
  "courses": [ 
    { 
      "id": 1, 
      "title": "course title", 
      "description": "course description", 
      "price": 100, 
      "imageLink": "https://linktoimage.com", 
      "published": true 
    }, 
    ... 
  ] 
}
```

# User Routes Structure

---

### POST /users/signup 
**Description**: Creates a new user account.  
**Input**: 
```json
{ 
  "username": "user", 
  "password": "pass" 
}
```  
**Output**: 
```json
{ 
  "message": "User created successfully", 
  "token": "jwt_token_here" 
}
```

---

### POST /users/login 
**Description**: Authenticates a user. It requires the user to send username and password in the headers.  
**Input**:  
**Headers**: 
```json
{ 
  "username": "user", 
  "password": "pass" 
}
```  
**Output**: 
```json
{ 
  "message": "Logged in successfully", 
  "token": "jwt_token_here" 
}
```

---

### GET /users/courses 
**Description**: Lists all the courses.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Output**: 
```json
{ 
  "courses": [ 
    { 
      "id": 1, 
      "title": "course title", 
      "description": "course description", 
      "price": 100, 
      "imageLink": "https://linktoimage.com", 
      "published": true 
    }, 
    ... 
  ] 
}
```

---

### POST /users/courses/:courseId 
**Description**: Purchases a course. `courseId` in the URL path should be replaced with the ID of the course to be purchased.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Output**: 
```json
{ 
  "message": "Course purchased successfully" 
}
```

---

### GET /users/purchasedCourses 
**Description**: Lists all the courses purchased by the user.  
**Input**:  
**Headers**: 
```json
{ 
  "Authorization": "Bearer jwt_token_here" 
}
```  
**Output**: 
```json
{ 
  "purchasedCourses": [ 
    { 
      "id": 1, 
      "title": "course title", 
      "description": "course description", 
      "price": 100, 
      "imageLink": "https://linktoimage.com", 
      "published": true 
    }, 
    ... 
  ] 
}
```