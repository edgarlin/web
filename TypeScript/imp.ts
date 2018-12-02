// tsc --module commonjs imp.ts
// node imp.js

import { IExport1, CExport2 } from "./exp";

export class CImport1 extends CExport2 {
  public set val(v: string) {
    this.val = v;
  }

  public get val(): string {
    return this.val;
  }
}
