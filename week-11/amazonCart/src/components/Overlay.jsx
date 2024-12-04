import { modalAtom } from "../recoil/atoms/modalAtom";
import PurchaseModal from "./PurchaseModal";
import { useSetRecoilState } from "recoil";
export default function Overlay(){
    const setShowModal = useSetRecoilState(modalAtom)
    function closeModal(){
        setShowModal(false);
    }
    return (
        <div
      style={{
        backgroundColor: "rgba(127, 127, 127, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:10
      }}
      onClick={closeModal}
    >
        <PurchaseModal/>
    </div>
    )
}