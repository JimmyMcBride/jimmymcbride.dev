import { mutation, query } from './_generated/server';

const COUNTER_NAME = 'homepage';

export const get = query({
	args: {},
	handler: async (ctx) => {
		const counter = await ctx.db
			.query('counters')
			.withIndex('by_name', (q) => q.eq('name', COUNTER_NAME))
			.unique();

		return counter?.value ?? 0;
	}
});

export const increment = mutation({
	args: {},
	handler: async (ctx) => {
		const counter = await ctx.db
			.query('counters')
			.withIndex('by_name', (q) => q.eq('name', COUNTER_NAME))
			.unique();

		if (counter) {
			const nextValue = counter.value + 1;
			await ctx.db.patch(counter._id, { value: nextValue });
			return nextValue;
		}

		await ctx.db.insert('counters', {
			name: COUNTER_NAME,
			value: 1
		});

		return 1;
	}
});
