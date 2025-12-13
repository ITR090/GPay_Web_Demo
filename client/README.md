
# The FrontEnd build with React + Vite

# FrontEnd Dependencies
- google-pay/button-react
- axios
- react
- react-dom

# Docs Links
- https://github.com/google-pay/google-pay-button/tree/main/src/button-react
- https://developers.google.com/pay/api/web/guides/tutorial

# Create .env file under client folder which have the below values:

```
VITE_STRIPE_PUBLISHABLEKEY=
VITE_BACKEND_URL=http://localhost:8081  #in localhost env its 8080 | docker its 8081
VITE_CLOUDRUN_BACKEND_URL= your backend cloud run url #only for prod
```
