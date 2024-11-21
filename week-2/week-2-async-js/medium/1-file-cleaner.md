## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

let fs = require("fs");


// read the file - 
fs.readFile("a.txt","utf-8", (err,data)=>{
  console.log(data)
  const content = data.replace(/\s+/g, " ");
  console.log(content)
  fs.writeFile("a.txt", content,(err)=>{
    if (err == null){
      console.log("success")
    }
  })
})
