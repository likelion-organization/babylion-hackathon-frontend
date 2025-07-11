import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;   
  padding: 0 24px;    // 좌우 여백 유지
  margin: 0 auto;     // 가운데 정렬
  padding-bottom: 147px;
  position: relative;        // absolute 기준
  min-height: 100vh;         // 최소 화면 높이 확보
  background-color: #fff;    // 깔끔한 배경 (선택)
`;

export default PageContainer;
