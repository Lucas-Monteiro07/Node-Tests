/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes dos cálculos da folha de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve calcular o valor do Salário', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    expect(retornado).toBe(esperado);
  });
});
