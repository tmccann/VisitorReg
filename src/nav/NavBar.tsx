
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useAppSelector } from "../app/store/store";


export default function NavBar() {
        const {authenticated} = useAppSelector( state => state.auth)

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
                {/* <MenuItem name="Scratch" as={NavLink} to='/scratch' /> */}
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
                {authenticated ? <SignedIn />:<SignedOut /> }
               
        </Menu>
  )
}