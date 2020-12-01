import { Button, Fab, FormControl, InputLabel, makeStyles, MenuItem, Modal, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './stock.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import HTTP_SERVICE from '../../config/Services';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

export default function Stock() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [clicked, setClicked] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [formInput, setFormInput] = useState({
    item: '',
    jenis: '',
    jual: 0,
    beli: 0,
    qty: 0
  });
  const jenisBarang = [
    'liquid (free)',
    'liquid (salt)',
    'mod',
    'pod',
    'rda',
    'coil',
    'kapas'
  ];

  useEffect(() => {
    getAllItem();
  }, [])

  const getAllItem = () => {
    let tempData = [];
    HTTP_SERVICE.getAllItem().then(res => {
      res.docs.forEach(item => {
        tempData.push(item.data());
      })
      setItemData(tempData);
    }).catch(err => {

    })
  }

  const addItem = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const inputOnChange = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  }

  const selectOnChange = (e) => {
    setFormInput({ ...formInput, jenis: e.target.value });
  }

  const editData = (data) => {
    setClicked(data.id);
    setFormInput({
      ...formInput,
      jenis: data.jenis,
      item: data.item,
      jual: data.jual,
      beli: data.beli,
      qty: data.qty
    });
    setOpenModal(true);
  }

  const saveEditItem = () => {

  }

  const saveAddItem = () => {
    console.log(formInput);
    HTTP_SERVICE.inputItem(formInput).then(res => {
      setFormInput({
        item: '',
        jenis: '',
        jual: 0,
        beli: 0,
        qty: 0
      });
      setOpenModal(false);
      getAllItem();
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='container'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Jenis</TableCell>
              <TableCell>Jual</TableCell>
              <TableCell>Beli</TableCell>
              <TableCell>Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              itemData.map((data, i) =>
                <TableRow key={i} onClick={() => { editData(data) }}>
                  <TableCell>{data.item}</TableCell>
                  <TableCell>{data.jenis}</TableCell>
                  <TableCell>{data.jual}</TableCell>
                  <TableCell>{data.beli}</TableCell>
                  <TableCell>{data.qty}</TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Fab className={classes.fab} color="secondary" aria-label='tambah-item' onClick={addItem}>
        <AddIcon />
      </Fab>
      <Modal
        open={openModal}
        onClose={handleClose}
        className='containerModal'
      >
        <div className='modal'>
          <div className='headerModal'>{isEdit ? "Edit Item" : "Input Item"}</div>
          <TextField className="inputField" value={formInput.item} type="text" label="Nama Item" onChange={inputOnChange} id='item' />
          <FormControl className="inputField">
            <InputLabel>Jenis</InputLabel>
            <Select onChange={selectOnChange} value={formInput.jenis}>
              {
                jenisBarang.map(item =>
                  <MenuItem value={item}>{item}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <TextField className="inputField" value={formInput.jual} type="number" label="Harga Jual" onChange={inputOnChange} id='jual' />
          <TextField className="inputField" value={formInput.beli} type="number" label="Harga Beli" onChange={inputOnChange} id='beli' />
          <TextField className="inputField" value={formInput.qty} type="number" label="Qty" onChange={inputOnChange} id='qty' />
          <Button variant="contained" color="primary" onClick={isEdit ? saveEditItem : saveAddItem}>Simpan</Button>
        </div>
      </Modal>
    </div>
  )
}