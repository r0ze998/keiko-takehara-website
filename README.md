# Keiko Takehara Official Website

心のバランスを整える方法 セミナー講師「竹原恵子」公式サイトの静的実装です。

## 技術スタック

| 項目 | 内容 |
|------|------|
| マークアップ | HTML5 (セマンティック、ARIA対応) |
| スタイル | CSS3 (カスタムプロパティ、clamp、IntersectionObserver) |
| スクリプト | Vanilla JavaScript ES Modules (ビルドツールなし) |
| フォント | Google Fonts (Noto Sans JP / Noto Serif JP / Cormorant Garamond) |
| SEO | Schema.org 構造化データ、OGP、Twitter Card、sitemap.xml |

## ディレクトリ構成

```
keiko/
├── index.html
├── about/index.html
├── services/
│   ├── index.html
│   ├── seminar/index.html
│   ├── counseling/index.html
│   └── corporate/index.html
├── testimonials/index.html
├── blog/
│   ├── index.html
│   ├── mindful-breathing/index.html
│   ├── sleep-reset/index.html
│   └── boundary-communication/index.html
├── faq/index.html
├── contact/
│   ├── index.html
│   └── thanks/index.html
├── booking/index.html
├── privacy/index.html
├── legal/index.html
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/
    │   └── style.css          # 全スタイル（デザイントークン → コンポーネント → レスポンシブ）
    ├── js/
    │   ├── main.js            # エントリーポイント・モジュール初期化
    │   ├── nav.js             # モバイルメニュー・ドロップダウン・スクロールロック
    │   ├── animations.js      # フェードイン・カウントアップ (ease-out)
    │   ├── carousel.js        # お客様の声カルーセル（タイマーリセット対応）
    │   ├── accordion.js       # FAQ アコーディオン
    │   ├── filter.js          # 実績カテゴリフィルター
    │   ├── cookie.js          # Cookie同意バナー
    │   ├── form.js            # お問い合わせフォームバリデーション
    │   └── utils.js           # フッター年表示など
    ├── images/
    │   ├── favicon.svg
    │   └── logo.svg
    └── docs/
        ├── corporate-program-overview.pdf
        └── corporate-program-overview.txt
```

## ページ一覧

| パス | 内容 |
|------|------|
| `/` | トップ（ヒーロー・実績数値・お客様の声・ブログ抜粋・CTA） |
| `/about/` | 講師プロフィール・経歴タイムライン |
| `/services/` | サービス概要 |
| `/services/seminar/` | セミナー詳細・料金 |
| `/services/counseling/` | カウンセリング詳細・料金 |
| `/services/corporate/` | 企業向け研修・資料DL |
| `/testimonials/` | 実績・お客様の声（カテゴリフィルター付き） |
| `/blog/` | コラム一覧 |
| `/blog/mindful-breathing/` | コラム記事1 |
| `/blog/sleep-reset/` | コラム記事2 |
| `/blog/boundary-communication/` | コラム記事3 |
| `/faq/` | よくある質問（アコーディオン・FAQPage構造化データ） |
| `/contact/` | お問い合わせフォーム（バリデーション・ハニーポット） |
| `/contact/thanks/` | 送信完了ページ |
| `/booking/` | 予約ページ（iframe埋め込みプレースホルダー） |
| `/privacy/` | プライバシーポリシー |
| `/legal/` | 特定商取引法に基づく表記 |

## ローカルプレビュー

```bash
cd /Users/r0ze/keiko
npm run preview
# → http://localhost:8080
```

> **注意**: `python3 -m http.server` は必ず keiko ディレクトリ内で実行してください。
> HTML で `/assets/...` の絶対パスを使用しているため、ルートが keiko である必要があります。

## JS モジュール詳細

| ファイル | 役割 | 主な機能 |
|---------|------|---------|
| `main.js` | エントリーポイント | 全モジュールを DOMContentLoaded 後に初期化 |
| `nav.js` | ナビゲーション | モバイルメニュートグル・ドロップダウン・外側クリック閉じ |
| `animations.js` | アニメーション | `.fade-in` IntersectionObserver・ease-out カウントアップ |
| `carousel.js` | カルーセル | prev/next・6秒自動送り（手動操作でタイマーリセット） |
| `accordion.js` | アコーディオン | `aria-expanded` トグル・`hidden` 属性制御 |
| `filter.js` | フィルター | `data-category` によるカード表示切替（CSS クラス方式） |
| `cookie.js` | Cookie同意 | localStorage でバナー表示状態管理 |
| `form.js` | フォーム | 必須チェック・メール形式・ハニーポット・GA4 イベント |
| `utils.js` | ユーティリティ | フッター著作権年の動的更新 |

## CSS 設計

```
/* デザイントークン（CSS カスタムプロパティ）*/
--color-forest / --color-gold / --color-ivory / --color-navy / --color-sage
--space-xs 〜 --space-xxl
--shadow-card / --shadow-hover
--radius-button / --radius-card / --container / --touch-min

/* レスポンシブブレークポイント */
@media (max-width: 1023px)  /* タブレット */
@media (max-width: 767px)   /* モバイル */
```

## 実運用時に接続が必要な項目

| 項目 | 説明 |
|------|------|
| 予約 iframe | Calendly / STORES予約 / Square予約 などの実URL |
| フォーム送信 | バックエンド API（自動返信メール・管理者通知・DB保存） |
| アナリティクス | GA4 / GTM の本番 Measurement ID |
| Search Console | 本番ドメインで所有権確認 |
| SNS・連絡先 | 公式 SNS URL・電話番号・事業者所在地 |
| OGP 画像 | `/og-image.jpg` などの本番用画像ファイル |

## アセット

- 共通スタイル: `assets/css/style.css`
- 共通スクリプト: `assets/js/main.js` (ES modules)
- 企業向け資料: `assets/docs/corporate-program-overview.pdf` / `.txt`
