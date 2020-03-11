#! /usr/bin/env node
const fs = require("fs");
const yaml = require("yaml");

const dir = __dirname;
const namesYaml = fs.readFileSync(`${dirname}/possible-names.yaml`, "utf8");
const names = yaml.parse(namesYaml);

const nameIdx = Math.floor(Math.random() * names.length);

console.log(names[nameIdx]);
