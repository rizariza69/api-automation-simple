require('dotenv').config();
const { request, expect, url } = require("../../config");

describe("GET /users", function () {
  it('get All users', (done) => {
    request(url)
        .get('/users')
        .set("Authorization", `Bearer ${process.env.TOKEN}`)
        .end(function (err, res) {
          console.log(res.body.data);
          if (err) {
            expect(res.statusCode).to.be.equal(401);
          }
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.data.users[0].name).to.equal('cimi');
            expect(res.body.data.users[0].email).to.be.equal('sample@example.com');
            done();
        });
  });

});