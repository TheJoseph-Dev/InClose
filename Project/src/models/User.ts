export { User, type Transaction }
import type { Channel, Subscription } from "./Channel"

type Transaction = { from: Object, to: Object, channel: Channel, date: string, amount: number }

class User {
    ref: any

    uid: string
    name: string
    email: string
    subscriptions: Subscription[]
    channels: Channel[]
    history: Transaction[]

    constructor(ref: any = Object(), uid: string, name: string, email: string, subscriptions: Subscription[] = [], channels: Channel[] = [], history: Transaction[] = []) {
        this.ref = ref
        
        this.uid = uid;
        this.name = name;
        this.email = email;

        this.subscriptions = subscriptions
        this.channels = channels
        this.history = history
    }

    static toJSON(user: User, dataOnly: boolean = false): string {
        if (dataOnly) {
            let userDataObj = { uid: user.uid, name: user.name, email: user.email, subscriptions: user.subscriptions, channels: user.channels, history: user.history }
            return JSON.stringify(userDataObj).replaceAll('\\', '')
        }

        let userObj = { "ref" : user.ref, "data" : JSON.parse( JSON.stringify( user ) ) }
        return JSON.stringify(userObj).replaceAll('\\', '')
    }

    static fromJSON(json: string): User {
        let jsonObj = JSON.parse( json )

        return new User(jsonObj["ref"], jsonObj["data"]["uid"], jsonObj["data"]["name"], jsonObj["data"]["email"], jsonObj["data"]["subscriptions"], jsonObj["data"]["channels"], jsonObj["data"]["history"])
    }
}