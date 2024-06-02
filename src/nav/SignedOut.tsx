import { Button, MenuItem } from "semantic-ui-react";
import { useAppDispatch } from "../app/store/store";
import { openModal } from "../app/common/modals/modalSlice";

export default function SignedOut() {
    const dispatch = useAppDispatch()
    
    return (
        <MenuItem position="right">
            <span></span>
            <Button 
            content='Login'
            onClick={()=>dispatch(openModal({type:'LoginForm'}))} 
            basic inverted  />
        </MenuItem>
    )
}