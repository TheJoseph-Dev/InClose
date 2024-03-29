import type { RequestHandler } from "@sveltejs/kit";

import { Firebase } from "../firebaseAPI";

export const GET: RequestHandler = async ({ request, cookies }) => {
    console.log("Logout Request!")

    try {
        await Firebase.logout()

        cookies.delete("session_uid", { path: '/' })
    } catch(error) { 
        console.log(error)
    }

    return new Response("")
}