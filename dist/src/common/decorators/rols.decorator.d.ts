export declare const enum Rols {
    USER = "ee35e4b1-b867-4179-9739-b6db26b04f4e",
    ADMIN = "5737ed6e-e995-4039-a026-5296e3ca14e8",
    WORKER = "e26b2bb4-a9e3-4a72-9145-662787d5c67b",
    GOD = "4338cf01-cc13-4f17-ac42-67680963f9fe"
}
export declare const enum Permis {
    BASE = "68728f3c-06aa-4701-95cb-87d07a42d236",
    GUSERS = "49b2e1fc-97a2-473e-bc2f-6aa43e686f7e",
    GROLS = "7b783702-ae26-44c2-896c-d11cf3657be9",
    GPERMISSIONS = "b149e6a8-9484-4ad8-b166-a8511f4ad3fc"
}
export declare const ROLS_KEY = "rols";
export declare const Roles: (...rols: Rols[]) => import("@nestjs/common").CustomDecorator<string>;
