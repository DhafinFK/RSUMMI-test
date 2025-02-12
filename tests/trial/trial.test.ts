import request from "supertest";
import app from "../../src/app";

describe("Trial API", () => {
    it("should return json response of trial list", async () => {
        const res = await request(app).get("/api/trials");
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject([
            {id: 1, name: "Trial1"},
            {id: 2, name: "Trial2"},
            {id: 3, name: "Trial3"}
        ]);
    });
});
   
