import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";


export default function NavBar() {

const [auth,setAuth] = useState(false)

//   function seedData(){
//         sampleData.forEach(async visitor =>{
//                 const {id,...rest} = visitor
//                 await setDoc(doc(db, 'visitor', id),{
//                         ...rest
//                 })
//         })
//   }
  return (
        <Menu inverted fixed="top">
           
                <MenuItem header  as={NavLink} to='/'>
                    <img src="/logo"/>
                        <div>
                        <p>TestWorks</p>
                        <p className="logoSecondaryColor">Scotland</p>
                        </div>
                </MenuItem>
                <MenuItem name="Visitors" as={NavLink} to='/' />
                <MenuItem name="Scratch" as={NavLink} to='/scratch' />
                {/* {import.meta.env.DEV
                //  && (
                //         <MenuItem>
                //         <Button 
                //         inverted
                //         color="teal"
                //         content='seed data'
                //         onClick={seedData} />
                //         </MenuItem>
                // )
                } */}
                {auth ? <SignedIn setAuth={setAuth}/>:<SignedOut /> }
               
        </Menu>
  )
}