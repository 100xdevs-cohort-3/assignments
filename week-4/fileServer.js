/*
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */

    const express = require('express');
    const app = express();
    const fs = require('fs');
    const path = require('path');
    const bodyParser = require('body-parser')

    app.use(bodyParser.json());

    const mkdir = "/Users/anshgupta/Desktop/assignments/week-4";

    app.get('/files', (req, res) => {
        fs.readdir(path.join(mkdir, 'files'), (err, fileNames) => {
            if(err) {
                console.error('error: '+ err);
                res.status(400).json({message: "Error reading the directory."});
            }

            else if(fileNames === []) {
                res.status(400).json({message: "Empty."})
            }

            else {
                res.status(200).json({fileNames});
            }
        })
    })

    app.get('/files/:filename', (req, res) => {
        const fileName = req.params.filename;
        fs.readdir(path.join(mkdir, 'files'), (err, fileNames) => {
            if(err) {
                console.error("error: " +err);
                res.status(404).json({message: "Error reading the directory."});
            }
            else if(fileNames === []) {res.status(400).json({message: "empty."})}

            const index = fileNames.findIndex((file) => {
                return file === fileName;
            });

            if(index === -1) {res.status(404).json({message: "filename doesn't match."})}

            else {
                fs.readFile(path.join(mkdir, 'files', fileName), 'utf-8', (err, data) => {
                    if(err) {
                        console.error("error: " +err);
                        res.status(400).json({message: "Error reading the file."});
                    }
                    else if(data === ''){
                        res.status(400).json({message: "Empty."});
                    }
                    else{
                        res.status(200).json({data});
                    }
                })
            }
        })
    })

    app.use((req, res) => {
        res.status(404).json({message: "Enter the correct route."})
    });

    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    })