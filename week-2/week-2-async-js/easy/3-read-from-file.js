

const fs = require('fs');

// ------------- For Everything Synchronous --------------------

//
// function write(filepath, done) {
//   const data = ' This book has so much contents .';
//   fs.writeFileSync(filepath, data, 'utf8');
//   done();
// }
//
// function read(filepath, done) {
//   const content = fs.readFileSync(filepath, 'utf8');
//   console.log(content);
//   done();
// }
//
// function complete1() {
//   console.log("File has successfully read.");
// }
// function complete2() {
//   console.log("File has successfully written.");
// }
//
// console.log("---1--- before started read write func -------");
//
// write('a.txt', complete2);
// read('a.txt', complete1);
//
// console.log("---2--- After completetion of read write func -----");
//
// let sum = 0;
//
// for (let i = 0; i < 1000000000; i++) {
//   sum += 1;
// }
//
// console.log("---3--- After completion of expensive operation ------");


// ------------------- For Asynchronous using setTimeout----------------------


// function read(filepath, done) {
//   setTimeout(function () {
//     const content = fs.readFileSync(filepath, 'utf8');
//     console.log(content);
//     done();
//   }, 1000);
// }
//
// function complete1() {
//   console.log("File has successfully read.");
// }
//
//
// console.log("---1--- before started read func -------");
//
// read('a.txt', complete1);
//
// console.log("---2--- After completetion of read func -----");
//
// let sum = 0;
//
// for (let i = 0; i < 1000000000; i++) {
//   sum += 1;
// }
//
// console.log("---3--- After completion of expensive operation ------");



// ------------------- For Asynchronous using callback----------------------


// function read(filepath, done) {
//   fs.readFile(filepath, 'utf8', function (err, data) {
//     (err) ? console.log("Error") : console.log(data);
//   });
// }
//
// console.log("---1--- before started read func -------");
//
// read('a.txt', function complete1() {
//   console.log("File has successfully read.");
// }
// );
// console.log("---2--- After completetion of read func -----");
//
// let sum = 0;
//
// for (let i = 0; i < 1000000000; i++) {
//   sum += 1;
// }
//
// console.log("---3--- After completion of expensive operation ------");



// ------------------- For Asynchronous using promise----------------------

//
// function read(filepath) {
//   return new Promise(function (resolve) {
//     fs.readFile(filepath, 'utf8', function (err, data) {
//       (err) ? console.log("Error") : console.log(data);
//     });
//     resolve();
//   });
// }
//
// console.log("---1--- before started read func -------");
//
// read('a.txt').then(function complete() {
//   console.log("File has successfully read.");
// }
// );
// console.log("---2--- After completetion of read func -----");
//
// let sum = 0;
//
// for (let i = 0; i < 1000000000; i++) {
//   sum += 1;
// }
//
// console.log("---3--- After completion of expensive operation ------");


// ------------------------------------------------------------------------


// function read(filepath) {
//   return new Promise(function (resolve) {
//     resolve(filepath);
//   });
// }
//
// console.log("---1--- before started read func -------");
//
// read('a.txt').then(function complete(path) {
//   fs.readFile(path, 'utf8', function (err, data) {
//     if (err) {
//       console.log("Error")
//     } else {
//       console.log(data);
//       console.log("File has successfully read.");
//     }
//   });
// });
// console.log("---2--- After completetion of read func -----");
//
// let sum = 0;
//
// for (let i = 0; i < 1000000000; i++) {
//   sum += 1;
// }
//
// console.log("---3--- After completion of expensive operation ------");
//

// ------------------- For Asynchronous using promise----------------------

function read(filepath) {
  return new Promise(function (resolve) {
    fs.readFile(filepath, 'utf8', function (err, data) {
      if (err) {
        console.log("Error")
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}



console.log("---1--- before started read func -------");

async function main() {
  try {
    await read('a.txt');
    console.log("File has successfully read.");
  } catch (error) {
    console.error(error);

  }
}

main();

console.log("---2--- After completetion of read func -----");

let sum = 0;

for (let i = 0; i < 1000000000; i++) {
  sum += 1;
}

console.log("---3--- After completion of expensive operation ------");


