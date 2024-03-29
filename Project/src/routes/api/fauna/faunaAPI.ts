export { Fauna }

import faunadb from "faunadb"
//import { Collection, Get, Ref } from "faunadb/src/types/query"

const {
    Paginate,
    Get,
    Select,
    Match,
    Index,
    Create,
    Collection,
    Lambda,
    Var,
    Join,
    Ref,
    Update,
    Replace
} = faunadb.query

// FaunaDB secret key
import { FAUNA_SECRET_KEY } from "$env/static/private"
import { User } from "../../../models/User"
import { Channel } from "../../../models/Channel"


class Fauna {
    
    private static client = new faunadb.Client({ secret: FAUNA_SECRET_KEY })

    static async createUser(uid: string, name: string, email: string) {
        try {
            let userData = {
                uid: uid,
                name: name,
                email: email,
                subscriptions: [],
                historic: []
            }

            await this.client.query(
                Create(
                    Collection("users"),
                    { data: userData }
                )
            )

        } catch(error) { console.log(error) }
    }

    static async getUser(uid: string): Promise<User | undefined> {
        
        try {

            const doc = await this.client.query(
                Get(
                    Match( Index("users_by_uid"), uid )
                )
            )

            //console.log(doc)
            let user = User.fromJSON( JSON.stringify(doc) )

            return user
        } catch(error) { console.log(error); return undefined }
        
    }

    static async updateUser(user: User) {
        console.log(user.ref['@ref'].id)
        try {
            console.log("Updating: ", User.toJSON(user, true))
            await this.client.query(
                Replace(
                    Ref(Collection("users"), user.ref['@ref'].id),
                    { data: JSON.parse( User.toJSON( user , true ) ) }
                )
            )
        } catch(error: any) {
            console.log('FaunaDB Error: ', error)
        }
        

    }

    static async createChannel(channel: Channel) {
        try {
            let channelData = {
                owner: channel.owner,
                name: channel.name,
                code: channel.code,
                subscribers: channel.subscribers,
                feed: channel.feed
            }

            await this.client.query(
                Create(
                    Collection("channels"),
                    { data: channelData }
                )
            )

        } catch(error) { console.log(error) }
    }

    static async getChannel(code: string): Promise<Channel | undefined> {
        
        try {
            const doc = await this.client.query(
                Get(
                    Match( Index("channels_by_code"), code )
                )
            )
            
            const channel = Channel.fromJSON( JSON.stringify( doc ) )
            return channel
        } catch(error) {}

        return
    }
}
