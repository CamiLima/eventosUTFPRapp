export function passwordValidator(password) {
  if (!password) return "A senha não pode ser vazia."
  if (password.length < 5) return 'A senha precisa ter mais que 5 caracteres.'
  return ''
}
