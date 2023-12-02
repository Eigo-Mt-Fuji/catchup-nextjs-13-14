resource "aws_route53_record" "appsync_domain_record" {
    provider = aws.app_global
    zone_id = var.hostzone_id
    name = aws_appsync_domain_name.appsync_domain.domain_name
    type = "A"
    alias {
        name = aws_appsync_domain_name.appsync_domain.appsync_domain_name
        zone_id = aws_appsync_domain_name.appsync_domain.hosted_zone_id
        evaluate_target_health = false
    }
}