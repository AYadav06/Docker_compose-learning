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

###  Docker Compose Installation steps
