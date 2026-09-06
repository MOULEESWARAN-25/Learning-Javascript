const userSettings = {
  name: "Moulee",
  age: 25,
};

const protectedSettings = new Proxy(userSettings, {
  set(target, property, value) {
    if (property === "age" && value < 18) {
      console.log("Age must be 18 or above");
      return false;
    }

    target[property] = value;
    console.log(`${property} was updated to ${value}`);
    return true;
  },
});

protectedSettings.age = 30;
protectedSettings.age = 15;

console.log(protectedSettings);

console.log(userSettings);

// Common Proxy use cases:
// 1. Validate data before saving it.
// 2. Log when an object is read or changed.
// 3. Show a default value when a property does not exist.
// 4. Control access to sensitive properties.

// In real applications, Proxies are used in state-management libraries,
// form validation, access control, and reactive systems that detect changes.
