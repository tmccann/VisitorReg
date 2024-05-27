import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from "semantic-ui-react";

type Props = {
    setAuth: (value: boolean) => void
}
export default function SignedIn({setAuth}: Props) {
  return (
    <MenuItem position="right">
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text='bob'>
            <DropdownMenu >
            <DropdownItem text='Schedule Visit' icon='plus' />
            <DropdownItem text='Calendar' icon='calendar'/>
            <DropdownItem onClick={()=>setAuth(true)} text='Sign out' icon='sign-out' />
            </DropdownMenu>
        </Dropdown>
    </MenuItem>
  )
}