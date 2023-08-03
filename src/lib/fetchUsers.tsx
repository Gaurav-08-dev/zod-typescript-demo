import { UserSchemaWithGeo } from "../models/Users";
import {z} from "zod";

// eslint-disable-next-line react-refresh/only-export-components
const UsersResults= z.array(UserSchemaWithGeo)

type UserArray=z.infer<typeof UsersResults>

export default async function fetchUsers(): Promise <UserArray | undefined>{

    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/users")

        if(!res.ok) return undefined;

        const userJson:UserArray = await res.json()
        const parsedData=UsersResults.parse(userJson)
        
        console.log(parsedData)

        return parsedData
    }
    catch(err){
        if(err instanceof Error) console.log(err.stack)
    }
}