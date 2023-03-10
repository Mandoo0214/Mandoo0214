import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { CookiesProvider,useCookies } from 'react-cookie';
const drawerBleeding = 0;

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  export default function SimpleDialog(props) {
    const [cookies, setCookies] = useCookies(['id']);
    const[learning,setLearning]=React.useState(0);
    const[travel,setTravel]=React.useState(0);
    const[art,setArt]=React.useState(0);
    const[sports,setSports]=React.useState(0);
    const[foods,setFoods]=React.useState(0);
    const[walk,setWalk]=React.useState(0);
    const[chronic,setChronic]=React.useState(0);
    const[breathe,setBreathe]=React.useState(0);
    const[surprised,setSurprised]=React.useState(0);
    const[people,setPeople]=React.useState(0);
    const[diet,setDiet]=React.useState(0);
    const[fin,setFin]=React.useState(0);
    const [chan, setChan] = React.useState(false);
  const { onClose, selectedValue, open } = props;
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen2(newOpen);
  };
  const toggleDrawer2 = (newOpen) => () => {
    setOpen3(newOpen);
  };
  
  return (
    <div>
        <SwipeableDrawer
        anchor="bottom"
        open={open2}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                1/2
            </div>
            <div className='plzslect'>????????????,<br/><b style={{color:"#FF31DE"}}>???????????? ??????</b>??? ???????????????</div>
            <div className='bubblelist'>
            <div
        key="0"
        onClick={
        function(){
            learning?setLearning(0):setLearning(1)
        }}
        className={'likebox-'+(learning?"yes":"no")}
        >
            ????????? ??? ?????????
        </div>
        <div
        key="1"
        onClick={
            function(){
                travel?setTravel(0):setTravel(1)
            }}
        className={'likebox-'+(travel?"yes":"no")}
        >????????????
        </div>
        <div
        key="2"
        onClick={
            function(){
                art?setArt(0):setArt(1)
            }}
        className={'likebox-'+(art?"yes":"no")}
        >?????? ????????????
        </div>
        <div
        key="3"
        onClick={
            function(){
                sports?setSports(0):setSports(1)
            }}
        className={'likebox-'+(sports?"yes":"no")}
        >????????????
        </div>
        <div
        key="4"
        onClick={
            function(){
    
                foods?setFoods(0):setFoods(1)
            }}
        className={'likebox-'+(foods?"yes":"no")}
        >????????? ?????? ??????
        </div>
            </div>
            <div className='next' onClick={toggleDrawer2(true)}>??????</div>
            </div>
        </div>
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={open3}
        onClose={toggleDrawer2(false)}
        onOpen={toggleDrawer2(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                2/2
            </div>
            <div className='plzslect'>????????????,<br/><b style={{color:"#FF31DE"}}>????????????</b>??? ???????????????</div>
            <div className='bubblelist'>
            <div
        key="5"
        onClick={
        function(){

            walk?setWalk(0):setWalk(1)
        }}
        className={'likebox-'+(walk?"yes":"no")}
        >
            ?????? ????????????
        </div>
        <div
        key="6"
        onClick={
            function(){
    
                chronic?setChronic(0):setChronic(1)
            }}
        className={'likebox-'+(chronic?"yes":"no")}
        >??????????????? ?????????
        </div>
        <div
        key="7"
        onClick={
            function(){
    
                diet?setDiet(0):setDiet(1)
            }}
        className={'likebox-'+(diet?"yes":"no")}
        >??????????????? ????????????
        </div>
        <div
        key="8"
        onClick={
            function(){
    
                breathe?setBreathe(0):setBreathe(1)
            }}
        className={'likebox-'+(breathe?"yes":"no")}
        >?????? ?????? ??????
        </div>
        <div
        key="9"
        onClick={
            function(){
    
                surprised?setSurprised(0):setSurprised(1)
            }}
        className={'likebox-'+(surprised?"yes":"no")}
        >????????? ?????????
        </div>
        <div
        key="10"
        onClick={
            function(){
    
                people?setPeople(0):setPeople(1)
            }}
        className={'likebox-'+(people?"yes":"no")}
        >????????? ???????????? ????????? ??????????????????
        </div>
            </div>
            <div className='pre_next'>
            <div className='pre' onClick={toggleDrawer2(false)}>??????</div>
            <div style={{width:"10px"}}></div>
            <div className='next2' onClick={()=>{
                setOpen2(false)
                setOpen3(false)
            }}>??????</div>
            </div>
            </div>
        </div>
      </SwipeableDrawer>
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <div className='wouldDialog'>
        <div style={{position:"absolute",right:"15px"}} onClick={handleListItemClick}><ClearIcon/></div>
        <div className='wouldyou'>
            <b>?????????</b>??? ????????????
            <br/>
             ?????? ???????????????????
        </div>
        <div style={{marginBottom:"20px"}}></div>
        <div className='wouldno'><div>?????????</div></div>
        <div className='wouldyes'
        onClick={()=>{
            
                onClose(selectedValue);
                setOpen2(true)
        }}>???!</div>
        </div>
        </DialogTitle>
    </Dialog>
    </div>
  );
}
