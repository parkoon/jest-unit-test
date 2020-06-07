# Unit Test with Jest

> 자바스크립트 테스트 라이브러리 Jest를 이용해 유닛 테스트 연습

## expect

[자세히 알아보기](https://jestjs.io/docs/en/expect)

1. toBe
2. not
3. isNull
4. toBeFalsy & toBeTruthy
5. toStrictEqual
6. toBeLessThan & toBeLessThanOrEqual
7. toMatch
8. toContain
9. assertion (for async data)

## describe

-   테스트 파일에 많은 수의 테스트 함수가 작성되어 있는 경우, `describe`로 연관된 테스트 함수들끼리 그룹화해 놓으면 가독성에 도움이 된다.
-   `beforeEach`, `afterEach` 와 같은 테스트 함수의 범위를 제한 할 수 있다.

## beforeEach

-   테스트 코드가 시작 할 때마다 실행된다.
-   테스트 함수의 중복코드를 제거 할 수 있다.
-   주로 테스트 데이터를 만들 때 사용 할 수 있다.

## afterEach

-   테스트 코드가 끝날 때마다 실행된다.

## afterAll & beforeAll

-   위 `beforeEach`, `afterEach`와 유사하지만, 각 함수의 전 후에 매번 호출되는 것이 아니라, 맨 처음과 맨 끝에 딱 한 번씩만 호출됩니다.
-   대표적인 사용 사례로 데이터베이스 연결 및 연결 해지에 사용된다. (`beforeEach`, `afterEach` 에서 쓰게되면, 매번 연결 및 연결 해지를 하게되어 리소스 낭비가 크다)
