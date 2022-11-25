/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Item from '../item';

describe('Testando os Itens', () => {
  it('Deve conter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('banana', 2.5, 10);

    expect(item.nome).toBe('banana');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve calcular a quantidade corretamente', () => {
    const item = new Item('laranja', 2, 20);

    expect(item.pegaValorTotalItem()).toBeCloseTo(40);
  });
});
