const players = [
    { id: 1, name: 'Colly', timePlayed: 200, points: 54, online: false },
    { id: 2, name: 'Peter', timePlayed: 34, points: 34, online: true },
    { id: 3, name: 'John', timePlayed: 87, points: 67, online: true },
    { id: 4, name: 'Amber', timePlayed: 12, points: 21, online: false },
    { id: 5, name: 'Rich', timePlayed: 90, points: 1221, online: false },
    { id: 6, name: 'Keylis', timePlayed: 140, points: 22, online: true },
    { id: 7, name: 'Mager', timePlayed: 354, points: 124, online: false },
    { id: 8, name: 'Nidl', timePlayed: 11, points: 60, online: true },
    { id: 9, name: 'Anchor', timePlayed: 78, points: 45, online: false },
];


const jsonObj = JSON.stringify(players)
console.log(jsonObj)

console.log(typeof (jsonObj));

const parserJson = JSON.parse(jsonObj)
console.log(parserJson)
console.log(typeof parserJson)