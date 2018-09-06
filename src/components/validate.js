export const required = value => (value ? undefined : 'Обязательное поле');

export const minLength = value => (value.length < 4 ? 'Значение менее 4 символов' : undefined);

export const maxLength = value => (value.length > 12 ? 'Cлишком большое значение' : undefined);