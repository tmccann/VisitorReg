import { Button, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
        <Menu inverted fixed="top">
           
                <MenuItem header >
                    <img src="/logo"/>
                        <div>
                        <p style={{color:'#AD445E'}}>TestWorks</p>
                        <p style={{color:'#E37D77'}}>Scotland</p>
                        </div>
                </MenuItem>
                <MenuItem name="Visitors" />
                <MenuItem position="right">
                    <Button basic inverted content='Login' />
                </MenuItem>
        </Menu>
  )
}