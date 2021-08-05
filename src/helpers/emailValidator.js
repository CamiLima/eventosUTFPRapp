export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "o campo de Email não pode ser vazio."
  if (!re.test(email)) return 'Ooops! Nós precisamos de um e-mail valido.'
  return ''
}
