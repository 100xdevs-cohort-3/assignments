import { atomFamily } from "recoil";

const wishListItemStatusAtom = atomFamily({
    key:"wishListItemStatus",
    default:(id)=>{
        return false;
    }
})
export default wishListItemStatusAtom