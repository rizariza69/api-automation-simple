const { request, expect, url } = require("../../config");

describe("POST /registration", function () {
  it('register authentication', (done) => {
    request(url)
        .post('/registration')
        .send({
          name: "test toko toko",
          email: "testtoko@gmail.com",
          password: "123adsfadf@"
        })
    
        .end(function (err, res) {
          console.log(res.body);
          if (err) {
            expect(res.statusCode).to.be.equal(401);
          }
            expect(res.status).to.equal(201)
            const dataPost = res.body.data;
            expect(dataPost.name).to.equal("test toko toko");
            expect(dataPost.email).to.equal("testtoko@gmail.com");

            done();
        });
  });
  // it("register authentication", async function () {
  //   const response = await request.post("/registration").send({
  //     name: "test toko",
  //     email: "test@gmail.com",
  //     password: "123adsfadf@"
  //   });

  //   expect(response.status).to.equal(201);
  //   const dataPost = response.body.data;
  //   expect(dataPost.name).to.equal("test toko");
  //   expect(dataPost.email).to.equal("test@gmail.com");
  // });
});