#!/bin/bash

##TODO: Move away from hardcoding the values

# Build the Docker image
docker build -t fb-clone .

# Log in to the AWS Elastic Container Registry (ECR)
password=$(aws ecr get-login-password --region ap-southeast-2)

# # # Get the ECR repository URL
repository_url="905537275387.dkr.ecr.ap-southeast-2.amazonaws.com/fb-clone"

docker login -u AWS -p $password $repository_url


# # Tag the Docker image with the ECR repository URL
docker tag fb-clone:latest $repository_url:latest

# # Push the Docker image to ECR
docker push $repository_url:latest

aws ecs update-service --cluster fb-clone-cluster --service fb-clone --force-new-deployment

echo "Deployment complete!"
