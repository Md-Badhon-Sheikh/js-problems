function woodQuantity(chareQuantity, tableQuantity, bedQuantity){
    const parChareWood=2;
    const parTableWood = 3;
    const parBedWood= 8;

    const chareTotalWood = chareQuantity * parChareWood;
    const tableTotalWood = tableQuantity * parTableWood;
    const bedTotalWood = bedQuantity * parBedWood;

    const totalWood = chareTotalWood + tableTotalWood+ bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(1,2,1);
console.log("Total Wood : ", wood);