terraform {
  backend "local" {
    path = "./terraform.tfstate"
  }
}

locals {
  tags = {
    "env" = terraform.workspace
    "project" = "reviewer"
  }
}
