function validarCPF(cpf) {
    // Remove tudo que não for número
    cpf = cpf.replace(/\D/g, '');
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = (soma * 10) % 11;
    if (digito1 === 10 || digito1 === 11) digito1 = 0;
  
    if (digito1 !== parseInt(cpf[9])) {
      return false;
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = (soma * 10) % 11;
    if (digito2 === 10 || digito2 === 11) digito2 = 0;
  
    if (digito2 !== parseInt(cpf[10])) {
      return false;
    }
  
    return true;
  }
  
  // Exemplo de uso
  let cpf = prompt("Digite o CPF:");
  if (validarCPF(cpf)) {
    alert("CPF Válido!");
  } else {
    alert("CPF Inválido!");
  }