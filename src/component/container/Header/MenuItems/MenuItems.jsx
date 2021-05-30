import React from 'react'
import MenuItem from './MenuItem/MenuItem';
import './menuitems.css'

const MenuItems = (props) => {
    return ( 
    
            <ul className='menuitems'>
                <MenuItem link="/" active> صفحه اصلی </MenuItem>
                <MenuItem link="/" > مشاهده دانش آموزان </MenuItem>

            </ul>
   
     );
}
 
export default MenuItems;