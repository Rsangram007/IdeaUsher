# Nodejs Task Ideausher
This is a REST API built using Node.js and Express.js for Nodejs Task Ideausher. It provides endpoints for Post And Tag .


## Features

- Created Post
- GetAll Post With Filter and Pagination
- Created tag ANd Get All Tag
- Image upload for Post
 

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudnary](https://cloudinary.com/)

## Tech Stack
**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudnary
 

**Image Upload:** 
- Cloudinary API

**Data Storage:** 
- MongoDB

 
## API Reference

#### Post 
- `POST /api/posts` - Created a new Post.
- `GET /api/posts` - Get All Post.

#### Tag
- `POST /api/tags` - Create New Tag.
- `GET /api/tags` -Get all Tag.
 



**PostManCollection** https://documenter.getpostman.com/view/26402935/2sAXqwag1s
 


**Input: For Tag**
```
{
  "name": "JavaScript"
}



**Response:**

```
{
    "tag": {
        "name": "Redis",
        "_id": "66f51e64f3f84ea4964cb798",
        "__v": 0
    }
}
```


## Installation


1. Clone the repository.


```
git clone https://github.com/Rsangram007/IdeaUsher.git
```

2. Navigate to the project directory.

```
cd Ideausher
```

3. Install the dependencies.

```
npm install 
```

4. Set the environment variables in a .env file in the root directory of the project. 
Example:
```
PORT=5000
MONGO_URL=****
CLOUD_NAME=*******
CLOUD_API_KEY=********
CLOUD_API_SECRET=*****
```

5. Start the application.

```
npm start

```
## License
Indago is licensed under the MIT License. See the LICENSE file for more information.

## Feedback

Please let us know your thoughts on my app by sending any suggestions or feedback to sangrambeheraa007@gmail.com.


## 🚀 About Me
- Backend developer with experience in modern web development
- intermidate in React and JavaScript for frontend development
- Experienced in Node.js and Express.js for backend development
- Ability to create efficient and high-performance server-side applications
- Passionate about building user-friendly and efficient applications using cutting-edge technologies
- Always eager to learn new technologies and improve skills to provide the best solutions to clients.



