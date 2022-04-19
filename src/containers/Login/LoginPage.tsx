import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {Button} from '../../components copy/button/Button';
import {AuthContext} from '../../context/AuthContext';

interface FormProps {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const {login, error, loading, userIsLoggedIn} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<FormProps>({mode: 'onChange'});

  useEffect(() => {
    if (error) {
      setError('username', {
        type: 'value',
        message: 'Username is not correct',
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    login({username: data.username, password: data.password});
  };

  if (userIsLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Styled.Wrapper>
      <Styled.Container onSubmit={handleSubmit(onSubmit)}>
        <Styled.Title>Login</Styled.Title>
        <Styled.Input
          type="text"
          {...register('username', {
            required: 'Username is required',
            minLength: 2,
            validate: (username: any) => username.length > 2,
          })}
        />
        {errors.username?.message ? (
          <Styled.Error>{errors.username.message}</Styled.Error>
        ) : null}
        <Styled.Input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: 3,
            validate: (password: any) => password.length > 2,
          })}
        />
        {errors.password?.message ? (
          <Styled.Error>{errors.password.message}</Styled.Error>
        ) : null}

        <Button
          backgroundColor="white"
          textColor="black"
          type="submit"
          name="Login"
          disabled={!!Object.keys(errors).length}
        />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Container: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    padding: 100px;
  `,
  Title: styled.h1`
    color: white;
  `,
  Input: styled.input`
    border: 2px solid red;
    margin-bottom: 20px;
  `,
  Error: styled.span`
    color: red;
    font-size: 14px;
  `,
};
