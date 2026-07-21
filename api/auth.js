async function hashPassword(password){

const data =
new TextEncoder()
.encode(password);


const hash =
await crypto.subtle.digest(
"SHA-256",
data
);


return [...new Uint8Array(hash)]
.map(
b=>b.toString(16).padStart(2,"0")
)
.join("");

}



export async function register(
request,
env
){


const body =
await request.json();



const password =
await hashPassword(
body.password
);



const id =
crypto.randomUUID();



try{


await env.DB.prepare(

`INSERT INTO users
(id,username,email,password,created_at)

VALUES
(?,?,?,?,?)`

)

.bind(

id,

body.username,

body.email,

password,

Date.now()

)

.run();



return Response.json({

success:true,

user:{
id,
username:body.username
}

});


}

catch(e){


return Response.json({

success:false,

error:"Account already exists"

},
{
status:400
});


}


}






export async function login(
request,
env
){


const body =
await request.json();



const password =
await hashPassword(
body.password
);



const user =
await env.DB.prepare(

`SELECT *
FROM users
WHERE email=? AND password=?`

)

.bind(

body.email,

password

)

.first();



if(!user){

return Response.json({

success:false,

error:"Invalid login"

},
{
status:401
});

}



const session =
crypto.randomUUID();



await env.DB.prepare(

`INSERT INTO sessions
(id,user_id,created_at)

VALUES
(?,?,?)`

)

.bind(

session,

user.id,

Date.now()

)

.run();




return Response.json({

success:true,

session

});


}