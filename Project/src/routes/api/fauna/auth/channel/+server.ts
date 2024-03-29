import type { RequestHandler } from "@sveltejs/kit";
import { Channel, type Subscription } from "../../../../../models/Channel";

import { Fauna } from "../../../fauna/faunaAPI";

function generateChannelCode(channelName: string): string {
    const randnum = Math.floor( Math.random() * 10000 )
    const hash = "#c" + String(randnum)
    const code = channelName.toLowerCase().replaceAll(' ', '-') + hash
    return code
}

export const POST: RequestHandler = async ({ request }) => {

    try {
        const uid = request.headers.get("session_uid") ?? ''
        const channelName: string = request.headers.get("channelName") ?? ''

        if (uid == '') { return new Response('{ "error" : "UID does not exist" }', {status: 500}) }

        const user = await Fauna.getUser(uid)

        const code = generateChannelCode(channelName)
        const channel = new Channel('', uid, channelName, code, [], [])

        user!.channels.push(channel)
        console.log(user)

        await Fauna.createChannel(channel)
        await Fauna.updateUser(user!)
        
    } catch(error) { 
        return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }
    
    return new Response("")
}

export const DELETE: RequestHandler = async ({ request }) => {

    try {
        
        const uid = request.headers.get("session_uid") ?? ''
        const channel: Channel = JSON.parse( request.headers.get("channelName") ?? '' )

        if (uid == '') { return new Response('{ "error" : "UID does not exist" }', {status: 500}) }

        const user = await Fauna.getUser(uid)
        user!.channels = user!.channels.filter((a) => a.code != channel.code)
        console.log(user)
        await Fauna.updateUser(user!)
    } catch(error) { 
        return new Response('{ "error": "' + String(error) + '" }', { status: 500 })
    }

    return new Response("")
}