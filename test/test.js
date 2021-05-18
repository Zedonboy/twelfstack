const chai = require("chai");
chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request("http://localhost:1337");

const assert = chai.assert;
const should = chai.should();
describe("User", function () {
  describe("Testing Home page", function () {
    it("get categories", function (done) {
      request
        .get("/categories")
        .set("Content-Type", "application/json")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          assert.isTrue(Array.isArray(res.body), "Category is not an Array");
          assert.isTrue(res.body.length > 0, "Category is empty");
          done();
        });
    });

    it("get newsletter based on category id", function (done) {
      request
        .get("/news-letters?category.id=1&_limit=10")
        .set("Content-Type", "application/json")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          assert.isTrue(Array.isArray(res.body), "Newsletter is not an Array");
          assert.isTrue(res.body.length > 0, "Newsletter is empty");
          done();
        });
    });
  });

  describe("Testing Stack Page", function () {
    let jwt;
    before(function () {
      return new Promise((rslv, rej) => {
        request
          .post("/auth/local")
          .set("Content-Type", "application/json")
          .send({
            identifier: "user@strapi.io",
            password: "strapiPassword",
          })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            assert.exists(res.body.jwt, "JWT does not exist");
            jwt = res.body.jwt;
            rslv();
          });
      });
      // runs once before the first test in this block
    });

    it("get a stack", function (done) {
      request
        .get("/stacks?slug=erica")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("Testing Author page", function () {
    let jwt;
    before(function () {
      return new Promise((reslv, rej) => {
        request
          .post("/auth/local")
          .set("Content-Type", "application/json")
          .send({
            identifier: "user@strapi.io",
            password: "strapiPassword",
          })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            assert.exists(res.body.jwt, "JWT does not exist");
            jwt = res.body.jwt;

            reslv();
          });
        // runs once before the first test in this block
      });
    });

    it("Author Slug", function (done) {
      request
        .get("/authors?slug=erica")
        .set("Content-Type", "application/json")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Get Stacks by Author", function (done) {
      request
        .get("/stacks?author.id=1")
        .set("Content-Type", "application/json")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Checks if you have subscribed.", function (done) {
      request
        .get("/email-subcriptions/subscribedBefore/1")
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${jwt}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("Subscribe", function () {
    let jwt;

    before(function () {
      return new Promise((reslv, rej) => {
        request
          .post("/auth/local")
          .set("Content-Type", "application/json")
          .send({
            identifier: "user@strapi.io",
            password: "strapiPassword",
          })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            assert.exists(res.body.jwt, "JWT does not exist");
            jwt = res.body.jwt;

            reslv();
          });
        // runs once before the first test in this block
      });
    });

    it("Create a subscription", function (done) {
      request
        .post("/email-subcriptions")
        .set("Authorization", `Bearer ${jwt}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done()
        });
    });
  });
});
