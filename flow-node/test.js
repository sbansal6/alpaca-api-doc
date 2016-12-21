/* @flow */

const express = require('express');

function add(num1:number, num2) {
    return num1 + num2;
}
var x = add(3, '0');
console.log(x);