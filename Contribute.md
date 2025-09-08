## Mannual Installation 

 - Install nodejs locally
 - Clone the repo 
 - Install dependencies (npm install)
 - Start DB locally 
   - docker run -e POSTGRESS_PASSWORD=MysecretPassword -d -p 5432:5432 postgres
   - Go to neon tech and get yourself a new DB
- Change the .env file and update DB url 
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker Installation
- Install docker 
- Start a network  `docker network create user_project`
- Start Postgres 
   - `docker run --name postgres --network user_project -d -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`
- Build the image - `docker build --network=host -t user-project .`
- Start the image  - `docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-project`


##  Docker Compose Installation steps
- Install docker, docker-compose
- Run-`docker-compose up`
