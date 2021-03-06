import React, {useContext} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {Modal} from 'react-bootstrap';
import {AiOutlineClose} from 'react-icons/ai'
import {ModalContext} from '../../context/ModalContext';
import {AuthContext} from '../../context/AuthContext';
import {Button as Btn} from '../../components copy/button/Button';
import '../../components copy/modal/modal.css';

interface Props {
  registerUsername: string;
  registerPassword: string;
  registerEmail: string;
}

export const ModalPopup = () => {
  const {show, handleClose} = useContext(ModalContext);
  const {registerUser} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Props>({mode: 'onChange'});

  const onSubmit = (data: Props) => {
    registerUser({
      registerUsername: data.registerUsername,
      registerPassword: data.registerPassword,
      registerEmail: data.registerEmail,
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Modal.Title>
            <div className="closeBtn" onClick={handleClose}>
            <AiOutlineClose />

            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 style={{color: 'white', textAlign: 'center', margin: '20px 0'}}>
            Create your account
          </h1>
          <Styled.Input
            placeholder="email"
            type="email"
            {...register('registerEmail', {
              required: 'Email is required',
              minLength: 2,
              validate: (registerEmail: any) => registerEmail.includes('@'),
            })}
          />
          <Styled.Input
            placeholder="name"
            type="text"
            {...register('registerUsername', {
              required: 'Username is required',
              minLength: 2,
              validate: (registerUsername: any) => registerUsername.length > 2,
            })}
          />
          <Styled.Input
            placeholder="password"
            type="password"
            {...register('registerPassword', {
              required: 'Password is required',
              minLength: 2,
              validate: (registerPassword: any) => registerPassword.length > 4,
            })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Btn
            name="Sign in"
            type="submit"
            backgroundColor="white"
            color="black"
            borderRadius="20px"
            padding="10px 5px"
            onClick={handleClose}
          />
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const Styled = {
  Input: styled.input`
    width: 100%;
    padding: 10px 5px;
    background: transparent;
    border: 1pa solid grey;
    border-radius: 5px;
    margin-bottom: 10px;
    color: white;
  `,
};
