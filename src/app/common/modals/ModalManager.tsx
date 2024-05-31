import TestModal from "../../../features/scratch/TestModal"
import { useAppSelector } from "../../store/store"

export default function ModalManager() {

    const modalLookup={
        TestModal
    }

    const  {type, data, open } = useAppSelector(state => state.modals)
    let renderModal
    if(open && type){
        const ModalComponent = (modalLookup as any)[type]
    }
  return (
    <div>ModalManager</div>
  )
}