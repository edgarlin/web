// tsc --module commonjs --target ES5 *.ts;node main.js

import { CImport1 } from "./imp";

declare var val1: number;
declare const const1: number;

declare namespace name1 {
  let let1: number;
}

declare function func1(parm1: number): number;

let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";

let list: number[] = [1, 2, 3];

let x: [string, number] = ["hello", 10];

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green;

let notSure: any = 4;

function warnUser(): void {
  console.log("This is my warning message");
}

//let u: undefined = undefined;
//let n: null = null;
