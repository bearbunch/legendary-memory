import {
    register,
    login
} from "./auth.js";


export default {

async fetch(request, env) {


const url = new URL(request.url);


console.log(
    request.method,
    url.pathname
);



if(
url.pathname === "/api/auth/register"
){

return register(
request,
env
);

}



if(
url.pathname === "/api/auth/login"
){

return login(
request,
env
);

}



return new Response(
"API running",
{
status:200
}
);


}

};