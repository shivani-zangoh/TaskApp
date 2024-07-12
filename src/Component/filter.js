let item=['100','40','30','200','550','120'];
let smallCost = item.filter(function(costItem){
 return costItem<200;
})
 console.log(smallCost);