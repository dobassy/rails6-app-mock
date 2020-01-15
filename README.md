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

## References

- [【保存版】Rails 5 Webpacker 公式ドキュメントの歩き方+追加情報｜ TechRacho（テックラッチョ）〜エンジニアの「？」を「！」に〜｜ BPS 株式会社](https://techracho.bpsinc.jp/hachi8833/2018_05_17/56568)
