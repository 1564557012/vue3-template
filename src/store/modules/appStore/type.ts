import type { RemovableRef } from '@vueuse/core';

export interface AppStore {
	locale: RemovableRef<string>;
	size: RemovableRef<string>;
	message: { max?: number };
}
