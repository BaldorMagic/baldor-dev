import { createDirectus, rest, readItem, readItems } from '@directus/sdk';
console.log(process.env.DIRECTUS_URL);
const directus = createDirectus(process.env.DIRECTUS_URL).with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});