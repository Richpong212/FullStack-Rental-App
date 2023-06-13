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
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_default_vpc" "default" {
  tags = {
    Name = "default-vpc"
  }
}

data "aws_subnet" "subnets" {
  vpc_id            = aws_default_vpc.default.id
  availability_zone = "us-east-1a"
}

provider "kubernetes" {
  // Uncomment this section once EKS is created
  // host                   = data.aws_eks_cluster.cluster.endpoint #module.in28minutes-cluster.cluster_endpoint
  // cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority[0].data)
  // token                  = data.aws_eks_cluster_auth.cluster.token
}

module "richpong-cluster-eks" {
  source            = "terraform-aws-modules/eks/aws"
  cluster_name      = "richpong-cluster"
  cluster_version   = "1.23"
  vpc_id            = aws_default_vpc.default.id
  cluster_endpoint_public_access = true

  eks_managed_node_group_defaults = {
    // instance_types = ["t2.small", "t2.medium"]
  }

  eks_managed_node_groups = {
    // blue = {}
    // green = {
    //   min_size       = 1
    //   max_size       = 10
    //   desired_size   = 1
    //   instance_types = ["t2.medium"]
    // }
  }

  control_plane_subnet_ids = data.aws_subnet.subnets.id
  subnet_ids               = data.aws_subnet.subnets.id
}
