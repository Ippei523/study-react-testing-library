# React / Next.js のテストを勉強するためのアプリ

## Testを利用するまでの流れ

1. ```npx create-next-app テスト名 --ts```でアプリを作成する
2. ```npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom```でテストのライブラリをインストールする

## Testing Library公式ホームページの要約

### 課題

- テストではコンポーネントの詳細な実装を含むことを避け、テストが意図する信頼性を与えること集中すべきである。
- 機能面ではなく実装面でのコンポーネントのリファクタリングによってテストが壊され、チームの作業が遅くならないように、テストベースは長期的に保存可能であるべき
