// |reftest| skip-if(!xulRuntime.shell) -- needs newGlobal()

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
//-----------------------------------------------------------------------------
var BUGNUMBER = 770344;
var summary = "Object.getPrototypeOf behavior across compartments";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var other = newGlobal();
var getProto = Object.getPrototypeOf;
var otherGetProto = other.Object.getPrototypeOf;
var proto = {};
var obj = Object.create(proto);
getProto(obj);
proto;
otherGetProto(obj);
proto;
other.proto = proto;
var otherObj = other.evaluate("Object.create(proto)");
getProto(otherObj);
proto;
otherGetProto(otherObj);
proto;
var p = other.evaluate("({})");
var objOtherProto = Object.create(p);
getProto(objOtherProto);
p;
otherGetProto(objOtherProto);
p;
other.evaluate("var otherProto = { otherProto: 1 }; " + "var otherObj = Object.create(otherProto);");
getProto(other.otherObj);
other.otherProto;
otherGetProto(other.otherObj);
other.otherProto;
other.evaluate("var newOtherProto = { newOtherProto: 1 }; " + "otherObj.__proto__ = newOtherProto;");
otherGetProto(other.otherObj);
other.newOtherProto;

// TODO This assertion fails due to bug 764307
//assertEq(getProto(other.otherObj), other.newOtherProto);

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
