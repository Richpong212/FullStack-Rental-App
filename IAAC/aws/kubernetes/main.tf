# Needed to set the default region
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
    }
  }

#  backend "s3" {
#    profile = "default"
#    bucket  = "codegenitor-terraform-backend-state-aws" # Replace with your bucket name
#    region  = "us-east-1"
#    key     = "terraform.tfstate"
#  }

}
provider "aws" {
  region  = "us-east-1"
}


  


resource "aws_default_vpc" "default" {
  
}

data "aws_subnet" "subnets" {
  vpc_id = aws_default_vpc.default.id
}

provider "kubernetes" {
  //>>Uncomment this section once EKS is created - Start
  # host                   = data.aws_eks_cluster.cluster.endpoint #module.in28minutes-cluster.cluster_endpoint
  # cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority[0].data)
  # token                  = data.aws_eks_cluster_auth.cluster.token
  //>>Uncomment this section once EKS is created - End
}

module "richpong-cluster" {
  source            = "terraform-aws-modules/eks/aws"
  cluster_name      = "richpong-cluster"
  cluster_version   = "1.23"
  vpc_id            = aws_default_vpc.default.id
  subnets           = data.aws_subnet.subnets.ids
  cluster_endpoint_public_access = true

  # EKS Managed Node Group(s)
  eks_managed_node_group_defaults = {
    instance_types = ["t2.small", "t2.medium"]
  }

  eks_managed_node_groups = {
    blue = {}
    green = {
      min_size       = 1
      max_size       = 10
      desired_size   = 1
      instance_types = ["t2.medium"]
    }
  }
}
