import { atomFamily } from "recoil";

export const wishListItemStatusAtom = atomFamily({
    key:"wishListItemStatus",
    default:(id)=>{
        return false;
    }
})
