<script lang="ts">
</script>

<svelte:head>
    <title>Lukas Stanek</title>
</svelte:head>

<main class="w-full h-full absolute flex flex-col justify-around items-center bg-gray-800">
	<div class="py-10 px-16 flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8">
		<div class="w-60 h-60 overflow-hidden rounded-full">
			<img src="leogang_focused_low.jpg" alt="portrait" />
		</div>
		<div class="flex flex-col text-white font-mono">
			<h1 class="text-2xl font-bold">Lukas Stanek</h1>
			<span>Software Engineering</span>
			<span>Kotlin, Flutter, Svelte</span>
		</div>
		
	</div>
	<div></div>

</main>

<style global lang="postcss">
	@tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* @layer base {
        button {
            @apply 'focus:outline-none';
        }
    } */
</style>
