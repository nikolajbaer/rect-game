import { Component, Types } from "ecsy"

export class MoverComponent extends Component {}
MoverComponent.schema = {
    kinematic: { type: Types.Boolean, default: true },
    speed: { type: Types.Number, default: 1.0 },
    turn_speed: { type: Types.Number, default: 2 },
    run_mult: { type: Types.Number, default: 2 },
    move_z: { type: Types.Boolean, default: true }, 
    turner: { type: Types.Boolean, default: true }, // true if we rotate on left/right, false if we strafe
    local: { type: Types.Boolean, default: true },
    current: { type: Types.String, default: "rest"  },
    current_reverse: { type: Types.Boolean, default: false }, // if we are currently in reverse (useful for playing animations backwards)
}
