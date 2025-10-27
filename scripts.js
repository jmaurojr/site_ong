document.addEventListener('DOMContentLoaded', () => {
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  cpfInput.addEventListener('input', () => {
    cpfInput.value = cpfInput.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})$/, '$1-$2');
  });

  telefoneInput.addEventListener('input', () => {
    telefoneInput.value = telefoneInput.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  });

  cepInput.addEventListener('input', () => {
    cepInput.value = cepInput.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})$/, '$1-$2');
  });
});