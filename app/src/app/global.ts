import { environment as devEnv  } from '../environments/environment.development';
import { environment as prodEnv  } from '../environments/environment';

export class Global {

    public static popup: any;

    constructor() {
        let dev: boolean = true;

        Global.popup = dev ? devEnv.popup : prodEnv.popup;
    }
}