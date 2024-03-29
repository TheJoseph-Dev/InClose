export { API, Method }

enum Method {
    GET = "GET", POST = "POST", PUT = "PUT", PATCH = "PATCH", DELETE = "DELETE"
}

class API {

    auth_token: string
    url_origin: string

    constructor(auth_token: string = "", url_origin = "") {
        this.auth_token = auth_token
        this.url_origin = url_origin
    }

    async request(url: string, method: Method, headers: HeadersInit): Promise<Response> {
        const response = await fetch(this.url_origin + url, {
            method: method,
            headers: { auth_token: this.auth_token, ...headers }
        })

        // Logs the request
        const endpoint = url.split('/').pop()
        console.log(method + " Request: " + endpoint)
        
        return response
    }

    
}