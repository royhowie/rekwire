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

	var Transaction = require("../../models/payments/transaction.js")

Cumbersome.

With `rekwire`:

	var rekwire = require("rekwire")
	  , Transaction = rekwrite("app/models/payments/transaction.js");
	// simple

#install

    npm i --save rekwire