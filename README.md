# rekwire

A wrapper for node's `require` function.

Given the following directory structure:

	.
	├── app/
	│   ├── actions/
	│   │   ├── emails.js
	│   │   ├── payments.js
	│   │   └── pdfs.js
	│   ├── lib/
	│   │   └── etc.js
	│   ├── models/
	│   │   ├── payments/
	│   │   │   ├── transactionPlan.js
	│   │   │   └── transaction.js
	│   │   └── courses/
	│   │       ├── course.js
	│   │       └── tutoringSession.js
	│   ├── routes/
	│   │   └── general.js
	│   ├── routing.js
	│   └── actions
	├── config/
	├── node_modules/
	├── static/
	├── uploads/
	├── views/
	├── package.json
	└── server.js

Keeping track of `requires` can be annoying. If you're in `app/actions/payments.js` and you need the `transaction.js` model, you need to use

	var Transaction = require("../models/payments/transaction.js")

What if you're in `app/models/courses/tutoringSession.js`?

	var Transaction = require("../payments/transaction.js");

Figuring out all the different relative paths is annoying and cumbersome.

With `rekwire`, just use the path from your root directory, no matter where you currently are:

	var rekwire = require("rekwire")
	  , Transaction = rekwire("app/models/payments/transaction.js");

Simple.

#install

    npm install --save rekwire