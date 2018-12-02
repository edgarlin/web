// tsc --module commonjs exp.ts
// node exp.js

export interface IExport1 {
  val: string;
}

class CExport1 implements IExport1 {
  public val: string;
}

export class CExport2 implements IExport1 {
  public val: string;
}
