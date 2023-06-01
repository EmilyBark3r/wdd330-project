<script>
  import { getProductsByCategory } from "../externalServices.mjs";
  import ProductSummary from "./ProductSummary.svelte";

  // this is how we make a prop in svelte
  export let category;
  // if you are looking at this thinking that's strange to just stop with a promise
  // you would be right.  This will make more sense in a bit...stay tuned.
  let promise = getProductsByCategory(category);
  let blackList = ["989CG", "880RT"];
</script>

<h2>Top products: {category}</h2>
{#await promise}
  Loading
{:then products}
  <ul class="product-list">
    {#each products as product}
      {#if !blackList.includes(product.Id)}
        <li class="product-card">
          <ProductSummary {product} />
        </li>
      {/if}
    {/each}
  </ul>
{/await}
