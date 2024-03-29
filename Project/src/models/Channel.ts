export { Channel, type Subscription, Post }

type Subscription = {name: string, channelCode: string, credits: number}

class Channel {
    ref: any
    
    owner: string
    name: string
    code: string
    subscribers: Object[] // Refs
    feed: Object[] // Posts

    constructor(ref: any, owner: string, name: string, code: string, subscribers: Object[] = [], feed: Object[] = []) {
        this.ref = ref
        this.owner = owner
        this.name = name
        this.code = code
        this.subscribers = subscribers
        this.feed = feed
    }

    static toJSON(channel: Channel, dataOnly: boolean = false): string {
        if (dataOnly) {
            let userDataObj = { owner: channel.owner, name: channel.name, code: channel.code, subscribers: channel.subscribers, feed: channel.feed }
            return JSON.stringify(userDataObj).replaceAll('\\', '')
        }

        let channelObj = { "ref" : channel.ref, "data" : JSON.parse( JSON.stringify( channel ) ) }
        return JSON.stringify(channelObj).replaceAll('\\', '')
    }

    static fromJSON(json: string): Channel {
        let jsonObj = JSON.parse( json )

        return new Channel(jsonObj["ref"], jsonObj["data"]["owner"], jsonObj["data"]["name"], jsonObj["data"]["code"], jsonObj["data"]["subscribers"], jsonObj["data"]["feed"])
    }
}

class Post {
    ref: Object

    title: string
    content: string
    channel: Channel
    date: Date

    constructor(ref: Object, title: string, content: string, channel: Channel) {
        
        this.ref = ref
        this.title = title
        this.content = content
        this.channel = channel

        const date = new Date(1970, 0, 1)
        date.setSeconds( Date.now() / 1000 )
        this.date = date 
    }
}