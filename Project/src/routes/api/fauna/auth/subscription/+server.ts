import type { RequestHandler } from "@sveltejs/kit";
import type { Subscription } from "../../../../../models/Channel";

import { Fauna } from "../../../fauna/faunaAPI";

export const POST: RequestHandler = async ({ request }) => {

    try {
        const uid = request.headers.get("session_uid") ?? ''
        const channelCode: string = JSON.parse( request.headers.get("channelCode") ?? '' )

        if (uid == '') { return new Response('{ "error" : "UID does not exist" }', {status: 500}) }

        const channel = await Fauna.getChannel(channelCode)
        if (!channel) { console.log("Channel does not exist"); return new Response("") }

        const subscription: Subscription = { name: channel!.name, channelCode: channelCode, credits: 0 }
        const user = await Fauna.getUser(uid)
        user?.subscriptions.push(subscription)

        await Fauna.updateUser(user!)
        
    } catch(error) { 
        return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }
    
    return new Response("")
}

export const DELETE: RequestHandler = async ({ request }) => {

    try {
        
        const uid = request.headers.get("session_uid") ?? ''
        const subscription: Subscription = JSON.parse( request.headers.get("subscription") ?? '' )

        if (uid == '') { return new Response('{ "error" : "UID does not exist" }', {status: 500}) }

        const user = await Fauna.getUser(uid)
        user!.subscriptions = user!.subscriptions.filter((a) => a.channelCode != subscription.channelCode)
        console.log(user)
        await Fauna.updateUser(user!)
    } catch(error) { 
        return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }

    return new Response("")
}