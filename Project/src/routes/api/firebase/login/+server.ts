import type { RequestHandler } from "@sveltejs/kit";

import { Fauna } from "../../fauna/faunaAPI";
import { Firebase } from "../firebaseAPI";

export const GET: RequestHandler = async ({ request }) => {
    console.log("Login Request!")

    try {
        
        // Fetchs from header
        const email = request.headers.get("email") ?? ''
        const password = request.headers.get("password") ?? ''
        
        const userUid = await Firebase.login(email, password)
        if (userUid == '') { return new Response('{ "error" : "UID does not exist" }', {status: 500}) }

        // Gets user data from database
        let user = JSON.stringify( await Fauna.getUser(userUid) )

        return new Response(user)
    } catch(error) { 
        return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }

}