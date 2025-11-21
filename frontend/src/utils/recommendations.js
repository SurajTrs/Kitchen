// AI-based Recommendation Engine (Simple Algorithm)

export const getRecommendations = (userOrders, allItems) => {
  if (!userOrders || userOrders.length === 0) {
    return allItems.slice(0, 6);
  }

  const orderedCategories = userOrders.map(order => order.CategoryName);
  const categoryFrequency = {};
  
  orderedCategories.forEach(cat => {
    categoryFrequency[cat] = (categoryFrequency[cat] || 0) + 1;
  });

  const topCategory = Object.keys(categoryFrequency).reduce((a, b) => 
    categoryFrequency[a] > categoryFrequency[b] ? a : b
  );

  const recommended = allItems.filter(item => item.CategoryName === topCategory);
  
  return recommended.slice(0, 6);
};

export const getSimilarItems = (currentItem, allItems) => {
  return allItems
    .filter(item => item.CategoryName === currentItem.CategoryName && item._id !== currentItem._id)
    .slice(0, 4);
};
