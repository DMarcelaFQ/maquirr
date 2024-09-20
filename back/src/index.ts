import { PORT } from "./config/envs";
import server from "./server";

server.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
})