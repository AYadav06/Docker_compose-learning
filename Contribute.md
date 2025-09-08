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
- start Postgres 
   - docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres
- build the image - `docker build -t user-project .`
- Start the image  - `docker run -p 3000:3000 user-project`


##  Docker Compose Installation steps
- Install docker, docker-compose
- Run-`docker-compose up`
