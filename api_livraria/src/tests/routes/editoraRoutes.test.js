import { afterAll, afterEach, beforeAll, beforeEach, describe, it } from "@jest/globals";
import app from "../../app";
import request from "supertest";

let server;

beforeAll(() => {
  const port = 3000;
  server = app.listen(port);
});

afterAll(() => {
  server.close();
});

describe("Testando as rotas de Editoras", () => {
  it("Deve retornar status 200 e lista de editoras", async () => {
    const response = await request(app)
      .get("/editoras")
      .expect(200);

    expect(response.body[0].id).toEqual(1);
  });

  let idDelete;
  it("Deve inserir uma nova editoras", async () => {
    const response = await request(app)
      .post('/editoras')
      .send({
        nome: "CDC",
        cidade: "SAMPA",
        email: "s@s.com",
      })
      .expect(201);
    idDelete = response.body.content.id;
  });

  it("Deve deletar nova editorada inserida no teste anterior", async () => {
    await request(app).delete(`/editoras/:${idDelete}`).expect(200);
  });
});
