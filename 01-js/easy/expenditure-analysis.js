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
  // Your code goes here
  if (transactions.length > 0) {
    // get all the categories from the array of objects
    const categories = transactions.map((transaction) => transaction.category);
    // create a new array of categories without repetitions using the Set function
    const uniqueCategories = [...new Set(categories)];
    // for each category in the new array find and sum the price and return the result directly without storing in mutltiple variables
    const result = uniqueCategories.map((category) => {
      const totalSpent = transactions.reduce((acc, transaction) => {
        if (transaction.category === category) {
          return acc + transaction.price;
        }
        return acc;
      }, 0);
      return { category, totalSpent };
    });
    return result;
  }
  return [];
}

module.exports = calculateTotalSpentByCategory;
