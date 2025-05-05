# bentenshichifuku_portfolio
 [公開中のポートフォリオを見る](https://bentenshichifuku-portfolio-site.vercel.app/)

## ✨ プロジェクト概要

> **BraveBird** は、自分自身の活動や興味を美しく表現するために構築された、完全オリジナルのポートフォリオサイトです。
> React（Next.js）+ Tailwind CSS を用いて、見やすさと拡張性を両立しました。

---

## 🎯 目的

| No. | タイトル       | 説明                                                                 |
|-----|----------------|----------------------------------------------------------------------|
| ①   | 就活・インターン | スキル・実績・自己紹介などを掲載                                     |
| ②   | 研究紹介         | 所属研究室や研究テーマ、発表資料など                                 |
| ③   | 技術アウトプット   | GitHub連携や開発記事、制作物など                                      |
| ④   | クリエイティブ展示 | 写真・音楽・動画・デザインなど多彩なアウトプット                       |
| ⑤   | 趣味・個人活動     | サウナ、釣り、FPVドローン、旅、美食会 など、自分らしさを伝えるための空間 |

---

## 🛠 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (v15)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **開発言語**: TypeScript
- **ホスティング**: Vercel
- **デプロイ**: 手動 or CI/CD対応可能
- **アセット管理**: `public/` ディレクトリに画像を配置

---

## 🔧 ディレクトリ構成（主な構成）

bravebird_portfolio/
├── src/
│ ├── components/ # Header, Footer, Hero, Layout, ProfileCardなど共通UI
│ ├── pages/ # index.tsxや各コンテンツページ
│ ├── hobby/ # 趣味別ページ (travel.tsx, music.tsxなど)
│ └── data/ # 各ページに渡すデータ（任意で管理）
├── public/ # 画像やアイコン素材
├── styles/ # TailwindやグローバルCSS
└── README.md # ←今見ているこれ

## 📸 特徴的な機能

- ホーム画面に透明な背景と滑らかなプロフィール表示
- ヘッダー／フッター共通化によるページ遷移のスムーズさ
- カード形式による読みやすい UI
- 各ページの編集・追加が簡単な構造
- 将来的なスケーラビリティを考慮

---

## 🧑‍💻 開発者

- **名前**: BentenShichifuku
- **GitHub**: [@BentenShichifuku](https://github.com/BentenShichifuku)
- **お問い合わせ**: `yyoshida@kanolab.next`

---

## 🚀 今後の展望

- モバイル対応の最適化
- プロフィール表示のアニメーション強化
- 各趣味ページの充実（旅ログ、音楽プレイリスト連携 etc.）
- 公開＆シェア

---

**🕊️ BraveBird は、今日も飛び立つ。**
run:npm run dev
