
## ワンタッチデプロイ

[![Deploy](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/Eigo-Mt-Fuji/catchup-nextjs-13-14)

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 実行環境

- nodejs 18.17 or higher
- TypeScript 5.1.3 or higher
- @types/react 18.2.8 or higher

## ディレクトリ構成

```
        src
          ├─ components
          │   ├─ hoc(共通処理ラップコンポーネント)
          │   ├─ layouts
          │   │    ├─ index.ts (export用)
          │   │    └─ [コンポーネント名]
          │   │              ├─ hooks.ts (コンポーネント依存のロジック)
          │   │              ├─ hooks.spec.ts (コンポーネント依存のテスト)
          │   │              └─ index.tsx (ビューとなるtsx)
          │   ├─ applications
          │   │    ├─ index.ts (export用)
          │   │    └─ [コンポーネント名]
          │   │              ├─ hooks.ts (コンポーネント依存のロジック)
          │   │              ├─ hooks.spec.ts
          │   │              └─ index.tsx (Viewの部分)
          │   └─ parts
          │        ├─ index.ts (export用)
          │        └─ [コンポーネント名]
          │                  ├─ hooks.ts (コンポーネント依存のロジック)
          │                  ├─ hooks.spec.ts
          │                  └─ index.tsx (Viewの部分)
          ├─ pages (ルーティングコンポーネント)
          ├─ hooks (共通のカスタムHooks)
          ├─ themes (MUIの共通デザイン定義)
          ├─ stores (Redux Store)
          │   ├─ reducers
          │   ├─ actions
          │   ├─ actionCreator.ts
          │   └─ providers
          ├─ modules (変更可能なモジュール群)
          │   ├─ generated(OpenAPIによって生成されたコード)
          │   ├─ constants.ts(定数群)
          │   └─ themes (スタイリングの定数)
          ├─ types（型定義ファイルがないライブラリ用）
          └─ test
```


- components/applicationsコンポーネント作成訓練
  - 組み込みhookを使ってみる練習
      - useState
      - useEffect
      - useCallback
  - 組み込みhookを組み合わせて独自のhookを実装する練習
  - component + hookという構成に近づける訓練
- stores/context
- themes/mui訓練
- modules/generated(OpenAPIによって生成されたコード)取り扱い
- sst.config取り扱い訓練


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 考えること

- ページ単位
- コンポーネント定義・管理
- uiライブラリ選定・応用
- スタイル定義・管理
- イベントハンドリング・イベント管理
- ステート管理
  - 普段使ってない定義済みフック
  - 独自のフック
  - Reactコンテキスト
  - ストレージ
- api呼び出し
- ユーザエージェント
