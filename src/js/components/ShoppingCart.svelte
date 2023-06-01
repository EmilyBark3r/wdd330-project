<script>
  import { getLocalStorage } from "../utils.mjs";
  const cartItems = getLocalStorage("so-cart");
</script>

<h2>My Cart</h2>

<ul class="product-list">
  {#each cartItems as item}
    <li class="cart-card divider">
      <a
        href="/product_pages/index.html?productid={item.Id}"
        class="cart-card__image"
      >
        <img src="{item.Images.PrimarySmall}" alt="{item.Name}">
      </a>
      <a href="/product_pages/index.html?productid={item.Id}">
        <h2 class="card__name">{item.Name}</h2>
      </a>
      <p class="cart-card__color">{item.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <p class="cart-card__price">${item.FinalPrice}</p>
      <button class="clearItem" data-id="${item.Id}">X</button>
    </li>
  {/each}
</ul>