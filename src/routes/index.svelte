<script lang="ts">

    import MapPinIcon from 'svelte-feather-icons/src/icons/MapPinIcon.svelte'
    import ToolIcon from 'svelte-feather-icons/src/icons/ToolIcon.svelte'
    import BriefcaseIcon from 'svelte-feather-icons/src/icons/BriefcaseIcon.svelte'
    import MailIcon from 'svelte-feather-icons/src/icons/MailIcon.svelte'
    import Volume2Icon from 'svelte-feather-icons/src/icons/Volume2Icon.svelte'

</script>

<svelte:head>
    <title>Lukas Stanek</title>
	<meta name="description" content="My digital business card.">
</svelte:head>

<main class="w-full h-full absolute flex flex-col justify-around items-center bg-gray-800">
	<div class="py-10 px-16 flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-8  justify-center items-center">
		<div class="w-60 h-60 overflow-hidden rounded-full">
			<img src="mountains-comp.jpg" alt="portrait" srcset="
			mountains-64.jpg 64w, 
			mountains-128.jpg 128w, 
			mountains-256.jpg 256w, 
			mountains-512.jpg 512w, 
			mountains-comp.jpg 1024w" sizes="15rem" />
		</div>
		<div class="flex flex-col justify-center text-white font-mono">
			<h1 class="text-3xl font-bold mb-6 animate-bounce">Lukas Stanek</h1>
			<span class="flex items-center space-x-3"><BriefcaseIcon size="16" /><p>Software Engineering</p></span>
			<span class="flex items-center space-x-3 mb-3"><ToolIcon size="16" /><p>Kotlin, Flutter, Svelte</p></span>
			<span class="flex items-center space-x-3"><MapPinIcon size="16" /><p>Vienna, Austria</p></span>
			<span class="flex items-center space-x-3 mb-3"><Volume2Icon size="16" /><p>Deutsch, English</p></span>
			<span class="flex items-center space-x-3 hover:underline"><MailIcon size="16" /><a href="mailto:hola@stanek.xyz">hola@stanek.xyz</a></span>
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
