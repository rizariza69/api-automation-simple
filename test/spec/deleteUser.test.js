require('dotenv').config();
const { request, expect, url } = require("../../config");

describe("DELETE /users", function () {
  it('delete one users', (done) => {
    request(url)
        .delete(`/users/${process.env.ID_USER}`)
        .set("Authorization", `Bearer ${process.env.TOKEN}`)
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