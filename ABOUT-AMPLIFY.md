
# What is AWS Amplify Hosting?

https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

- About
  - Amplify Hosting features
    - Amplify Hosting supports the common SPA frameworks, for example, React, Angular, Vue.js, Ionic, and Ember, as well as static site generators like Gatsby, Eleventy, Hugo, VuePress, and Jekyll.
        - Modern web apps include
            - SPA(single-page application) frameworks
            - React, Angular, or Vue
            - SSG(static-site generators)
            - Hugo, Jekyll, or Gatsby
            - SSR(server-side rendering)
            - created using Next.js
    - Manage production and staging environments for your frontend and backend by connecting new branches. See, feature branch deployments.
    - Connect your application to a custom domain. See, set up custom domains.
    - Deploy and host SSR web apps created using the Next.js. framework.
    - Preview changes during code reviews by setting up pull request previews.
    - Improve your app quality with end to end tests. See, end-to-end testing.
    - Password protect your web app so you can work on new features without making them publicly accessible. See, restricting access.
    - Set up rewrites and redirects to maintain SEO rankings and route traffic based on your client app requirements. See, using redirects.
    - Instant cache invalidations ensure your app is updated instantly on every code commit.
    - Atomic deployments eliminate maintenance windows by ensuring that the web app is updated only after the entire deployment finishes. This eliminates scenarios where files fail to upload properly.
    - Get screen shots of your app rendered on different mobile devices to identify layout issues.

- Server-side rendering (SSR)
  - What is server-side rendering
  - Amplify support for Next.js SSR
    - Pricing for Next.js SSR apps
      - deploying your Next.js 12 or later SSR app, Amplify Hosting compute manages the resources required to deploy the SSR app for you. For information about Amplify Hosting compute charges, see AWS Amplify Pricing.
        - ビルド & デプロイ: 0.01 USD/1 分あたり
        - データストレージ: 0.023 USD/GB/月 (アプリが削除されるまで継続課金されます)
        - データ転送 (OUT): 0.15 USD/GBサービス
        - リクエスト数 (SSR): 0.30 USD/100 万リクエスト
        - リクエスト期間 (SSR): 0.20 USD/時間 (GB-時間)
        - 高い費用対効果、ユーザーごとの定額料金もありません。プロジェクトごとの複数サイトとパブリック SSL 証明書を追加費用なしで含みます。
    - Deploying a Next.js SSR app with Amplify
      - Classic (Next.js 11 only) SSR to the Amplify Hosting compute SSR provider
    - Migrating a Next.js 11 SSR app to Amplify Hosting compute
    - Adding SSR functionality to a static Next.js app
      - Use the AWS CLI to change the platform for your app to WEB_COMPUTE
        - command
          - aws amplify update-app --app-id abcd1234 --platform WEB_COMPUTE --region us-west-2
        - platform type
            - WEB: SSG app is set to platform type
            - WEB_DYNAMIC: SSR app using Next.js version 11 is set to 
            - WEB_COMPUTE: Next.js 12 using SSR managed by Amplify Hosting compute
    - Making environment variables accessible to server-side runtimes
    - Deploying a Next.js app in a monorepo
    - Amazon CloudWatch Logs for SSR apps
      - Amplify sends information about your Next.js runtime to Amazon CloudWatch Logs in your AWS account
      - When you deploy an SSR app, the app requires an IAM service role that Amplify assumes when calling other services on your behalf
        - logs:CreateLogStream
        - logs:CreateLogGroup
        - logs:DescribeLogGroups
        - logs:PutLogEvents
    - Troubleshooting SSR deployments
      - Edge API routes cause your Next.js build to fail
      - On-Demand Incremental Static Regeneration isn't working for your app
      - The size of the build output is too large
      - Your build fails with an out of memory error
      - The HTTP response size is too large
    - Amplify Next.js 11 SSR support

- Setting up custom domains
  - Understanding DNS terminology and concepts
  - Add a custom domain managed by Amazon Route 53
  - Add a custom domain managed by a third-party DNS provider
  - Add a custom domain managed by GoDaddy
  - Add a custom domain managed by Google Domains
  - Manage subdomains
  - Wildcard subdomains
  - Set up automatic subdomains for an Amazon Route 53 custom domain
    - After an app is connected to a custom domain in Route 53, Amplify enables you to automatically create subdomains for newly connected branches. For example, if you connect your dev branch, Amplify can automatically create dev.exampledomain.com. When you delete a branch, any associated subdomains are automatically deleted.


  - Troubleshooting custom domains

- Configuring build settings `OK`
  - Monorepo build settings

- Feature branch deployments
  - Team workflows with Amplify backend environments
  - Pattern-based feature branch deployments
  - Automatic build-time generation of Amplify config
  - Conditional backend builds
  - Use Amplify backends across apps

- Manual deploys `OK`

- One-click deploy button `OK`

- Setting up GitHub access `OK`

- Pull request previews

- End-to-end testing

- Using redirects

- Restrict access

- Environment variables `OK`

- Custom headers

- Incoming webhooks

- Monitoring

- Notifications

- Custom builds `OK`

- Adding a service role `OK`
  - Amplify requires permissions to deploy backend resources with your front end
    - service role to accomplish this
      - service role is the AWS Identity and Access Management (IAM) role that Amplify assumes when calling other services on your behalf
- Managing app performance

- Logging Amplify API calls using AWS CloudTrail

- Security
  - Identity and Access Management
  - Data Protection
  - Compliance Validation
  - Infrastructure Security
  - Logging and monitoring
  - Cross-service confused deputy prevention
  - Security best practices
- Quotas
