## Introduction

`docz` 를 이용해 문서화 한 리액트 컴포넌트 저장소입니다.
자주 사용하는 컴포넌트들을 차곡차곡 쌓아갈 예정입니다.

http://react-compo-repo.surge.sh/

## Principles

이 프로젝트는 아래의 규칙들에 의해 작성될 예정입니다.

- styled-components를 사용해 컴포넌트 내에 스타일을 포함한다.
- airbnb eslint를 따른다.

## Available Scripts

아래와 같은 스크립트를 사용 할 수 있습니다.

### `npm run docz:start`

컴포넌트 개발 페이지를 실행합니다.<br />
브라우저에서 [http://localhost:3001](http://localhost:3001) URL로 확인하실 수 있습니다.

### `npm run docz:build`

컴포넌트 페이지를 정적인 페이지로 build 할 수 있습니다.

## Dependencies

이 프로젝트는 cra_v2로 생성 되었고 아래의 모듈들에 의존성을 가집니다.

### production

- styled-components
- eslint-config-airbnb
- nprogress
- lodash
- redux 
- react-redux
- redux-actions
- redux-thunk
- immer
- blueimp-load-image
- @babel/polyfill
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome

### development

- docz
- docz-theme-default

## TODO
- tab
