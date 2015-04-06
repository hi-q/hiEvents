# hiEvents
simple events lib for js

Usage

```
function Cat() {
	var cat = this;

	var onCatMeowEvent  = new hiEvent();

	cat.onMeow = {
		add: function (fn) {
			onCatMeowEvent.add(fn);
		},
		remove: function (fn) {
			onCatMeowEvent.remove(fn);
		}
	};

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