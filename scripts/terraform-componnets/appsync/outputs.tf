output "appsync_api_key" {
    value = aws_appsync_api_key.appsync_api_key.key
    sensitive = true
}
output "appsync_api_base_url" {
    value = "https://${aws_appsync_domain_name.appsync_domain.domain_name}/graphql"
}