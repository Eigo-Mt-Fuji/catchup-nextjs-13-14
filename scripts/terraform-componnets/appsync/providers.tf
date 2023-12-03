provider "aws" {
    region = "us-east-1"
    profile = "devops"
    alias = "app_global"
}
provider "aws" {
    region = "ap-northeast-1"
    profile = "devops"
    alias = "app_local"
}
