import { createServer } from "miragejs";

export default function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.post("/signin", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        if (attrs.id == 0) {
          return { code: "ERROR" };
        }
        return { code: "SUCCESS" };
      });
    },
  });

  return server;
}
