terraform {
  backend "s3" {
    bucket         = "richpong-tf-state-backend-ci-cd"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform_state_locking"
    encrypt        = true
  }
  required_version = ">= 0.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

module "tf-state" {
  source      = "./modules/tf-state"
  bucket_name = "richpong-tf-state-backend-ci-cd"
}

// module block for vpc
module "vpc-infra" {
  source = "./modules/vpc"

  # VPC Input Vars
  vpc_cidr             = local.vpc_cidr
  availability_zones   = local.availability_zones
  public_subnet_cidrs  = local.public_subnet_cidrs
  private_subnet_cidrs = local.private_subnet_cidrs
}


// module block for ecr
variable "ecr_repo_name" {
  description = "Name of the ECR repository"
  type        = string
}
locals {
  ecr_repo_name = var.ecr_repo_name
}
module "ecrRepo" {
  source = "./modules/ecr"

  ecr_repo_name = local.ecr_repo_name
}
