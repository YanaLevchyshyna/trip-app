import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;
