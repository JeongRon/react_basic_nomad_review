# (복습) Nomad - ReactJS로 영화 웹 서비스 만들기
- https://nomadcoders.co/react-for-beginners

## Setting

- React app 만들기

  - npx create-react-app my-app

- React 실행

  - npm start

- react-router-dom 사용

  - Router, Switch, Route, Link, useParams() 활용 가능
  - npm i react-router-dom@5.3.0

- github pages 배포

  1. (설치) npm i gh-pages
  2. (추가) package.json 에 코드 추가

     - (1) 홈페이지 url 만들기
       - `"homepage": "https://JeongRon.github.io/react_basic_nomad"`
         - 깃허브 아이디 (+) github.io/ (+) 레포지터리 이름
     - (2) "scipts" 안에 "deploy" 추가
       - `"deploy" : "gh-pages -d build"`
         - gh-pages 실행시키고, build 디렉토리 가져감
       - `"predeploy" : "npm run build"`
         - deploy 전에 자동으로 build 시키도록 넣은 코드

  3. (실행) `npm run deploy`

     - "predeploy" 실행 -> "deploy" 실행

  4. (확인) homepage url 업데이트 확인

## Learned Skills

- useState

  - 업데이트 발생 시, 프로그램이 실행 하는 도중 값이 변할 때 활용

  ```js
  // 1. import useState
  import { useState } from "react";
  function App() {
    // 2. useState 활용 변수 선언 및 초기화
    const [counter, setCounter] = React.useState(0);
    const onClick = () => {
      // 3. 이벤트 발생 시, useState 변수 값 변경
      setCounter((current) => current + 1);
    };
    return (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={onClick}>Click me</button>
      </div>
    );
  }
  ```

- useEffect

  - 불필요한 리렌더링을 줄일때 활용
  - 업데이트 시 리렌더링 발생 -> 업데이트 된 컴포넌트 모든 코드가 실행
  - 활용 상황 예시
    1. 컴포넌트가 처음 rendering 되었을 때만 실행 할 코드
    2. 어느 특정 state에 변화가 있을 때만 실행할 코드

  ```js
  // import useEffect
  import { useState, useEffect } from "react";

  function Search() {
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => setKeyword(event.target.value);
    // Search 컴포넌트 처음 렌더링시 실행
    useEffect(() => {
      console.log("i run only once.");
    }, []);
    // keyword 값이 변할 때 실행
    useEffect(() => {
      console.log("i run when 'keyword' changes");
    }, [keyword]);
    return (
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
    );
  }
  ```

- css 코드 자바스크립트 객체로 변환해서 사용

  - module.css 파일로 만들어서 활용 가능
  - html 코드 보면, 자동으로 클래스네임 설정됨

  ```js
  // 1. import module.css
  import styles from "./Button.module.css";

  function Button() {
    // 2. className={}
    return <button className={styles.btn}>BUTTON</button>;
  }

  export default Button;
  ```

- movie api 데이터 가져오기

  - async / await
