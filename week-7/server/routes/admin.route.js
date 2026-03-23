app.post('/admin/signup', (req, res) => {
    // logic to sign up admin
});

app.post('/admin/login', (req, res) => {
    // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
    // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
    // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
    // logic to get all courses
});