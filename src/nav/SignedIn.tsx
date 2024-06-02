import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../app/store/store";
import { signOut } from "../features/auth/authSlice";


export default function SignedIn() {
  const {currentUser} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  function handleSignOut(){
    console.log(currentUser?.userName)
    dispatch(signOut())
  }
  return (
    <MenuItem position="right">
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text={currentUser?.userName}>
            <DropdownMenu >
            <DropdownItem text='Schedule Visit' icon='plus' />
            <DropdownItem text='Calendar' icon='calendar'/>
            <DropdownItem onClick={handleSignOut}
            text='Sign out' icon='sign-out' />
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
  )
}