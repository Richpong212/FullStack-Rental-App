# codegenitor-terraform-backend-state-aws
# AKIA55C5Z7XFB2LRQ2KR.  -aws access key id
# subnet-0b12d33e10affbbcf - subnet id

terraform {
   backend "s3" {
     bucket = "codegenitor-terraform-backend-state-aws" # Replace with your bucket name
     key    = "aws-terraform-k8s" # Replace with your bucket key
     region = "us-east-1"
     accessecret_key = "AKIA55C5Z7XFB2LRQ2KR"
     secret_key = "iDcr7gZGbutb5VnhpWvM8N5khUCv+QIYuINkbjAm" # Replace with your bucket region
   }
}

resource "aws_default_vpc" "default" {
  
}

data "aws_subnet_ids" "subnets" {
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
  source = "terraform-aws-modules/eks/aws"
  cluster_name = "richpong-cluster"
  cluster_version = "1.23"
  subnets = ["subnet-0b12d33e10affbbcf","subnet-0a1df796a0109377e"]
  vpc_id = aws_default_vpc.default.id

  cluster_endpoint_public_access  = true

  # EKS Managed Node Group(s)
  eks_managed_node_group_defaults = {
    instance_types = ["t2.small", "t2.medium"]
  }

  eks_managed_node_groups = {
    blue = {}
    green = {
      min_size     = 1
      max_size     = 10
      desired_size = 1

      instance_types = ["t2.medium"]
    }
  }
}

# Needed to set the default region
provider "aws" {
  region  = "us-east-1"
}