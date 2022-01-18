import {useNavigate} from "react-router";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {useState} from "react";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const APPOINTMENT_ADMIN_BUTTON = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [time_slot_id, setTime_slot_id] =useState('')
    const [date, setDate] = useState('')
    const [rpt_wks, setRpt_wks] = useState('')

    const timeSlotOnchange = (event) => {
        setTime_slot_id(event.target.value);
    };
    const redirect = useNavigate();
    function navigate(String){
        fetch("url",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify('session_state')
        }).then(() =>  redirect(String) );
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () =>{
        setEmail('');
        setRpt_wks('');
        setDate('');
        setTime_slot_id('');
        setOpen(true);
    }
    const handleConfirm =()=>{
        let pack = {email, date, rpt_wks,time_slot_id};
        console.log(pack);
        handleClose();
    }
    const emailOnchange =(event)=>{
        setEmail(event.target.value);
    }
    const dateOnchange =(event)=>{
        setDate(event.target.value);
    }
    const rpt_wksOnchange =(event)=>{
        setRpt_wks(event.target.value);
    }
    return <div>
        <button id = 'button_big' type = "button" className = "LOGOUT_APPOINTMENT_ADMIN"
                onClick={()=> navigate('/')} > Logout
        </button>
        <button id = 'button_super' type = "button" className = "ALL_APPOINTMENT_ADMIN"
                onClick={()=> navigate('/')} > All Appointments
        </button>
        <div>
            <button id = 'button_super' type = "button" className = "SET_TIME_SLOTS_STATUS_ADMIN"
                    onClick={()=> handleOpen()} > Set Time Slots
            </button>

        </div>
        <div>
            <button id = 'button_super' type = "button" className = "BOOK_APPOINTMENT_ADMIN"
                    onClick={()=> handleOpen()} > Book Appointment
            </button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide the following information to book an appointment
                    </DialogContentText>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value ={email}
                        onChange ={emailOnchange}
                        placeholder="john.doe@example.com"
                    />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}

                        margin="dense"
                        id="date"
                        label="date"
                        type="date"
                        fullWidth
                        variant="standard"
                        value ={date}
                        onChange={dateOnchange}
                    />
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }}

                        margin="dense"
                        id="rpt"
                        label="number of rpt"
                        type="number"
                        fullWidth
                        variant="standard"
                        value ={rpt_wks}
                        onChange={rpt_wksOnchange}
                        defaultValue={1}
                    />
                    <Box sx={{ mt : '2vh' ,minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="time_slot_book_label">Time Slot*</InputLabel>
                            <Select
                                labelId="time_slot_book_select_label"
                                id="select_time_slot"
                                value={time_slot_id}
                                label="Time_Slot"
                                onChange={timeSlotOnchange}
                                defaultValue={1}
                            >
                                <MenuItem value={1}>08:00-10:00</MenuItem>
                                <MenuItem value={2}>10:00-12:00</MenuItem>
                                <MenuItem value={3}>12:00-14:00</MenuItem>
                                <MenuItem value={4}>14:00-16:00</MenuItem>
                                <MenuItem value={5}>16:00-18:00</MenuItem>
                                <MenuItem value={6}>18:00-20:00</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>


    </div>
}

export default APPOINTMENT_ADMIN_BUTTON