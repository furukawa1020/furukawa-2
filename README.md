# Empathetic Warmth Project

このプロジェクトは、「共感的ぬくもり」や「効率の外の価値」をテーマにした、活動や作ったものの写真や動画、コードなどを記録するためのウェブサイトです。ユーザーが簡単にメディアをアップロードし、視覚的に魅力的な形で表示することができます。

## プロジェクトの構成

- **public/images/projects-bg.jpg**: プロジェクトの背景画像です。
- **src/components/Upload.js**: ユーザーが画像や動画をアップロードするためのUIを提供するアップロードコンポーネントを定義します。
- **src/pages/Projects.js**: アップロードされたメディアを表示し、背景画像やタイトルを含むレイアウトを構成するプロジェクトページのメインコンポーネントです。
- **src/styles/global.css**: プロジェクト全体のスタイルを定義するCSSファイルです。デザインの一貫性を保つためのスタイルが含まれています。
- **src/App.js**: アプリケーションのエントリーポイントで、ルーティングや全体のレイアウトを設定します。
- **package.json**: プロジェクトの依存関係やスクリプトを定義するファイルです。必要なパッケージやバージョンが記載されています。
- **.gitignore**: Gitで追跡しないファイルやフォルダを指定するファイルです。

## セットアップ手順

1. リポジトリをクローンします。
   ```
   git clone <repository-url>
   ```

2. プロジェクトディレクトリに移動します。
   ```
   cd empathetic-warmth-project
   ```

3. 依存関係をインストールします。
   ```
   npm install
   ```

4. 開発サーバーを起動します。
   ```
   npm start
   ```

## 使用方法

- メディアをアップロードするには、プロジェクトページにアクセスし、アップロードボタンを使用します。
- アップロードされたメディアは、ページ上に表示されます。

このプロジェクトは、共感的な価値を持つ活動や作品を記録し、共有するためのプラットフォームを提供します。