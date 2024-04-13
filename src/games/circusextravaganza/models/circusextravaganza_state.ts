import { SlotState } from "../../../libs/engine/slots/models/slot_state_model";

export class CircusExtravaganzaState extends SlotState {

    public cashPrizes :{offset:number, id:string, multiplier:number}[] = [];
    public cashPrizesMath = [] ; 
    public awardedJackpots = [];

}
