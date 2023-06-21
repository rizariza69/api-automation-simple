require('dotenv').config();
const { request, expect, url } = require("../../config");

describe("PUT /users", function () {

  it('update users', (done) => {
    request(url)
        .put(`/users/${process.env.ID_USER}`)
        .set("Authorization", `Bearer ${process.env.TOKEN}`)
        .send({
          name: 'cimin',
          email: 'sample@example.com'
        })
        .end(function (err, res) {
          console.log(res.body);
          if (err) {
            expect(res.statusCode).to.be.equal(404);
          }
            expect(res.statusCode).to.be.equal(200);
            done();
        });
  });

});