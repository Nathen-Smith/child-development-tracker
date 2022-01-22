# child-development-tracker
Modern full stack web application with a focus on UI/UX, as a final project for CS 498 The Art of Web Programming.
We were one of 8 chosen from 40 teams to participate in an app competition judged by three executives and/or leaders from the tech industry.

Build with React, TypeScript, React-Router, Axios, Mongoose, MongoDB, Firebase, and Docker.

## Running the app
### Backend
Add the key for MongoDB as ```index.ts``` in ```server/config/```:

```typescript
const mongoKey =
  "mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.znqch.mongodb.net/wp_fp?retryWrites=true&w=majority";

export default mongoKey;
```

While in ```server/```, run ```npm install``` then ```npm start```. 
Alternatively run ```docker-compose up --build``` to run a containerized backend.

### Frontend
Add the key for Firebase as ```index.ts``` in ```web/src/config```. Firebase will give you this code, which is safe to push to production.

```typescript
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "child-development-tracker",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export default app;
```

While in ```web/```, run ```npm install``` then ```npm start```.

## Production vs Development
To change what base URL axios uses for production, make a ```.env```file with the following contents. Excluding the file will default to localhost.
```env
REACT_APP_ENV="production"
```
