# todli

CLIでTODOリストを管理するシンプルなツール。

## インストール

```bash
# Bunを使用
bun install -g todli
```

## 使い方

TODOの追加

```bash
todli add "買い物に行く"
```

TODOの一覧表示

```bash
todli list
```

TODOの完了

```bash
todli done 1 # 1番目のTODOを完了にする
```

TODOの削除

```bash
todli remove 2 # 2番目のTODOを削除する
```

TODOの完了済み項目の一括削除

```bash
todli clear
```

## 技術スタック

- Runtime: Bun
- Language: TypeScript

## 開発

```bash
# リポジトリをクローン
git clone https://github.com/sh-1101/todli.git
cd todli

# 依存関係のインストール
bun install

# ローカルでリンク
bun link

# 実行

todli add "買い物に行く"
```

## ライセンス

MIT License
