# Define provider and required variables
provider "aws" {
  region = "ap-southeast-2" # Update with your desired region
}

variable "app_name" {
  description = "FB Clone"
  type        = string
  default     = "fb-clone"
}

# Create an ECS cluster
resource "aws_ecs_cluster" "cluster" {
  name = "${var.app_name}-cluster"
}

# Create a VPC (Virtual Private Cloud)
resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16" # Update with your desired VPC CIDR block
}

# Create subnets within the VPC
resource "aws_subnet" "subnet_public" {
  vpc_id     = aws_vpc.vpc.id
  cidr_block = "10.0.1.0/24" # Update with your desired public subnet CIDR block
}

resource "aws_subnet" "subnet_private" {
  vpc_id     = aws_vpc.vpc.id
  cidr_block = "10.0.2.0/24" # Update with your desired private subnet CIDR block
}

# Create an ECR repository
resource "aws_ecr_repository" "repository" {
  name = var.app_name
}

# Create a task definition for running the app in ECS
resource "aws_ecs_task_definition" "task_definition" {
  family                   = var.app_name
  network_mode             = "awsvpc"
  cpu                      = 256 # Update with desired CPU units
  memory                   = 512 # Update with desired memory in MiB
  requires_compatibilities = ["FARGATE"]

  execution_role_arn = aws_iam_role.execution_role.arn
  task_role_arn      = aws_iam_role.task_role.arn

  container_definitions = <<DEFINITION
  [
    {
      "name": "${var.app_name}",
      "image": "${aws_ecr_repository.repository.repository_url}:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/${var.app_name}",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
  DEFINITION
}

# Create a service to run the task on ECS
resource "aws_ecs_service" "service" {
  name            = var.app_name
  cluster         = aws_ecs_cluster.cluster.id
  task_definition = aws_ecs_task_definition.task_definition.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [aws_security_group.sg.id]
    subnets         = [aws_subnet.subnet_public.id]
  }

  depends_on = [aws_ecs_task_definition.task_definition]
}

# Create a security group for ECS tasks
resource "aws_security_group" "sg" {
  name        = "${var.app_name}-sg"
  description = "Security group for ECS tasks"

  vpc_id = aws_vpc.vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Update with restricted CIDR block if necessary
  }
}

# Create IAM roles for ECS task execution and task role
resource "aws_iam_role" "execution_role" {
  name               = "${var.app_name}-execution-role"
  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "execution_policy_attachment" {
  role       = aws_iam_role.execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "task_role" {
  name               = "${var.app_name}-task-role"
  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

# Output the ECR repository URL
output "ecr_repository_url" {
  value = aws_ecr_repository.repository.repository_url
}

// Resources
resource "aws_cognito_user_pool" "user_pool" {
  name = "fb-clone-user-pool"

  username_attributes = ["email"]
  auto_verified_attributes = ["email"]
  password_policy {
    minimum_length = 6
  }

  verification_message_template {
    default_email_option = "CONFIRM_WITH_CODE"
    email_subject = "Account Confirmation"
    email_message = "Your confirmation code is {####}"
  }

  schema {
    attribute_data_type      = "String"
    developer_only_attribute = false
    mutable                  = true
    name                     = "email"
    required                 = true

    string_attribute_constraints {
      min_length = 1
      max_length = 256
    }
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name = "fb-clone-cognito-client"

  user_pool_id = aws_cognito_user_pool.user_pool.id
  generate_secret = false
  refresh_token_validity = 90
  prevent_user_existence_errors = "ENABLED"
  explicit_auth_flows = [
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_ADMIN_USER_PASSWORD_AUTH"
  ]
  
}

resource "aws_cognito_user_pool_domain" "cognito-domain" {
  domain       = "fb-clone-domain"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

resource "aws_cognito_identity_pool" "identity_pool" {
  identity_pool_name = "fb-clone-identity-pool"
  allow_unauthenticated_identities = false

  cognito_identity_providers {
    client_id = aws_cognito_user_pool_client.client.id
    provider_name = aws_cognito_user_pool.user_pool.endpoint
    server_side_token_check = true
  }
}
