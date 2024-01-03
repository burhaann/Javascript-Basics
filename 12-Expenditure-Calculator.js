/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySum = {};
  transactions.forEach((element) => {
    if (!categorySum[element.category]) {
      categorySum[element.category] = 0;
    }
    categorySum[element.category] += element.price;
  });

  return Object.entries(categorySum).map(([key, value]) => ({
    category: key,
    totalSpent: value,
  }));
}

const transactions = [
  {
    itemName: "Pizza",
    category: "Food",
    price: 300,
    timestamp: 1656,
  },
  {
    itemName: "Jeans",
    category: "Clothing",
    price: 5000,
    timestamp: 1657,
  },
  {
    itemName: "Linkedin Premium",
    category: "Career",
    price: 450,
    timestamp: 1658,
  },
  {
    itemName: "Netflix",
    category: "Entertainment",
    price: 2000,
    timestamp: 1659,
  },
  {
    itemName: "Panipuri",
    category: "Food",
    price: 100,
    timestamp: 1660,
  },
  {
    itemName: "Disney+",
    category: "Entertainment",
    price: 1000,
    timestamp: 1661,
  },
  {
    itemName: "Twitter Blue",
    category: "Career",
    price: 650,
    timestamp: 1662,
  },
];

console.log(calculateTotalSpentByCategory(transactions));
