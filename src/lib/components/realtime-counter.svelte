<script lang="ts">
	import { api } from '$convex/_generated/api';
	import { useConvexClient, useQuery } from 'convex-svelte';

	const client = useConvexClient();
	const counter = useQuery(api.counter.get, {});

	let isUpdating = $state(false);
	let errorMessage = $state<string | null>(null);

	async function incrementCounter() {
		isUpdating = true;
		errorMessage = null;

		try {
			await client.mutation(api.counter.increment, {});
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Failed to update the counter.';
		} finally {
			isUpdating = false;
		}
	}
</script>

<section class="max-w-7xl mx-auto px-6 pb-24">
	<div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
		<div class="bg-mantle border border-surface0/30 rounded-[28px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
			<div class="flex items-center gap-3 mb-6">
				<span class="material-symbols-outlined text-3xl text-teal">bolt</span>
				<div>
					<p class="font-body text-xs uppercase tracking-[0.3em] text-overlay1">Realtime Demo</p>
					<h2 class="font-headline text-3xl md:text-4xl text-text font-bold">Convex Counter</h2>
				</div>
			</div>
			<p class="font-body text-subtext0 text-lg leading-relaxed max-w-2xl">
				This counter is backed by self-hosted Convex on Railway. Click the button in one tab and
				you should see every other open tab update without a refresh.
			</p>
		</div>

		<div class="bg-surface0/70 border border-blue/15 rounded-[28px] p-8 md:p-10 flex flex-col justify-between shadow-[0_24px_80px_rgba(137,180,250,0.08)]">
			<div>
				<p class="font-body text-xs uppercase tracking-[0.3em] text-blue mb-3">Live Value</p>
				{#if counter.isLoading}
					<div class="font-headline text-5xl md:text-6xl text-text font-bold">...</div>
					<p class="mt-3 text-subtext0">Connecting to Convex...</p>
				{:else if counter.error}
					<div class="font-headline text-2xl text-red mb-3">Connection error</div>
					<p class="text-subtext0 break-words">{counter.error.message}</p>
				{:else}
					<div class="font-headline text-6xl md:text-7xl text-blue font-bold">
						{counter.data}
					</div>
					<p class="mt-3 text-subtext0">
						Subscribed clients receive updates in realtime.
					</p>
				{/if}
			</div>

			<div class="mt-8">
				<button
					class="w-full sm:w-auto px-8 py-4 bg-linear-to-b from-blue to-sapphire text-base rounded-xl font-bold text-lg shadow-[0_8px_24px_rgba(137,180,250,0.18)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:translate-y-0"
					type="button"
					onclick={incrementCounter}
					disabled={isUpdating || counter.isLoading}
				>
					{isUpdating ? 'Updating...' : 'Increment Counter'}
				</button>

				{#if errorMessage}
					<p class="mt-4 text-sm text-red">{errorMessage}</p>
				{/if}
			</div>
		</div>
	</div>
</section>
