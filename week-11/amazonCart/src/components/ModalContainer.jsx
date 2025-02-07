import { modalAtom } from '../recoil/atoms/modalAtom'
import PurchaseModal from './PurchaseModal'
import {useRecoilValue} from "recoil"
import Overlay from './Overlay'
export default function ModalContainer(){
    const modalStatus = useRecoilValue(modalAtom)
    return (
      modalStatus &&
        <div>
          <Overlay></Overlay>
          <PurchaseModal></PurchaseModal>
        </div>
      
    )
  }