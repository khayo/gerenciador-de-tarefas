import { stringify } from "querystring";

export class Tarefa {

    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean) {}
}