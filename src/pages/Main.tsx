import { Link } from 'react-router-dom';
import { Anchor } from '@mantine/core';
import { css } from '@emotion/react';

function Main() {
  return (
    <div>
      <Anchor component={Link} to="/login">
        로그인
      </Anchor>
      <h1 css={header}>메인 페이지</h1>
    </div>
  );
}

const header = css({
  color: '#6867ac',
});

export default Main;
