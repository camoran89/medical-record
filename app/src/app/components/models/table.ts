import { TableColumn } from "../components/generic-table/tableColumn";

export class Table {

    columns: Array<TableColumn>;
    dataset: Array<any>;

    constructor() {
        this.columns = new Array<TableColumn>();
        this.dataset = new Array<any>();
    }
}