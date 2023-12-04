export class Base {

	disabled: boolean;
	required: boolean;
	visible: boolean;

	format: string;
	icon: string;
	label: string;
	placeholder: string;
	value: string;

	constructor() {
		this.disabled = false;
		this.required = false;
		this.visible = true;

		this.format = "";
		this.icon = "";
		this.label = "";
		this.placeholder = "";
		this.value = "";
	}
}

export class Select<T> extends Base {

	multiple: boolean;
	items: Array<T>;
	selected: T | Array<T>;

	constructor() {
		super();

		this.multiple = false;

		this.items = new Array<T>();
		this.selected = new Array<T>();
	}
}