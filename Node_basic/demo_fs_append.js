var fs = require("fs");

//create a file named mynewfile1.txt:
appendTest = () =>
  fs.appendFile("mynewfile1.txt", "Hello content2!", function (err) {
    if (err) throw err;
    console.log("Appen Saved!");
  });

//append content at the end of the file:
appendUpdate = () =>
  fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
    if (err) throw err;
    console.log("Updated!");
  });

//create an empty file named mynewfile2.txt:
openTest = () =>
  fs.open("mynewfile2.txt", "w", function (err, file) {
    if (err) throw err;
    console.log("Open file Saved!");
  });

//Delete the file mynewfile2.txt:
deleteTest = () =>
  fs.unlink("mynewfile2.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
  });

//create a file named mynewfile3.txt:
writeTest = () =>
  fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
    if (err) throw err;
    console.log("Write File!");
  });

//Replace the file with a new one:
writeReplaced = () =>
  fs.writeFile("mynewfile3.txt", "This is my text.", function (err) {
    if (err) throw err;
    console.log("Replaced File!");
  });

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
renameTest = () =>
  fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
    if (err) throw err;
    console.log("File Renamed!");
  });

appendTest();
appendUpdate();
openTest();
deleteTest();
writeTest();
writeReplaced();
renameTest();
