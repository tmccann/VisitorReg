import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useState } from "react";

export default function NavBar() {

const [auth,setAuth] = useState(true)
  return (
        <Menu inverted fixed="top">
           
                <MenuItem header  as={NavLink} to='/'>
                    <img src="/logo"/>
                        <div>
                        <p>TestWorks</p>
                        <p className="logoSecondaryColor">Scotland</p>
                        </div>
                </MenuItem>
                <MenuItem name="Visitors" as={NavLink} to='/visitors' />
                <MenuItem name="Scratch" as={NavLink} to='/scratch' />
                {auth ? <SignedIn setAuth={setAuth}/>:<SignedOut setAuth={setAuth}/> }
               
        </Menu>
  )
}