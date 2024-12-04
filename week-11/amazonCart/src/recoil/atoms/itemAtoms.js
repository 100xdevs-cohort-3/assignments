import {atomFamily} from "recoil"

export const itemCounterAtom=atomFamily({
    key:"itemQuanityCounter",
    default:(id)=>{
        return 1;
    }
})

