resource "aws_dynamodb_table" "review_history" {
  provider = aws.app_local

  name           = "${terraform.workspace}_review_history"
  billing_mode     = "PAY_PER_REQUEST"
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }
  tags = local.tags
}
