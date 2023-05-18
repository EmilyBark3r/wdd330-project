<script>
	import Post from "./Post.svelte";
	let name = 'world';
	let posts = [];
	let filteredPosts = [];
	let q = "";
	const url = 'https://dummyjson.com/posts/'
	async function getPosts(url) {
		const response = await fetch(url);
		return response.json();
	}
	async function init() {
		const data = await getPosts(url);
		posts = data.posts;
		filteredPosts = posts;
		console.log(data);
	}
// e is the event
	function searchHandler(e) {
		const query = e.target.value;
		if(query.length >= 3) {
			filteredPosts = filteredPosts.filter((post) => {
				post.title.includes(query) || 
				post.body.includes(query)  ||
				post.tags.indexOf(query) != -1
		});
		} else {
			filteredPosts = posts;
		}
	}
	
	init();
</script>

<main>
	<section>
		<label  for="search">Search:</label>
		<input tye="text" id="search" bind:value={q} on:keyup="">
	</section>
<h1>Hello!</h1>
{#each posts as post}
	<Post post={post} />
{/each}
</main>


<style>
	main {
		font-family: courier;
	}
</style>