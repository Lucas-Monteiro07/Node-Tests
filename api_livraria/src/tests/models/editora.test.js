import { describe, expect, it, jest } from "@jest/globals";
import Editora from "../../models/editora";

describe("Testando funcionalidades do modelo Editora", () => {
  const objEditora = {
    nome: "CDC",
    cidade: "Sampa",
    email: "teste@teste.com",
  };

  it("Deve criar uma editora", () => {
    const editora = new Editora(objEditora);

    expect(editora).toEqual(expect.objectContaining(objEditora));
  });

  it("Deve criar e Salvar uma editora no DB simulado", async () => {
    const editora = new Editora(objEditora);

    editora.salvar = jest.fn().mockReturnValue({
        id: 10,
        nome: "CDC",
        cidade: "Sampa",
        email: "teste@teste.com",
        created_at: 'data teste',
        updated_at: 'data teste',
    })

    const retornado = editora.salvar()

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
