//import { redirect, type Handle, type HandleFetch } from "@sveltejs/kit"
import { redirect, type Handle } from "@sveltejs/kit"
import { User } from "./models/User"
import { Fauna } from "./routes/api/fauna/faunaAPI"


export const handle: Handle = async ({ event, resolve }) => {

    // Logs to identify the actions
    console.log("Hook")

    const session_uid = event.cookies.get("session_uid") ?? ''

    if (!event.locals.user && session_uid != '') {
        try {
            const user = await Fauna.getUser(session_uid)
            event.locals.user = user!

        } catch (error) { console.log(error) }
    }
    
    const currentUser = event.locals.user

    // If the user wants to access an auth (protected) route, it needs to be authenticated
    if(event.url.pathname.startsWith("/auth")) {
        console.log("Trying to access auth")

        // The user is not authenticated
        if (session_uid == '' || !currentUser) {
            console.log("User not authenticated")
            throw redirect(303, "/login")
        }
        
        //console.log("Access Denied")
    }

    const response = await resolve(event)

    return response
}