terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 2.0"
    }
  }
}

resource "azurerm_resource_group" "resource_group" {
    name     = "${var.resource_group}_${var.environment}"
    location = var.location
}

resource "azurerm_kubernetes_cluster" "terraform-k8s" {
    name                = "${var.resource_group}_${var.environment}"
    location            = azurerm_resource_group.resource_group.location
    resource_group_name = azurerm_resource_group.resource_group.name
    dns_prefix          = var.dns_prefix

    linux_profile {
        admin_username = "ubuntu"

        ssh_key {
            key_data = file(var.ssh_public_key)
        }
    }

    default_node_pool {
        name       = "agentpool"
        node_count = 1
        vm_size    = "Standard_DS1_v2"
    }

    service_principal {
        client_id     = var.client_id
        client_secret = var.client_secret
    }

    tags = {
        Environment = var.environment
    }
}

terraform {
    backend "azurerm" {
        # Define your backend configuration here
    }
}
