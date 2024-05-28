import { ReactNode } from "react"
import { Modal, ModalContent, ModalHeader, ModalProps } from "semantic-ui-react"
import { useAppSelector } from "../../store/store"
import { useDispatch } from "react-redux"
import { closeModal } from "./modalSlice"


type Props = {
    children: ReactNode
    header: string
} & ModalProps

export default function ModalWrapper({children, header, ...props}: Props) {
    const {open} = useAppSelector(state => state.modals)
    const dispatch = useDispatch()
  return (
    <Modal open={open} onClose={() => dispatch(closeModal())} size={props.size}>
    {header && <ModalHeader>{header}</ModalHeader>}
    <ModalContent>
        {children}
    </ModalContent>
    </Modal>
  )
}