import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ScrollWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  display: flex;

  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.boxShadowCard};
  width: 700px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 35px;
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

  flex: 0 0 auto;
  margin-right: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const DayIcon = styled.p`
  font-style: italic;
`;
