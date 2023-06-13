module "richpong-cluster-eks" {
  source            = "terraform-aws-modules/eks/aws"
  cluster_name      = "richpong-cluster"
  cluster_version   = "1.23"
  vpc_id            = aws_default_vpc.default.id
  cluster_endpoint_public_access = true

  # EKS Managed Node Group(s)
  eks_managed_node_group_defaults = {
    # instance_types = ["t2.small", "t2.medium"]
  }

  eks_managed_node_groups = {
    # blue = {}
    # green = {
    #   min_size       = 1
    #   max_size       = 10
    #   desired_size   = 1
    #   instance_types = ["t2.medium"]
    # }
  }

}
