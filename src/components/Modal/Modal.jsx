import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import tripCities from '../../assets/cities.json';
import PropTypes from 'prop-types';

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
  SaveButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClick, onSubmit }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState('');

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

  useEffect(() => {
    setCities(tripCities);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    // console.log('EVENT ===> ', e);
    switch (name) {
      case 'city':
        setCity(value);
        const selectedCity = cities.find((city) => city.name === value);
        console.log('selectedCity', selectedCity);
        setImage(selectedCity ? selectedCity.image : '');
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);

      default:
        return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: 'id' + nanoid(),
      city,
      startDate,
      endDate,
      image,
    };
    // console.log('newTrip ---->', newTrip);
    onSubmit(newTrip);

    reset();
  };

  const reset = () => {
    setStartDate('');
    setEndDate('');
    setImage('');
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
          <Form onSubmit={handleFormSubmit}>
            <Label htmlFor="city">City</Label>
            <Select name="city" onChange={handleChange} required>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Select>
            <Label htmlFor="startDate">Start date</Label>
            <Input
              type="text"
              onChange={handleChange}
              name="startDate"
              placeholder="Enter date in format: YYYY-MM-DD"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Please enter a date in the format YYYY-MM-DD"
              required
            />
            <Label htmlFor="endDate">End date</Label>
            <Input
              type="text"
              onChange={handleChange}
              name="endDate"
              placeholder="Enter date in format: YYYY-MM-DD"
              required
            />
            <SaveButton type="submit">Save</SaveButton>
          </Form>
        </SecondContainer>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
