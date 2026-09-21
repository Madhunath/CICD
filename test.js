const assert = require('assert');
const app = require('./index');

console.log("Running unit tests...");

// Test that Express app loaded correctly
assert.ok(app, "Express app instance should exist");

console.log("✅ All tests passed successfully!");
process.exit(0);
