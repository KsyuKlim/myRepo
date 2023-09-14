const newDev = new Dev(1, 3000);

Object.defineProperty(newDev, 'id', {
  value: 1,
  writable: false, 
  configurable: false, 
});

newDev.id = 15; // Видасть помилку TypeError: Cannot assign to read-only property 'id' of object '#<Dev>'
delete newDev.id; // Видасть помилку TypeError: Cannot delete property 'id' of #<Dev>

for (let key in newDev) {
  console.log(newDev[key]); // Виведе почергово 1 та 3000
}
