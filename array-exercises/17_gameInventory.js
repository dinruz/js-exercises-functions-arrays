// Declaring inventory and helper function (case-insensitivity)

let inventory = ['Sword', 'Shield', 'Potion', 'Bow', 'Arrows', 'Map'];

function itemCase(itemName) {
    return (itemName[0].toUpperCase() + (itemName.slice(1, )).toLowerCase());
}

// 1 - Display Inventory

console.groupCollapsed(`Display Inventory`);
function displayInventory(arr) {
    console.log(`[📜] Your inventory: `, arr);
    return arr;
}
displayInventory(inventory);
console.groupEnd();

// 2 - Add Item

console.groupCollapsed(`Add Item`);
function addItem(arr, itemName) {
    console.log(`Adding ${itemName}... ⏳`);
    let searchItem = itemCase(itemName);
    if (arr.includes(searchItem)) {
        console.log(`[❗] You already have ${searchItem} in your inventory.`);
    } else {
        arr.push(searchItem);
        console.log(`[➕] Item added: ${searchItem}`);
    }
    console.log(`[📜] Your inventory: `, arr)
    return arr;
}
addItem(inventory, `Healing potion`);
addItem(inventory, `Map`);
console.groupEnd();

// 3 - Remove Item

console.groupCollapsed(`Remove Item`);
function removeItem(arr, itemName) {
    console.log(`Attempting to remove ${itemName}... ⏳`)
    let searchItem = itemCase(itemName);
    if (arr.includes(searchItem)) {
        let ind = arr.indexOf(searchItem);
        arr.splice(ind, 1);
        console.log(`[➖] ${searchItem} removed from inventory.`);
    } else {
        console.log(`[❗] Item ${searchItem} not found in inventory.`);
    }
    console.log(`[📜] Your inventory: `, arr);
    return arr;
}
removeItem(inventory, 'Shield');
removeItem(inventory, 'NonExistentItem');
console.groupEnd();

// 4 - Possessing the Item

console.groupCollapsed(`Possesing the Item`);

function hasItem(arr, itemName) {
    let searchItem = itemCase(itemName);
    if (arr.includes(searchItem)) {
        console.log(`[✔️] You have ${searchItem} in your inventory.`);
    } else {
        console.log(`[❌] You do not have ${searchItem} in your inventory.`);
    }
    return;
}
hasItem(inventory, 'Sword');
hasItem(inventory, 'Magic Orb');
console.groupEnd();

// 5 - Sort Inventory

console.groupCollapsed(`Sort Inventory`);
function sortInventory(arr) {
    console.log(`Sorting inventory... ⏳`)
    arr.sort();
    console.log(`[📜] Your inventory: ${arr}`)
    return arr;
}
sortInventory(inventory);
console.groupEnd();

// 6 - Get Item Lengths & Get Short Items

console.groupCollapsed('Get Item Lengths & Get Shorrt Items');
function getItemLengths(arr) {
    console.log(`[📜] Your inventory: ${arr}`);
    const lengths = arr.map(item => (item.length));
    console.log(`Item name lengths:`, lengths);
    return lengths;
}
getItemLengths(inventory);

function getShortItems(arr, maxLength) {
    let shortItems = arr.filter(item => (item.length <= maxLength));
    console.log(`Short items (<= ${maxLength} chars):`, shortItems);
    return shortItems;
}
getShortItems(inventory, 5);
console.groupEnd();

// 8 - Calculate Item Values

console.groupCollapsed('Item Values');
const itemValues = { 'Sword': 100, 'Potion': 20, 'Arrows': 5, 'Map': 30 };

function calculateTotalValue(arr, itemVal) {
    const totalValue = arr.reduce((sum, item) => {
        const itemValue = itemVal[item] || 0;
        return sum + itemValue;
    }, 0);
    console.log(`Calculating total inventory value... ⏳`);
    console.log(`[💰] Total inventory value: ${totalValue} gold`);
    console.log(`[📜] Your inventory: ${arr}`);
    return totalValue;
}
calculateTotalValue(inventory, itemValues);
console.groupEnd();

// <--- TESTING THE IMPLEMENTATION--->

console.groupCollapsed('🧪 Testing the Implementation 🧪');

let myAdventureInventory = ['Steel sword', 'Leather armor', 'Health potion', 'Magical map'];

console.log("--- My Adventure Inventory Test ---");

console.log("My Adventure Inventory: Initial State");
displayInventory(myAdventureInventory);

console.log("Adding New Gear...");
addItem(myAdventureInventory, 'Elixir of Life');
addItem(myAdventureInventory, 'Magical map'); // This should fail gracefully
addItem(myAdventureInventory, 'Rope');

console.log("Removing Unwanted Items...");
removeItem(myAdventureInventory, 'Leather armor');
removeItem(myAdventureInventory, 'Rusty dagger'); // This should fail as it's not present
removeItem(myAdventureInventory, 'Health potion');

console.log("Is the Gear Present?");
hasItem(myAdventureInventory, 'Steel sword');
hasItem(myAdventureInventory, 'Elixir of life');
hasItem(myAdventureInventory, 'Health potion'); // This should fail as it was removed

console.log("Sorting My Inventory...");
sortInventory(myAdventureInventory);

console.log("Analyzing Item Data (Map/Filter)...");
const myLengths = getItemLengths(myAdventureInventory);
console.log(`Item lengths array returned: ${myLengths}`);
const myShortItems = getShortItems(myAdventureInventory, 6);
console.log(`Short items array returned: ${myShortItems}`);

console.log("Calculating Total Value...");
const myPriceList = {
    'Steel sword': 150,
    'Leather armor': 75,
    'Health potion': 20,
    'Magical map': 50,
    'Elixir of life': 200,
    'Rope': 5
};
const myTotalValue = calculateTotalValue(myAdventureInventory,myPriceList);
console.log(`Total inventory value: ${myTotalValue} gold`);

console.log("My Adventure Inventory: Final State");
displayInventory(myAdventureInventory);


console.groupEnd();