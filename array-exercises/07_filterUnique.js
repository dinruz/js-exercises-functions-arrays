
function unique(arr) {
    let uniqueArr=[];
    for (item of arr){
        if (!uniqueArr.includes(item)){ //if uniqueStr doesn't include item, add to empty string for uniques
            uniqueArr.push(item);
        }
    }
return uniqueArr;
}
 
let strings = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-O"];
console.log(unique(strings)); 