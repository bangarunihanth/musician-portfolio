import { useState, useEffect } from 'react';
import logocropped from '../../Assets/logo-cropped.jpg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";

function Navbar() {
    let navigate=useNavigate()
    let [openMenu, setOpenMenu] = useState(false);
    const [dropDownFlag, setDropDownFlag] = useState(true);
    let style = {
        backgroundColor: '#B235B2',
        borderRadius: '7px'
    }
    let path = useLocation().pathname
    let menuOptions = [
        {
            text: 'Home',
            to: '',
            icon: <HomeIcon style={{ fontSize: '30px' }} />,
        },
        {
            text: 'Services',
            to: 'services',
            icon: <MdHomeRepairService style={{ fontSize: '30px' }} />,
        },
        {
            text: 'Gallery',
            to: 'gallery',
            icon: <IoIosPeople style={{ fontSize: '30px' }} />,
        },
        {
            text: 'Aboutus',
            to: 'aboutus',
            icon: <MdInsertPhoto style={{ fontSize: '30px' }} />
        },
        {
            text: 'Contactus',
            to: 'contactus',
            icon: <MdConnectWithoutContact style={{ fontSize: '30px' }} />
        }
    ]
    function handleResize() {
        if (window.innerWidth < 700) {
            setDropDownFlag(false)
        }
        else {
            setDropDownFlag(true)
        }
    }
    window.addEventListener("resize", () => handleResize);
    useEffect(() => {
        handleResize()
    })
    return (
        <div>
            {dropDownFlag&&<div className='row header-element bg-black'>
                <div className='col-4'>
                    <div className='p-2'>
                        <img className='rounded-3' style={{height:'4rem'}} src={logocropped}/>
                    </div>
                </div>
                <div className='col-8 d-flex justify-content-end p-2'>
                    <ul className="nav text-center" style={{ fontSize: '1.3rem' }}>
                        {menuOptions.map((ele) => {
                            return (<li className="nav-item li">
                                <NavLink className="nav-link text-primary" to={ele.to} style={{ width: '8rem', ...(true && {}) }}>
                                    {ele.text}
                                </NavLink>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>}
            {!dropDownFlag && <div>
                <div className='row bg-black navbar-menu-container'>
                    <div className='col'>
                        <div className='p-2'>
                            <img className='w-100 rounded-2' src={logocropped}/>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-end'>
                        <HiOutlineBars3 style={{ color: 'white', fontSize: '30px', margin: '20px' }} onClick={() => setOpenMenu(true)} />
                    </div>
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='top' >
                    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text} disablePadding>
                                    <ListItemButton onClick={() => navigate(item.to)}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText>{item.text}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </div>}
        </div>
    )
}

export default Navbar