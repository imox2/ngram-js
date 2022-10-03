****ngram-js****
**steps to run:**

 - Run `npm i` to install the dependencies
 - Run `npm run train` to create n-gram for all available language. 
 - Run `npm run start` to run the express server. It will run on port 3000

**Endpoints:**

 - **POST** - localhost:3000/lang_id ; Pass the text as request body 
Example: curl -i -H "Content-Type: application/json" -X POST -d '{"text": "Le parole est l\u0027ombre du fait"}' localhost:3000/lang_id
