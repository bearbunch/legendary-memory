import {
    register,
    login
} from "./auth.js";


export default {

async fetch(request, env) {


const url = new URL(request.url);



/*
 API ROUTES
*/


if(
url.pathname === "/api/auth/register"
&& request.method === "POST"
){

return register(
request,
env
);

}



if(
url.pathname === "/api/auth/login"
&& request.method === "POST"
){

return login(
request,
env
);

}



/*
 WEBSITE FILES
*/


return env.ASSETS.fetch(request);


}

};