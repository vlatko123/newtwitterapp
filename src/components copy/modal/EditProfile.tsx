import React, {useContext} from 'react';
import {Modal} from 'react-bootstrap';
import {ModalContext} from '../../context/ModalContext';
import styled from 'styled-components';
import {Button as Btn} from '../../components copy/button/Button';
import {useForm} from 'react-hook-form';
import {changePassword} from '../../mockApi/login';

interface Props {
  username: string;
  newPassword: string;
  repeatPassword: string;
}

export const EditProfile = () => {
  const {show, handleClose} = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Props>({mode: 'onChange'});

  const onSubmit = (data: Props) => {
    if (data.newPassword === data.repeatPassword) {
      changePassword(data.newPassword);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Modal.Title>
              <div className="closeBtn" onClick={handleClose}>
                X
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 style={{color: 'white', textAlign: 'center', margin: '20px 0'}}>
              Edit your profile
            </h1>

            <Styled.Input
              placeholder="New password"
              type="password"
              {...register('newPassword', {
                required: 'It is required',
                minLength: 2,
                validate: (newPassword: any) => newPassword.length > 4,
              })}
            />
            {errors?.newPassword?.message ? null : (
              <Styled.Input
                placeholder="repeat password"
                type="password"
                {...register('repeatPassword', {
                  required: 'Confirm password',
                  minLength: 2,
                  validate: (repeatPassword: any) => repeatPassword.length > 4,
                })}
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Btn
              name="Save"
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
    </div>
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
