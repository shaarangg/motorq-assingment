# motorq-assignment

# About The Project
This project was given as a assignment for the Application-Engineer Internship track. The project is built using the MERN stack.


## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install global dependencies
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo 
```sh
git clone https://github.com/shaarangg/motorq-assingment.git
cd motorq-assignment
```
2. Install NPM packages
```sh
npm install
```
3. Add the necessary environment variables to the `sample.env` file.
```sh
    MONGO_URI=
    PORT=
```

4. Start the project
```sh
npm run start
```

## API Endpoints

### 1. Add a student to the student collection
```http
  POST /student
```

| Description                     | Type     | Parameter | 
| :------------------------------:| :-------:| :--------: | 
|  sid | `string` | `body`    | 
|  name | `string` | `body`    |
|  password   |  `string`|  `body`   |


### Response format

```json
{
    "_id":{"$oid":"612b0e8a3b5cce19ccf0476d"},
    "classes":["123324"],
    "sid":"19BCT0215","name":"Shaarang",
    "password":"password",
    "createdAt":{"$date":{"$numberLong":"1630211722861"}},
    "updatedAt":{"$date":{"$numberLong":"1630219288358"}},
    "__v":{"$numberInt":"0"}}
}
```

### 2. Get all the students
```http
  GET /student
```

### Response format

```json
[   
    {
        "_id":{"$oid":"612b0e8a3b5cce19ccf0476d"},
        "classes":["123324"],
        "sid":"19BCT0215","name":"Shaarang",
        "password":"password",
        "createdAt":{"$date":{"$numberLong":"1630211722861"}},
        "updatedAt":{"$date":{"$numberLong":"1630219288358"}},
        "__v":{"$numberInt":"0"}
    },
    {
        "_id":{"$oid":"612b0e8a3b5dasdasdf0476d"},
        "classes":["123324"],
        "sid":"19BCT005","name":"Rahul",
        "password":"password",
        "createdAt":{"$date":{"$numberLong":"1630211722861"}},
        "updatedAt":{"$date":{"$numberLong":"1630219288358"}},
        "__v":{"$numberInt":"0"}
    },
]
```
### 3. Get a student for a given sid
```http
  GET /student/:sid
```

### Response format

```json
[   
    {
        "_id":{"$oid":"612b0e8a3b5cce19ccf0476d"},
        "classes":["123324"],
        "sid":"19BCT0215","name":"Shaarang",
        "password":"password",
        "createdAt":{"$date":{"$numberLong":"1630211722861"}},
        "updatedAt":{"$date":{"$numberLong":"1630219288358"}},
        "__v":{"$numberInt":"0"}
    },
]
```

### 4. Add a class to the class collection
```http
  POST /classes
```

| Description                     | Type     | Parameter | 
| :------------------------------:| :-------:| :--------: | 
|  cid | `string` | `body`    | 
|  courseCode | `string` | `body`    |
|  faculty   |  `string`|  `body`   |
|  building   |  `string`|  `body`   |
|  time   |  `string`|  `body`   |


### Response format

```json
{
    "_id":{"$oid":"612b2280cd1545445c1addfe"},
    "cid":"32234234","courseCode":"CSE1002",
    "faculty":"Murali Sir",
    "building":"SJT",
    "time":"Monday 5pm-6pm",
    "createdAt":{"$date":{"$numberLong":"1630216832312"}},
    "updatedAt":{"$date":{"$numberLong":"1630216832312"}},
    "__v":{"$numberInt":"0"}
}
```

### 5. Get all the classes
```http
  GET /classes
```

### Response format

```json
[   
    {
        "_id":{"$oid":"612b2280cd1545445c1addfe"},
        "cid":"32234234","courseCode":"CSE1002",
        "faculty":"Murali Sir",
        "building":"SJT",
        "time":"Monday 5pm-6pm",
        "createdAt":{"$date":{"$numberLong":"1630216832312"}},
        "updatedAt":{"$date":{"$numberLong":"1630216832312"}},
        "__v":{"$numberInt":"0"}
    },
    {
        "_id":{"$oid":"612asdasdcd1545445c1addfe"},
        "cid":"65776534",
        "courseCode":"CSE1002",
        "faculty":"Deepa Ma'am",
        "building":"TT",
        "time":"Monday 5pm-6pm",
        "createdAt":{"$date":{"$numberLong":"1630216832312"}},
        "updatedAt":{"$date":{"$numberLong":"1630216832312"}},
        "__v":{"$numberInt":"0"}
    },
]
```

### 6. Get all classes for a given courseCode
```http
  GET /student/:courseCode
```

### Response format

```json
[   
    {
        "_id":{"$oid":"612b2280cd1545445c1addfe"},
        "cid":"32234234","courseCode":"CSE1002",
        "faculty":"Murali Sir",
        "building":"SJT",
        "time":"Monday 5pm-6pm",
        "createdAt":{"$date":{"$numberLong":"1630216832312"}},
        "updatedAt":{"$date":{"$numberLong":"1630216832312"}},
        "__v":{"$numberInt":"0"}
    },
    {
        "_id":{"$oid":"612asdasdcd1545445c1addfe"},
        "cid":"65776534",
        "courseCode":"CSE1002",
        "faculty":"Deepa Ma'am",
        "building":"TT",
        "time":"Monday 5pm-6pm",
        "createdAt":{"$date":{"$numberLong":"1630216832312"}},
        "updatedAt":{"$date":{"$numberLong":"1630216832312"}},
        "__v":{"$numberInt":"0"}
    },
]
```

### 7. Add a class to student's collection if there are no clashes
```http
   POST /class/:sid/:cid
```

### Response format

```json
{
    "status":"successfull"
}
```

### 8. Delete a class from the student's collection
```http
   Delete /class/:sid/:cid
```

### Response format

```json
{
    "status":"successfull"
}
```
### 8. Get all the class registered by a student
```http
   GET /class/:sid
```

### Response format

```json
{
    "classes":["123123","567567"]
}
```