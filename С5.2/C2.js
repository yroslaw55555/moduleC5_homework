// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);// XML, который мы будем парсить
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);/* Этап 2. Получение данных */// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml"); // Получение всех DOM-нод
const studentNodes = xmlDOM.querySelectorAll("student");

studentNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const langAttr = nameNode.getAttribute("lang");
  const result = {
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
  };
  console.log(result);
});

const jsonString = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }
`;

const data = JSON.parse(jsonString);
const list = data.list;

for (let student of list) {
  const result = {
    name: student.name,
    age: student.age,
    prof: student.prof
  };
  console.log(result);
}
