export class Base {

	disabled: boolean;
	required: boolean;
	visible: boolean;

	format: string;
	icon: string;
	label: string;
	placeholder: string;
	value: string;

	onBlur!: () => void;
	onChange!: (value: string) => void;

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