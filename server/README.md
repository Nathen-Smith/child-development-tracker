**base route: /api**
(example: localhost:8080/api/user)
| Endpoints| Actions | Outcome                                    |
|----------|---------|-----------------------------------------------------|
| user    | GET     | Read a list of users                        |
|          | POST    | Create a new user |
|          | PUT    | Update an existing user with respect to email|
|          | DELETE    | Delete an existing user with respect to email|
| sleep    | GET     | Read a list of sleep entries |
|          | POST    | Create a new sleep entry |
| milestone    | GET     | Read a list of milestones |
|          | POST    | Create a new milestone|
| journal    | GET     | Read a list of journal entries |
|          | POST    | Create a new journal entry |
| food    | GET     | Read a list of food entries |
|          | POST    | Create a new food entry |
| changes    | GET     | Read a list of change entries |
|          | POST    | Create a new change entry |

**GET requests can contain the following query parameters:**
| Parameter | Description                                                                                  |
|----------|----------------------------------------------------------------------------------------------|
| where    | filter results based on JSON query                                                           |
| sort     | specify the order in which to sort each specified field  (1- ascending; -1 - descending)     |
| select   | specify the set of fields to include or exclude in each document  (1 - include; 0 - exclude) |
| skip     | specify the number of results to skip in the result set               |
| limit    | specify the number of results to return                  |
| count    | if set to true, return the count of documents that match the query (instead of the documents themselves)                    |

**All responses are a JSON object consisting of a "message" and "data" field:**
```javascript
{
    "message": string,
    "data": object
}
```
*All schema have an "_id" field and "createdAt" field which are both automatically set

**User schema:**<br />
name: string (required)<br />
email: string (required, unique)<br />

**Sleep schema:**<br />
typeOfSleep: string (required)<br />
time: date (required)<br />
notes: string (required)<br />
email: string (required)<br />

**Milestone schema:**<br />
title: string (required)<br />
timeline: number (required) *age range in months<br />
email: string (required)<br />

**Journal schema:**<br />
title: string (required)<br />
body: string (required)<br />
email: string (required)<br />

**Food schema:**<br />
typesOfFood: [string] (required)<br />
time: date (required)<br />
notes: string (required)<br />
email: string (required)<br />

**Changes schema:**<br />
consistency: string (required)<br />
time: date (required)<br />
notes: string (required)<br />
email: string (required)<br />