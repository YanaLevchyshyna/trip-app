import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
// import PropTypes from 'prop-types';

import {
  ModalBackdrop,
  ModalContetnt,
  CloseButton,
  FirstContainer,
  SecondContainer,
  Form,
  Select,
  Label,
  Input,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClick]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContetnt>
        <FirstContainer>
          <p>Create your trip</p>
          <CloseButton onClick={onClick}>
            <AiOutlineClose />
          </CloseButton>
        </FirstContainer>
        <SecondContainer>
          <Form action="">
            <Label htmlFor="">City</Label>
            <Select name="" id=""></Select>
            <Label htmlFor="">Start date</Label>
            <Input
              type="text"
              id="startDate"
              name="startDate"
              placeholder="Enter date in format: YYYY-MM-DD"
            />
            <Label htmlFor="">End date</Label>
            <Input type="date" />
          </Form>
        </SecondContainer>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

// Modal.propTypes = {
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };
