
# AD-Tinder

## Description
This project is a clone of the popular dating application, Tinder. It allows users to swipe left or right on profiles to indicate their interest. The application integrates with Kinde for authentication and utilizes Neo4j as the graphical database to manage and store user data and interactions.

## Features

- **User** **Authentication**: Powered by Kinde for secure and seamless user sign-up and login.

- **Swipe Functionality**: Users can swipe left to pass or right to like a profile.
  
- **Graph Database Integration**: Neo4j is used to handle the complex relationships and interactions between users.


## Technologies Used
- **Frontend & Backend** : Next JS
- **Authentication** : Kinde
- **Database**: Neo4j
 
## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or pnpm
- A Kinda free account and configuration
- A free neo4j instanse

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/dharayush7/ad-sso.git
```

# Installation

#### 1. Installing dependencies:
```bash
cd AD-Tinder
npm install
# or
yarn
# or
pnpm i
```


## Kinde SetUp
Create a free account in kinde by visiting https://kinde.com/
#### 3. Project Creation
create a free project in kinda by selecting. 

- Give an application name.
- Application type: Back-end web
- Back end SDKs: Next JS
- Set post logout URL
- Set call back URL

#### 4. Set Up Environment Variables

- Go to ```AD-Tinder/``` and create ```.env.local```
- Go to Quick Start section in kinde
- Find heading "Update environment vars"
- Copy those valaue and paste it in .env file
- .env file look like this

```
KINDE_CLIENT_ID= // client id
KINDE_CLIENT_SECRET= // client secret
KINDE_ISSUER_URL= // issuer url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```





## Neo4J Setup
Go to https://neo4j.com/cloud/platform/aura-graph-database/ and create a free account. 
- A free instance is automatically created.
- Download the txt file and wait till the instance is ready.
- Mean while open the txt file. The txt file look like this

```
# Wait 60 seconds before connecting using these details, or login to https://console.neo4j.io to validate the Aura Instance is available
NEO4J_URI= // NEO4J URI
NEO4J_USERNAME= // USERNAME
NEO4J_PASSWORD= // PASSWORD
AURA_INSTANCEID= // INSTANCE ID
AURA_INSTANCENAME= // INSTANCE NAME
```

- Copy the variables and paste it in ```.env.local``` file.

- Now the ```.env.local``` file look like this

```
KINDE_CLIENT_ID= // client id
KINDE_CLIENT_SECRET= // client secret
KINDE_ISSUER_URL= // issuer url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

NEO4J_URI= // NEO4J URI
NEO4J_USERNAME= // USERNAME
NEO4J_PASSWORD= // PASSWORD
AURA_INSTANCEID= // INSTANCE ID
AURA_INSTANCENAME= // INSTANCE NAME
```
## Initialization

Go to AD-Tinder/

### Start server in devolopment mode:

Run this command to start the server:

using npm:
```bash
npm start
```
using yarn:
```bash
yarn start
```

using pnpm:

```bash
pnpm run start
```

### Build project and Initialize server:


#### To Build:
    
Using npm:
 ```bash
npm run build
```
Using yarn:

```bash
yarn build
```
Using pnpm:
```bash
pnpm run build
```

#### To Start: 

Using npm:
 ```bash
npm start
```
Using yarn:

```bash
yarn start
```
Using pnpm:
```bash
pnpm run start
```


## Usage

- Go to [localhost:3000](localhost:3000) and other users appear which you are not swipe left or right. If no user are display then  
open this link in incognito tab create a new user. 

- To find match go [localhost:3000/match](localhost:3000/match)

- To logout go [localhost:3000/logout](localhost:3000/logout) and click logout.
## 🔗 Links
[portfolio](https://www.ayushdhar.com/)



## License

[MIT]

