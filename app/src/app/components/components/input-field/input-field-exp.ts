export class InputFieldExp {

	static expressions = [
		{ key: 'only-char', validator: '^[a-zA-Z\u00C0-\u00FF ]*$', value: '^[a-zA-Z\u00C0-\u00FF ]*$', description: 'RegExp for spanish language' },
		{ key: 'email', validator: '^[a-zA-Z0-9@._-]*$', value: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}', description: 'RegExp for email' },
		{ key: 'phone', validator: '^[0-9+-]*$', value: '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$', description: 'RegExp for phone' },
		{ key: 'password', validator: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])$', value: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$', description: 'RegExp for password' },
		{ key: 'username', validator: '^[a-z0-9_-.]$', value: '^[a-z0-9_-.]{3,15}$', description: 'RegExp for username' },
		{ key: 'document-number', validator: '^[a-zA-Z0-9.]$', value: '^[a-zA-Z0-9.]{1,15}$', description: 'RegExp for document number' },
	];
}