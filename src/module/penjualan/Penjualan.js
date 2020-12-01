import { Button, Modal } from '@material-ui/core';
import React, { useState } from 'react';

export default function Penjualan() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleBayar = () => {

  }

  return (
    <div>
      <div className="containerKasir">

      </div>
      <Button className="buttonBayar" variant="contained" color="primary" onClick={handleBayar}>Bayar</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        className="containerModal"
      >

      </Modal>
    </div>
  )
}