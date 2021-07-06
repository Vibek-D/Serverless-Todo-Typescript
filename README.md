# Serverless todo with typescript

Step-1
npm install

Step-2
command prompt where dynamoDB recides then run command 
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -inMemory -port 8000

Step-3
npm run dev or sls offline start

Step-4 
before deploying to aws ec2 or elb, build the files run the command
npm run build
