<script>
export let tags = [];
</script>

<ul>
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		list-style-type: none;
	}
	li {
		padding: .2em .5em;
		border: 1px solid;
	}
</style>