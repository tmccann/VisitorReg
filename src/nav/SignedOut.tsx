import { Button, MenuItem } from "semantic-ui-react";
type Props = {
    setAuth: (value: boolean) => void
}
export default function SignedOut({setAuth}: Props) {
    return (
        <MenuItem position="right">
            <Button onClick={()=>setAuth(true)} basic inverted content='Login' />
        </MenuItem>
    )
}