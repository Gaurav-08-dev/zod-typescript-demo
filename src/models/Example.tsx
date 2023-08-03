import {z} from "zod";

const mySchema =z.string(); 

// Parsing
mySchema.parse("Gaurav");
mySchema.parse(25); // ! => throws ZodError if it fails

// Safe parsing (doesn't throw error if validation fails) instead returns an object
mySchema.safeParse("GAurav"); // * if pass -> {success:true, data:"Gaurav"}
mySchema.safeParse(25); // ! if fail -> {success: false, error:ZodError}


const schema=z.coerce.string(); // * everything parsed after this will be converted to string

schema.parse(43); // => "43"
schema.parse(true); // "true"
schema.parse("Gaurav"); // "Gaurav"