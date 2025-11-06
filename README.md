# Garden Day

React Native (TypeScript) + Spring Boot (Java 21) で構築されたモバイルアプリケーション

## プロジェクト構成

```
garden-day/
├── front/          # React Native (TypeScript) プロジェクト
└── back/           # Spring Boot (Java 21) プロジェクト
```

## 技術スタック

### フロントエンド
- React Native 0.75.0
- TypeScript 5.3.3
- React Navigation
- Axios

### バックエンド
- Spring Boot 3.2.0
- Java 21
- Spring Data JPA
- PostgreSQL (開発・本番環境)

## セットアップ

### フロントエンド

```bash
cd front
npm install
npm start
```

### バックエンド

**1. データベースの起動**

Docker Composeを使用してPostgreSQLを起動します：

```bash
cd ../garden-day-cnt
docker-compose up -d
```

**2. アプリケーションの起動**

**Maven Wrapperを使用（推奨）**
このプロジェクトにはMaven Wrapperが含まれているため、Mavenをインストールする必要はありません。

```bash
cd back

# 依存関係のインストールとビルド
./mvnw clean install

# アプリケーションの起動
./mvnw spring-boot:run
```

**Mavenがインストールされている場合**
```bash
cd back
mvn clean install
mvn spring-boot:run
```

> **注意**: バックエンドを起動する前に、PostgreSQLコンテナが起動していることを確認してください。

## 開発

### フロントエンド実行

```bash
# Android
npm run android

# iOS
npm run ios
```

### バックエンド実行

```bash
cd back

# Maven Wrapperを使用（推奨・Mavenのインストール不要）
./mvnw spring-boot:run

# または、Mavenがインストールされている場合
mvn spring-boot:run
```

**Maven Wrapperについて**
- このプロジェクトにはMaven Wrapper (`mvnw`) が含まれています
- Mavenをインストールしなくても、`./mvnw`コマンドでビルド・実行できます
- 初回実行時は、必要なMavenが自動的にダウンロードされます

## ポート情報

### データベース (PostgreSQL)
- **ポート**: `5432`
- **データベース名**: `gardenday`
- **ユーザー名**: `gardenday`
- **パスワード**: `gardenday`
- 接続URL: `jdbc:postgresql://localhost:5432/gardenday`

> **注意**: これらの値は `garden-day-cnt/.env` ファイルで変更できます。

### バックエンド
- **ポート**: `8080`
- アクセス: `http://localhost:8080`
- APIエンドポイント: `http://localhost:8080/api`

### フロントエンド（Metro Bundler）
- **ポート**: `8081`
- アクセス: `http://localhost:8081`
- `npm start` で起動

### 開発環境での接続設定

**Androidエミュレータからバックエンドに接続する場合:**
- Androidエミュレータでは `localhost` が使えません
- 代わりに `10.0.2.2` を使用します
- 例: `http://10.0.2.2:8080/api`

**iOSシミュレータ・実機からバックエンドに接続する場合:**
- iOSシミュレータ: `http://localhost:8080/api` が使用可能
- 実機: 開発マシンのIPアドレスを使用（例: `http://192.168.1.100:8080/api`）

> **注意**: 実機から接続する場合は、バックエンドのCORS設定と、開発マシンのファイアウォール設定を確認してください。

## ライセンス

MIT
