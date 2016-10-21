var supermatch = require("../index");

function _true(subject,object) {
  it("is true", function() {
    expect(supermatch(subject,object)).toBe(true);
  });
}

function _false(subject,object) {
  it("is false", function() {
    expect(supermatch(subject,object)).toBe(false);
  });
}

function _case(title,subject,object,fn) {
  describe(title, function() {
    fn(subject,object);
  });
}

_case("(true,any)",true,{},_true);
_case("(any,true)",true,{},_true);

_case("(0,0)",0,0,_true);
_case("(0,1)",0,1,_false);
_case("(1,0)",1,0,_false);
_case("(1,1)",1,1,_true);

_case("('scalar','scalar')","scalar","scalar",_true);
_case("('scalar','qwerty')","scalar","qwerty",_false);

_case("('scalar',/scalar/)","scalar",/scalar/,_true);
_case("('scalar',/qwerty/)","scalar",/qwerty/,_false);

_case("('blah',[])","blah",[],_false);
_case("('blah',['blah','yada','hoot'])","blah",['blah','yada','hoot'],_true);

_case("('blah',{})","blah",{},_false);
_case("('blah',{blah:true,yada:true,hoot:true})","blah",{blah:true,yada:true,hoot:true},_true);
_case("('blah',{blah:false,yada:true,hoot:true})","blah",{blah:false,yada:true,hoot:true},_false);

_case("(['blah','yada'],'blah')",['blah','yada'],"blah",_true);
_case("(['blah','yada'],'hoot')",['blah','yada'],"hoot",_false);
_case("(['blah','yada'],['blah','hoot'])",['blah','yada'],['blah','hoot'],_true);
_case("(['blah','yada'],[])",['blah','yada'],[],_false);

_case("({blah:true,yada:true},'blah')",{blah:true,yada:true},"blah",_true);
_case("({blah:true,yada:true},'hoot')",{blah:true,yada:true},"hoot",_false);
_case("({blah:true,yada:true},['blah','hoot'])",{blah:true,yada:true},['blah','hoot'],_true);
_case("({blah:true,yada:true},[])",{blah:true,yada:true},[],_false);
