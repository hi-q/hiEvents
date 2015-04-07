;(function (global) {

	var hash = 0;

	var events = [];

	function Event() {
		var evnt = this;

		var hash = generateHash();
		evnt.getHash = function () {
			return hash;
		};

		return evnt;
	}

	// TBD - it shouldnt be public
	Event.prototype.invoke = function () {
		var evnt = this;

		var hash = this.getHash();
		var handlers = events[hash] || [];
		var handlersCount = handlers.length;

		for(var i = 0; i < handlersCount; i++) {
			handlers[i]();
		}
	};

	Event.prototype.add = function (fn) {
		if (!isFunction(fn)) {
			throw new TypeError("fn is not a function");
		}

		var evnt = this;
		var hash = evnt.getHash();

		events[hash] = events[hash] || [];

		var handlers = events[hash];
		handlers.push(fn);
	};

	Event.prototype.remove = function () {
		// TBD
	};

	function EventProxy(event) {
		var proxy = this;

		proxy.add = function(fn){
			event.add(fn)
		};

		proxy.remove = function(fn){
			event.remove(fn);
		};
	}

	function generateHash() {
		return hash++;
	}

	function isFunction(fn) {
		return Object.prototype.toString.call(fn) === "[object Function]";
	}

	global.hiEvent = Event;
	global.hiEventProxy = EventProxy;

}(this));
