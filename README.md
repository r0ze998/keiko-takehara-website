# Keiko Takehara Official Website

ミロスアカデミー認定講師「竹原恵子」公式サイトの静的実装です。

## 技術スタック

| 項目 | 内容 |
|------|------|
| マークアップ | HTML5 (セマンティック、ARIA対応) |
| スタイル | CSS3 (カスタムプロパティ、clamp、Grid / Flexbox) |
| スクリプト | Vanilla JavaScript ES Modules (ビルドツールなし) |
| フォント | Google Fonts (Noto Sans JP / Noto Serif JP / Cormorant Garamond / Source Sans 3) |
| SEO | Schema.org 構造化データ、OGP、Twitter Card、sitemap.xml |

## ディレクトリ構成

```
keiko/
├── index.html                          # トップページ
├── about/index.html                    # 講師紹介
├── services/
│   ├── index.html                      # サービス概要
│   ├── seminar/index.html              # セミナー詳細
│   ├── counseling/index.html           # カウンセリング詳細
│   └── corporate/index.html            # 企業向けサービス
├── testimonials/index.html             # 実績・お客様の声
├── blog/
│   ├── index.html                      # コラム一覧
│   ├── unconscious-clutter/            # 片付けられないのは誰？
│   ├── emotion-mechanism/              # 感情の仕組みを知ると人間関係が変わる
│   ├── self-esteem-habits/             # 自己肯定感を育てる5つの小さな習慣
│   ├── life-themes/                    # あなたの人生を動かす3つのテーマとは
│   ├── relationship-mirror/            # 目の前の人は自分の鏡
│   ├── mindful-breathing/              # 3分でできる朝のマインドフル呼吸法
│   ├── sleep-reset/                    # 仕事ストレスで眠れない夜の整え方
│   └── boundary-communication/         # 人間関係で疲れない境界線の引き方
├── faq/index.html                      # よくある質問
├── contact/
│   ├── index.html                      # お問い合わせフォーム
│   └── thanks/index.html              # 送信完了
├── booking/index.html                  # 講座を探す
├── privacy/index.html                  # プライバシーポリシー
├── legal/index.html                    # 特定商取引法に基づく表記
├── sitemap.xml
├── robots.txt
├── package.json
└── assets/
    ├── css/
    │   └── style.css                   # 全スタイル（トークン → コンポーネント → レスポンシブ）
    ├── js/
    │   ├── main.js                     # エントリーポイント（年表示ユーティリティ含む）
    │   ├── nav.js                      # モバイルメニュー・ドロップダウン
    │   ├── animations.js              # フェードイン・カウントアップ
    │   ├── carousel.js                # お客様の声カルーセル
    │   ├── accordion.js               # FAQ アコーディオン
    │   ├── filter.js                  # カテゴリフィルター
    │   ├── cookie.js                  # Cookie同意バナー
    │   └── form.js                    # フォームバリデーション
    ├── images/
    │   ├── favicon.svg
    │   ├── logo.svg
    │   ├── home/                      # トップページ用画像
    │   │   ├── hero-portrait.jpg      # ヒーローセクション ポートレート
    │   │   ├── concept-kyoto.jpg      # コンセプト 京都・桜
    │   │   ├── service-seminar.jpg    # セミナー風景
    │   │   ├── service-counseling.jpg # カウンセリングイメージ
    │   │   └── service-corporate.jpg  # 企業向け登壇
    │   └── about/                     # 講師紹介ページ用画像
    │       ├── profile-portrait.jpg   # プロフィール写真
    │       ├── stage-kyoto.jpg        # 国立京都国際会館 登壇
    │       └── seminar-washitsu.jpg   # 和室セミナー風景
    └── docs/
        ├── corporate-program-overview.pdf
        └── corporate-program-overview.txt
```

## ページ一覧（22ページ）

| パス | 内容 |
|------|------|
| `/` | トップ（ヒーロー・実績数値・お客様の声・最新コラム・CTA） |
| `/about/` | 講師プロフィール・経歴タイムライン・メディア実績 |
| `/services/` | サービス概要 |
| `/services/seminar/` | セミナー詳細・料金 |
| `/services/counseling/` | カウンセリング詳細・料金 |
| `/services/corporate/` | 企業向け研修・資料DL |
| `/testimonials/` | 実績・お客様の声（カテゴリフィルター付き） |
| `/blog/` | コラム一覧（8記事 + note.com 埋め込み） |
| `/faq/` | よくある質問（アコーディオン・FAQPage構造化データ） |
| `/contact/` | お問い合わせフォーム（バリデーション・ハニーポット） |
| `/contact/thanks/` | 送信完了ページ |
| `/booking/` | 講座を探す（オンライン / リモート対面の2パスウェイ選択） |
| `/privacy/` | プライバシーポリシー |
| `/legal/` | 特定商取引法に基づく表記 |

## ローカルプレビュー

```bash
npx serve . -l 3000
# → http://localhost:3000
```

## CSS 設計

デザイントークンを `:root` で一元管理し、色・透明度バリエーションもCSS変数化しています。

```
パレット:       --color-forest (#ff6347) / --color-gold / --color-ivory / --color-navy / --color-sage / --color-lavender
透明度:         --forest-5 〜 --forest-35 / --sage-15 〜 --sage-65 / --lavender-35, --lavender-45
ボーダー:       --border-light / --border-subtle
スペーシング:   --space-xs 〜 --space-xxl
エレベーション: --shadow-card / --shadow-hover
ユーティリティ: .mt-md / .is-hidden / .visually-hidden
ブレークポイント: 1023px (タブレット) / 767px (モバイル) / prefers-reduced-motion
```

コンポーネントスコーピング:
- `.blog-article` — ブログ記事本文のスタイル（グローバルの `article` を汚染しない）
- `.card > img:first-child` — カード上部のフルブリード画像
- `figure.card` — padding:0 で画像をカードに密着
- `.sns-row + .footer-links` — フッターSNSの下にマージン自動付与

## JS モジュール

| ファイル | 役割 |
|---------|------|
| `main.js` | エントリーポイント。全モジュール初期化 + フッター著作権年表示 |
| `nav.js` | モバイルメニュートグル・ドロップダウン・外側クリック閉じ |
| `animations.js` | `.fade-in` IntersectionObserver・ease-out カウントアップ |
| `carousel.js` | prev/next・6秒自動送り（手動操作でタイマーリセット） |
| `accordion.js` | `aria-expanded` トグル・`hidden` 属性制御 |
| `filter.js` | `data-category` によるカード表示切替 |
| `cookie.js` | localStorage でバナー表示状態管理 |
| `form.js` | 必須チェック・メール形式・ハニーポット・GA4 イベント |

## 実運用時に接続が必要な項目

| 項目 | 説明 |
|------|------|
| 講座申込 | ミロスアカデミーオンライン / ミロスアカデミーに外部リンク済み |
| フォーム送信 | バックエンド API（自動返信メール・管理者通知・DB保存） |
| アナリティクス | GA4 / GTM の本番 Measurement ID |
| Search Console | 本番ドメインで所有権確認 |
| SNS・連絡先 | 公式 SNS URL・電話番号・事業者所在地 |
