terraform {
  backend "s3" {
    bucket = "richpong-tf-state-backend-ci-cd"
    key    = "terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "terraform_state_locking"
    encrypt = true
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
