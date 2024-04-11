// Core Module
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Membuat folder dan file
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (q) => {
      resolve(q);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const fileJSON = fs.readFileSync("data/contacts.json", "utf-8");
  const contactsJSON = JSON.parse(fileJSON);

  contactsJSON.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contactsJSON));
  console.log("Terimakasih sudah memasukan data!");
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
