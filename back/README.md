# Garden Day Backend

Spring Boot 3.2.0 + Java 21 で構築されたバックエンドAPI

## 要件

- Java 21
- Maven 3.6+（オプション：Maven Wrapperを使用する場合は不要）

## セットアップ

**Maven Wrapperを使用（推奨）**
このプロジェクトにはMaven Wrapperが含まれているため、Mavenをインストールする必要はありません。

```bash
# 依存関係のインストールとビルド
./mvnw clean install

# アプリケーションの起動
./mvnw spring-boot:run
```

**Maven Wrapperについて**
- `./mvnw`コマンドでMavenがインストールされていなくてもビルド・実行できます
- 初回実行時は、必要なMavenが自動的にダウンロードされます
- Windowsの場合は `mvnw.cmd` を使用してください

**Mavenがインストールされている場合**
```bash
mvn clean install
mvn spring-boot:run
```

## APIエンドポイント

- `GET /api/health` - ヘルスチェック

## 開発環境

- データベース: H2 (インメモリ)
- ポート: 8080
- H2コンソール: http://localhost:8080/h2-console

## 本番環境

環境変数で設定:
- `DATABASE_URL`: PostgreSQL接続URL
- `DATABASE_USER`: データベースユーザー名
- `DATABASE_PASSWORD`: データベースパスワード

