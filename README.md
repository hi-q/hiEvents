# hiEvents
simple events lib for js

Usage

```
function Cat() {
	var cat = this;

	var onCatMeowEvent  = new hiEvent();

	cat.onMeow = new hiEventProxy(onCatMeowEvent)

	cat.meow = function () {
		console.log("meow");
		onCatMeowEvent.invoke();
	};
}

//...
// Then you can do:

var cat = new Cat();
cat.onMeow.add(function () {
	console.log("on meow");
});
//...
cat.meow();
```
