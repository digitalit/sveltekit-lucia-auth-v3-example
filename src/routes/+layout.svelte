<script lang="ts">
	import { page } from '$app/stores';

	import { getFlash } from 'sveltekit-flash-message';

	import { toast } from 'svelte-sonner';

	import { Toaster } from '$components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';

	import extend from 'just-extend';
	import { MetaTags } from 'svelte-meta-tags';

	import '../app.pcss';

	import SiteMainHeader from '$components/siteMainHeader/SiteMainHeader.svelte';

	export let data;

	const flash = getFlash(page);

	$: if ($flash) {
		toast.info($flash.message);
	}

	$: metaTags = extend(true, {}, data.baseMetaTags, $page.data.pageMetaTags);
</script>

<MetaTags {...metaTags} />

<Toaster richColors closeButton position={'top-center'} />
<ModeWatcher />

<div class="flex h-svh flex-col">
	<SiteMainHeader />

	<main class="container flex-1 p-2 pb-10">
		<slot />
	</main>
</div>
