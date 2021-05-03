const express = require("express");
const app = express();
const port = 3000;
//if we use /nest in web also we need to put localhost:3000/nest
app.use("/nest", (req, res, next) => {
  res.send("keerthana is here");
  console.log("request type ", req.method); //prints the request

  console.log("Time: ", Date.now()); //show the time whenever it access
  next();
});
app.listen(port, () => console.log("server is running"));

//express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is the Demo page for" + " setting up express server !");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started " + "at http://localhost:3000");
  }
});

//helmet
const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("This is the Demo page for" + " setting up express server !");
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started " + "at http://localhost:3000");
  }
});

// Includes all 11 middlewares
app.use(helmet());
// Includes 10 middlewares, skipping `helmet.frameguard`
app.use(
  helmet({
    frameguard: false,
  })
);
// Includes all 11 middlewares, setting an option for `helmet.frameguard`
app.use(
  helmet({
    frameguard: {
      action: "deny",
    },
  })
);

// Sets "Content-Security-Policy: default-src 'self';script-src 'self' example.com;object-src 'none';upgrade-insecure-requests"
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "example.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

// Sets "Content-Security-Policy: default-src 'self';script-src 'self' example.com;object-src 'none'"
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "example.com"],
      "object-src": ["'none'"],
    },
  })
);

// Sets all of the defaults, but overrides script-src
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "script-src": ["'self'", "example.com"],
    },
  })
);

// Sets the "Content-Security-Policy-Report-Only" header instead
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      /* ... */
    },
    reportOnly: true,
  })
);
// Sets "Content-Security-Policy: default-src 'self';script-src 'self' 'nonce-e33ccde670f149c1789b1e1e113b0916'"
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString("hex");
  next();
});
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`],
    },
  })
);
// Sets "Content-Security-Policy: script-src 'self'"
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
      "script-src": ["'self'"],
    },
  })
);

// Sets "Expect-CT: max-age=86400"
app.use(
  helmet.expectCt({
    maxAge: 86400,
  })
);

// Sets "Expect-CT: max-age=86400, enforce, report-uri="https://example.com/report"
app.use(
  helmet.expectCt({
    maxAge: 86400,
    enforce: true,
    reportUri: "https://example.com/report",
  })
);

// Sets "Referrer-Policy: no-referrer"
app.use(
  helmet.referrerPolicy({
    policy: "no-referrer",
  })
);

// Sets "Referrer-Policy: origin,unsafe-url"
app.use(
  helmet.referrerPolicy({
    policy: ["origin", "unsafe-url"],
  })
);

// Sets "Strict-Transport-Security: max-age=123456; includeSubDomains"
app.use(
  helmet.hsts({
    maxAge: 123456,
  })
);

// Sets "Strict-Transport-Security: max-age=123456"
app.use(
  helmet.hsts({
    maxAge: 123456,
    includeSubDomains: false,
  })
);

var express = require("express");
var cors = require("cors");
var app = express();

var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/products/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

var express = require("express");
var cors = require("cors");
var app = express();

var whitelist = ["http://example1.com", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.get("/products/:id", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a whitelisted domain." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

var express = require("express");
var cors = require("cors");
var app = express();

app.options("/products/:id", cors()); // enable pre-flight request for DELETE request
app.del("/products/:id", cors(), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

//cors
var express = require("express");
var cors = require("cors");
var app = express();

var whitelist = ["http://example1.com", "http://example2.com"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.get("/products/:id", cors(corsOptionsDelegate), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for a whitelisted domain." });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
// Sets "Strict-Transport-Security: max-age=123456; includeSubDomains; preload"
app.use(
  helmet.hsts({
    maxAge: 63072000,
    preload: true,
  })
);
// Sets "X-Content-Type-Options: nosniff"
app.use(helmet.noSniff());

//cors
const express = require("express");
const cors = require("cors");
const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.get("/:name", (req, res) => {
  let name = req.params.name;
  res.json({
    message: `Hello ${name}`,
  });
});
app.listen(2020, () => {
  console.log("server is listening on port 2020");
});

const allowlist = ["http://something.com", "http://example.com"];

const corsOptionsDelegate = (req, callback) => {
  let corsOptions;

  let isDomainAllowed = whitelist.indexOf(req.header("Origin")) !== -1;
  let isExtensionAllowed = req.path.endsWith(".jpg");

  if (isDomainAllowed && isExtensionAllowed) {
    // Enable CORS for this request
    corsOptions = { origin: true };
  } else {
    // Disable CORS for this request
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};
app.use(cors(corsOptionsDelegate));
