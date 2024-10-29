import {AppBar} from './AppBar'
import {AppBody} from './AppBody'
import { modalAtom } from '../recoil/atoms/modalAtom'
import PurchaseModal from './PurchaseModal'
import {useRecoilValue,useSetRecoilState} from "recoil"
import Overlay from './Overlay'
export default function AmazonCart(){
    const modalStatus = useRecoilValue(modalAtom)
    return(<div style={{backgroundColor:"#F3F4F6", minHeight:"100vh"}}>
      <AppBar/>
      <AppBody/>
      {modalStatus &&
        <div>
          <Overlay></Overlay>
          <PurchaseModal></PurchaseModal>
        </div>
      }
    </div>)

}