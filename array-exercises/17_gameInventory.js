
let inventory = ['Sword', 'Shield', 'Potion', 'Bow', 'Arrows', 'Map'];

// 1 - Display Inventory

console.groupCollapsed(`Display Inventory`);
function displayInventory(inventory){
    console.log(`📜 Your inventory: ${inventory}`);
    return inventory;
}
displayInventory(inventory);
console.groupEnd();

// 2 - Add Item

console.groupCollapsed(`Add item`);
function addItem(itemName){
    console.log (`Adding ${itemName}... ⏳`);
     if (inventory.includes(itemName)){
            console.log(`You already have ${itemName} in your inventory.`);
        }else{
            inventory.push(itemName);
            console.log(`Item added: ${itemName} ✨ `);
        }
console.log(`📜 Your inventory: ${inventory}`)
return inventory;
}
addItem (`Healing Potion`);
addItem (`Map`);
console.groupEnd();
