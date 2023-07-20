var totalPrice = 25; // Initial total price, change it according to the actual total price

function updateQuantity(itemId, amount) {
  var quantityElement = document.querySelector(`#cart-container .cart-item:nth-child(${itemId}) .quantity span`);
  var currentQuantity = parseInt(quantityElement.textContent);
  var newQuantity = currentQuantity + amount;
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  quantityElement.textContent = newQuantity;
  recalculateTotal();
}

function toggleLike(itemId) {
  var likeButton = document.querySelector(`#cart-container .cart-item:nth-child(${itemId}) .like-button`);
  likeButton.classList.toggle('active');
}

function removeItem(itemId) {
  var cartItem = document.querySelector(`#cart-container .cart-item:nth-child(${itemId})`);
  cartItem.remove();
  recalculateTotal();
}

function recalculateTotal() {
  totalPrice = 0;
  var cartItems = document.querySelectorAll('#cart-container .cart-item');
  cartItems.forEach(function(cartItem) {
    var price = parseFloat(cartItem.querySelector('.price').textContent.replace('$', ''));
    var quantity = parseInt(cartItem.querySelector('.quantity span').textContent);
    totalPrice += price * quantity;
  });
  document.getElementById('total-price').textContent = 'Total: $' + totalPrice.toFixed(2);
}
