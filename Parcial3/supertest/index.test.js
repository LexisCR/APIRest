const url = "http://localhost:3000"
const request = require("supertest"); 

describe('describe test async-await', () => {
    it("Deberia regresar codigo 200", async ()=>{
        let response = await request(url).get('/ruta')
        expect(response.statusCode).toBe(200);
    });
});