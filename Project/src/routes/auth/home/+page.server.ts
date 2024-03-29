// Imports
import { fail, redirect } from '@sveltejs/kit';
import { API, Method } from '../../../models/API';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

let user_uid: string

export const load: PageServerLoad = async ({ parent, url }) => {
    
    // Get the parent data
    const { session_uid, user } = await parent()
    user_uid = session_uid

    return { user: user }
};

export const actions: Actions = {

    // addingSubscription action
    addingSubscription: async ({ request, url, cookies }) => {
        const data = await request.formData()
        const channelCode = data.get("channelCode") ?? ''

        const api = new API('', url.origin)
        await api.request('/api/fauna/auth/subscription', Method.POST, {
            session_uid: user_uid,
            channelCode: String(channelCode)
        })
    },
  
    // addingChannel action
    addingChannel: async ({ request, url, cookies }) => {
        const data = await request.formData()
        const name = data.get("channelName") ?? ''

        const api = new API('', url.origin)
        await api.request('/api/fauna/auth/channel', Method.POST, {
            session_uid: user_uid,
            channelName: String(name)
        })
    }
  };