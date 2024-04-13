import { PlatformMath } from "../../../libs/platform/base/platform_math";
import { ConfigResponseV2Model, PlayResponseV2Model } from "../../../libs/platform/slots/responses_v2";
import { CircusExtravaganzaState } from "./circusextravaganza_state";

export class CircusExtravaganzaResponseModel extends PlayResponseV2Model {

    public coinPrize = [];

    constructor( version:string, name:string, math:PlatformMath, state:CircusExtravaganzaState ) {
        super( version, name, math, state);
        this.coinPrize = [];
        state.cashPrizes.forEach( prize => {
            this.coinPrize.push( {offset:prize.offset, id:prize.id, multiplier:prize.multiplier} )
        })
    }
}

export class CircusExtravaganzaConfigResponseV2Model extends ConfigResponseV2Model {
    
    public coinPrize = [];

    constructor( version:string, name:string, math:PlatformMath, state:CircusExtravaganzaState ) {
        super( version, name, math, state);

        this.coinPrize = [];
        state.cashPrizes.forEach( prize => {
            this.coinPrize.push( {offset:prize.offset, id:prize.id, multiplier:prize.multiplier} )
        })
    }
}
