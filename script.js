let itemCounts = {
    1: 0,
    2: 0,
    3: 0
  };
  
  function addToCart(productId) {
    itemCounts[productId]++;
    updateItemCount(productId);
  }
  
  function removeFromCart(productId) {
    if (itemCounts[productId] > 0) {
      itemCounts[productId]--;
      updateItemCount(productId);
    }
  }
  
  function updateItemCount(productId) {
    const itemCountSpan = document.getElementById(`itemCount${productId}`);
    itemCountSpan.textContent = itemCounts[productId];
  }