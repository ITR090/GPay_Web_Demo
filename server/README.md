
# NodeJs With Google API and stripe as PaymentGateway

# BackEnd Dependencies
- cors
- dotenv
- express
- nodemon
- stripe

# Create .env file under server folder which have the below values:
```
SECRETKEY= stripe secret key
PORT= node server port
FRONTEND_URL= #for cors only expectd values  #localhost url http://localhost:5173 | docker env http://localhost:8082 | prod cloud run frontend url

```