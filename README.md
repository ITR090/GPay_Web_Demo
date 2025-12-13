
# This repository for Google Pay for WEB using React + Node and stripe as a Payment Gateway.

# You can check each Readme file client-->React | server-->Node 

# The payment flow is as follows:

1. The user clicks the Google Pay payment button and sees a payment sheet with a list of supported payment methods.
2. The user selects a payment method and Google Pay securely returns a payment token for that method to your website.
3. Your website submits the payment token, along with details about the purchase, to its backend.
4. To execute the payment, the backend processes the purchase and sends the payment token to the payment service provider.

## This project Deplpoyed into Cloud Run with two containers 

## Deployment setps:

1. Build Docker images 

## For the React/Nginx Frontend change PROJECT_ID to you GCP project_id

```
docker build -t gcr.io/PROJECT_ID/react-frontend:latest .
```
## For the Node.js Express Backend change PROJECT_ID to you GCP project_id
```
docker build -t gcr.io/PROJECT_ID/express-backend:latest .
```
2. Push images to Artifact Registry change PROJECT_ID to you GCP project_id

```
docker push gcr.io/PROJECT_ID/react-frontend:latest
docker push gcr.io/PROJECT_ID/express-backend:latest

```

3. Deploy into Cloud Run change PROJECT_ID to you GCP project_id

```
gcloud run deploy express-backend-service \
  --image gcr.io/PROJECT_ID/express-backend:latest \
  --platform managed \
  --region REGION \
  --allow-unauthenticated


  gcloud run deploy react-frontend-service \
  --image gcr.io/PROJECT_ID/react-frontend:v2 \
  --platform managed \
  --region REGION \
  --allow-unauthenticated

```


