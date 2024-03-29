import { describe, it, expect } from 'vitest';

// Fauna Test
import faunadb from "faunadb"
import { Collection, Get, Ref } from "faunadb/src/types/query"

// FaunaDB secret key
import { FAUNA_SECRET_KEY } from "$env/static/private"


class Fauna {
    
    private static client = new faunadb.Client({ secret: FAUNA_SECRET_KEY })

    static async test() {
        const doc = await this.client.query(
            Get(
                Ref(
					Collection("users")
				)
            )
        )
		
        console.log(doc)
		return doc
    }
}

describe('FaunaDB Test', () => {
	it('Get', () => {
		const obj = Fauna.test()
		console.log(obj)
		expect(obj).toBe(typeof(Object));
	});
});
