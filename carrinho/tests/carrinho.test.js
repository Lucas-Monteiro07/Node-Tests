/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import Item from '../item';
import Carrinho from '../carrinho';

describe('Testes do Carrinho', () => {
  it('Deve inicializar um carrinho vazio', () => {
    const meuCarrinho = new Carrinho();

    expect(meuCarrinho.subtotal).toBeNull();
    expect(meuCarrinho.frete).toBeNull();
    expect(meuCarrinho.total).toBeNull();
  });

  it('Deve adicionar itens ao carinho e calcula frete/subtotal', () => {
    const meuCarrinho = new Carrinho();
    const item = new Item('banana', 2, 10);
    const item2 = new Item('pera', 1.5, 5);

    meuCarrinho.adiciona(item);
    meuCarrinho.adiciona(item2);
    meuCarrinho.adicionaFrete(20);
    const total = meuCarrinho.calculaTotal();

    expect(meuCarrinho.itens.length).toBe(2);
    expect(meuCarrinho.frete).toBe(20);
    expect(total).toBeCloseTo(47.5);
  });

  it('Deve lançar um erro ao finaliza compra com carrinho vazio', () => {
    const meuCarrinho = new Carrinho();

    function erroFinalizaCompraVazio() {
      meuCarrinho.finalizaCompra();
    }

    expect(erroFinalizaCompraVazio).toThrowError('Carrinho de compras vazio');
  });

  it('Deve finalizar a compra correntamente', () => {
    const meuCarrinho = new Carrinho();
    const item = new Item('banana', 2, 10);
    const item2 = new Item('pera', 1.5, 5);

    meuCarrinho.adiciona(item);
    meuCarrinho.adiciona(item2);
    meuCarrinho.adicionaFrete(20);

    const retornoCompraFinalizada = meuCarrinho.finalizaCompra();

    expect(retornoCompraFinalizada).toStrictEqual({
      subtotal: 27.5,
      frete: 20,
      total: 47.5,
    });
  });
});
