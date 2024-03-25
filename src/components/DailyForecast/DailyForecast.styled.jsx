import styled from '@emotion/styled';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const ScrollWrapper = styled.div`
  position: relative;

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
  overflow-x: scroll;
  scroll-behavior: smooth;

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
  width: 24px;
  height: 24px;
`;

export const FaChevronLeftsvg = styled(FaChevronLeft)`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  opacity: 0.5;

  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  cursor: pointer;
  z-index: 2;
`;

export const LeftButton = styled(Button)`
  left: -20px;
`;

export const RightButton = styled(Button)`
  right: -20px;
`;
