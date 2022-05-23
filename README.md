# 배포 주소
https://musical-ganache-6661e8.netlify.app/

# 사진을 저장하고 볼 수 있는 갤러리

- 서버 없이 로컬스토리지를 이용한 갤러리를 간단하게 구현

## `사진을 클릭하면 모달창`

- 사진을 클릭하면 모달창이 나오고 해당 사진을 크게 볼 수 있다.
  모달창은 esc를 누르거나 모달 바깥 영역을 클릭하면 닫아지고, 화면에 있는 화살표를 클릭하거나 좌,우 방향키를 눌러서 이전 사진, 다음 사진으로 이동할 수 있다.

### `첫번째 +가 들어있는 영역을 클릭해서 사진을 선택하고 저장하는 기능`

- 버튼을 눌러서 사진을 선택하면 해당 사진이 갤러리 내에 들어온다. localStorage를 이용해서 저장한다.

### `사진 삭제 기능`

- 사진의 오른쪽 상단에 있는 X표시를 눌러서 사진을 삭제할 수 있다.

### `보고있지 않는 영역은 불러오지 않는 기능`

- intersection observer API를 통해 보고있지 않는 부분은 이미지를 불러오지 않는 lazy loading 적용했다.
