import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    return (
      <Auxiliary>
        <Modal show>
          Something didn't work!
        </Modal>
        <WrappedComponent {...props}/>
      </Auxiliary>
    );
  };
};

export default withErrorHandler;