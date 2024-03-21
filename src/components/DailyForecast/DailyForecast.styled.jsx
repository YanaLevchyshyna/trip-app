import styled from '@emotion/styled';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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

export const FaChevronRightsvg = styled(FaChevronRight)`
  opacity: 0.5;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const FaChevronLeftsvg = styled(FaChevronLeft)`
  opacity: 0.5;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
