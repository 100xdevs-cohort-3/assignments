import {atom} from "recoil"

export const orderTotalAtom = atom({
    default:{
        quantity:0,
        subtotal:0
    },
    key:"orderSummary"
});