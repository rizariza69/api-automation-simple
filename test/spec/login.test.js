const { request, expect, url } = require("../../config");

describe("POST /authentications", function () {
  it('login authentication', (done) => {
    request(url)
        .post('/authentications')
        .send({
          email: "sample@example.com",
          password: "123adsfadf@"
        })
    
        .end(function (err, res) {
          console.log(res.body);
          if (err) {
            expect(res.statusCode).to.be.equal(401);
          }
          expect(res.statusCode).to.equal(201);
          const dataPost = res.body.data.user;
          expect(dataPost).to.include.keys("name", "role", "email", "company_name")
          expect(dataPost.name).to.equal("nama Toko");
          expect(dataPost.role).to.equal("admin");
          expect(dataPost.email).to.equal("sample@example.com");
          
          done();
        });
  });

});