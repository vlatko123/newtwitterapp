import React, {useState} from 'react';

interface ContextValues {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

export const ModalContext = React.createContext<ContextValues>({
  show: false,
  handleClose: () => {},
  handleShow: () => {},
});

export const ModalContextsConstructor = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalContext.Provider value={{show, handleClose, handleShow}}>
      {children}
    </ModalContext.Provider>
  );
};
