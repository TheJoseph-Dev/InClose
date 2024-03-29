// Imports
import { fail, redirect } from '@sveltejs/kit';
import { API, Method } from '../../models/API';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    
    let signParam = url.searchParams.get('sign') ?? ""
    let signinUp: boolean = signParam == 'up'
    console.log(signinUp)

    return { signinUp: signinUp }
};

export const actions: Actions = {

    // Login action
    login: async ({ request, url, cookies }) => {
      
        const data = await request.formData();
      
        // Get form data
        const user = data.get("email");
        const password = data.get("password");

        // Logs to identify the action
        console.log("\nLogging");
        console.log(user)

        // GET request to login the user
        const response = await new API()
        .request(url.origin + '/api/firebase/login', Method.GET, {
          "email": user!.toString(),
          "password": password!.toString()
        })


        // Cookie settings/options
        const cookieOpts: Object = {
          path: '/',
          maxAge: 60 * 60 * 24,
          secure: true,
          sameSite: "strict",
          httpOnly: true, // <-- if you want to read it in the browser
        }

        // Login data response
        const resData = await response.json();
        console.log(resData)
        // Check if the login was successful
        if (response.status == 200) {

          // Get response login data
          //const token: string = String(resData["token"])
          const uid: string = String(resData["uid"])

          //cookies.set("session_token", token, cookieOpts)
          cookies.set("session_uid", uid, cookieOpts)

          throw redirect(303, '/auth/home')
        }
        else {
          
          // Handles the login error types
          const error:string = String(resData["error"])
          if (error.includes("user")) { return fail(501) }
          if (error.includes("password")) { return fail(502) }
        }
        
        return fail(500, { missing: true });
    },

    // Register action
    register: async ({ request, url, cookies }) => {
        const data = await request.formData();
        
        // Get form data
        const name = data.get("name");
        const user = data.get("email");
        const password = data.get("password");

        // Logs to identify the action
        console.log("\nLogging");
        console.log(data)

        // GET request to login the user
        const response = await new API()
        .request(url.origin + '/api/firebase/register', Method.GET, {
          "name" : name!.toString(),
          "email": user!.toString(),
          "password": password!.toString()
        })


        // Cookie settings/options
        const cookieOpts: Object = {
          path: '/',
          maxAge: 60 * 60 * 24,
          secure: true,
          sameSite: "strict",
          httpOnly: true, // <-- if you want to read it in the browser
        }

        // Login data response
        const resData = await response.json();
        console.log(resData)
        // Check if the login was successful
        if (response.status == 200) {

          // Get response login data
          //const token: string = String(resData["token"])
          const uid: string = String(resData["uid"])

          //cookies.set("session_token", token, cookieOpts)
          cookies.set("session_uid", uid, cookieOpts)

          throw redirect(303, '/auth/home')
        }
        else {
          
          // Handles the login error types
          const error:string = String(resData["error"])
          if (error.includes("user")) { return fail(501) }
          if (error.includes("password")) { return fail(502) }
        }

        return fail(500, { missing: true });
    }
};