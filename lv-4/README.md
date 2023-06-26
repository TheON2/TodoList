# TodoList React과제 LV4 적용

# React 과제 Lv. 4

<aside>

**Goal : 나만의 React App 만들기**

</aside>

- 지금까지 배운 내용을 활용하여 나만의 React App 을 만들어봅시다.
    - 주제는 반드시 Todo List가 아니여도 됩니다. 본문과 댓글을 가진 구조의 웹 서비스면 **OK!**

<aside>
 
**Checklist : 과제 진행 간 고민해야 하는 부분**

</aside>

- 상태관리 ( 유지 / 초기화 ) 가 잘 되어있나요?
- 각 컴포넌트의 재사용성이 높나요?
- 예외처리가 미흡한 부분은 없나요?

<aside>

**features : 구현해야 할 기능이에요.**

</aside>

- **(1) 공통**
    - UI 구현하기 [완료]
    - API 명세서 작성하기 [완료]
- **(2) 본문 (ex: 할일) CRUD 구현**
    - 본문 리스트 조회 하기 [완료]
    - 본문 조회 하기 [완료]
    - 본문 추가 하기 [완료]
    - 본문 삭제 하기 [완료]
    - 본문 수정 하기 [완료]
- **(3) 배포**
    - json-server 서버 배포 (heroku 사용)
    - 리액트 프로젝트 배포 (S3, vercel 등 자유)

<aside>

📌 **Requirement : 과제에 요구되는 사항이에요.**

</aside>

- **(1) UI/UX**
    - 창의적인 UI/UX로 과제를 만드세요. (예시는 예시일뿐 입니다) [완료]
    - 예시에 없어도 만들고 싶은 기능이 있다면 **OK!**
- **(2) 필수 요구 사항**
    - **동적 라우팅을 사용**하세요. [완료]
    - 1개 이상의 `Custom Hook`을 구현하세요. [완료]
    - **Form에 유효성 검증 기능을 적용**하세요. *유효성 검증이란, 아래의 예시들을 의미합니다.*
        - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
        - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
    - 버튼 **컴포넌트 1개로 모든 버튼을 구현**하세요. 모든 스타일과 기능을 버튼을 구현할 수 있는 **만능 버튼**을 만들어보는 것 입니다.
    - `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
    - 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
    - `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다. [완료]
- (3) API 명세서 (프로젝트 완료 후 작성)

1. **addTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos`
    - **Method**: POST
    - **Description**: 새로운 할 일을 추가합니다.
    - **Payload**: `newTodo` - 새로 추가될 할 일의 정보를 담은 객체입니다.

2. **getTodos**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos`
    - **Method**: GET
    - **Description**: 모든 할 일을 가져옵니다.

3. **updateDoneTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: PATCH
    - **Description**: 할 일의 완료 상태를 업데이트합니다.
    - **Params**: `id` - 업데이트할 할 일의 ID입니다.
    - **Payload**: `{done:!(todo.done)}` - 완료 상태를 반전시키는 객체입니다.

4. **updateTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: PATCH
    - **Description**: 할 일의 내용을 업데이트합니다.
    - **Params**: `id` - 업데이트할 할 일의 ID입니다.
    - **Payload**: `{content:sendData.content}` - 할 일의 새로운 내용을 담은 객체입니다.

5. **deleteTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: DELETE
    - **Description**: 특정 할 일을 삭제합니다.
    - **Params**: `id` - 삭제할 할 일의 ID입니다.
    

