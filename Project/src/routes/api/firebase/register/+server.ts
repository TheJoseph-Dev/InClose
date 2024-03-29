import type { RequestHandler } from "@sveltejs/kit";

import { Fauna } from "../../fauna/faunaAPI";
import { Firebase } from "../firebaseAPI";

export const GET: RequestHandler = async ({ request }) => {
    console.log("Register Request!")

    try {
        // Fetchs header
        const name = request.headers.get("name") ?? ''
        const email = request.headers.get("email") ?? ''
        const password = request.headers.get("password") ?? ''

        const userUid = await Firebase.register(email, password)

        await Fauna.createUser(userUid, name, email)

    } catch(error) {
         console.log(error)
         return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }
    return new Response("")
}