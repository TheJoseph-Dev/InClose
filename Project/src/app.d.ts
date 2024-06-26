// See https://kit.svelte.dev/docs/types#app

import type { User } from "./models/User";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
