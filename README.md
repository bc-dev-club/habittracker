# Habit Tracker

## 概要
ぼぶくら開発部の記念すべき初プロダクト、Habit Tracker。習慣トラッカーです

## 技術スタック

- バックエンド: ASP.NET Core 8.0 C#
- フロントエンド: Vite + React 19.0 + TypeScript
- データベース: MySQL

## 必須環境
- Docker
- Make（があると便利）

## 環境構築

```
# 開発環境のビルド
make build-development

# 開発環境の実行
make run-development
```

http://localhost:8080/ にアクセスすると、フロントエンドにプロキシされます。
http://localhost:8000/api/ にアクセスすると、バックエンドにプロキシされます。
