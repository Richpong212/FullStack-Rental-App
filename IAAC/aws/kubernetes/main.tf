# codegenitor-terraform-backend-state-aws
# AKIA55C5Z7XFB2LRQ2KR.  -aws access key id
# subnet-0b12d33e10affbbcf - subnet id

terraform {
   backend "s3" {
     bucket = "codegenitor-terraform-backend-state-aws" # Replace with your bucket name
     key    = "aws-terraform-k8s	" # Replace with your bucket key
     region = "us-east-1" # Replace with your bucket region
   }
}

resource "aws_default_vpc" "default" {
  
}

data "aws_subnet" "subnets" {
  vpc_id = aws_default_vpc.default.id
}

resource "kubernetes_cluster_role_binding" "name" {
    metadata {
        name = "fabric8-rbac"
    }
    role_ref {
        api_group = "rbac.authorization.k8s.io"
        kind      = "ClusterRole"
        name      = "cluster-admin"
    }
    subject {
        kind      = "ServiceAccount"
        name      = "default"
        api_group = "default"
    }
  
}

module "richpong-cluster" {
  source = "terraform-aws-modules/eks/aws"
  cluster_name = "richpong-cluster"
  cluster_version = "1.14"
  subnets = ["subnet-0b12d33e10affbbcf","subnet-0a1df796a0109377e"]
  vpc_id = aws_default_vpc.default.id

  node_groups = [
    {
      name                          = "richpong-cluster-node-group"
      instance_type                 = "t2.micro"
      max_capacity                  = 3
      min_capacity                  = 3
      desired_capacity              = 1
      
    }
  ]
}