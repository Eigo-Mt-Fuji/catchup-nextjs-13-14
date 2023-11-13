serverless frameworkを使ってホスティングされたnext.js 12のwebアプリケーションをamplify hostingに切り替える計画を立てています。
[現在の構成] [想定される切り替え作業] [Amplify Hostingの制約]に記載した情報を元に
Amplify Hostingへの切り替えを行うにあたって、他に必要な切り替え作業・初期設定、切り替え時の制約、作業環境、注意点をアドバイスしてください。

[現在の構成]

- このweb applicationはnext.js 12.xを使って実装されています。SSGとCSRのみを使ったマルチページアプリケーション実装です。SSR(サーバサイドレンダリング)は使っていません。
- webアプリケーションの配信インフラには、cloudfront distribution/lambda@edge/s3を使っています
- このcloudfront distributionの構成上の特徴は以下の通りです。
  - 署名付きurlの配信とserverless frameworkを前提とした静的コンテンツ配信の両方を行うようにBehaviorが設定されている
  - aws waf aclがアタッチされている
  - 外部のTLS/SSL証明書プロバイダで取得したカスタムTLS/SSL証明書がアタッチされている
  - セキュリティ要件に基づくカスタムのセキュリティヘッダが指定されている
  - キャッシュポリシーが指定されている
  - 標準ログ出力が指定されている
  - HTTP/2通信が有効になっている


[想定される切り替え作業]

- AmplifyHosting初期設定
    - ドメイン設定
    - サービスロール
    - CI/CD
    - 環境変数の移管
    - ビルド環境設定
        - ビルドイメージ
    - リポジトリ接続
- CI/CDの切り替え
- amplify.ymlファイル作成

[Amplify Hostingの制約]
- 外部のTLS/SSL証明書プロバイダで取得したカスタムTLS/SSL証明書はAmplify Hostingには適用できない
- AWS WAFをAmplify Hostingには適用できない
