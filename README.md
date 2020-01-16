# rails6-app-mock

## Objective

Rails 6 をベースとした、軽微な技術確認に用いるコードやメモの集合。

## Notes

[Rails 6+Webpacker 開発環境を JS 強者ががっつりセットアップしてみた（翻訳）｜ TechRacho（テックラッチョ）〜エンジニアの「？」を「！」に〜｜ BPS 株式会社](https://techracho.bpsinc.jp/hachi8833/2019_11_28/83678)

- エディタの設定
  - `.editorconfig`
- VS Code の拡張
  - rebornix.Ruby
  - kaiwood.endwise
  - vortizhe.simple-ruby-erb
  - bung87.rails
  - ninoseki.vscode-gem-lens

### Solargraph

Code completion.

- `gem install solargraph`
- `code --install-extension castwide.solargraph`
- `solargraph config`

### Use hivemind instead of Foreman

- `brew install hivemind`
- `vi Procfile.dev`

```
web: rails server
webpacker:  ./bin/webpack-dev-server
```

`vi .env`

```
HIVEMIND_PROCFILE=Procfile.dev
```

Exec: `hivemind`

## Install nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

(As of Jan, 16)

[nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm#install--update-script)

Fixed yarn version using `yarn policies`

```
yarn policies set-version 1.21.1
```

## React
定番コマンドとして `rails generate react:install` や `rails generate react:install:react` が唐突に登場してくる記事が多い。位置づけや役割を理解しないままコマンドを叩いていてもなかなか覚えられず、すぐ調べるハメになるので役割を整理する。

Pattern:

1. webpacker
2. react-rails (gem)
3. react_on_rails (gem)
4. Separate API and React Frontend project

[How to use React with Ruby on Rails 6 | Learnetto](https://learnetto.com/blog/react-rails)

基本的には webpacker の利用が推奨であり、その他Gemを使うべき明確な理由がある場合にはその他を検討すべきとの示唆がある。

### 1. webpacket

```
rails new projectapp --webpack=react
```

Webpack を Rails からお手軽に利用するために `webpacker` という gem を用いるパターン。以下のようなディレクトリ構成になる。

```
app/javascript:
  └── packs:
      └── application.js
      └── hello_react.jsx
```


### 2. react-rails

> react-rails is the official React community gem for integrating React with Rails. The main benefit of using this gem is the react_component helper method which makes it easy to pass Rails data to components.

オフィシャルコミュニティによるGem。react_component helper method (`react_component`) により Rails のデータ（モデル）にアクセスしやすい模様。

```
gem 'react-rails'
```

```
$ bundle install

$ rails generate react:install
```

`.jsx` を作って、

```erb
<%= react_component("Hello", { name: "react-rails" }) %>
```

このように差し込めんで使うイメージ。

Rails デフォルトの Assets Compiler である sprockets とともに利用する方法もあるようだが、素直に Webpack(er) を使ったほうが今後のためと思われる。

### 3. react_on_rails

The other most popular third-party gem for integrating React into Rails is the react_on_rails gem created by ShakaCode.

> Similar to the react-rails gem, now that Rails already provides an easy way to use React via webpacker, you have to see if the stated benefits of the react_on_rails gem apply to your situation.
>
> The main benefits include better support for server side rendering, easy passing of props to React components (with the react_component method just like react-rails), and Redux and React Router integration.

コードは以下のようになる。

```jsx
import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
});
```

Asset Pipeline を利用するのではなく、Webpack がコンパイルしたJSファイルのみを利用するとのこと(++)

## References

- [【保存版】Rails 5 Webpacker 公式ドキュメントの歩き方+追加情報｜ TechRacho（テックラッチョ）〜エンジニアの「？」を「！」に〜｜ BPS 株式会社](https://techracho.bpsinc.jp/hachi8833/2018_05_17/56568)
