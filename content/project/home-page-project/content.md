---
title: "起業部公式サイト作成プロジェクト"
date: 2024-11-19
description: "42 Tokyo 起業部の公式サイトの作成"
draft: false
categories:
  - WEBプロジェクト
tags:
  - テクノロジー/
---

## サイトにプロジェクトの内容を掲載する方法

### 手順

1. プロジェクトのレポジトリを作成する。このとき必ずレポジトリ名の中に「**project**」を含むこと
2. そのレポジトリないに「**public**」というディレクトリを作成する。
3. publicディレクトリの中に必要に応じてマークダウン形式のファイルをアップロードする。

下記がディレクトリ構成の一例である。

```shell
repo-project/
├── public/
│   ├── about.md
│   ├── date.md
│   ├── _index.md
│   └── dir/
│       ├── about.md
│       └── _index.md
└── README.md
```

それぞれのマークダウン形式のファイルには下記のような形式の先頭部(Front Matter)を必ず付けること。
（つけない場合公開されない）

```markdown
---
title: "プロジェクト名やページのタイトル"
date: 2024-11-18
---
```

Front Matterには下記のようなパラメーターを設定することも可能である。

```markdown
---
title: "プロジェクト名やページのタイトル"
date: 2024-11-18
description: "ページの簡単な説明や概要"
draft: true
categories:
  - カテゴリ名1
  - カテゴリ名2
tags:
  - タグ1
  - タグ2
---
```

