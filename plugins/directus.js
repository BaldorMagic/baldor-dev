import { createDirectus, rest, readItem, readItems } from '@directus/sdk';


export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const directus = createDirectus(config.public.directus.url)
    .with(rest({ credentials: 'include' }))
	return {
		provide: { directus, readItem, readItems },
	};
});
