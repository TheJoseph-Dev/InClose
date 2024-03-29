// Imports
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { Fauna } from '../api/fauna/faunaAPI';
import { User } from '../../models/User';
import { API } from '../../models/API';

export const load: LayoutServerLoad = (async ({ locals, cookies }) => {

  // Get session_uid cookie
  const session_uid = cookies.get("session_uid") ?? '';
  if (session_uid == '') { throw redirect(303, "/main") }

  // Get session_token cookie - Auth Headers
  //const session_token = cookies.get("session_token") ?? '';
  //if (session_token == '') { throw redirect(303, "/login") }

  // Get current user extra info
  const response: User = await Fauna.getUser(session_uid) ?? new User(Object(), '', '', '')
  
  return {
    session_uid: session_uid,
    user: User.toJSON( response )
  };
})