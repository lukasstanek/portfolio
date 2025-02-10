<script>

    function handleInstall(event) {
        event.preventDefault();
        window.location.href = 'itms-services://?action=download-manifest&url=https://stanek.xyz/manifest.plist';
    }
</script>

<div data-sveltekit-preload-data="false">
    <h1>Ad Hoc Hello World App Download</h1>
    <a href="#" on:click={handleInstall}>Install iOS App</a>
</div>
