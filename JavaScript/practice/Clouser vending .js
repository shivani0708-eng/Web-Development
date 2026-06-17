function vendingMachine(){
    let insertedValue=0;
    let inventory={
        soda:{price:50, stock:5},
        Chips:{price:20, stock:3},
    };
    return{
        insertCoin(coin){
            insertedValue += coin;
            console.log(`Inserted value: {insertedValue}`);

        },
        buyItem(item){
            let itemExist=inventory[item];
            //console.log(itemExist);
            if(itemExist){
              if(itemExist.price > insertedValue){
                console.log("Insert morecoins! ");
              }
              else if(itemExist.stock <=0){
                console.log("Bhai khatam ho gaya sorry!");
              }
              else{
                insertedValue-=itemExist.price;
                itemExist.stock-=1;
                console.log("Here is your item!!!!!!");
              }

           }
        },
    };
}

let user=vendingMachine();
user.insertCoin(20);
user.buyItem("Chips");