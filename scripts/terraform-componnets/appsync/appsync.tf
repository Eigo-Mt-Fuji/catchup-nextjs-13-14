resource "aws_appsync_graphql_api" "appsync" {
    provider = aws.app_local
    name          = "appsync-${terraform.workspace}"
    authentication_type = "API_KEY"
    schema        = file("${path.module}/templates/schema.graphql")
    xray_enabled  = true
    tags = local.tags
}

resource "aws_appsync_domain_name" "appsync_domain" {
    provider = aws.app_local
    domain_name = "${terraform.workspace}-${var.api_domain_name}"
    certificate_arn = var.api_certificate_arn
}

resource "aws_appsync_domain_name_api_association" "appsync_domain_api_association" {
    provider = aws.app_local
    domain_name = aws_appsync_domain_name.appsync_domain.domain_name
    api_id = aws_appsync_graphql_api.appsync.id
}
resource "aws_appsync_api_key" "appsync_api_key" {
    provider = aws.app_local
    api_id = aws_appsync_graphql_api.appsync.id
    expires = "2023-12-08T17:33:00Z"
}