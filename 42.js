// Setup
function phoneticLookup(val) {
    let result = "";
    let lookup = {
      alpha:"Adams",
      bravo:"Boston",
      charlie:"Chicago",
      delta:"Denver",
      echo:"Easy",
      foxtrot:"Frank"
  };
    result = lookup[val]
  
    return result;
  }
  
  phoneticLookup("charlie");
  