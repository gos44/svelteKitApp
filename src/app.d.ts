// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface  PageState{}
		interface PageData {
			products?:{id:number}[]
		}
		// interface Platform {}
	}
}

export {};
