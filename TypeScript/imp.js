// tsc --module commonjs imp.ts
// node imp.js
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exp_1 = require("./exp");
var CImport1 = (function (_super) {
    __extends(CImport1, _super);
    function CImport1() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CImport1.prototype, "val", {
        get: function () {
            return this.val;
        },
        set: function (v) {
            this.val = v;
        },
        enumerable: true,
        configurable: true
    });
    return CImport1;
})(exp_1.CExport2);
exports.CImport1 = CImport1;
