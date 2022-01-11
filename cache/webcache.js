import Koa from "koa";
import path from "path";
//静态资源中间件
import resource from "koa-static";
import conditional from "koa-conditional-get";
import etag from "koa-etag";

const app = new Koa();
const host = "localhost";
const port = 9000;

// app.use(async (ctx, next) => {
//   // 设置响应头Cache-Control 设置资源有效期为2个小时 86400
//   ctx.set({
//     // "Cache-Control": "max-age=86400",
//     // "Cache-Control": "public",
//     // "Cache-Control": "no-store",
//     // "Cache-Control": "no-cache",
//   });
//   await next();
// });

// app.use(conditional());
// app.use(etag());

app.use(resource(path.join(__dirname, "./static")));

app.listen(port, () => {
  console.log(`server is listen in ${host}:${port}`);
});
