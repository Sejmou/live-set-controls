<script lang="ts">
	import { api } from '$lib';
</script>

<h1>Welcome to Ableton Live</h1>
<p>It's exciting!</p>

<button on:click={api.startPlayback}>Play</button>
<button on:click={api.stopPlayback}>Stop</button>
