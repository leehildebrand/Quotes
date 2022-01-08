/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* proxy-compat-disable */


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * Copyright (C) 2018 salesforce.com, inc.
 */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function invariant(value, msg) {
    if (!value) {
        throw new Error(`Invariant Violation: ${msg}`);
    }
}
function isTrue$1(value, msg) {
    if (!value) {
        throw new Error(`Assert Violation: ${msg}`);
    }
}
function isFalse$1(value, msg) {
    if (value) {
        throw new Error(`Assert Violation: ${msg}`);
    }
}
function fail(msg) {
    throw new Error(msg);
}

var assert = /*#__PURE__*/Object.freeze({
    __proto__: null,
    invariant: invariant,
    isTrue: isTrue$1,
    isFalse: isFalse$1,
    fail: fail
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const { assign, create, defineProperties, defineProperty, freeze, getOwnPropertyDescriptor: getOwnPropertyDescriptor$1, getOwnPropertyNames: getOwnPropertyNames$1, getPrototypeOf: getPrototypeOf$1, hasOwnProperty: hasOwnProperty$1, isFrozen, keys, seal, setPrototypeOf, } = Object;
const { isArray: isArray$1 } = Array;
const { filter: ArrayFilter, find: ArrayFind, indexOf: ArrayIndexOf, join: ArrayJoin, map: ArrayMap, push: ArrayPush$1, reduce: ArrayReduce, reverse: ArrayReverse, slice: ArraySlice, splice: ArraySplice, unshift: ArrayUnshift, forEach, } = Array.prototype;
const { fromCharCode: StringFromCharCode } = String;
const { charCodeAt: StringCharCodeAt, replace: StringReplace, slice: StringSlice, toLowerCase: StringToLowerCase, } = String.prototype;
function isUndefined$1(obj) {
    return obj === undefined;
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isFalse(obj) {
    return obj === false;
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isFunction$1(obj) {
    return typeof obj === 'function';
}
function isObject(obj) {
    return typeof obj === 'object';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function noop() {
    /* Do nothing */
}
const OtS$1 = {}.toString;
function toString$1(obj) {
    if (obj && obj.toString) {
        // Arrays might hold objects with "null" prototype So using
        // Array.prototype.toString directly will cause an error Iterate through
        // all the items and handle individually.
        if (isArray$1(obj)) {
            return ArrayJoin.call(ArrayMap.call(obj, toString$1), ',');
        }
        return obj.toString();
    }
    else if (typeof obj === 'object') {
        return OtS$1.call(obj);
    }
    else {
        return obj + '';
    }
}
function getPropertyDescriptor(o, p) {
    do {
        const d = getOwnPropertyDescriptor$1(o, p);
        if (!isUndefined$1(d)) {
            return d;
        }
        o = getPrototypeOf$1(o);
    } while (o !== null);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
 * ariaGrabbed) are deprecated:
 * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
 *
 * The above list of 46 aria attributes is consistent with the following resources:
 * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
 * https://wicg.github.io/aom/spec/aria-reflection.html
 */
const AriaPropertyNames = [
    'ariaActiveDescendant',
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaControls',
    'ariaCurrent',
    'ariaDescribedBy',
    'ariaDetails',
    'ariaDisabled',
    'ariaErrorMessage',
    'ariaExpanded',
    'ariaFlowTo',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaOwns',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRelevant',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
    'role',
];
const { AriaAttrNameToPropNameMap, AriaPropNameToAttrNameMap } = /*@__PURE__*/ (() => {
    const AriaAttrNameToPropNameMap = create(null);
    const AriaPropNameToAttrNameMap = create(null);
    // Synthetic creation of all AOM property descriptors for Custom Elements
    forEach.call(AriaPropertyNames, (propName) => {
        const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
        AriaAttrNameToPropNameMap[attrName] = propName;
        AriaPropNameToAttrNameMap[propName] = attrName;
    });
    return { AriaAttrNameToPropNameMap, AriaPropNameToAttrNameMap };
})();

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Inspired from: https://mathiasbynens.be/notes/globalthis
const _globalThis = /*@__PURE__*/ (function () {
    // On recent browsers, `globalThis` is already defined. In this case return it directly.
    if (typeof globalThis === 'object') {
        return globalThis;
    }
    let _globalThis;
    try {
        // eslint-disable-next-line no-extend-native
        Object.defineProperty(Object.prototype, '__magic__', {
            get: function () {
                return this;
            },
            configurable: true,
        });
        // __magic__ is undefined in Safari 10 and IE10 and older.
        // @ts-ignore
        // eslint-disable-next-line no-undef
        _globalThis = __magic__;
        // @ts-ignore
        delete Object.prototype.__magic__;
    }
    catch (ex) {
        // In IE8, Object.defineProperty only works on DOM objects.
    }
    finally {
        // If the magic above fails for some reason we assume that we are in a legacy browser.
        // Assume `window` exists in this case.
        if (typeof _globalThis === 'undefined') {
            // @ts-ignore
            _globalThis = window;
        }
    }
    return _globalThis;
})();

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const KEY__IS_NATIVE_SHADOW_ROOT_DEFINED = '$isNativeShadowRootDefined$';
const KEY__SHADOW_RESOLVER = '$shadowResolver$';
const KEY__SHADOW_TOKEN = '$shadowToken$';
const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
const KEY__SCOPED_CSS = '$scoped$';
/**
 * Map composed of properties to attributes not following the HTML property to attribute mapping
 * convention.
 */
const NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING = new Map([
    ['accessKey', 'accesskey'],
    ['readOnly', 'readonly'],
    ['tabIndex', 'tabindex'],
    ['bgColor', 'bgcolor'],
    ['colSpan', 'colspan'],
    ['rowSpan', 'rowspan'],
    ['contentEditable', 'contenteditable'],
    ['crossOrigin', 'crossorigin'],
    ['dateTime', 'datetime'],
    ['formAction', 'formaction'],
    ['isMap', 'ismap'],
    ['maxLength', 'maxlength'],
    ['minLength', 'minlength'],
    ['noValidate', 'novalidate'],
    ['useMap', 'usemap'],
    ['htmlFor', 'for'],
]);
/**
 * Map associating previously transformed HTML property into HTML attribute.
 */
const CACHED_PROPERTY_ATTRIBUTE_MAPPING = new Map();
function htmlPropertyToAttribute(propName) {
    const ariaAttributeName = AriaPropNameToAttrNameMap[propName];
    if (!isUndefined$1(ariaAttributeName)) {
        return ariaAttributeName;
    }
    const specialAttributeName = NO_STANDARD_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
    if (!isUndefined$1(specialAttributeName)) {
        return specialAttributeName;
    }
    const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
    if (!isUndefined$1(cachedAttributeName)) {
        return cachedAttributeName;
    }
    let attributeName = '';
    for (let i = 0, len = propName.length; i < len; i++) {
        const code = StringCharCodeAt.call(propName, i);
        if (code >= 65 && // "A"
            code <= 90 // "Z"
        ) {
            attributeName += '-' + StringFromCharCode(code + 32);
        }
        else {
            attributeName += StringFromCharCode(code);
        }
    }
    CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
    return attributeName;
}
/** version: 2.5.11 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function detect(propName) {
    return Object.getOwnPropertyDescriptor(Element.prototype, propName) === undefined;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const nodeToAriaPropertyValuesMap = new WeakMap();
function getAriaPropertyMap(elm) {
    let map = nodeToAriaPropertyValuesMap.get(elm);
    if (map === undefined) {
        map = {};
        nodeToAriaPropertyValuesMap.set(elm, map);
    }
    return map;
}
function getNormalizedAriaPropertyValue(value) {
    return value == null ? null : String(value);
}
function createAriaPropertyPropertyDescriptor(propName, attrName) {
    return {
        get() {
            const map = getAriaPropertyMap(this);
            if (hasOwnProperty$1.call(map, propName)) {
                return map[propName];
            }
            // otherwise just reflect what's in the attribute
            return this.hasAttribute(attrName) ? this.getAttribute(attrName) : null;
        },
        set(newValue) {
            const normalizedValue = getNormalizedAriaPropertyValue(newValue);
            const map = getAriaPropertyMap(this);
            map[propName] = normalizedValue;
            // reflect into the corresponding attribute
            if (newValue === null) {
                this.removeAttribute(attrName);
            }
            else {
                this.setAttribute(attrName, newValue);
            }
        },
        configurable: true,
        enumerable: true,
    };
}
function patch(propName) {
    // Typescript is inferring the wrong function type for this particular
    // overloaded method: https://github.com/Microsoft/TypeScript/issues/27972
    // @ts-ignore type-mismatch
    const attrName = AriaPropNameToAttrNameMap[propName];
    const descriptor = createAriaPropertyPropertyDescriptor(propName, attrName);
    Object.defineProperty(Element.prototype, propName, descriptor);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ElementPrototypeAriaPropertyNames = keys(AriaPropNameToAttrNameMap);
for (let i = 0, len = ElementPrototypeAriaPropertyNames.length; i < len; i += 1) {
    const propName = ElementPrototypeAriaPropertyNames[i];
    if (detect(propName)) {
        patch(propName);
    }
}

/**
 * Copyright (C) 2018 salesforce.com, inc.
 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const features = {
    ENABLE_REACTIVE_SETTER: null,
    ENABLE_HMR: null,
    ENABLE_INNER_OUTER_TEXT_PATCH: null,
    ENABLE_ELEMENT_PATCH: null,
    ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST: null,
    ENABLE_NODE_LIST_PATCH: null,
    ENABLE_HTML_COLLECTIONS_PATCH: null,
    ENABLE_NODE_PATCH: null,
    ENABLE_NON_COMPOSED_EVENTS_LEAKAGE: null,
    ENABLE_MIXED_SHADOW_MODE: null,
    ENABLE_WIRE_SYNC_EMIT: null,
};
if (!_globalThis.lwcRuntimeFlags) {
    Object.defineProperty(_globalThis, 'lwcRuntimeFlags', { value: create(null) });
}
const runtimeFlags = _globalThis.lwcRuntimeFlags;
/**
 * Set the value at runtime of a given feature flag. This method only be invoked once per feature
 * flag. It is meant to be used during the app initialization.
 */
function setFeatureFlag(name, value) {
    if (!isBoolean(value)) {
        const message = `Failed to set the value "${value}" for the runtime feature flag "${name}". Runtime feature flags can only be set to a boolean value.`;
        if (undefined !== 'production') {
            throw new TypeError(message);
        }
        else {
            // eslint-disable-next-line no-console
            console.error(message);
            return;
        }
    }
    if (isUndefined$1(features[name])) {
        const availableFlags = keys(features)
            .map((name) => `"${name}"`)
            .join(', ');
        // eslint-disable-next-line no-console
        console.warn(`Failed to set the value "${value}" for the runtime feature flag "${name}" because it is undefined. Available flags: ${availableFlags}.`);
        return;
    }
    if (undefined !== 'production') {
        // Allow the same flag to be set more than once outside of production to enable testing
        runtimeFlags[name] = value;
    }
    else {
        // Disallow the same flag to be set more than once in production
        const runtimeValue = runtimeFlags[name];
        if (!isUndefined$1(runtimeValue)) {
            // eslint-disable-next-line no-console
            console.error(`Failed to set the value "${value}" for the runtime feature flag "${name}". "${name}" has already been set with the value "${runtimeValue}".`);
            return;
        }
        defineProperty(runtimeFlags, name, { value });
    }
}
/**
 * Set the value at runtime of a given feature flag. This method should only be used for testing
 * purposes. It is a no-op when invoked in production mode.
 */
function setFeatureFlagForTest(name, value) {
    if (undefined !== 'production') {
        setFeatureFlag(name, value);
    }
}
/** version: 2.5.11 */

/* proxy-compat-disable */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal(create(null));
const EmptyArray = seal([]);

function flushCallbackQueue() {
  if (undefined !== 'production') {
    if (nextTickCallbackQueue.length === 0) {
      throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
    }
  }

  const callbacks = nextTickCallbackQueue;
  nextTickCallbackQueue = []; // reset to a new queue

  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    callbacks[i]();
  }
}

function addCallbackToNextTick(callback) {
  if (undefined !== 'production') {
    if (!isFunction$1(callback)) {
      throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
    }
  }

  if (nextTickCallbackQueue.length === 0) {
    Promise.resolve().then(flushCallbackQueue);
  }

  ArrayPush$1.call(nextTickCallbackQueue, callback);
}
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
} // Borrowed from Vue template compiler.
// https://github.com/vuejs/vue/blob/531371b818b0e31a989a06df43789728f23dc4e8/src/platforms/web/util/style.js#L5-L16

const DECLARATION_DELIMITER = /;(?![^(]*\))/g;
const PROPERTY_DELIMITER = /:(.+)/;
function parseStyleText(cssText) {
  const styleMap = {};
  const declarations = cssText.split(DECLARATION_DELIMITER);

  for (const declaration of declarations) {
    if (declaration) {
      const [prop, value] = declaration.split(PROPERTY_DELIMITER);

      if (prop !== undefined && value !== undefined) {
        styleMap[prop.trim()] = value.trim();
      }
    }
  }

  return styleMap;
}

/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const TargetToReactiveRecordMap = new WeakMap();

function getReactiveRecord(target) {
  let reactiveRecord = TargetToReactiveRecordMap.get(target);

  if (isUndefined$1(reactiveRecord)) {
    const newRecord = create(null);
    reactiveRecord = newRecord;
    TargetToReactiveRecordMap.set(target, newRecord);
  }

  return reactiveRecord;
}

let currentReactiveObserver = null;
function valueMutated(target, key) {
  const reactiveRecord = TargetToReactiveRecordMap.get(target);

  if (!isUndefined$1(reactiveRecord)) {
    const reactiveObservers = reactiveRecord[key];

    if (!isUndefined$1(reactiveObservers)) {
      for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
        const ro = reactiveObservers[i];
        ro.notify();
      }
    }
  }
}
function valueObserved(target, key) {
  // We should determine if an active Observing Record is present to track mutations.
  if (currentReactiveObserver === null) {
    return;
  }

  const ro = currentReactiveObserver;
  const reactiveRecord = getReactiveRecord(target);
  let reactiveObservers = reactiveRecord[key];

  if (isUndefined$1(reactiveObservers)) {
    reactiveObservers = [];
    reactiveRecord[key] = reactiveObservers;
  } else if (reactiveObservers[0] === ro) {
    return; // perf optimization considering that most subscriptions will come from the same record
  }

  if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
    ro.link(reactiveObservers);
  }
}
class ReactiveObserver {
  constructor(callback) {
    this.listeners = [];
    this.callback = callback;
  }

  observe(job) {
    const inceptionReactiveRecord = currentReactiveObserver;
    currentReactiveObserver = this;
    let error;

    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      currentReactiveObserver = inceptionReactiveRecord;

      if (error !== undefined) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }
  /**
   * This method is responsible for disconnecting the Reactive Observer
   * from any Reactive Record that has a reference to it, to prevent future
   * notifications about previously recorded access.
   */


  reset() {
    const {
      listeners
    } = this;
    const len = listeners.length;

    if (len > 0) {
      for (let i = 0; i < len; i += 1) {
        const set = listeners[i];
        const pos = ArrayIndexOf.call(listeners[i], this);
        ArraySplice.call(set, pos, 1);
      }

      listeners.length = 0;
    }
  } // friend methods


  notify() {
    this.callback.call(undefined, this);
  }

  link(reactiveObservers) {
    ArrayPush$1.call(reactiveObservers, this); // we keep track of observing records where the observing record was added to so we can do some clean up later on

    ArrayPush$1.call(this.listeners, reactiveObservers);
  }

}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function componentValueMutated(vm, key) {
  valueMutated(vm.component, key);
}
function componentValueObserved(vm, key) {
  valueObserved(vm.component, key);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getComponentTag(vm) {
  return `<${StringToLowerCase.call(vm.tagName)}>`;
} // TODO [#1695]: Unify getComponentStack and getErrorComponentStack

function getComponentStack(vm) {
  const stack = [];
  let prefix = '';

  while (!isNull(vm.owner)) {
    ArrayPush$1.call(stack, prefix + getComponentTag(vm));
    vm = vm.owner;
    prefix += '\t';
  }

  return ArrayJoin.call(stack, '\n');
}
function getErrorComponentStack(vm) {
  const wcStack = [];
  let currentVm = vm;

  while (!isNull(currentVm)) {
    ArrayPush$1.call(wcStack, getComponentTag(currentVm));
    currentVm = currentVm.owner;
  }

  return wcStack.reverse().join('\n\t');
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function log(method, message, vm) {
  let msg = `[LWC ${method}]: ${message}`;

  if (!isUndefined$1(vm)) {
    msg = `${msg}\n${getComponentStack(vm)}`;
  }

  if (undefined === 'test') {
    /* eslint-disable-next-line no-console */
    console[method](msg);
    return;
  }

  try {
    throw new Error(msg);
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console[method](e);
  }
}

function logError(message, vm) {
  log('error', message, vm);
}
function logWarn(message, vm) {
  log('warn', message, vm);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function handleEvent(event, vnode) {
  const {
    type
  } = event;
  const {
    data: {
      on
    }
  } = vnode;
  const handler = on && on[type]; // call event handler if exists

  if (handler) {
    handler.call(undefined, event);
  }
}

function createListener() {
  return function handler(event) {
    handleEvent(event, handler.vnode);
  };
}

function updateAllEventListeners(oldVnode, vnode) {
  if (isUndefined$1(oldVnode.listener)) {
    createAllEventListeners(vnode);
  } else {
    vnode.listener = oldVnode.listener;
    vnode.listener.vnode = vnode;
  }
}

function createAllEventListeners(vnode) {
  const {
    elm,
    data: {
      on
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(on)) {
    return;
  }

  const listener = vnode.listener = createListener();
  listener.vnode = vnode;
  let name;

  for (name in on) {
    renderer.addEventListener(elm, name, listener);
  }
}

var modEvents = {
  update: updateAllEventListeners,
  create: createAllEventListeners
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

function offsetPropertyErrorMessage(name) {
  return `Using the \`${name}\` property is an anti-pattern because it rounds the value to an integer. Instead, use the \`getBoundingClientRect\` method to obtain fractional values for the size of an element and its position relative to the viewport.`;
} // Global HTML Attributes & Properties
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement


const globalHTMLProperties = assign(create(null), {
  accessKey: {
    attribute: 'accesskey'
  },
  accessKeyLabel: {
    readOnly: true
  },
  className: {
    attribute: 'class',
    error: 'Using the `className` property is an anti-pattern because of slow runtime behavior and potential conflicts with classes provided by the owner element. Use the `classList` API instead.'
  },
  contentEditable: {
    attribute: 'contenteditable'
  },
  dataset: {
    readOnly: true,
    error: "Using the `dataset` property is an anti-pattern because it can't be statically analyzed. Expose each property individually using the `@api` decorator instead."
  },
  dir: {
    attribute: 'dir'
  },
  draggable: {
    attribute: 'draggable'
  },
  dropzone: {
    attribute: 'dropzone',
    readOnly: true
  },
  hidden: {
    attribute: 'hidden'
  },
  id: {
    attribute: 'id'
  },
  inputMode: {
    attribute: 'inputmode'
  },
  lang: {
    attribute: 'lang'
  },
  slot: {
    attribute: 'slot',
    error: 'Using the `slot` property is an anti-pattern.'
  },
  spellcheck: {
    attribute: 'spellcheck'
  },
  style: {
    attribute: 'style'
  },
  tabIndex: {
    attribute: 'tabindex'
  },
  title: {
    attribute: 'title'
  },
  translate: {
    attribute: 'translate'
  },
  // additional "global attributes" that are not present in the link above.
  isContentEditable: {
    readOnly: true
  },
  offsetHeight: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetHeight')
  },
  offsetLeft: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetLeft')
  },
  offsetParent: {
    readOnly: true
  },
  offsetTop: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetTop')
  },
  offsetWidth: {
    readOnly: true,
    error: offsetPropertyErrorMessage('offsetWidth')
  },
  role: {
    attribute: 'role'
  }
});
let controlledElement = null;
let controlledAttributeName;
function isAttributeLocked(elm, attrName) {
  return elm !== controlledElement || attrName !== controlledAttributeName;
}
function lockAttribute(_elm, _key) {
  controlledElement = null;
  controlledAttributeName = undefined;
}
function unlockAttribute(elm, key) {
  controlledElement = elm;
  controlledAttributeName = key;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const xlinkNS = 'http://www.w3.org/1999/xlink';
const xmlNS = 'http://www.w3.org/XML/1998/namespace';
const ColonCharCode = 58;

function updateAttrs(oldVnode, vnode) {
  const {
    data: {
      attrs
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(attrs)) {
    return;
  }

  let {
    data: {
      attrs: oldAttrs
    }
  } = oldVnode;

  if (oldAttrs === attrs) {
    return;
  }

  if (undefined !== 'production') {
    assert.invariant(isUndefined$1(oldAttrs) || keys(oldAttrs).join(',') === keys(attrs).join(','), `vnode.data.attrs cannot change shape.`);
  }

  const elm = vnode.elm;
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  let key;
  oldAttrs = isUndefined$1(oldAttrs) ? EmptyObject : oldAttrs; // update modified attributes, add new attributes
  // this routine is only useful for data-* attributes in all kind of elements
  // and aria-* in standard elements (custom elements will use props for these)

  for (key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];

    if (old !== cur) {
      unlockAttribute(elm, key);

      if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
        // Assume xml namespace
        setAttribute(elm, key, cur, xmlNS);
      } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
        // Assume xlink namespace
        setAttribute(elm, key, cur, xlinkNS);
      } else if (isNull(cur)) {
        removeAttribute(elm, key);
      } else {
        setAttribute(elm, key, cur);
      }

      lockAttribute();
    }
  }
}

const emptyVNode$3 = {
  data: {}
};
var modAttrs = {
  create: vnode => updateAttrs(emptyVNode$3, vnode),
  update: updateAttrs
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function isLiveBindingProp(sel, key) {
  // For properties with live bindings, we read values from the DOM element
  // instead of relying on internally tracked values.
  return sel === 'input' && (key === 'value' || key === 'checked');
}

function update(oldVnode, vnode) {
  const props = vnode.data.props;

  if (isUndefined$1(props)) {
    return;
  }

  const oldProps = oldVnode.data.props;

  if (oldProps === props) {
    return;
  }

  if (undefined !== 'production') {
    assert.invariant(isUndefined$1(oldProps) || keys(oldProps).join(',') === keys(props).join(','), 'vnode.data.props cannot change shape.');
  }

  const isFirstPatch = isUndefined$1(oldProps);
  const {
    elm,
    sel,
    owner: {
      renderer
    }
  } = vnode;

  for (const key in props) {
    const cur = props[key]; // if it is the first time this element is patched, or the current value is different to the previous value...

    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? renderer.getProperty(elm, key) : oldProps[key])) {
      renderer.setProperty(elm, key, cur);
    }
  }
}

const emptyVNode$2 = {
  data: {}
};
var modProps = {
  create: vnode => update(emptyVNode$2, vnode),
  update
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const classNameToClassMap = create(null);

function getMapFromClassName(className) {
  // Intentionally using == to match undefined and null values from computed style attribute
  if (className == null) {
    return EmptyObject;
  } // computed class names must be string


  className = isString(className) ? className : className + '';
  let map = classNameToClassMap[className];

  if (map) {
    return map;
  }

  map = create(null);
  let start = 0;
  let o;
  const len = className.length;

  for (o = 0; o < len; o++) {
    if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
      if (o > start) {
        map[StringSlice.call(className, start, o)] = true;
      }

      start = o + 1;
    }
  }

  if (o > start) {
    map[StringSlice.call(className, start, o)] = true;
  }

  classNameToClassMap[className] = map;

  if (undefined !== 'production') {
    // just to make sure that this object never changes as part of the diffing algo
    freeze(map);
  }

  return map;
}

function updateClassAttribute(oldVnode, vnode) {
  const {
    elm,
    data: {
      className: newClass
    },
    owner: {
      renderer
    }
  } = vnode;
  const {
    data: {
      className: oldClass
    }
  } = oldVnode;

  if (oldClass === newClass) {
    return;
  }

  const classList = renderer.getClassList(elm);
  const newClassMap = getMapFromClassName(newClass);
  const oldClassMap = getMapFromClassName(oldClass);
  let name;

  for (name in oldClassMap) {
    // remove only if it is not in the new class collection and it is not set from within the instance
    if (isUndefined$1(newClassMap[name])) {
      classList.remove(name);
    }
  }

  for (name in newClassMap) {
    if (isUndefined$1(oldClassMap[name])) {
      classList.add(name);
    }
  }
}

const emptyVNode$1 = {
  data: {}
};
var modComputedClassName = {
  create: vnode => updateClassAttribute(emptyVNode$1, vnode),
  update: updateClassAttribute
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function updateStyleAttribute(oldVnode, vnode) {
  const {
    elm,
    data: {
      style: newStyle
    },
    owner: {
      renderer
    }
  } = vnode;
  const {
    setAttribute,
    removeAttribute
  } = renderer;

  if (oldVnode.data.style === newStyle) {
    return;
  }

  if (!isString(newStyle) || newStyle === '') {
    removeAttribute(elm, 'style');
  } else {
    setAttribute(elm, 'style', newStyle);
  }
}

const emptyVNode = {
  data: {}
};
var modComputedStyle = {
  create: vnode => updateStyleAttribute(emptyVNode, vnode),
  update: updateStyleAttribute
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The compiler takes care of transforming the inline classnames into an object. It's faster to set the
// different classnames properties individually instead of via a string.

function createClassAttribute(vnode) {
  const {
    elm,
    data: {
      classMap
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(classMap)) {
    return;
  }

  const classList = renderer.getClassList(elm);

  for (const name in classMap) {
    classList.add(name);
  }
}

var modStaticClassName = {
  create: createClassAttribute
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The compiler takes care of transforming the inline style into an object. It's faster to set the
// different style properties individually instead of via a string.

function createStyleAttribute(vnode) {
  const {
    elm,
    data: {
      styleDecls
    },
    owner: {
      renderer
    }
  } = vnode;

  if (isUndefined$1(styleDecls)) {
    return;
  }

  for (let i = 0; i < styleDecls.length; i++) {
    const [prop, value, important] = styleDecls[i];
    renderer.setCSSStyleProperty(elm, prop, value, important);
  }
}

var modStaticStyle = {
  create: createStyleAttribute
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

/**
@license
Copyright (c) 2015 Simon Friis Vindum.
This code may only be used under the MIT License found at
https://github.com/snabbdom/snabbdom/blob/master/LICENSE
Code distributed by Snabbdom as part of the Snabbdom project at
https://github.com/snabbdom/snabbdom/
*/
function isUndef(s) {
  return s === undefined;
}

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function isVNode(vnode) {
  return vnode != null;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  const map = {};
  let j, key, ch; // TODO [#1637]: simplify this by assuming that all vnodes has keys

  for (j = beginIdx; j <= endIdx; ++j) {
    ch = children[j];

    if (isVNode(ch)) {
      key = ch.key;

      if (key !== undefined) {
        map[key] = j;
      }
    }
  }

  return map;
}

function addVnodes(parentElm, before, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx];

    if (isVNode(ch)) {
      ch.hook.create(ch);
      ch.hook.insert(ch, parentElm, before);
    }
  }
}

function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx]; // text nodes do not have logic associated to them

    if (isVNode(ch)) {
      ch.hook.remove(ch, parentElm);
    }
  }
}

function updateDynamicChildren(parentElm, oldCh, newCh) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  const newChEnd = newCh.length - 1;
  let newEndIdx = newChEnd;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx;
  let idxInOld;
  let elmToMove;
  let before;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!isVNode(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
    } else if (!isVNode(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!isVNode(newStartVnode)) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!isVNode(newEndVnode)) {
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patchVnode(oldStartVnode, newEndVnode);
      newEndVnode.hook.move(oldStartVnode, parentElm, oldEndVnode.owner.renderer.nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patchVnode(oldEndVnode, newStartVnode);
      newStartVnode.hook.move(oldEndVnode, parentElm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }

      idxInOld = oldKeyToIdx[newStartVnode.key];

      if (isUndef(idxInOld)) {
        // New element
        newStartVnode.hook.create(newStartVnode);
        newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];

        if (isVNode(elmToMove)) {
          if (elmToMove.sel !== newStartVnode.sel) {
            // New element
            newStartVnode.hook.create(newStartVnode);
            newStartVnode.hook.insert(newStartVnode, parentElm, oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode);
            oldCh[idxInOld] = undefined;
            newStartVnode.hook.move(elmToMove, parentElm, oldStartVnode.elm);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }
  }

  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
      // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
      let i = newEndIdx;
      let n;

      do {
        n = newCh[++i];
      } while (!isVNode(n) && i < newChEnd);

      before = isVNode(n) ? n.elm : null;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx);
    } else {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
}
function updateStaticChildren(parentElm, oldCh, newCh) {
  const oldChLength = oldCh.length;
  const newChLength = newCh.length;

  if (oldChLength === 0) {
    // the old list is empty, we can directly insert anything new
    addVnodes(parentElm, null, newCh, 0, newChLength);
    return;
  }

  if (newChLength === 0) {
    // the old list is nonempty and the new list is empty so we can directly remove all old nodes
    // this is the case in which the dynamic children of an if-directive should be removed
    removeVnodes(parentElm, oldCh, 0, oldChLength);
    return;
  } // if the old list is not empty, the new list MUST have the same
  // amount of nodes, that's why we call this static children


  let referenceElm = null;

  for (let i = newChLength - 1; i >= 0; i -= 1) {
    const vnode = newCh[i];
    const oldVNode = oldCh[i];

    if (vnode !== oldVNode) {
      if (isVNode(oldVNode)) {
        if (isVNode(vnode)) {
          // both vnodes must be equivalent, and se just need to patch them
          patchVnode(oldVNode, vnode);
          referenceElm = vnode.elm;
        } else {
          // removing the old vnode since the new one is null
          oldVNode.hook.remove(oldVNode, parentElm);
        }
      } else if (isVNode(vnode)) {
        // this condition is unnecessary
        vnode.hook.create(vnode); // insert the new node one since the old one is null

        vnode.hook.insert(vnode, parentElm, referenceElm);
        referenceElm = vnode.elm;
      }
    }
  }
}

function patchVnode(oldVnode, vnode) {
  if (oldVnode !== vnode) {
    vnode.elm = oldVnode.elm;
    vnode.hook.update(oldVnode, vnode);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function generateDataDescriptor(options) {
  return assign({
    configurable: true,
    enumerable: true,
    writable: true
  }, options);
}

function generateAccessorDescriptor(options) {
  return assign({
    configurable: true,
    enumerable: true
  }, options);
}

let isDomMutationAllowed = false;
function unlockDomMutation() {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  isDomMutationAllowed = true;
}
function lockDomMutation() {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  isDomMutationAllowed = false;
}

function logMissingPortalError(name, type) {
  return logError(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
}

function patchElementWithRestrictions(elm, options) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const descriptors = {
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set outerHTML on Element.`);
      }

    })
  }; // Apply extra restriction related to DOM manipulation if the element is not a portal.

  if (!options.isLight && !options.isPortal) {
    const {
      appendChild,
      insertBefore,
      removeChild,
      replaceChild
    } = elm;
    const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    assign(descriptors, {
      appendChild: generateDataDescriptor({
        value(aChild) {
          logMissingPortalError('appendChild', 'method');
          return appendChild.call(this, aChild);
        }

      }),
      insertBefore: generateDataDescriptor({
        value(newNode, referenceNode) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('insertBefore', 'method');
          }

          return insertBefore.call(this, newNode, referenceNode);
        }

      }),
      removeChild: generateDataDescriptor({
        value(aChild) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('removeChild', 'method');
          }

          return removeChild.call(this, aChild);
        }

      }),
      replaceChild: generateDataDescriptor({
        value(newChild, oldChild) {
          logMissingPortalError('replaceChild', 'method');
          return replaceChild.call(this, newChild, oldChild);
        }

      }),
      nodeValue: generateAccessorDescriptor({
        get() {
          return originalNodeValueDescriptor.get.call(this);
        },

        set(value) {
          if (!isDomMutationAllowed) {
            logMissingPortalError('nodeValue', 'property');
          }

          originalNodeValueDescriptor.set.call(this, value);
        }

      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },

        set(value) {
          logMissingPortalError('textContent', 'property');
          originalTextContentDescriptor.set.call(this, value);
        }

      }),
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },

        set(value) {
          logMissingPortalError('innerHTML', 'property');
          return originalInnerHTMLDescriptor.set.call(this, value);
        }

      })
    });
  }

  defineProperties(elm, descriptors);
}

function getShadowRootRestrictionsDescriptors(sr) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  } // Disallowing properties in dev mode only to avoid people doing the wrong
  // thing when using the real shadow root, because if that's the case,
  // the component will not work when running with synthetic shadow.


  const originalAddEventListener = sr.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set innerHTML on ShadowRoot.`);
      }

    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set textContent on ShadowRoot.`);
      }

    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#420]: this is triggered when the component author attempts to add a listener
        // programmatically into its Component's shadow root
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method on ShadowRoot does not support any options.', getAssociatedVMIfPresent(this));
        } // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch


        return originalAddEventListener.apply(this, arguments);
      }

    })
  };
} // Custom Elements Restrictions:
// -----------------------------


function getCustomElementRestrictionsDescriptors(elm) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  const originalAddEventListener = elm.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set innerHTML on HTMLElement.`);
      }

    }),
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set outerHTML on HTMLElement.`);
      }

    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },

      set(_value) {
        throw new TypeError(`Invalid attempt to set textContent on HTMLElement.`);
      }

    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#420]: this is triggered when the component author attempts to add a listener
        // programmatically into a lighting element node
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        } // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch


        return originalAddEventListener.apply(this, arguments);
      }

    })
  };
}

function getComponentRestrictionsDescriptors() {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  return {
    tagName: generateAccessorDescriptor({
      get() {
        throw new Error(`Usage of property \`tagName\` is disallowed because the component itself does` + ` not know which tagName will be used to create the element, therefore writing` + ` code that check for that value is error prone.`);
      },

      configurable: true,
      enumerable: false // no enumerable properties on component

    })
  };
}

function getLightningElementPrototypeRestrictionsDescriptors(proto) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  const originalDispatchEvent = proto.dispatchEvent;
  const descriptors = {
    dispatchEvent: generateDataDescriptor({
      value(event) {
        const vm = getAssociatedVM(this);

        if (!isNull(event) && isObject(event)) {
          const {
            type
          } = event;

          if (!/^[a-z][a-z0-9_]*$/.test(type)) {
            logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
          }
        } // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch


        return originalDispatchEvent.apply(this, arguments);
      }

    })
  };
  forEach.call(getOwnPropertyNames$1(globalHTMLProperties), propName => {
    if (propName in proto) {
      return; // no need to redefine something that we are already exposing
    }

    descriptors[propName] = generateAccessorDescriptor({
      get() {
        const {
          error,
          attribute
        } = globalHTMLProperties[propName];
        const msg = [];
        msg.push(`Accessing the global HTML property "${propName}" is disabled.`);

        if (error) {
          msg.push(error);
        } else if (attribute) {
          msg.push(`Instead access it via \`this.getAttribute("${attribute}")\`.`);
        }

        logError(msg.join('\n'), getAssociatedVM(this));
      },

      set() {
        const {
          readOnly
        } = globalHTMLProperties[propName];

        if (readOnly) {
          logError(`The global HTML property \`${propName}\` is read-only.`, getAssociatedVM(this));
        }
      }

    });
  });
  return descriptors;
} // This routine will prevent access to certain properties on a shadow root instance to guarantee
// that all components will work fine in IE11 and other browsers without shadow dom support.


function patchShadowRootWithRestrictions(sr) {
  defineProperties(sr, getShadowRootRestrictionsDescriptors(sr));
}
function patchCustomElementWithRestrictions(elm) {
  const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
  const elmProto = getPrototypeOf$1(elm);
  setPrototypeOf(elm, create(elmProto, restrictionsDescriptors));
}
function patchComponentWithRestrictions(cmp) {
  defineProperties(cmp, getComponentRestrictionsDescriptors());
}
function patchLightningElementPrototypeWithRestrictions(proto) {
  defineProperties(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
// to inject at runtime.
const HTMLElementConstructor$1 = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
const HTMLElementPrototype = HTMLElementConstructor$1.prototype;

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This is a descriptor map that contains
 * all standard properties that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base HTML Element and
 * Base Lightning Element should support.
 */

const HTMLElementOriginalDescriptors = create(null);
forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
forEach.call(defaultDefHTMLPropertyNames, propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
  // this category, so, better to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);

  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});

/**
 * Copyright (C) 2017 salesforce.com, inc.
 */
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  isExtensible,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  preventExtensions,
  hasOwnProperty
} = Object;
const {
  push: ArrayPush,
  concat: ArrayConcat
} = Array.prototype;
const OtS = {}.toString;

function toString(obj) {
  if (obj && obj.toString) {
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS.call(obj);
  } else {
    return obj + '';
  }
}

function isUndefined(obj) {
  return obj === undefined;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

const proxyToValueMap = new WeakMap();

function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}

const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

class BaseProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  } // Shared utility methods


  wrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = this.wrapValue(descriptor.value);
    } else {
      const {
        set: originalSet,
        get: originalGet
      } = descriptor;

      if (!isUndefined(originalGet)) {
        descriptor.get = this.wrapGetter(originalGet);
      }

      if (!isUndefined(originalSet)) {
        descriptor.set = this.wrapSetter(originalSet);
      }
    }

    return descriptor;
  }

  copyDescriptorIntoShadowTarget(shadowTarget, key) {
    const {
      originalTarget
    } = this; // Note: a property might get defined multiple times in the shadowTarget
    //       but it will always be compatible with the previous descriptor
    //       to preserve the object invariants, which makes these lines safe.

    const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key); // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed

    /* istanbul ignore else */

    if (!isUndefined(originalDescriptor)) {
      const wrappedDesc = this.wrapDescriptor(originalDescriptor);
      ObjectDefineProperty(shadowTarget, key, wrappedDesc);
    }
  }

  lockShadowTarget(shadowTarget) {
    const {
      originalTarget
    } = this;
    const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    });
    const {
      membrane: {
        tagPropertyKey
      }
    } = this;

    if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
      ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
    }

    preventExtensions(shadowTarget);
  } // Shared Traps
  // TODO: apply() is never called

  /* istanbul ignore next */


  apply(shadowTarget, thisArg, argArray) {
    /* No op */
  } // TODO: construct() is never called

  /* istanbul ignore next */


  construct(shadowTarget, argArray, newTarget) {
    /* No op */
  }

  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    const value = originalTarget[key];
    valueObserved(originalTarget, key);
    return this.wrapValue(value);
  }

  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey,
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key); // since key is never going to be undefined, and tagPropertyKey might be undefined
    // we can simply compare them as the second part of the condition.

    return key in originalTarget || key === tagPropertyKey;
  }

  ownKeys(shadowTarget) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey
      }
    } = this; // if the membrane tag key exists and it is not in the original target, we add it to the keys.

    const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey]; // small perf optimization using push instead of concat to avoid creating an extra array

    ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
    ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
    return keys;
  }

  isExtensible(shadowTarget) {
    const {
      originalTarget
    } = this; // optimization to avoid attempting to lock down the shadowTarget multiple times

    if (!isExtensible(shadowTarget)) {
      return false; // was already locked down
    }

    if (!isExtensible(originalTarget)) {
      this.lockShadowTarget(shadowTarget);
      return false;
    }

    return true;
  }

  getPrototypeOf(shadowTarget) {
    const {
      originalTarget
    } = this;
    return getPrototypeOf(originalTarget);
  }

  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved,
        tagPropertyKey
      }
    } = this; // keys looked up via getOwnPropertyDescriptor need to be reactive

    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor(originalTarget, key);

    if (isUndefined(desc)) {
      if (key !== tagPropertyKey) {
        return undefined;
      } // if the key is the membrane tag key, and is not in the original target,
      // we produce a synthetic descriptor and install it on the shadow target


      desc = {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      };
      ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
      return desc;
    }

    if (desc.configurable === false) {
      // updating the descriptor to non-configurable on the shadow
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    } // Note: by accessing the descriptor, the key is marked as observed
    // but access to the value, setter or getter (if available) cannot observe
    // mutations, just like regular methods, in which case we just do nothing.


    return this.wrapDescriptor(desc);
  }

}

const getterMap$1 = new WeakMap();
const setterMap$1 = new WeakMap();
const reverseGetterMap = new WeakMap();
const reverseSetterMap = new WeakMap();

class ReactiveProxyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getProxy(value);
  }

  wrapGetter(originalGet) {
    const wrappedGetter = getterMap$1.get(originalGet);

    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }

    const handler = this;

    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };

    getterMap$1.set(originalGet, get);
    reverseGetterMap.set(get, originalGet);
    return get;
  }

  wrapSetter(originalSet) {
    const wrappedSetter = setterMap$1.get(originalSet);

    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }

    const set = function (v) {
      // invoking the original setter with the original target
      originalSet.call(unwrap$1(this), unwrap$1(v));
    };

    setterMap$1.set(originalSet, set);
    reverseSetterMap.set(set, originalSet);
    return set;
  }

  unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      // dealing with a data descriptor
      descriptor.value = unwrap$1(descriptor.value);
    } else {
      const {
        set,
        get
      } = descriptor;

      if (!isUndefined(get)) {
        descriptor.get = this.unwrapGetter(get);
      }

      if (!isUndefined(set)) {
        descriptor.set = this.unwrapSetter(set);
      }
    }

    return descriptor;
  }

  unwrapGetter(redGet) {
    const reverseGetter = reverseGetterMap.get(redGet);

    if (!isUndefined(reverseGetter)) {
      return reverseGetter;
    }

    const handler = this;

    const get = function () {
      // invoking the red getter with the proxy of this
      return unwrap$1(redGet.call(handler.wrapValue(this)));
    };

    getterMap$1.set(get, redGet);
    reverseGetterMap.set(redGet, get);
    return get;
  }

  unwrapSetter(redSet) {
    const reverseSetter = reverseSetterMap.get(redSet);

    if (!isUndefined(reverseSetter)) {
      return reverseSetter;
    }

    const handler = this;

    const set = function (v) {
      // invoking the red setter with the proxy of this
      redSet.call(handler.wrapValue(this), handler.wrapValue(v));
    };

    setterMap$1.set(set, redSet);
    reverseSetterMap.set(redSet, set);
    return set;
  }

  set(shadowTarget, key, value) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    const oldValue = originalTarget[key];

    if (oldValue !== value) {
      originalTarget[key] = value;
      valueMutated(originalTarget, key);
    } else if (key === 'length' && isArray(originalTarget)) {
      // fix for issue #236: push will add the new index, and by the time length
      // is updated, the internal length is already equal to the new length value
      // therefore, the oldValue is equal to the value. This is the forking logic
      // to support this use case.
      valueMutated(originalTarget, key);
    }

    return true;
  }

  deleteProperty(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    delete originalTarget[key];
    valueMutated(originalTarget, key);
    return true;
  }

  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
    }
  }

  preventExtensions(shadowTarget) {
    if (isExtensible(shadowTarget)) {
      const {
        originalTarget
      } = this;
      preventExtensions(originalTarget); // if the originalTarget is a proxy itself, it might reject
      // the preventExtension call, in which case we should not attempt to lock down
      // the shadow target.
      // TODO: It should not actually be possible to reach this `if` statement.
      // If a proxy rejects extensions, then calling preventExtensions will throw an error:
      // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY

      /* istanbul ignore if */

      if (isExtensible(originalTarget)) {
        return false;
      }

      this.lockShadowTarget(shadowTarget);
    }

    return true;
  }

  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane: {
        valueMutated,
        tagPropertyKey
      }
    } = this;

    if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
      // To avoid leaking the membrane tag property into the original target, we must
      // be sure that the original target doesn't have yet.
      // NOTE: we do not return false here because Object.freeze and equivalent operations
      // will attempt to set the descriptor to the same value, and expect no to throw. This
      // is an small compromise for the sake of not having to diff the descriptors.
      return true;
    }

    ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor)); // intentionally testing if false since it could be undefined as well

    if (descriptor.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }

    valueMutated(originalTarget, key);
    return true;
  }

}

const getterMap = new WeakMap();
const setterMap = new WeakMap();

class ReadOnlyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getReadOnlyProxy(value);
  }

  wrapGetter(originalGet) {
    const wrappedGetter = getterMap.get(originalGet);

    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }

    const handler = this;

    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };

    getterMap.set(originalGet, get);
    return get;
  }

  wrapSetter(originalSet) {
    const wrappedSetter = setterMap.get(originalSet);

    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }

    const handler = this;

    const set = function (v) {
      /* istanbul ignore else */
      if (undefined !== 'production') {
        const {
          originalTarget
        } = handler;
        throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    };

    setterMap.set(originalSet, set);
    return set;
  }

  set(shadowTarget, key, value) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      const {
        originalTarget
      } = this;
      const msg = isArray(originalTarget) ? `Invalid mutation: Cannot mutate array at index ${key.toString()}. Array is read-only.` : `Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`;
      throw new Error(msg);
    }
    /* istanbul ignore next */


    return false;
  }

  deleteProperty(shadowTarget, key) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
    /* istanbul ignore next */


    return false;
  }

  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
    }
  }

  preventExtensions(shadowTarget) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
    }
    /* istanbul ignore next */


    return false;
  }

  defineProperty(shadowTarget, key, descriptor) {
    /* istanbul ignore else */
    if (undefined !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
    /* istanbul ignore next */


    return false;
  }

}

function extract(objectOrArray) {
  if (isArray(objectOrArray)) {
    return objectOrArray.map(item => {
      const original = unwrap$1(item);

      if (original !== item) {
        return extract(original);
      }

      return item;
    });
  }

  const obj = ObjectCreate(getPrototypeOf(objectOrArray));
  const names = getOwnPropertyNames(objectOrArray);
  return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
    const item = objectOrArray[key];
    const original = unwrap$1(item);

    if (original !== item) {
      seed[key] = extract(original);
    } else {
      seed[key] = item;
    }

    return seed;
  }, obj);
}

const formatter = {
  header: plainOrProxy => {
    const originalTarget = unwrap$1(plainOrProxy); // if originalTarget is falsy or not unwrappable, exit

    if (!originalTarget || originalTarget === plainOrProxy) {
      return null;
    }

    const obj = extract(plainOrProxy);
    return ['object', {
      object: obj
    }];
  },
  hasBody: () => {
    return false;
  },
  body: () => {
    return null;
  }
}; // Inspired from paulmillr/es6-shim
// https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185

/* istanbul ignore next */

function getGlobal() {
  // the only reliable means to get the global object is `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  } // Gracefully degrade if not able to locate the global object


  return {};
}

function init() {
  /* istanbul ignore if */
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  const global = getGlobal(); // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
  //  - Go to Settings,
  //  - Under console, select "Enable custom formatters"
  // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview

  const devtoolsFormatters = global.devtoolsFormatters || [];
  ArrayPush.call(devtoolsFormatters, formatter);
  global.devtoolsFormatters = devtoolsFormatters;
}
/* istanbul ignore else */


if (undefined !== 'production') {
  init();
}

const ObjectDotPrototype = Object.prototype;

function defaultValueIsObservable(value) {
  // intentionally checking for null
  if (value === null) {
    return false;
  } // treat all non-object types, including undefined, as non-observable values


  if (typeof value !== 'object') {
    return false;
  }

  if (isArray(value)) {
    return true;
  }

  const proto = getPrototypeOf(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
}

const defaultValueObserved = (obj, key) => {
  /* do nothing */
};

const defaultValueMutated = (obj, key) => {
  /* do nothing */
};

const defaultValueDistortion = value => value;

function createShadowTarget(value) {
  return isArray(value) ? [] : {};
}

class ReactiveMembrane {
  constructor(options) {
    this.valueDistortion = defaultValueDistortion;
    this.valueMutated = defaultValueMutated;
    this.valueObserved = defaultValueObserved;
    this.valueIsObservable = defaultValueIsObservable;
    this.readOnlyObjectGraph = new WeakMap();
    this.reactiveObjectGraph = new WeakMap();

    if (!isUndefined(options)) {
      const {
        valueDistortion,
        valueMutated,
        valueObserved,
        valueIsObservable,
        tagPropertyKey
      } = options;
      this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
      this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
      this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
      this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
      this.tagPropertyKey = tagPropertyKey;
    }
  }

  getProxy(value) {
    const unwrappedValue = unwrap$1(value);
    const distorted = this.valueDistortion(unwrappedValue);

    if (this.valueIsObservable(distorted)) {
      if (this.readOnlyObjectGraph.get(distorted) === value) {
        // when trying to extract the writable version of a readonly
        // we return the readonly.
        return value;
      }

      return this.getReactiveHandler(unwrappedValue, distorted);
    }

    return distorted;
  }

  getReadOnlyProxy(value) {
    value = unwrap$1(value);
    const distorted = this.valueDistortion(value);

    if (this.valueIsObservable(distorted)) {
      return this.getReadOnlyHandler(value, distorted);
    }

    return distorted;
  }

  unwrapProxy(p) {
    return unwrap$1(p);
  }

  getReactiveHandler(value, distortedValue) {
    let proxy = this.reactiveObjectGraph.get(distortedValue);

    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReactiveProxyHandler(this, distortedValue);
      proxy = new Proxy(createShadowTarget(distortedValue), handler);
      registerProxy(proxy, value);
      this.reactiveObjectGraph.set(distortedValue, proxy);
    }

    return proxy;
  }

  getReadOnlyHandler(value, distortedValue) {
    let proxy = this.readOnlyObjectGraph.get(distortedValue);

    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReadOnlyHandler(this, distortedValue);
      proxy = new Proxy(createShadowTarget(distortedValue), handler);
      registerProxy(proxy, value);
      this.readOnlyObjectGraph.set(distortedValue, proxy);
    }

    return proxy;
  }

}
/** version: 1.1.5 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');

function valueDistortion(value) {
  return value;
}

const reactiveMembrane = new ReactiveMembrane({
  valueObserved,
  valueMutated,
  valueDistortion,
  tagPropertyKey: lockerLivePropertyKey
});
/**
 * EXPERIMENTAL: This function implements an unwrap mechanism that
 * works for observable membrane objects. This API is subject to
 * change or being removed.
 */

const unwrap = function (value) {
  const unwrapped = reactiveMembrane.unwrapProxy(value);

  if (unwrapped !== value) {
    // if value is a proxy, unwrap to access original value and apply distortion
    return valueDistortion(unwrapped);
  }

  return value;
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This operation is called with a descriptor of an standard html property
 * that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
 * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
 */

function createBridgeToElementDescriptor(propName, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;

  if (!isFunction$1(get)) {
    if (undefined !== 'production') {
      assert.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
    }

    throw new TypeError();
  }

  if (!isFunction$1(set)) {
    if (undefined !== 'production') {
      assert.fail(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
    }

    throw new TypeError();
  }

  return {
    enumerable,
    configurable,

    get() {
      const vm = getAssociatedVM(this);

      if (isBeingConstructed(vm)) {
        if (undefined !== 'production') {
          logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }

        return;
      }

      componentValueObserved(vm, propName);
      return get.call(vm.elm);
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (undefined !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
        assert.invariant(!isUpdatingTemplate, `When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
        assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
        assert.invariant(!isObject(newValue) || isNull(newValue), `Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
      }

      if (newValue !== vm.cmpProps[propName]) {
        vm.cmpProps[propName] = newValue;
        componentValueMutated(vm, propName);
      }

      return set.call(vm.elm, newValue);
    }

  };
}
/**
 * This class is the base class for any LWC element.
 * Some elements directly extends this class, others implement it via inheritance.
 **/
// @ts-ignore


const LightningElement = function () {
  var _a; // This should be as performant as possible, while any initialization should be done lazily


  if (isNull(vmBeingConstructed)) {
    throw new ReferenceError('Illegal constructor');
  }

  const vm = vmBeingConstructed;
  const {
    def,
    elm,
    renderer
  } = vm;
  const {
    bridge
  } = def;

  if (undefined !== 'production') {
    (_a = renderer.assertInstanceOfHTMLElement) === null || _a === void 0 ? void 0 : _a.call(renderer, vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
  }

  const component = this;
  setPrototypeOf(elm, bridge.prototype);
  vm.component = this; // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
  // component creation and passes hooks to instrument all the component interactions with the
  // engine. We are intentionally hiding this argument from the formal API of LightningElement
  // because we don't want folks to know about it just yet.

  if (arguments.length === 1) {
    const {
      callHook,
      setHook,
      getHook
    } = arguments[0];
    vm.callHook = callHook;
    vm.setHook = setHook;
    vm.getHook = getHook;
  } // Making the component instance a live value when using Locker to support expandos.


  this[lockerLivePropertyKey] = undefined; // Linking elm, shadow root and component with the VM.

  associateVM(component, vm);
  associateVM(elm, vm);

  if (vm.renderMode === 1
  /* Shadow */
  ) {
    attachShadow(vm);
  } // Adding extra guard rails in DEV mode.


  if (undefined !== 'production') {
    patchCustomElementWithRestrictions(elm);
    patchComponentWithRestrictions(component);
  }

  return this;
};

function attachShadow(vm) {
  const {
    elm,
    mode,
    renderer,
    shadowMode,
    def: {
      ctor
    }
  } = vm;
  const cmpRoot = renderer.attachShadow(elm, {
    [KEY__SYNTHETIC_MODE]: shadowMode === 1
    /* Synthetic */
    ,
    delegatesFocus: Boolean(ctor.delegatesFocus),
    mode
  });
  vm.cmpRoot = cmpRoot;
  associateVM(cmpRoot, vm);

  if (undefined !== 'production') {
    patchShadowRootWithRestrictions(cmpRoot);
  }
}

function warnIfInvokedDuringConstruction(vm, methodOrPropName) {
  if (isBeingConstructed(vm)) {
    logError(`this.${methodOrPropName} should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM or has no children yet.`);
  }
} // @ts-ignore


LightningElement.prototype = {
  constructor: LightningElement,

  dispatchEvent(event) {
    const {
      elm,
      renderer: {
        dispatchEvent
      }
    } = getAssociatedVM(this);
    return dispatchEvent(elm, event);
  },

  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        addEventListener
      }
    } = vm;

    if (undefined !== 'production') {
      const vmBeingRendered = getVMBeingRendered();
      assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      assert.invariant(isFunction$1(listener), `Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
    }

    const wrappedListener = getWrappedComponentsListener(vm, listener);
    addEventListener(elm, type, wrappedListener, options);
  },

  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    removeEventListener(elm, type, wrappedListener, options);
  },

  hasAttribute(name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return !isNull(getAttribute(elm, name));
  },

  hasAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return !isNull(getAttribute(elm, name, namespace));
  },

  removeAttribute(name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    unlockAttribute(elm, name);
    removeAttribute(elm, name);
    lockAttribute();
  },

  removeAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    unlockAttribute(elm, name);
    removeAttribute(elm, name, namespace);
    lockAttribute();
  },

  getAttribute(name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return getAttribute(elm, name);
  },

  getAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = getAssociatedVM(this);
    return getAttribute(elm, name, namespace);
  },

  setAttribute(name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;

    if (undefined !== 'production') {
      assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, name);
    setAttribute(elm, name, value);
    lockAttribute();
  },

  setAttributeNS(namespace, name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;

    if (undefined !== 'production') {
      assert.isFalse(isBeingConstructed(vm), `Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
    }

    unlockAttribute(elm, name);
    setAttribute(elm, name, value, namespace);
    lockAttribute();
  },

  getBoundingClientRect() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getBoundingClientRect
      }
    } = vm;

    if (undefined !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'getBoundingClientRect()');
    }

    return getBoundingClientRect(elm);
  },

  get isConnected() {
    const {
      elm,
      renderer: {
        isConnected
      }
    } = getAssociatedVM(this);
    return isConnected(elm);
  },

  get classList() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getClassList
      }
    } = vm;

    if (undefined !== 'production') {
      // TODO [#1290]: this still fails in dev but works in production, eventually, we should
      // just throw in all modes
      assert.isFalse(isBeingConstructed(vm), `Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
    }

    return getClassList(elm);
  },

  get template() {
    const vm = getAssociatedVM(this);

    if (undefined !== 'production') {
      if (vm.renderMode === 0
      /* Light */
      ) {
        logError('`this.template` returns null for light DOM components. Since there is no shadow, the rendered content can be accessed via `this` itself. e.g. instead of `this.template.querySelector`, use `this.querySelector`.');
      }
    }

    return vm.cmpRoot;
  },

  get shadowRoot() {
    // From within the component instance, the shadowRoot is always reported as "closed".
    // Authors should rely on this.template instead.
    return null;
  },

  render() {
    const vm = getAssociatedVM(this);
    return vm.def.template;
  },

  toString() {
    const vm = getAssociatedVM(this);
    return `[object ${vm.def.name}]`;
  }

};
const queryAndChildGetterDescriptors = create(null);
const childGetters = [['children', 'getChildren'], ['childNodes', 'getChildNodes'], ['firstChild', 'getFirstChild'], ['firstElementChild', 'getFirstElementChild'], ['lastChild', 'getLastChild'], ['lastElementChild', 'getLastElementChild']]; // Generic passthrough for child getters on HTMLElement to the relevant Renderer APIs

for (const [elementProp, rendererMethod] of childGetters) {
  queryAndChildGetterDescriptors[elementProp] = {
    get() {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer
      } = vm;

      if (undefined !== 'production') {
        warnIfInvokedDuringConstruction(vm, elementProp);
      }

      return renderer[rendererMethod](elm);
    },

    configurable: true,
    enumerable: true
  };
}

const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll']; // Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs

for (const queryMethod of queryMethods) {
  queryAndChildGetterDescriptors[queryMethod] = {
    value(arg) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer
      } = vm;

      if (undefined !== 'production') {
        warnIfInvokedDuringConstruction(vm, `${queryMethod}()`);
      }

      return renderer[queryMethod](elm, arg);
    },

    configurable: true,
    enumerable: true,
    writable: true
  };
}

defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
const lightningBasedDescriptors = create(null);

for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}

defineProperties(LightningElement.prototype, lightningBasedDescriptors);
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    // If required, a runtime-specific implementation must be defined.
    throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
  },

  configurable: true
});

if (undefined !== 'production') {
  patchLightningElementPrototypeWithRestrictions(LightningElement.prototype);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * @wire decorator to wire fields and methods to a wire adapter in
 * LWC Components. This function implements the internals of this
 * decorator.
 */

function wire(_adapter, _config) {
  if (undefined !== 'production') {
    assert.fail('@wire(adapter, config?) may only be used as a decorator.');
  }

  throw new Error();
}
function internalWireFieldDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(value) {
      const vm = getAssociatedVM(this);
      /**
       * Reactivity for wired fields is provided in wiring.
       * We intentionally add reactivity here since this is just
       * letting the author to do the wrong thing, but it will keep our
       * system to be backward compatible.
       */

      if (value !== vm.cmpFields[key]) {
        vm.cmpFields[key] = value;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function track(target) {
  if (arguments.length === 1) {
    return reactiveMembrane.getProxy(target);
  }

  if (undefined !== 'production') {
    assert.fail(`@track decorator can only be used with one argument to return a trackable object, or as a decorator function.`);
  }

  throw new Error();
}
function internalTrackDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (undefined !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      const reactiveOrAnyValue = reactiveMembrane.getProxy(newValue);

      if (reactiveOrAnyValue !== vm.cmpFields[key]) {
        vm.cmpFields[key] = reactiveOrAnyValue;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function api$1() {
  if (undefined !== 'production') {
    assert.fail(`@api decorator can only be used as a decorator function.`);
  }

  throw new Error();
}
function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);

      if (isBeingConstructed(vm)) {
        if (undefined !== 'production') {
          logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }

        return;
      }

      componentValueObserved(vm, key);
      return vm.cmpProps[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (undefined !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      vm.cmpProps[key] = newValue;
      componentValueMutated(vm, key);
    },

    enumerable: true,
    configurable: true
  };
}
class AccessorReactiveObserver extends ReactiveObserver {
  constructor(vm, set) {
    super(() => {
      if (isFalse(this.debouncing)) {
        this.debouncing = true;
        addCallbackToNextTick(() => {
          if (isTrue(this.debouncing)) {
            const {
              value
            } = this;
            const {
              isDirty: dirtyStateBeforeSetterCall,
              component,
              idx
            } = vm;
            set.call(component, value); // de-bouncing after the call to the original setter to prevent
            // infinity loop if the setter itself is mutating things that
            // were accessed during the previous invocation.

            this.debouncing = false;

            if (isTrue(vm.isDirty) && isFalse(dirtyStateBeforeSetterCall) && idx > 0) {
              // immediate rehydration due to a setter driven mutation, otherwise
              // the component will get rendered on the second tick, which it is not
              // desirable.
              rerenderVM(vm);
            }
          }
        });
      }
    });
    this.debouncing = false;
  }

  reset(value) {
    super.reset();
    this.debouncing = false;

    if (arguments.length > 0) {
      this.value = value;
    }
  }

}
function createPublicAccessorDescriptor(key, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;

  if (!isFunction$1(get)) {
    if (undefined !== 'production') {
      assert.invariant(isFunction$1(get), `Invalid compiler output for public accessor ${toString$1(key)} decorated with @api`);
    }

    throw new Error();
  }

  return {
    get() {
      if (undefined !== 'production') {
        // Assert that the this value is an actual Component with an associated VM.
        getAssociatedVM(this);
      }

      return get.call(this);
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (undefined !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        assert.invariant(!isInvokingRender, `${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        assert.invariant(!isUpdatingTemplate, `Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
      }

      if (set) {
        if (runtimeFlags.ENABLE_REACTIVE_SETTER) {
          let ro = vm.oar[key];

          if (isUndefined$1(ro)) {
            ro = vm.oar[key] = new AccessorReactiveObserver(vm, set);
          } // every time we invoke this setter from outside (through this wrapper setter)
          // we should reset the value and then debounce just in case there is a pending
          // invocation the next tick that is not longer relevant since the value is changing
          // from outside.


          ro.reset(newValue);
          ro.observe(() => {
            set.call(this, newValue);
          });
        } else {
          set.call(this, newValue);
        }
      } else if (undefined !== 'production') {
        assert.fail(`Invalid attempt to set a new value for property ${toString$1(key)} of ${vm} that does not has a setter decorated with @api.`);
      }
    },

    enumerable,
    configurable
  };
}

function createObservedFieldPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },

    set(newValue) {
      const vm = getAssociatedVM(this);

      if (newValue !== vm.cmpFields[key]) {
        vm.cmpFields[key] = newValue;
        componentValueMutated(vm, key);
      }
    },

    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function getClassDescriptorType(descriptor) {
  if (isFunction$1(descriptor.value)) {
    return "method"
    /* Method */
    ;
  } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
    return "accessor"
    /* Accessor */
    ;
  } else {
    return "field"
    /* Field */
    ;
  }
}

function validateObservedField(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`; // [W-9927596] Ideally we always throw an error when detecting duplicate observed field.
    // This branch is only here for backward compatibility reasons.

    if (type === "accessor"
    /* Accessor */
    ) {
      logError(message);
    } else {
      assert.fail(message);
    }
  }
}

function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert.fail(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    assert.fail(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}

function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    assert.fail(`Invalid @wire ${methodName} method.`);
  }
}

function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`; // [W-9927596] Ideally we always throw an error when detecting duplicate public properties.
    // This branch is only here for backward compatibility reasons.

    if (type === "accessor"
    /* Accessor */
    ) {
      logError(message);
    } else {
      assert.fail(message);
    }
  }
}

function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
  if (isUndefined$1(descriptor)) {
    assert.fail(`Invalid @api get ${fieldName} accessor.`);
  } else if (isFunction$1(descriptor.set)) {
    assert.isTrue(isFunction$1(descriptor.get), `Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
  } else if (!isFunction$1(descriptor.get)) {
    assert.fail(`Missing @api get ${fieldName} accessor.`);
  }
}

function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    assert.fail(`Invalid @api ${methodName} method.`);
  }
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by user-land code.
 */


function registerDecorators(Ctor, meta) {
  const proto = Ctor.prototype;
  const {
    publicProps,
    publicMethods,
    wire,
    track,
    fields
  } = meta;
  const apiMethods = create(null);
  const apiFields = create(null);
  const wiredMethods = create(null);
  const wiredFields = create(null);
  const observedFields = create(null);
  const apiFieldsConfig = create(null);
  let descriptor;

  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      if (propConfig.config > 0) {
        // accessor declaration
        if (undefined !== 'production') {
          validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
      } else {
        // field declaration
        if (undefined !== 'production') {
          validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
        } // [W-9927596] If a component has both a public property and a private setter/getter
        // with the same name, the property is defined as a public accessor. This branch is
        // only here for backward compatibility reasons.


        if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          descriptor = createPublicPropertyDescriptor(fieldName);
        }
      }

      apiFields[fieldName] = descriptor;
      defineProperty(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(publicMethods)) {
    forEach.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$1(proto, methodName);

      if (undefined !== 'production') {
        validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
      }

      if (isUndefined$1(descriptor)) {
        throw new Error();
      }

      apiMethods[methodName] = descriptor;
    });
  }

  if (!isUndefined$1(wire)) {
    for (const fieldOrMethodName in wire) {
      const {
        adapter,
        method,
        config: configCallback,
        dynamic = []
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);

      if (method === 1) {
        if (undefined !== 'production') {
          assert.isTrue(adapter, `@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
          validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        if (isUndefined$1(descriptor)) {
          throw new Error();
        }

        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
      } else {
        if (undefined !== 'production') {
          assert.isTrue(adapter, `@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
          validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }

        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
        defineProperty(proto, fieldOrMethodName, descriptor);
      }
    }
  }

  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      if (undefined !== 'production') {
        validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
      }

      descriptor = internalTrackDecorator(fieldName);
      defineProperty(proto, fieldName, descriptor);
    }
  }

  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);

      if (undefined !== 'production') {
        validateObservedField(Ctor, fieldName, descriptor);
      } // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
      // tracked property. This is only here for backward compatibility purposes.


      const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
      const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;

      if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
        observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
      }
    }
  }

  setDecoratorsMeta(Ctor, {
    apiMethods,
    apiFields,
    apiFieldsConfig,
    wiredMethods,
    wiredFields,
    observedFields
  });
  return Ctor;
}
const signedDecoratorToMetaMap = new Map();

function setDecoratorsMeta(Ctor, meta) {
  signedDecoratorToMetaMap.set(Ctor, meta);
}

const defaultMeta = {
  apiMethods: EmptyObject,
  apiFields: EmptyObject,
  apiFieldsConfig: EmptyObject,
  wiredMethods: EmptyObject,
  wiredFields: EmptyObject,
  observedFields: EmptyObject
};
function getDecoratorsMeta(Ctor) {
  const meta = signedDecoratorToMetaMap.get(Ctor);
  return isUndefined$1(meta) ? defaultMeta : meta;
}

const signedTemplateSet = new Set();
function defaultEmptyTemplate() {
  return [];
}
signedTemplateSet.add(defaultEmptyTemplate);
function isTemplateRegistered(tpl) {
  return signedTemplateSet.has(tpl);
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */

function registerTemplate(tpl) {
  signedTemplateSet.add(tpl); // chaining this method as a way to wrap existing
  // assignment of templates easily, without too much transformation

  return tpl;
}
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize vulnerable attributes.
 */

function sanitizeAttribute(tagName, namespaceUri, attrName, attrValue) {
  // locker-service patches this function during runtime to sanitize vulnerable attributes. When
  // ran off-core this function becomes a noop and returns the user authored value.
  return attrValue;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// from the element instance, and get the value or set a new value on the component.
// This means that across different elements, similar names can get the exact same
// descriptor, so we can cache them:

const cachedGetterByKey = create(null);
const cachedSetterByKey = create(null);

function createGetter(key) {
  let fn = cachedGetterByKey[key];

  if (isUndefined$1(fn)) {
    fn = cachedGetterByKey[key] = function () {
      const vm = getAssociatedVM(this);
      const {
        getHook
      } = vm;
      return getHook(vm.component, key);
    };
  }

  return fn;
}

function createSetter(key) {
  let fn = cachedSetterByKey[key];

  if (isUndefined$1(fn)) {
    fn = cachedSetterByKey[key] = function (newValue) {
      const vm = getAssociatedVM(this);
      const {
        setHook
      } = vm;
      newValue = reactiveMembrane.getReadOnlyProxy(newValue);
      setHook(vm.component, key, newValue);
    };
  }

  return fn;
}

function createMethodCaller(methodName) {
  return function () {
    const vm = getAssociatedVM(this);
    const {
      callHook,
      component
    } = vm;
    const fn = component[methodName];
    return callHook(vm.component, fn, ArraySlice.call(arguments));
  };
}

function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
  return function attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
      // Ignore same values.
      return;
    }

    const propName = attributeToPropMap[attrName];

    if (isUndefined$1(propName)) {
      if (!isUndefined$1(superAttributeChangedCallback)) {
        // delegate unknown attributes to the super.
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        superAttributeChangedCallback.apply(this, arguments);
      }

      return;
    }

    if (!isAttributeLocked(this, attrName)) {
      // Ignore changes triggered by the engine itself during:
      // * diffing when public props are attempting to reflect to the DOM
      // * component via `this.setAttribute()`, should never update the prop
      // Both cases, the setAttribute call is always wrapped by the unlocking of the
      // attribute to be changed
      return;
    } // Reflect attribute change to the corresponding property when changed from outside.


    this[propName] = newValue;
  };
}

function HTMLBridgeElementFactory(SuperClass, props, methods) {
  let HTMLBridgeElement;
  /**
   * Modern browsers will have all Native Constructors as regular Classes
   * and must be instantiated with the new keyword. In older browsers,
   * specifically IE11, those are objects with a prototype property defined,
   * since they are not supposed to be extended or instantiated with the
   * new keyword. This forking logic supports both cases, specifically because
   * wc.ts relies on the construction path of the bridges to create new
   * fully qualifying web components.
   */

  if (isFunction$1(SuperClass)) {
    HTMLBridgeElement = class extends SuperClass {};
  } else {
    HTMLBridgeElement = function () {
      // Bridge classes are not supposed to be instantiated directly in
      // browsers that do not support web components.
      throw new TypeError('Illegal constructor');
    }; // prototype inheritance dance


    setPrototypeOf(HTMLBridgeElement, SuperClass);
    setPrototypeOf(HTMLBridgeElement.prototype, SuperClass.prototype);
    defineProperty(HTMLBridgeElement.prototype, 'constructor', {
      writable: true,
      configurable: true,
      value: HTMLBridgeElement
    });
  } // generating the hash table for attributes to avoid duplicate fields and facilitate validation
  // and false positives in case of inheritance.


  const attributeToPropMap = create(null);
  const {
    attributeChangedCallback: superAttributeChangedCallback
  } = SuperClass.prototype;
  const {
    observedAttributes: superObservedAttributes = []
  } = SuperClass;
  const descriptors = create(null); // expose getters and setters for each public props on the new Element Bridge

  for (let i = 0, len = props.length; i < len; i += 1) {
    const propName = props[i];
    attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
    descriptors[propName] = {
      get: createGetter(propName),
      set: createSetter(propName),
      enumerable: true,
      configurable: true
    };
  } // expose public methods as props on the new Element Bridge


  for (let i = 0, len = methods.length; i < len; i += 1) {
    const methodName = methods[i];
    descriptors[methodName] = {
      value: createMethodCaller(methodName),
      writable: true,
      configurable: true
    };
  } // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
  // map of attributes to props. We do this after all other props and methods to avoid the possibility
  // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
  // to preserve this definition.


  descriptors.attributeChangedCallback = {
    value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
  }; // Specify attributes for which we want to reflect changes back to their corresponding
  // properties via attributeChangedCallback.

  defineProperty(HTMLBridgeElement, 'observedAttributes', {
    get() {
      return [...superObservedAttributes, ...keys(attributeToPropMap)];
    }

  });
  defineProperties(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}
const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor$1, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), []);
freeze(BaseBridgeElement);
seal(BaseBridgeElement.prototype);

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function resolveCircularModuleDependency(fn) {
  const module = fn();
  return (module === null || module === void 0 ? void 0 : module.__esModule) ? module.default : module;
}
function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const swappedTemplateMap = new WeakMap();
const swappedComponentMap = new WeakMap();
const swappedStyleMap = new WeakMap();
const activeTemplates = new WeakMap();
const activeComponents = new WeakMap();
const activeStyles = new WeakMap();

function rehydrateHotTemplate(tpl) {
  const list = activeTemplates.get(tpl);

  if (!isUndefined$1(list)) {
    list.forEach(vm => {
      if (isFalse(vm.isDirty)) {
        // forcing the vm to rehydrate in the micro-task:
        markComponentAsDirty(vm);
        scheduleRehydration(vm);
      }
    }); // resetting the Set to release the memory of those vm references
    // since they are not longer related to this template, instead
    // they will get re-associated once these instances are rehydrated.

    list.clear();
  }

  return true;
}

function rehydrateHotStyle(style) {
  const list = activeStyles.get(style);

  if (!isUndefined$1(list)) {
    list.forEach(vm => {
      // if a style definition is swapped, we must reset
      // vm's template content in the next micro-task:
      forceRehydration(vm);
    }); // resetting the Set to release the memory of those vm references
    // since they are not longer related to this style, instead
    // they will get re-associated once these instances are rehydrated.

    list.clear();
  }

  return true;
}

function rehydrateHotComponent(Ctor) {
  const list = activeComponents.get(Ctor);
  let canRefreshAllInstances = true;

  if (!isUndefined$1(list)) {
    list.forEach(vm => {
      const {
        owner
      } = vm;

      if (!isNull(owner)) {
        // if a component class definition is swapped, we must reset
        // owner's template content in the next micro-task:
        forceRehydration(owner);
      } else {
        // the hot swapping for components only work for instances of components
        // created from a template, root elements can't be swapped because we
        // don't have a way to force the creation of the element with the same state
        // of the current element.
        // Instead, we can report the problem to the caller so it can take action,
        // for example: reload the entire page.
        canRefreshAllInstances = false;
      }
    }); // resetting the Set to release the memory of those vm references
    // since they are not longer related to this constructor, instead
    // they will get re-associated once these instances are rehydrated.

    list.clear();
  }

  return canRefreshAllInstances;
}

function flattenStylesheets(stylesheets) {
  const list = [];

  for (const stylesheet of stylesheets) {
    if (!Array.isArray(stylesheet)) {
      list.push(stylesheet);
    } else {
      list.push(...flattenStylesheets(stylesheet));
    }
  }

  return list;
}

function getTemplateOrSwappedTemplate(tpl) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
      visited.add(tpl);
      tpl = swappedTemplateMap.get(tpl);
    }
  }

  return tpl;
}
function getComponentOrSwappedComponent(Ctor) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
      visited.add(Ctor);
      Ctor = swappedComponentMap.get(Ctor);
    }
  }

  return Ctor;
}
function getStyleOrSwappedStyle(style) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  if (runtimeFlags.ENABLE_HMR) {
    const visited = new Set();

    while (swappedStyleMap.has(style) && !visited.has(style)) {
      visited.add(style);
      style = swappedStyleMap.get(style);
    }
  }

  return style;
}
function setActiveVM(vm) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  if (runtimeFlags.ENABLE_HMR) {
    // tracking active component
    const Ctor = vm.def.ctor;
    let componentVMs = activeComponents.get(Ctor);

    if (isUndefined$1(componentVMs)) {
      componentVMs = new Set();
      activeComponents.set(Ctor, componentVMs);
    } // this will allow us to keep track of the hot components


    componentVMs.add(vm); // tracking active template

    const tpl = vm.cmpTemplate;

    if (tpl) {
      let templateVMs = activeTemplates.get(tpl);

      if (isUndefined$1(templateVMs)) {
        templateVMs = new Set();
        activeTemplates.set(tpl, templateVMs);
      } // this will allow us to keep track of the templates that are
      // being used by a hot component


      templateVMs.add(vm); // tracking active styles associated to template

      const stylesheets = tpl.stylesheets;

      if (!isUndefined$1(stylesheets)) {
        flattenStylesheets(stylesheets).forEach(stylesheet => {
          // this is necessary because we don't hold the list of styles
          // in the vm, we only hold the selected (already swapped template)
          // but the styles attached to the template might not be the actual
          // active ones, but the swapped versions of those.
          stylesheet = getStyleOrSwappedStyle(stylesheet);
          let stylesheetVMs = activeStyles.get(stylesheet);

          if (isUndefined$1(stylesheetVMs)) {
            stylesheetVMs = new Set();
            activeStyles.set(stylesheet, stylesheetVMs);
          } // this will allow us to keep track of the stylesheet that are
          // being used by a hot component


          stylesheetVMs.add(vm);
        });
      }
    }
  }
}
function removeActiveVM(vm) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  if (runtimeFlags.ENABLE_HMR) {
    // tracking inactive component
    const Ctor = vm.def.ctor;
    let list = activeComponents.get(Ctor);

    if (!isUndefined$1(list)) {
      // deleting the vm from the set to avoid leaking memory
      list.delete(vm);
    } // removing inactive template


    const tpl = vm.cmpTemplate;

    if (tpl) {
      list = activeTemplates.get(tpl);

      if (!isUndefined$1(list)) {
        // deleting the vm from the set to avoid leaking memory
        list.delete(vm);
      } // removing active styles associated to template


      const styles = tpl.stylesheets;

      if (!isUndefined$1(styles)) {
        flattenStylesheets(styles).forEach(style => {
          list = activeStyles.get(style);

          if (!isUndefined$1(list)) {
            // deleting the vm from the set to avoid leaking memory
            list.delete(vm);
          }
        });
      }
    }
  }
}
function swapTemplate(oldTpl, newTpl) {
  if (undefined !== 'production') {
    if (isTemplateRegistered(oldTpl) && isTemplateRegistered(newTpl)) {
      swappedTemplateMap.set(oldTpl, newTpl);
      return rehydrateHotTemplate(oldTpl);
    } else {
      throw new TypeError(`Invalid Template`);
    }
  }

  if (!runtimeFlags.ENABLE_HMR) {
    throw new Error('HMR is not enabled');
  }

  return false;
}
function swapComponent(oldComponent, newComponent) {
  if (undefined !== 'production') {
    if (isComponentConstructor(oldComponent) && isComponentConstructor(newComponent)) {
      swappedComponentMap.set(oldComponent, newComponent);
      return rehydrateHotComponent(oldComponent);
    } else {
      throw new TypeError(`Invalid Component`);
    }
  }

  if (!runtimeFlags.ENABLE_HMR) {
    throw new Error('HMR is not enabled');
  }

  return false;
}
function swapStyle(oldStyle, newStyle) {
  if (undefined !== 'production') {
    // TODO [#1887]: once the support for registering styles is implemented
    // we can add the validation of both styles around this block.
    swappedStyleMap.set(oldStyle, newStyle);
    return rehydrateHotStyle(oldStyle);
  }

  if (!runtimeFlags.ENABLE_HMR) {
    throw new Error('HMR is not enabled');
  }

  return false;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const CtorToDefMap = new WeakMap();

function getCtorProto(Ctor) {
  let proto = getPrototypeOf$1(Ctor);

  if (isNull(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
  } // covering the cases where the ref is circular in AMD


  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);

    if (undefined !== 'production') {
      if (isNull(p)) {
        throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
      }
    } // escape hatch for Locker and other abstractions to provide their own base class instead
    // of our Base class without having to leak it to user-land. If the circular function returns
    // itself, that's the signal that we have hit the end of the proto chain, which must always
    // be base.


    proto = p === proto ? LightningElement : p;
  }

  return proto;
}

function createComponentDef(Ctor) {
  const {
    shadowSupportMode: ctorShadowSupportMode,
    renderMode: ctorRenderMode
  } = Ctor;

  if (undefined !== 'production') {
    const ctorName = Ctor.name; // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
    // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);

    assert.isTrue(Ctor.constructor, `Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);

    if (!runtimeFlags.ENABLE_MIXED_SHADOW_MODE) {
      assert.isFalse('shadowSupportMode' in Ctor, `${ctorName || 'Anonymous class'} is an invalid LWC component. The shadowSupportMode static property is not available in this environment.`);
    }

    if (!isUndefined$1(ctorShadowSupportMode)) {
      assert.invariant(ctorShadowSupportMode === "any"
      /* Any */
      || ctorShadowSupportMode === "reset"
      /* Default */
      , `Invalid value for static property shadowSupportMode: '${ctorShadowSupportMode}'`);
    }

    if (!isUndefined$1(ctorRenderMode)) {
      assert.invariant(ctorRenderMode === 'light' || ctorRenderMode === 'shadow', `Invalid value for static property renderMode: '${ctorRenderMode}'. renderMode must be either 'light' or 'shadow'.`);
    }
  }

  const decoratorsMeta = getDecoratorsMeta(Ctor);
  const {
    apiFields,
    apiFieldsConfig,
    apiMethods,
    wiredFields,
    wiredMethods,
    observedFields
  } = decoratorsMeta;
  const proto = Ctor.prototype;
  let {
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  } = proto;
  const superProto = getCtorProto(Ctor);
  const superDef = superProto !== LightningElement ? getComponentInternalDef(superProto) : lightingElementDef;
  const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods));
  const props = assign(create(null), superDef.props, apiFields);
  const propsConfig = assign(create(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign(create(null), superDef.methods, apiMethods);
  const wire = assign(create(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  render = render || superDef.render;
  let shadowSupportMode = superDef.shadowSupportMode;

  if (!isUndefined$1(ctorShadowSupportMode)) {
    shadowSupportMode = ctorShadowSupportMode;
  }

  let renderMode = superDef.renderMode;

  if (!isUndefined$1(ctorRenderMode)) {
    renderMode = ctorRenderMode === 'light' ? 0
    /* Light */
    : 1
    /* Shadow */
    ;
  }

  const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
  const name = Ctor.name || superDef.name; // installing observed fields into the prototype.

  defineProperties(proto, observedFields);
  const def = {
    ctor: Ctor,
    name,
    wire,
    props,
    propsConfig,
    methods,
    bridge,
    template,
    renderMode,
    shadowSupportMode,
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    render
  };

  if (undefined !== 'production') {
    freeze(Ctor.prototype);
  }

  return def;
}
/**
 * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
 * subject to change or being removed.
 */


function isComponentConstructor(ctor) {
  if (!isFunction$1(ctor)) {
    return false;
  } // Fast path: LightningElement is part of the prototype chain of the constructor.


  if (ctor.prototype instanceof LightningElement) {
    return true;
  } // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
  // climb up the constructor prototype chain to check in case there are circular dependencies
  // to resolve.


  let current = ctor;

  do {
    if (isCircularModuleDependency(current)) {
      const circularResolved = resolveCircularModuleDependency(current); // If the circular function returns itself, that's the signal that we have hit the end
      // of the proto chain, which must always be a valid base constructor.

      if (circularResolved === current) {
        return true;
      }

      current = circularResolved;
    }

    if (current === LightningElement) {
      return true;
    }
  } while (!isNull(current) && (current = getPrototypeOf$1(current))); // Finally return false if the LightningElement is not part of the prototype chain.


  return false;
}
function getComponentInternalDef(Ctor) {
  if (undefined !== 'production') {
    Ctor = getComponentOrSwappedComponent(Ctor);
  }

  let def = CtorToDefMap.get(Ctor);

  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      const resolvedCtor = resolveCircularModuleDependency(Ctor);
      def = getComponentInternalDef(resolvedCtor); // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
      // look up the definition in cache instead of re-resolving and recreating the def.

      CtorToDefMap.set(Ctor, def);
      return def;
    }

    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }

    def = createComponentDef(Ctor);
    CtorToDefMap.set(Ctor, def);
  }

  return def;
}
const lightingElementDef = {
  ctor: LightningElement,
  name: LightningElement.name,
  props: lightningBasedDescriptors,
  propsConfig: EmptyObject,
  methods: EmptyObject,
  renderMode: 1
  /* Shadow */
  ,
  shadowSupportMode: "reset"
  /* Default */
  ,
  wire: EmptyObject,
  bridge: BaseBridgeElement,
  template: defaultEmptyTemplate,
  render: LightningElement.prototype.render
};
/**
 * EXPERIMENTAL: This function allows for the collection of internal component metadata. This API is
 * subject to change or being removed.
 */

function getComponentDef(Ctor) {
  const def = getComponentInternalDef(Ctor); // From the internal def object, we need to extract the info that is useful
  // for some external services, e.g.: Locker Service, usually, all they care
  // is about the shape of the constructor, the internals of it are not relevant
  // because they don't have a way to mess with that.

  const {
    ctor,
    name,
    props,
    propsConfig,
    methods
  } = def;
  const publicProps = {};

  for (const key in props) {
    // avoid leaking the reference to the public props descriptors
    publicProps[key] = {
      config: propsConfig[key] || 0,
      type: "any"
      /* any */
      ,
      attr: htmlPropertyToAttribute(key)
    };
  }

  const publicMethods = {};

  for (const key in methods) {
    // avoid leaking the reference to the public method descriptors
    publicMethods[key] = methods[key].value;
  }

  return {
    ctor,
    name,
    props: publicProps,
    methods: publicMethods
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function observeElementChildNodes(elm) {
  elm.$domManual$ = true;
}

function setElementShadowToken(elm, token) {
  elm.$shadowToken$ = token;
} // Set the scope token class for *.scoped.css styles


function setScopeTokenClassIfNecessary(elm, owner) {
  const {
    cmpTemplate,
    context
  } = owner;
  const token = cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.stylesheetToken;

  if (!isUndefined$1(token) && context.hasScopedStyles) {
    owner.renderer.getClassList(elm).add(token);
  }
}

function updateNodeHook(oldVnode, vnode) {
  const {
    elm,
    text,
    owner: {
      renderer
    }
  } = vnode;

  if (oldVnode.text !== text) {
    if (undefined !== 'production') {
      unlockDomMutation();
    }

    renderer.setText(elm, text);

    if (undefined !== 'production') {
      lockDomMutation();
    }
  }
}
function insertNodeHook(vnode, parentNode, referenceNode) {
  const {
    renderer
  } = vnode.owner;

  if (undefined !== 'production') {
    unlockDomMutation();
  }

  renderer.insert(vnode.elm, parentNode, referenceNode);

  if (undefined !== 'production') {
    lockDomMutation();
  }
}
function removeNodeHook(vnode, parentNode) {
  const {
    renderer
  } = vnode.owner;

  if (undefined !== 'production') {
    unlockDomMutation();
  }

  renderer.remove(vnode.elm, parentNode);

  if (undefined !== 'production') {
    lockDomMutation();
  }
}
function createElmHook(vnode) {
  modEvents.create(vnode); // Attrs need to be applied to element before props
  // IE11 will wipe out value on radio inputs if value
  // is set before type=radio.

  modAttrs.create(vnode);
  modProps.create(vnode);
  modStaticClassName.create(vnode);
  modStaticStyle.create(vnode);
  modComputedClassName.create(vnode);
  modComputedStyle.create(vnode);
}
function hydrateElmHook(vnode) {
  modEvents.create(vnode); // Attrs are already on the element.
  // modAttrs.create(vnode);

  modProps.create(vnode); // Already set.
  // modStaticClassName.create(vnode);
  // modStaticStyle.create(vnode);
  // modComputedClassName.create(vnode);
  // modComputedStyle.create(vnode);
}
function fallbackElmHook(elm, vnode) {
  const {
    owner
  } = vnode;
  setScopeTokenClassIfNecessary(elm, owner);

  if (owner.shadowMode === 1
  /* Synthetic */
  ) {
    const {
      data: {
        context
      }
    } = vnode;
    const {
      stylesheetToken
    } = owner.context;

    if (!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
    /* manual */
    ) {
      // this element will now accept any manual content inserted into it
      observeElementChildNodes(elm);
    } // when running in synthetic shadow mode, we need to set the shadowToken value
    // into each element from the template, so they can be styled accordingly.


    setElementShadowToken(elm, stylesheetToken);
  }

  if (undefined !== 'production') {
    const {
      data: {
        context
      }
    } = vnode;
    const isPortal = !isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
    /* manual */
    ;
    const isLight = owner.renderMode === 0
    /* Light */
    ;
    patchElementWithRestrictions(elm, {
      isPortal,
      isLight
    });
  }
}
function updateElmHook(oldVnode, vnode) {
  // Attrs need to be applied to element before props
  // IE11 will wipe out value on radio inputs if value
  // is set before type=radio.
  modAttrs.update(oldVnode, vnode);
  modProps.update(oldVnode, vnode);
  modComputedClassName.update(oldVnode, vnode);
  modComputedStyle.update(oldVnode, vnode);
}
function updateChildrenHook(oldVnode, vnode) {
  const {
    children,
    owner
  } = vnode;
  const fn = hasDynamicChildren(children) ? updateDynamicChildren : updateStaticChildren;
  runWithBoundaryProtection(owner, owner.owner, noop, () => {
    fn(vnode.elm, oldVnode.children, children);
  }, noop);
}
function allocateChildrenHook(vnode, vm) {
  // A component with slots will re-render because:
  // 1- There is a change of the internal state.
  // 2- There is a change on the external api (ex: slots)
  //
  // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
  // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
  // in a reused VCustomElement, there won't be any slotted children.
  // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
  //
  // In case #2, we will always get a fresh VCustomElement.
  const children = vnode.aChildren || vnode.children;
  vm.aChildren = children;
  const {
    renderMode,
    shadowMode
  } = vm;

  if (shadowMode === 1
  /* Synthetic */
  || renderMode === 0
  /* Light */
  ) {
    // slow path
    allocateInSlot(vm, children); // save the allocated children in case this vnode is reused.

    vnode.aChildren = children; // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!

    vnode.children = EmptyArray;
  }
}
function createViewModelHook(elm, vnode) {
  if (!isUndefined$1(getAssociatedVMIfPresent(elm))) {
    // There is a possibility that a custom element is registered under tagName,
    // in which case, the initialization is already carry on, and there is nothing else
    // to do here since this hook is called right after invoking `document.createElement`.
    return;
  }

  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  setScopeTokenClassIfNecessary(elm, owner);

  if (owner.shadowMode === 1
  /* Synthetic */
  ) {
    const {
      stylesheetToken
    } = owner.context; // when running in synthetic shadow mode, we need to set the shadowToken value
    // into each element from the template, so they can be styled accordingly.

    setElementShadowToken(elm, stylesheetToken);
  }

  const def = getComponentInternalDef(ctor);
  createVM(elm, def, {
    mode,
    owner,
    tagName: sel,
    renderer: owner.renderer
  });

  if (undefined !== 'production') {
    assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
  }
}
function createCustomElmHook(vnode) {
  modEvents.create(vnode); // Attrs need to be applied to element before props
  // IE11 will wipe out value on radio inputs if value
  // is set before type=radio.

  modAttrs.create(vnode);
  modProps.create(vnode);
  modStaticClassName.create(vnode);
  modStaticStyle.create(vnode);
  modComputedClassName.create(vnode);
  modComputedStyle.create(vnode);
}
function createChildrenHook(vnode) {
  const {
    elm,
    children
  } = vnode;

  for (let j = 0; j < children.length; ++j) {
    const ch = children[j];

    if (ch != null) {
      ch.hook.create(ch);
      ch.hook.insert(ch, elm, null);
    }
  }
}

function isElementNode(node) {
  // eslint-disable-next-line lwc-internal/no-global-node
  return node.nodeType === Node.ELEMENT_NODE;
}

function vnodesAndElementHaveCompatibleAttrs(vnode, elm) {
  const {
    data: {
      attrs = {}
    },
    owner: {
      renderer
    }
  } = vnode;
  let nodesAreCompatible = true; // Validate attributes, though we could always recovery from those by running the update mods.
  // Note: intentionally ONLY matching vnodes.attrs to elm.attrs, in case SSR is adding extra attributes.

  for (const [attrName, attrValue] of Object.entries(attrs)) {
    const elmAttrValue = renderer.getAttribute(elm, attrName);

    if (String(attrValue) !== elmAttrValue) {
      logError(`Mismatch hydrating element <${elm.tagName.toLowerCase()}>: attribute "${attrName}" has different values, expected "${attrValue}" but found "${elmAttrValue}"`, vnode.owner);
      nodesAreCompatible = false;
    }
  }

  return nodesAreCompatible;
}

function vnodesAndElementHaveCompatibleClass(vnode, elm) {
  const {
    data: {
      className,
      classMap
    },
    owner: {
      renderer
    }
  } = vnode;
  let nodesAreCompatible = true;
  let vnodeClassName;

  if (!isUndefined$1(className) && String(className) !== elm.className) {
    // className is used when class is bound to an expr.
    nodesAreCompatible = false;
    vnodeClassName = className;
  } else if (!isUndefined$1(classMap)) {
    // classMap is used when class is set to static value.
    const classList = renderer.getClassList(elm);
    let computedClassName = ''; // all classes from the vnode should be in the element.classList

    for (const name in classMap) {
      computedClassName += ' ' + name;

      if (!classList.contains(name)) {
        nodesAreCompatible = false;
      }
    }

    vnodeClassName = computedClassName.trim();

    if (classList.length > keys(classMap).length) {
      nodesAreCompatible = false;
    }
  }

  if (!nodesAreCompatible) {
    logError(`Mismatch hydrating element <${elm.tagName.toLowerCase()}>: attribute "class" has different values, expected "${vnodeClassName}" but found "${elm.className}"`, vnode.owner);
  }

  return nodesAreCompatible;
}

function vnodesAndElementHaveCompatibleStyle(vnode, elm) {
  const {
    data: {
      style,
      styleDecls
    },
    owner: {
      renderer
    }
  } = vnode;
  const elmStyle = renderer.getAttribute(elm, 'style') || '';
  let vnodeStyle;
  let nodesAreCompatible = true;

  if (!isUndefined$1(style) && style !== elmStyle) {
    nodesAreCompatible = false;
    vnodeStyle = style;
  } else if (!isUndefined$1(styleDecls)) {
    const parsedVnodeStyle = parseStyleText(elmStyle);
    const expectedStyle = []; // styleMap is used when style is set to static value.

    for (let i = 0, n = styleDecls.length; i < n; i++) {
      const [prop, value, important] = styleDecls[i];
      expectedStyle.push(`${prop}: ${value + (important ? ' important!' : '')}`);
      const parsedPropValue = parsedVnodeStyle[prop];

      if (isUndefined$1(parsedPropValue)) {
        nodesAreCompatible = false;
      } else if (!parsedPropValue.startsWith(value)) {
        nodesAreCompatible = false;
      } else if (important && !parsedPropValue.endsWith('!important')) {
        nodesAreCompatible = false;
      }
    }

    if (keys(parsedVnodeStyle).length > styleDecls.length) {
      nodesAreCompatible = false;
    }

    vnodeStyle = ArrayJoin.call(expectedStyle, ';');
  }

  if (!nodesAreCompatible) {
    // style is used when class is bound to an expr.
    logError(`Mismatch hydrating element <${elm.tagName.toLowerCase()}>: attribute "style" has different values, expected "${vnodeStyle}" but found "${elmStyle}".`, vnode.owner);
  }

  return nodesAreCompatible;
}

function throwHydrationError() {
  assert.fail('Server rendered elements do not match client side generated elements');
}

function hydrateChildrenHook(elmChildren, children, vm) {
  var _a, _b;

  if (undefined !== 'production') {
    const filteredVNodes = ArrayFilter.call(children, vnode => !!vnode);

    if (elmChildren.length !== filteredVNodes.length) {
      logError(`Hydration mismatch: incorrect number of rendered nodes, expected ${filteredVNodes.length} but found ${elmChildren.length}.`, vm);
      throwHydrationError();
    }
  }

  let elmCurrentChildIdx = 0;

  for (let j = 0, n = children.length; j < n; j++) {
    const ch = children[j];

    if (ch != null) {
      const childNode = elmChildren[elmCurrentChildIdx];

      if (undefined !== 'production') {
        // VComments and VTexts validation is handled in their hooks
        if (isElementNode(childNode)) {
          if (((_a = ch.sel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== childNode.tagName.toLowerCase()) {
            logError(`Hydration mismatch: expecting element with tag "${(_b = ch.sel) === null || _b === void 0 ? void 0 : _b.toLowerCase()}" but found "${childNode.tagName.toLowerCase()}".`, vm);
            throwHydrationError();
          } // Note: props are not yet set


          const hasIncompatibleAttrs = vnodesAndElementHaveCompatibleAttrs(ch, childNode);
          const hasIncompatibleClass = vnodesAndElementHaveCompatibleClass(ch, childNode);
          const hasIncompatibleStyle = vnodesAndElementHaveCompatibleStyle(ch, childNode);
          const isVNodeAndElementCompatible = hasIncompatibleAttrs && hasIncompatibleClass && hasIncompatibleStyle;

          if (!isVNodeAndElementCompatible) {
            throwHydrationError();
          }
        }
      }

      ch.hook.hydrate(ch, childNode);
      elmCurrentChildIdx++;
    }
  }
}
function updateCustomElmHook(oldVnode, vnode) {
  // Attrs need to be applied to element before props
  // IE11 will wipe out value on radio inputs if value
  // is set before type=radio.
  modAttrs.update(oldVnode, vnode);
  modProps.update(oldVnode, vnode);
  modComputedClassName.update(oldVnode, vnode);
  modComputedStyle.update(oldVnode, vnode);
}
function removeElmHook(vnode) {
  // this method only needs to search on child vnodes from template
  // to trigger the remove hook just in case some of those children
  // are custom elements.
  const {
    children,
    elm
  } = vnode;

  for (let j = 0, len = children.length; j < len; ++j) {
    const ch = children[j];

    if (!isNull(ch)) {
      ch.hook.remove(ch, elm);
    }
  }
} // Using a WeakMap instead of a WeakSet because this one works in IE11 :(

const FromIteration = new WeakMap(); // dynamic children means it was generated by an iteration
// in a template, and will require a more complex diffing algo.

function markAsDynamicChildren(children) {
  FromIteration.set(children, 1);
}
function hasDynamicChildren(children) {
  return FromIteration.has(children);
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getUpgradableConstructor(tagName, renderer) {
  // Should never get a tag with upper case letter at this point, the compiler should
  // produce only tags with lowercase letters
  // But, for backwards compatibility, we will lower case the tagName
  tagName = tagName.toLowerCase();
  let CE = renderer.getCustomElement(tagName);

  if (!isUndefined$1(CE)) {
    return CE;
  }
  /**
   * LWC Upgradable Element reference to an element that was created
   * via the scoped registry mechanism, and that is ready to be upgraded.
   */


  CE = class LWCUpgradableElement extends renderer.HTMLElement {
    constructor(upgradeCallback) {
      super();

      if (isFunction$1(upgradeCallback)) {
        upgradeCallback(this); // nothing to do with the result for now
      }
    }

  };
  renderer.defineCustomElement(tagName, CE);
  return CE;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const SymbolIterator = Symbol.iterator;
const TextHook = {
  create: vnode => {
    const {
      owner
    } = vnode;
    const {
      renderer
    } = owner;
    const elm = renderer.createText(vnode.text);
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
  },
  update: updateNodeHook,
  insert: insertNodeHook,
  move: insertNodeHook,
  remove: removeNodeHook,
  hydrate: (vNode, node) => {
    var _a;

    if (undefined !== 'production') {
      // eslint-disable-next-line lwc-internal/no-global-node
      if (node.nodeType !== Node.TEXT_NODE) {
        logError('Hydration mismatch: incorrect node type received', vNode.owner);
        assert.fail('Hydration mismatch: incorrect node type received.');
      }

      if (node.nodeValue !== vNode.text) {
        logWarn('Hydration mismatch: text values do not match, will recover from the difference', vNode.owner);
      }
    } // always set the text value to the one from the vnode.


    node.nodeValue = (_a = vNode.text) !== null && _a !== void 0 ? _a : null;
    vNode.elm = node;
  }
};
const CommentHook = {
  create: vnode => {
    const {
      owner,
      text
    } = vnode;
    const {
      renderer
    } = owner;
    const elm = renderer.createComment(text);
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
  },
  update: updateNodeHook,
  insert: insertNodeHook,
  move: insertNodeHook,
  remove: removeNodeHook,
  hydrate: (vNode, node) => {
    var _a;

    if (undefined !== 'production') {
      // eslint-disable-next-line lwc-internal/no-global-node
      if (node.nodeType !== Node.COMMENT_NODE) {
        logError('Hydration mismatch: incorrect node type received', vNode.owner);
        assert.fail('Hydration mismatch: incorrect node type received.');
      }

      if (node.nodeValue !== vNode.text) {
        logWarn('Hydration mismatch: comment values do not match, will recover from the difference', vNode.owner);
      }
    } // always set the text value to the one from the vnode.


    node.nodeValue = (_a = vNode.text) !== null && _a !== void 0 ? _a : null;
    vNode.elm = node;
  }
}; // insert is called after update, which is used somewhere else (via a module)
// to mark the vm as inserted, that means we cannot use update as the main channel
// to rehydrate when dirty, because sometimes the element is not inserted just yet,
// which breaks some invariants. For that reason, we have the following for any
// Custom Element that is inserted via a template.

const ElementHook = {
  create: vnode => {
    const {
      sel,
      owner,
      data: {
        svg
      }
    } = vnode;
    const {
      renderer
    } = owner;
    const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
    const elm = renderer.createElement(sel, namespace);
    linkNodeToShadow(elm, owner);
    fallbackElmHook(elm, vnode);
    vnode.elm = elm;
    createElmHook(vnode);
  },
  update: (oldVnode, vnode) => {
    updateElmHook(oldVnode, vnode);
    updateChildrenHook(oldVnode, vnode);
  },
  insert: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
    createChildrenHook(vnode);
  },
  move: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
  },
  remove: (vnode, parentNode) => {
    removeNodeHook(vnode, parentNode);
    removeElmHook(vnode);
  },
  hydrate: (vnode, node) => {
    const elm = node;
    vnode.elm = elm;
    const {
      context
    } = vnode.data;
    const isDomManual = Boolean(!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual"
    /* manual */
    );

    if (isDomManual) {
      // it may be that this element has lwc:inner-html, we need to diff and in case are the same,
      // remove the innerHTML from props so it reuses the existing dom elements.
      const {
        props
      } = vnode.data;

      if (!isUndefined$1(props) && !isUndefined$1(props.innerHTML)) {
        if (elm.innerHTML === props.innerHTML) {
          delete props.innerHTML;
        } else {
          logWarn(`Mismatch hydrating element <${elm.tagName.toLowerCase()}>: innerHTML values do not match for element, will recover from the difference`, vnode.owner);
        }
      }
    }

    hydrateElmHook(vnode);

    if (!isDomManual) {
      hydrateChildrenHook(vnode.elm.childNodes, vnode.children, vnode.owner);
    }
  }
};
const CustomElementHook = {
  create: vnode => {
    const {
      sel,
      owner
    } = vnode;
    const {
      renderer
    } = owner;
    const UpgradableConstructor = getUpgradableConstructor(sel, renderer);
    /**
     * Note: if the upgradable constructor does not expect, or throw when we new it
     * with a callback as the first argument, we could implement a more advanced
     * mechanism that only passes that argument if the constructor is known to be
     * an upgradable custom element.
     */

    const elm = new UpgradableConstructor(elm => {
      // the custom element from the registry is expecting an upgrade callback
      createViewModelHook(elm, vnode);
    });
    linkNodeToShadow(elm, owner);
    vnode.elm = elm;
    const vm = getAssociatedVMIfPresent(elm);

    if (vm) {
      allocateChildrenHook(vnode, vm);
    } else if (vnode.ctor !== UpgradableConstructor) {
      throw new TypeError(`Incorrect Component Constructor`);
    }

    createCustomElmHook(vnode);
  },
  update: (oldVnode, vnode) => {
    updateCustomElmHook(oldVnode, vnode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
      allocateChildrenHook(vnode, vm);
    } // in fallback mode, the children will be always empty, so, nothing
    // will happen, but in native, it does allocate the light dom


    updateChildrenHook(oldVnode, vnode);

    if (vm) {
      if (undefined !== 'production') {
        assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
      } // this will probably update the shadowRoot, but only if the vm is in a dirty state
      // this is important to preserve the top to bottom synchronous rendering phase.


      rerenderVM(vm);
    }
  },
  insert: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      if (undefined !== 'production') {
        assert.isTrue(vm.state === 0
        /* created */
        , `${vm} cannot be recycled.`);
      }

      runConnectedCallback(vm);
    }

    createChildrenHook(vnode);

    if (vm) {
      appendVM(vm);
    }
  },
  move: (vnode, parentNode, referenceNode) => {
    insertNodeHook(vnode, parentNode, referenceNode);
  },
  remove: (vnode, parentNode) => {
    removeNodeHook(vnode, parentNode);
    const vm = getAssociatedVMIfPresent(vnode.elm);

    if (vm) {
      // for custom elements we don't have to go recursively because the removeVM routine
      // will take care of disconnecting any child VM attached to its shadow as well.
      removeVM(vm);
    }
  },
  hydrate: (vnode, elm) => {
    // the element is created, but the vm is not
    const {
      sel,
      mode,
      ctor,
      owner
    } = vnode;
    const def = getComponentInternalDef(ctor);
    createVM(elm, def, {
      mode,
      owner,
      tagName: sel,
      renderer: owner.renderer
    });
    vnode.elm = elm;
    const vm = getAssociatedVM(elm);
    allocateChildrenHook(vnode, vm);
    hydrateElmHook(vnode); // Insert hook section:

    if (undefined !== 'production') {
      assert.isTrue(vm.state === 0
      /* created */
      , `${vm} cannot be recycled.`);
    }

    runConnectedCallback(vm);

    if (vm.renderMode !== 0
    /* Light */
    ) {
      // VM is not rendering in Light DOM, we can proceed and hydrate the slotted content.
      // Note: for Light DOM, this is handled while hydrating the VM
      hydrateChildrenHook(vnode.elm.childNodes, vnode.children, vm);
    }

    hydrateVM(vm);
  }
};

function linkNodeToShadow(elm, owner) {
  const {
    renderer,
    renderMode,
    shadowMode
  } = owner; // TODO [#1164]: this should eventually be done by the polyfill directly

  if (renderer.isSyntheticShadowDefined) {
    if (shadowMode === 1
    /* Synthetic */
    || renderMode === 0
    /* Light */
    ) {
      elm[KEY__SHADOW_RESOLVER] = getRenderRoot(owner)[KEY__SHADOW_RESOLVER];
    }
  }
}

function addVNodeToChildLWC(vnode) {
  ArrayPush$1.call(getVMBeingRendered().velements, vnode);
} // [h]tml node


function h(sel, data, children) {
  const vmBeingRendered = getVMBeingRendered();

  if (undefined !== 'production') {
    assert.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
    assert.isTrue(isObject(data), `h() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
    assert.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`); // checking reserved internal data properties

    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);

    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }

    forEach.call(children, childVnode => {
      if (childVnode != null) {
        assert.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
      }
    });
  }

  let text, elm;
  const {
    key
  } = data;
  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: ElementHook,
    owner: vmBeingRendered
  };
} // [t]ab[i]ndex function


function ti(value) {
  // if value is greater than 0, we normalize to 0
  // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
  // If value is less than -1, we don't care
  const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));

  if (undefined !== 'production') {
    const vmBeingRendered = getVMBeingRendered();

    if (shouldNormalize) {
      logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
    }
  }

  return shouldNormalize ? 0 : value;
} // [s]lot element node


function s(slotName, data, children, slotset) {
  if (undefined !== 'production') {
    assert.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
    assert.isTrue(isObject(data), `s() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
  }

  if (!isUndefined$1(slotset) && !isUndefined$1(slotset[slotName]) && slotset[slotName].length !== 0) {
    children = slotset[slotName];
  }

  const vmBeingRendered = getVMBeingRendered();
  const {
    renderMode,
    shadowMode
  } = vmBeingRendered;

  if (renderMode === 0
  /* Light */
  ) {
    sc(children);
    return children;
  }

  if (shadowMode === 1
  /* Synthetic */
  ) {
    // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
    sc(children);
  }

  return h('slot', data, children);
} // [c]ustom element node


function c(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();

  if (undefined !== 'production') {
    assert.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
    assert.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
    assert.isTrue(isObject(data), `c() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `c() 4nd argument data must be an array.`); // checking reserved internal data properties

    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);

    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }

    if (arguments.length === 4) {
      forEach.call(children, childVnode => {
        if (childVnode != null) {
          assert.isTrue(childVnode && 'sel' in childVnode && 'data' in childVnode && 'children' in childVnode && 'text' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }
  }

  const {
    key
  } = data;
  let text, elm;
  const vnode = {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: CustomElementHook,
    ctor: Ctor,
    owner: vmBeingRendered,
    mode: 'open' // TODO [#1294]: this should be defined in Ctor

  };
  addVNodeToChildLWC(vnode);
  return vnode;
} // [i]terable node


function i(iterable, factory) {
  const list = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic

  sc(list);
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(iterable) || iterable === null) {
    if (undefined !== 'production') {
      logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
    }

    return list;
  }

  if (undefined !== 'production') {
    assert.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
  }

  const iterator = iterable[SymbolIterator]();

  if (undefined !== 'production') {
    assert.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
  }

  let next = iterator.next();
  let j = 0;
  let {
    value,
    done: last
  } = next;
  let keyMap;
  let iterationError;

  if (undefined !== 'production') {
    keyMap = create(null);
  }

  while (last === false) {
    // implementing a look-back-approach because we need to know if the element is the last
    next = iterator.next();
    last = next.done; // template factory logic based on the previous collected value

    const vnode = factory(value, j, j === 0, last === true);

    if (isArray$1(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      ArrayPush$1.call(list, vnode);
    }

    if (undefined !== 'production') {
      const vnodes = isArray$1(vnode) ? vnode : [vnode];
      forEach.call(vnodes, childVnode => {
        if (!isNull(childVnode) && isObject(childVnode) && !isUndefined$1(childVnode.sel)) {
          const {
            key
          } = childVnode;

          if (isString(key) || isNumber(key)) {
            if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
              iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
            }

            keyMap[key] = 1;
          } else if (isUndefined$1(iterationError)) {
            iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
          }
        }
      });
    } // preparing next value


    j += 1;
    value = next.value;
  }

  if (undefined !== 'production') {
    if (!isUndefined$1(iterationError)) {
      logError(iterationError, vmBeingRendered);
    }
  }

  return list;
}
/**
 * [f]lattening
 */


function f(items) {
  if (undefined !== 'production') {
    assert.isTrue(isArray$1(items), 'flattening api can only work with arrays.');
  }

  const len = items.length;
  const flattened = []; // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic

  sc(flattened);

  for (let j = 0; j < len; j += 1) {
    const item = items[j];

    if (isArray$1(item)) {
      ArrayPush$1.apply(flattened, item);
    } else {
      ArrayPush$1.call(flattened, item);
    }
  }

  return flattened;
} // [t]ext node


function t(text) {
  const data = EmptyObject;
  let sel, children, key, elm;
  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: TextHook,
    owner: getVMBeingRendered()
  };
} // [co]mment node


function co(text) {
  const data = EmptyObject;
  let sel, children, key, elm;
  return {
    sel,
    data,
    children,
    text,
    elm,
    key,
    hook: CommentHook,
    owner: getVMBeingRendered()
  };
} // [d]ynamic text


function d(value) {
  return value == null ? '' : String(value);
} // [b]ind function


function b(fn) {
  const vmBeingRendered = getVMBeingRendered();

  if (isNull(vmBeingRendered)) {
    throw new Error();
  }

  const vm = vmBeingRendered;
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
} // [k]ey function


function k(compilerKey, obj) {
  switch (typeof obj) {
    case 'number':
    case 'string':
      return compilerKey + ':' + obj;

    case 'object':
      if (undefined !== 'production') {
        assert.fail(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
      }

  }
} // [g]lobal [id] function


function gid(id) {
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(id) || id === '') {
    if (undefined !== 'production') {
      logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
    }

    return id;
  } // We remove attributes when they are assigned a value of null


  if (isNull(id)) {
    return null;
  }

  const {
    idx,
    shadowMode
  } = vmBeingRendered;

  if (shadowMode === 1
  /* Synthetic */
  ) {
    return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
  }

  return id;
} // [f]ragment [id] function


function fid(url) {
  const vmBeingRendered = getVMBeingRendered();

  if (isUndefined$1(url) || url === '') {
    if (undefined !== 'production') {
      if (isUndefined$1(url)) {
        logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
      }
    }

    return url;
  } // We remove attributes when they are assigned a value of null


  if (isNull(url)) {
    return null;
  }

  const {
    idx,
    shadowMode
  } = vmBeingRendered; // Apply transformation only for fragment-only-urls, and only in shadow DOM

  if (shadowMode === 1
  /* Synthetic */
  && /^#/.test(url)) {
    return `${url}-${idx}`;
  }

  return url;
}
/**
 * Map to store an index value assigned to any dynamic component reference ingested
 * by dc() api. This allows us to generate a unique unique per template per dynamic
 * component reference to avoid diffing algo mismatches.
 */


const DynamicImportedComponentMap = new Map();
let dynamicImportedComponentCounter = 0;
/**
 * create a dynamic component via `<x-foo lwc:dynamic={Ctor}>`
 */

function dc(sel, Ctor, data, children) {
  if (undefined !== 'production') {
    assert.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
    assert.isTrue(isObject(data), `dc() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 4nd argument data must be an array.`);
  } // null or undefined values should produce a null value in the VNodes


  if (Ctor == null) {
    return null;
  }

  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
  }

  let idx = DynamicImportedComponentMap.get(Ctor);

  if (isUndefined$1(idx)) {
    idx = dynamicImportedComponentCounter++;
    DynamicImportedComponentMap.set(Ctor, idx);
  } // the new vnode key is a mix of idx and compiler key, this is required by the diffing algo
  // to identify different constructors as vnodes with different keys to avoid reusing the
  // element used for previous constructors.


  data.key = `dc:${idx}:${data.key}`;
  return c(sel, Ctor, data, children);
}
/**
 * slow children collection marking mechanism. this API allows the compiler to signal
 * to the engine that a particular collection of children must be diffed using the slow
 * algo based on keys due to the nature of the list. E.g.:
 *
 *   - slot element's children: the content of the slot has to be dynamic when in synthetic
 *                              shadow mode because the `vnode.children` might be the slotted
 *                              content vs default content, in which case the size and the
 *                              keys are not matching.
 *   - children that contain dynamic components
 *   - children that are produced by iteration
 *
 */


function sc(vnodes) {
  if (undefined !== 'production') {
    assert.isTrue(isArray$1(vnodes), 'sc() api can only work with arrays.');
  } // We have to mark the vnodes collection as dynamic so we can later on
  // choose to use the snabbdom virtual dom diffing algo instead of our
  // static dummy algo.


  markAsDynamicChildren(vnodes);
  return vnodes;
}
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize HTML content. This hook process the content passed via the template to
 * lwc:inner-html directive.
 * It is meant to be overridden with setSanitizeHtmlContentHook, it throws an error by default.
 */


let sanitizeHtmlContentHook = () => {
  // locker-service patches this function during runtime to sanitize HTML content.
  throw new Error('sanitizeHtmlContent hook must be implemented.');
};
/**
 * Sets the sanitizeHtmlContentHook.
 */


function setSanitizeHtmlContentHook(newHookImpl) {
  sanitizeHtmlContentHook = newHookImpl;
} // [s]anitize [h]tml [c]ontent

function shc(content) {
  return sanitizeHtmlContentHook(content);
}

const api = freeze({
  s,
  h,
  c,
  i,
  f,
  t,
  d,
  b,
  k,
  co,
  dc,
  ti,
  gid,
  fid,
  shc
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function makeHostToken(token) {
  return `${token}-host`;
}

function createInlineStyleVNode(content) {
  return api.h('style', {
    key: 'style',
    attrs: {
      type: 'text/css'
    }
  }, [api.t(content)]);
}

function updateStylesheetToken(vm, template) {
  const {
    elm,
    context,
    renderer,
    renderMode,
    shadowMode
  } = vm;
  const {
    stylesheets: newStylesheets,
    stylesheetToken: newStylesheetToken
  } = template;
  const isSyntheticShadow = renderMode === 1
  /* Shadow */
  && shadowMode === 1
  /* Synthetic */
  ;
  const {
    hasScopedStyles
  } = context;
  let newToken;
  let newHasTokenInClass;
  let newHasTokenInAttribute; // Reset the styling token applied to the host element.

  const {
    stylesheetToken: oldToken,
    hasTokenInClass: oldHasTokenInClass,
    hasTokenInAttribute: oldHasTokenInAttribute
  } = context;

  if (oldHasTokenInClass) {
    renderer.getClassList(elm).remove(makeHostToken(oldToken));
  }

  if (oldHasTokenInAttribute) {
    renderer.removeAttribute(elm, makeHostToken(oldToken));
  } // Apply the new template styling token to the host element, if the new template has any
  // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.


  if (!isUndefined$1(newStylesheets) && newStylesheets.length !== 0) {
    newToken = newStylesheetToken;
  } // Set the new styling token on the host element


  if (!isUndefined$1(newToken)) {
    if (hasScopedStyles) {
      renderer.getClassList(elm).add(makeHostToken(newToken));
      newHasTokenInClass = true;
    }

    if (isSyntheticShadow) {
      renderer.setAttribute(elm, makeHostToken(newToken), '');
      newHasTokenInAttribute = true;
    }
  } // Update the styling tokens present on the context object.


  context.stylesheetToken = newToken;
  context.hasTokenInClass = newHasTokenInClass;
  context.hasTokenInAttribute = newHasTokenInAttribute;
}

function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
  const content = [];

  for (let i = 0; i < stylesheets.length; i++) {
    let stylesheet = stylesheets[i];

    if (isArray$1(stylesheet)) {
      ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
    } else {
      if (undefined !== 'production') {
        // in dev-mode, we support hot swapping of stylesheet, which means that
        // the component instance might be attempting to use an old version of
        // the stylesheet, while internally, we have a replacement for it.
        stylesheet = getStyleOrSwappedStyle(stylesheet);
      } // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
      // native shadow DOM. Synthetic shadow DOM never uses `:host`.


      const isScopedCss = stylesheet[KEY__SCOPED_CSS];
      const useActualHostSelector = vm.renderMode === 0
      /* Light */
      ? !isScopedCss : vm.shadowMode === 0
      /* Native */
      ; // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.

      const scopeToken = isScopedCss || vm.shadowMode === 1
      /* Synthetic */
      && vm.renderMode === 1
      /* Shadow */
      ? stylesheetToken : undefined;
      ArrayPush$1.call(content, stylesheet(useActualHostSelector, scopeToken));
    }
  }

  return content;
}

function getStylesheetsContent(vm, template) {
  const {
    stylesheets,
    stylesheetToken
  } = template;
  let content = [];

  if (!isUndefined$1(stylesheets) && stylesheets.length !== 0) {
    content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
  }

  return content;
} // It might be worth caching this to avoid doing the lookup repeatedly, but
// perf testing has not shown it to be a huge improvement yet:
// https://github.com/salesforce/lwc/pull/2460#discussion_r691208892

function getNearestNativeShadowComponent(vm) {
  let owner = vm;

  while (!isNull(owner)) {
    if (owner.renderMode === 1
    /* Shadow */
    && owner.shadowMode === 0
    /* Native */
    ) {
      return owner;
    }

    owner = owner.owner;
  }

  return owner;
}

function createStylesheet(vm, stylesheets) {
  const {
    renderer,
    renderMode,
    shadowMode
  } = vm;

  if (renderMode === 1
  /* Shadow */
  && shadowMode === 1
  /* Synthetic */
  ) {
    for (let i = 0; i < stylesheets.length; i++) {
      renderer.insertGlobalStylesheet(stylesheets[i]);
    }
  } else if (renderer.ssr || renderer.isHydrating()) {
    // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
    //       This works in the client, because the stylesheets are created, and cached in the VM
    //       the first time the VM renders.
    // native shadow or light DOM, SSR
    const combinedStylesheetContent = ArrayJoin.call(stylesheets, '\n');
    return createInlineStyleVNode(combinedStylesheetContent);
  } else {
    // native shadow or light DOM, DOM renderer
    const root = getNearestNativeShadowComponent(vm);
    const isGlobal = isNull(root);

    for (let i = 0; i < stylesheets.length; i++) {
      if (isGlobal) {
        renderer.insertGlobalStylesheet(stylesheets[i]);
      } else {
        // local level
        renderer.insertStylesheet(stylesheets[i], root.cmpRoot);
      }
    }
  }

  return null;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const operationIdNameMapping = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback', 'lwc-hydrate', 'lwc-rehydrate']; // Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
// JSDom (used in Jest) for example doesn't implement the UserTiming APIs.

const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
const start = !isUserTimingSupported ? noop : markName => {
  performance.mark(markName);
};
const end = !isUserTimingSupported ? noop : (measureName, markName) => {
  performance.measure(measureName, markName); // Clear the created marks and measure to avoid filling the performance entries buffer.
  // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.

  performance.clearMarks(markName);
  performance.clearMeasures(measureName);
};

function getOperationName(opId) {
  return operationIdNameMapping[opId];
}

function getMeasureName(opId, vm) {
  return `${getComponentTag(vm)} - ${getOperationName(opId)}`;
}

function getMarkName(opId, vm) {
  // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
  // the right measures for components that are recursive.
  return `${getMeasureName(opId, vm)} - ${vm.idx}`;
}
/** Indicates if operations should be logged via the User Timing API. */


const isMeasureEnabled = undefined !== 'production';
/** Indicates if operations should be logged by the profiler. */

let isProfilerEnabled = false;
/** The currently assigned profiler dispatcher. */

let currentDispatcher = noop;
const profilerControl = {
  enableProfiler() {
    isProfilerEnabled = true;
  },

  disableProfiler() {
    isProfilerEnabled = false;
  },

  attachDispatcher(dispatcher) {
    currentDispatcher = dispatcher;
    this.enableProfiler();
  },

  detachDispatcher() {
    const dispatcher = currentDispatcher;
    currentDispatcher = noop;
    this.disableProfiler();
    return dispatcher;
  }

};
function logOperationStart(opId, vm) {
  if (isMeasureEnabled) {
    const markName = getMarkName(opId, vm);
    start(markName);
  }

  if (isProfilerEnabled) {
    currentDispatcher(opId, 0
    /* Start */
    , vm.tagName, vm.idx);
  }
}
function logOperationEnd(opId, vm) {
  if (isMeasureEnabled) {
    const markName = getMarkName(opId, vm);
    const measureName = getMeasureName(opId, vm);
    end(measureName, markName);
  }

  if (isProfilerEnabled) {
    currentDispatcher(opId, 1
    /* Stop */
    , vm.tagName, vm.idx);
  }
}
function logGlobalOperationStart(opId, vm) {
  if (isMeasureEnabled) {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    start(markName);
  }

  if (isProfilerEnabled) {
    currentDispatcher(opId, 0
    /* Start */
    , vm === null || vm === void 0 ? void 0 : vm.tagName, vm === null || vm === void 0 ? void 0 : vm.idx);
  }
}
function logGlobalOperationEnd(opId, vm) {
  if (isMeasureEnabled) {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    end(opName, markName);
  }

  if (isProfilerEnabled) {
    currentDispatcher(opId, 1
    /* Stop */
    , vm === null || vm === void 0 ? void 0 : vm.tagName, vm === null || vm === void 0 ? void 0 : vm.idx);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isUpdatingTemplate = false;
let vmBeingRendered = null;
function getVMBeingRendered() {
  return vmBeingRendered;
}
function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}

function validateSlots(vm, html) {
  if (undefined === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }

  const {
    cmpSlots
  } = vm;
  const {
    slots = EmptyArray
  } = html;

  for (const slotName in cmpSlots) {
    // eslint-disable-next-line lwc-internal/no-production-assert
    assert.isTrue(isArray$1(cmpSlots[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots[slotName])} for slot "${slotName}" in ${vm}.`);

    if (slotName !== '' && ArrayIndexOf.call(slots, slotName) === -1) {
      // TODO [#1297]: this should never really happen because the compiler should always validate
      // eslint-disable-next-line lwc-internal/no-production-assert
      logError(`Ignoring unknown provided slot name "${slotName}" in ${vm}. Check for a typo on the slot attribute.`, vm);
    }
  }
}

function validateLightDomTemplate(template, vm) {
  if (template === defaultEmptyTemplate) return;

  if (vm.renderMode === 0
  /* Light */
  ) {
    assert.isTrue(template.renderMode === 'light', `Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${getComponentTag(vm)}.`);
  } else {
    assert.isTrue(isUndefined$1(template.renderMode), `Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${getComponentTag(vm)} or set it to 'lwc:render-mode="shadow"`);
  }
}

function evaluateTemplate(vm, html) {
  if (undefined !== 'production') {
    assert.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`); // in dev-mode, we support hot swapping of templates, which means that
    // the component instance might be attempting to use an old version of
    // the template, while internally, we have a replacement for it.

    html = getTemplateOrSwappedTemplate(html);
  }

  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    // pre
    vmBeingRendered = vm;
    logOperationStart(1
    /* Render */
    , vm);
  }, () => {
    // job
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro
    } = vm;
    tro.observe(() => {
      // Reset the cache memoizer for template when needed.
      if (html !== cmpTemplate) {
        if (undefined !== 'production') {
          validateLightDomTemplate(html, vm);
        } // Perf opt: do not reset the shadow root during the first rendering (there is
        // nothing to reset).


        if (!isNull(cmpTemplate)) {
          // It is important to reset the content to avoid reusing similar elements
          // generated from a different template, because they could have similar IDs,
          // and snabbdom just rely on the IDs.
          resetComponentRoot(vm);
        } // Check that the template was built by the compiler.


        if (!isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
        }

        vm.cmpTemplate = html; // Create a brand new template cache for the swapped templated.

        context.tplCache = create(null); // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.

        context.hasScopedStyles = computeHasScopedStyles(html); // Update the scoping token on the host element.

        updateStylesheetToken(vm, html); // Evaluate, create stylesheet and cache the produced VNode for future
        // re-rendering.

        const stylesheetsContent = getStylesheetsContent(vm, html);
        context.styleVNode = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
      }

      if (undefined !== 'production') {
        // validating slots in every rendering since the allocated content might change over time
        validateSlots(vm, html); // add the VM to the list of host VMs that can be re-rendered if html is swapped

        setActiveVM(vm);
      } // right before producing the vnodes, we clear up all internal references
      // to custom elements from the template.


      vm.velements = []; // Set the global flag that template is being updated

      isUpdatingTemplate = true;
      vnodes = html.call(undefined, api, component, cmpSlots, context.tplCache);
      const {
        styleVNode
      } = context;

      if (!isNull(styleVNode)) {
        ArrayUnshift.call(vnodes, styleVNode);
      }
    });
  }, () => {
    // post
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;
    logOperationEnd(1
    /* Render */
    , vm);
  });

  if (undefined !== 'production') {
    assert.invariant(isArray$1(vnodes), `Compiler should produce html functions that always return an array.`);
  }

  return vnodes;
}
function computeHasScopedStyles(template) {
  const {
    stylesheets
  } = template;

  if (!isUndefined$1(stylesheets)) {
    for (let i = 0; i < stylesheets.length; i++) {
      if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
        return true;
      }
    }
  }

  return false;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function addErrorComponentStack(vm, error) {
  if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
    const wcStack = getErrorComponentStack(vm);
    defineProperty(error, 'wcStack', {
      get() {
        return wcStack;
      }

    });
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isInvokingRender = false;
let vmBeingConstructed = null;
function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}
function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    callHook(component, fn, args);
  }, noop);
}
function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;
  logOperationStart(0
  /* Constructor */
  , vm);
  vmBeingConstructed = vm;
  /**
   * Constructors don't need to be wrapped with a boundary because for root elements
   * it should throw, while elements from template are already wrapped by a boundary
   * associated to the diffing algo.
   */

  try {
    // job
    const result = new Ctor(); // Check indirectly if the constructor result is an instance of LightningElement. Using
    // the "instanceof" operator would not work here since Locker Service provides its own
    // implementation of LightningElement, so we indirectly check if the base constructor is
    // invoked by accessing the component on the vm.

    if (vmBeingConstructed.component !== result) {
      throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
    }
  } catch (e) {
    error = Object(e);
  } finally {
    logOperationEnd(0
    /* Constructor */
    , vm);
    vmBeingConstructed = vmBeingConstructedInception;

    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error); // re-throwing the original error annotated after restoring the context

      throw error; // eslint-disable-line no-unsafe-finally
    }
  }
}
function invokeComponentRenderMethod(vm) {
  const {
    def: {
      render
    },
    callHook,
    component,
    owner
  } = vm;
  const isRenderBeingInvokedInception = isInvokingRender;
  const vmBeingRenderedInception = getVMBeingRendered();
  let html;
  let renderInvocationSuccessful = false;
  runWithBoundaryProtection(vm, owner, () => {
    // pre
    isInvokingRender = true;
    setVMBeingRendered(vm);
  }, () => {
    // job
    vm.tro.observe(() => {
      html = callHook(component, render);
      renderInvocationSuccessful = true;
    });
  }, () => {
    // post
    isInvokingRender = isRenderBeingInvokedInception;
    setVMBeingRendered(vmBeingRenderedInception);
  }); // If render() invocation failed, process errorCallback in boundary and return an empty template

  return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
}
function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    // job
    if (undefined !== 'production') {
      assert.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
    }

    callHook(thisValue, fn, [event]);
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const signedTemplateMap = new Map();
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */

function registerComponent(Ctor, {
  tmpl
}) {
  signedTemplateMap.set(Ctor, tmpl); // chaining this method as a way to wrap existing assignment of component constructor easily,
  // without too much transformation

  return Ctor;
}
function getComponentRegisteredTemplate(Ctor) {
  return signedTemplateMap.get(Ctor);
}
function getTemplateReactiveObserver(vm) {
  return new ReactiveObserver(() => {
    const {
      isDirty
    } = vm;

    if (isFalse(isDirty)) {
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  });
}
function renderComponent(vm) {
  if (undefined !== 'production') {
    assert.invariant(vm.isDirty, `${vm} is not dirty.`);
  }

  vm.tro.reset();
  const vnodes = invokeComponentRenderMethod(vm);
  vm.isDirty = false;
  vm.isScheduled = false;
  return vnodes;
}
function markComponentAsDirty(vm) {
  if (undefined !== 'production') {
    const vmBeingRendered = getVMBeingRendered();
    assert.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
    assert.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
    assert.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
  }

  vm.isDirty = true;
}
const cmpEventListenerMap = new WeakMap();
function getWrappedComponentsListener(vm, listener) {
  if (!isFunction$1(listener)) {
    throw new TypeError(); // avoiding problems with non-valid listeners
  }

  let wrappedListener = cmpEventListenerMap.get(listener);

  if (isUndefined$1(wrappedListener)) {
    wrappedListener = function (event) {
      invokeEventListener(vm, listener, undefined, event);
    };

    cmpEventListenerMap.set(listener, wrappedListener);
  }

  return wrappedListener;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const Services = create(null);
const hooks = ['rendered', 'connected', 'disconnected'];
/**
 * EXPERIMENTAL: This function allows for the registration of "services"
 * in LWC by exposing hooks into the component life-cycle. This API is
 * subject to change or being removed.
 */

function register(service) {
  if (undefined !== 'production') {
    assert.isTrue(isObject(service), `Invalid service declaration, ${service}: service must be an object`);
  }

  for (let i = 0; i < hooks.length; ++i) {
    const hookName = hooks[i];

    if (hookName in service) {
      let l = Services[hookName];

      if (isUndefined$1(l)) {
        Services[hookName] = l = [];
      }

      ArrayPush$1.call(l, service[hookName]);
    }
  }
}
function invokeServiceHook(vm, cbs) {
  if (undefined !== 'production') {
    assert.isTrue(isArray$1(cbs) && cbs.length > 0, `Optimize invokeServiceHook() to be invoked only when needed`);
  }

  const {
    component,
    def,
    context
  } = vm;

  for (let i = 0, len = cbs.length; i < len; ++i) {
    cbs[i].call(undefined, component, {}, def, context);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let idx = 0;
/** The internal slot used to associate different objects the engine manipulates with the VM */

const ViewModelReflection = new WeakMap();

function callHook(cmp, fn, args = []) {
  return fn.apply(cmp, args);
}

function setHook(cmp, prop, newValue) {
  cmp[prop] = newValue;
}

function getHook(cmp, prop) {
  return cmp[prop];
}

function rerenderVM(vm) {
  rehydrate(vm);
}
function connectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  logGlobalOperationStart(7
  /* GlobalHydrate */
  , vm); // Usually means moving the element from one place to another, which is observable via
  // life-cycle hooks.

  if (vm.state === 1
  /* connected */
  ) {
    disconnectRootElement(elm);
  }

  runConnectedCallback(vm);
  rehydrate(vm);
  logGlobalOperationEnd(7
  /* GlobalHydrate */
  , vm);
}
function hydrateRootElement(elm) {
  const vm = getAssociatedVM(elm);
  runConnectedCallback(vm);
  hydrateVM(vm);
}
function disconnectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  resetComponentStateWhenRemoved(vm);
}
function appendVM(vm) {
  rehydrate(vm);
}
function hydrateVM(vm) {
  hydrate(vm);
} // just in case the component comes back, with this we guarantee re-rendering it
// while preventing any attempt to rehydration until after reinsertion.

function resetComponentStateWhenRemoved(vm) {
  const {
    state
  } = vm;

  if (state !== 2
  /* disconnected */
  ) {
    const {
      oar,
      tro
    } = vm; // Making sure that any observing record will not trigger the rehydrated on this vm

    tro.reset(); // Making sure that any observing accessor record will not trigger the setter to be reinvoked

    for (const key in oar) {
      oar[key].reset();
    }

    runDisconnectedCallback(vm); // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)

    runChildNodesDisconnectedCallback(vm);
    runLightChildNodesDisconnectedCallback(vm);
  }

  if (undefined !== 'production') {
    removeActiveVM(vm);
  }
} // this method is triggered by the diffing algo only when a vnode from the
// old vnode.children is removed from the DOM.


function removeVM(vm) {
  if (undefined !== 'production') {
    assert.isTrue(vm.state === 1
    /* connected */
    || vm.state === 2
    /* disconnected */
    , `${vm} must have been connected.`);
  }

  resetComponentStateWhenRemoved(vm);
}

function getNearestShadowAncestor(vm) {
  let ancestor = vm.owner;

  while (!isNull(ancestor) && ancestor.renderMode === 0
  /* Light */
  ) {
    ancestor = ancestor.owner;
  }

  return ancestor;
}

function createVM(elm, def, options) {
  const {
    mode,
    owner,
    renderer,
    tagName
  } = options;
  const vm = {
    elm,
    def,
    idx: idx++,
    state: 0
    /* created */
    ,
    isScheduled: false,
    isDirty: true,
    tagName,
    mode,
    owner,
    renderer,
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpProps: create(null),
    cmpFields: create(null),
    cmpSlots: create(null),
    oar: create(null),
    cmpTemplate: null,
    renderMode: def.renderMode,
    shadowMode: null,
    context: {
      stylesheetToken: undefined,
      hasTokenInClass: undefined,
      hasTokenInAttribute: undefined,
      hasScopedStyles: undefined,
      styleVNode: null,
      tplCache: EmptyObject,
      wiredConnecting: EmptyArray,
      wiredDisconnecting: EmptyArray
    },
    tro: null,
    component: null,
    cmpRoot: null,
    callHook,
    setHook,
    getHook
  };
  vm.shadowMode = computeShadowMode(vm);
  vm.tro = getTemplateReactiveObserver(vm);

  if (undefined !== 'production') {
    vm.toString = () => {
      return `[object:vm ${def.name} (${vm.idx})]`;
    };

    if (runtimeFlags.ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST) {
      vm.shadowMode = 0
      /* Native */
      ;
    }
  } // Create component instance associated to the vm and the element.


  invokeComponentConstructor(vm, def.ctor); // Initializing the wire decorator per instance only when really needed

  if (hasWireAdapters(vm)) {
    installWireAdapters(vm);
  }

  return vm;
}

function computeShadowMode(vm) {
  const {
    def,
    renderer
  } = vm;
  const {
    isNativeShadowDefined,
    isSyntheticShadowDefined
  } = renderer;
  let shadowMode;

  if (isSyntheticShadowDefined) {
    if (def.renderMode === 0
    /* Light */
    ) {
      // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
      // everything defaults to native when the synthetic shadow polyfill is unavailable.
      shadowMode = 0
      /* Native */
      ;
    } else if (isNativeShadowDefined) {
      if (def.shadowSupportMode === "any"
      /* Any */
      ) {
        shadowMode = 0
        /* Native */
        ;
      } else {
        const shadowAncestor = getNearestShadowAncestor(vm);

        if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0
        /* Native */
        ) {
          // Transitive support for native Shadow DOM. A component in native mode
          // transitively opts all of its descendants into native.
          shadowMode = 0
          /* Native */
          ;
        } else {
          // Synthetic if neither this component nor any of its ancestors are configured
          // to be native.
          shadowMode = 1
          /* Synthetic */
          ;
        }
      }
    } else {
      // Synthetic if there is no native Shadow DOM support.
      shadowMode = 1
      /* Synthetic */
      ;
    }
  } else {
    // Native if the synthetic shadow polyfill is unavailable.
    shadowMode = 0
    /* Native */
    ;
  }

  return shadowMode;
}

function assertIsVM(obj) {
  if (isNull(obj) || !isObject(obj) || !('cmpRoot' in obj)) {
    throw new TypeError(`${obj} is not a VM.`);
  }
}

function associateVM(obj, vm) {
  ViewModelReflection.set(obj, vm);
}
function getAssociatedVM(obj) {
  const vm = ViewModelReflection.get(obj);

  if (undefined !== 'production') {
    assertIsVM(vm);
  }

  return vm;
}
function getAssociatedVMIfPresent(obj) {
  const maybeVm = ViewModelReflection.get(obj);

  if (undefined !== 'production') {
    if (!isUndefined$1(maybeVm)) {
      assertIsVM(maybeVm);
    }
  }

  return maybeVm;
}

function rehydrate(vm) {
  if (isTrue(vm.isDirty)) {
    const children = renderComponent(vm);
    patchShadowRoot(vm, children);
  }
}

function hydrate(vm) {
  if (isTrue(vm.isDirty)) {
    // manually diffing/patching here.
    // This routine is:
    // patchShadowRoot(vm, children);
    //  -> addVnodes.
    const children = renderComponent(vm);
    vm.children = children;
    const vmChildren = vm.renderMode === 0
    /* Light */
    ? vm.elm.childNodes : vm.elm.shadowRoot.childNodes;
    hydrateChildrenHook(vmChildren, children, vm);
    runRenderedCallback(vm);
  }
}

function patchShadowRoot(vm, newCh) {
  const {
    children: oldCh
  } = vm; // caching the new children collection

  vm.children = newCh;

  if (newCh.length > 0 || oldCh.length > 0) {
    // patch function mutates vnodes by adding the element reference,
    // however, if patching fails it contains partial changes.
    if (oldCh !== newCh) {
      const fn = hasDynamicChildren(newCh) ? updateDynamicChildren : updateStaticChildren;
      runWithBoundaryProtection(vm, vm, () => {
        // pre
        logOperationStart(2
        /* Patch */
        , vm);
      }, () => {
        // job
        const elementToRenderTo = getRenderRoot(vm);
        fn(elementToRenderTo, oldCh, newCh);
      }, () => {
        // post
        logOperationEnd(2
        /* Patch */
        , vm);
      });
    }
  }

  if (vm.state === 1
  /* connected */
  ) {
    // If the element is connected, that means connectedCallback was already issued, and
    // any successive rendering should finish with the call to renderedCallback, otherwise
    // the connectedCallback will take care of calling it in the right order at the end of
    // the current rehydration process.
    runRenderedCallback(vm);
  }
}

function runRenderedCallback(vm) {
  const {
    renderer,
    def: {
      renderedCallback
    }
  } = vm;

  if (isTrue(renderer.ssr)) {
    return;
  }

  const {
    rendered
  } = Services;

  if (rendered) {
    invokeServiceHook(vm, rendered);
  }

  if (!isUndefined$1(renderedCallback)) {
    logOperationStart(4
    /* RenderedCallback */
    , vm);
    invokeComponentCallback(vm, renderedCallback);
    logOperationEnd(4
    /* RenderedCallback */
    , vm);
  }
}

let rehydrateQueue = [];

function flushRehydrationQueue() {
  logGlobalOperationStart(8
  /* GlobalRehydrate */
  );

  if (undefined !== 'production') {
    assert.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
  }

  const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
  rehydrateQueue = []; // reset to a new queue

  for (let i = 0, len = vms.length; i < len; i += 1) {
    const vm = vms[i];

    try {
      rehydrate(vm);
    } catch (error) {
      if (i + 1 < len) {
        // pieces of the queue are still pending to be rehydrated, those should have priority
        if (rehydrateQueue.length === 0) {
          addCallbackToNextTick(flushRehydrationQueue);
        }

        ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
      } // we need to end the measure before throwing.


      logGlobalOperationEnd(8
      /* GlobalRehydrate */
      ); // re-throwing the original error will break the current tick, but since the next tick is
      // already scheduled, it should continue patching the rest.

      throw error; // eslint-disable-line no-unsafe-finally
    }
  }

  logGlobalOperationEnd(8
  /* GlobalRehydrate */
  );
}

function runConnectedCallback(vm) {
  const {
    state
  } = vm;

  if (state === 1
  /* connected */
  ) {
    return; // nothing to do since it was already connected
  }

  vm.state = 1
  /* connected */
  ; // reporting connection

  const {
    connected
  } = Services;

  if (connected) {
    invokeServiceHook(vm, connected);
  }

  if (hasWireAdapters(vm)) {
    connectWireAdapters(vm);
  }

  const {
    connectedCallback
  } = vm.def;

  if (!isUndefined$1(connectedCallback)) {
    logOperationStart(3
    /* ConnectedCallback */
    , vm);
    invokeComponentCallback(vm, connectedCallback);
    logOperationEnd(3
    /* ConnectedCallback */
    , vm);
  }
}

function hasWireAdapters(vm) {
  return getOwnPropertyNames$1(vm.def.wire).length > 0;
}

function runDisconnectedCallback(vm) {
  if (undefined !== 'production') {
    assert.isTrue(vm.state !== 2
    /* disconnected */
    , `${vm} must be inserted.`);
  }

  if (isFalse(vm.isDirty)) {
    // this guarantees that if the component is reused/reinserted,
    // it will be re-rendered because we are disconnecting the reactivity
    // linking, so mutations are not automatically reflected on the state
    // of disconnected components.
    vm.isDirty = true;
  }

  vm.state = 2
  /* disconnected */
  ; // reporting disconnection

  const {
    disconnected
  } = Services;

  if (disconnected) {
    invokeServiceHook(vm, disconnected);
  }

  if (hasWireAdapters(vm)) {
    disconnectWireAdapters(vm);
  }

  const {
    disconnectedCallback
  } = vm.def;

  if (!isUndefined$1(disconnectedCallback)) {
    logOperationStart(5
    /* DisconnectedCallback */
    , vm);
    invokeComponentCallback(vm, disconnectedCallback);
    logOperationEnd(5
    /* DisconnectedCallback */
    , vm);
  }
}

function runChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm; // Reporting disconnection for every child in inverse order since they are
  // inserted in reserved order.

  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const {
      elm
    } = vCustomElementCollection[i]; // There are two cases where the element could be undefined:
    // * when there is an error during the construction phase, and an error
    //   boundary picks it, there is a possibility that the VCustomElement
    //   is not properly initialized, and therefore is should be ignored.
    // * when slotted custom element is not used by the element where it is
    //   slotted into it, as  a result, the custom element was never
    //   initialized.

    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVMIfPresent(elm); // The VM associated with the element might be associated undefined
      // in the case where the VM failed in the middle of its creation,
      // eg: constructor throwing before invoking super().

      if (!isUndefined$1(childVM)) {
        resetComponentStateWhenRemoved(childVM);
      }
    }
  }
}

function runLightChildNodesDisconnectedCallback(vm) {
  const {
    aChildren: adoptedChildren
  } = vm;
  recursivelyDisconnectChildren(adoptedChildren);
}
/**
 * The recursion doesn't need to be a complete traversal of the vnode graph,
 * instead it can be partial, when a custom element vnode is found, we don't
 * need to continue into its children because by attempting to disconnect the
 * custom element itself will trigger the removal of anything slotted or anything
 * defined on its shadow.
 */


function recursivelyDisconnectChildren(vnodes) {
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];

    if (!isNull(vnode) && isArray$1(vnode.children) && !isUndefined$1(vnode.elm)) {
      // vnode is a VElement with children
      if (isUndefined$1(vnode.ctor)) {
        // it is a VElement, just keep looking (recursively)
        recursivelyDisconnectChildren(vnode.children);
      } else {
        // it is a VCustomElement, disconnect it and ignore its children
        resetComponentStateWhenRemoved(getAssociatedVM(vnode.elm));
      }
    }
  }
} // This is a super optimized mechanism to remove the content of the root node (shadow root
// for shadow DOM components and the root element itself for light DOM) without having to go
// into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
// children VNodes might not be representing the current state of the DOM.


function resetComponentRoot(vm) {
  const {
    children,
    renderer
  } = vm;
  const rootNode = getRenderRoot(vm);

  for (let i = 0, len = children.length; i < len; i++) {
    const child = children[i];

    if (!isNull(child) && !isUndefined$1(child.elm)) {
      renderer.remove(child.elm, rootNode);
    }
  }

  vm.children = EmptyArray;
  runChildNodesDisconnectedCallback(vm);
  vm.velements = EmptyArray;
}
function scheduleRehydration(vm) {
  if (isTrue(vm.renderer.ssr) || isTrue(vm.isScheduled)) {
    return;
  }

  vm.isScheduled = true;

  if (rehydrateQueue.length === 0) {
    addCallbackToNextTick(flushRehydrationQueue);
  }

  ArrayPush$1.call(rehydrateQueue, vm);
}

function getErrorBoundaryVM(vm) {
  let currentVm = vm;

  while (!isNull(currentVm)) {
    if (!isUndefined$1(currentVm.def.errorCallback)) {
      return currentVm;
    }

    currentVm = currentVm.owner;
  }
} // slow path routine
// NOTE: we should probably more this routine to the synthetic shadow folder
// and get the allocation to be cached by in the elm instead of in the VM


function allocateInSlot(vm, children) {
  const {
    cmpSlots: oldSlots
  } = vm;
  const cmpSlots = vm.cmpSlots = create(null);

  for (let i = 0, len = children.length; i < len; i += 1) {
    const vnode = children[i];

    if (isNull(vnode)) {
      continue;
    }

    const {
      data
    } = vnode;
    const slotName = data.attrs && data.attrs.slot || '';
    const vnodes = cmpSlots[slotName] = cmpSlots[slotName] || []; // re-keying the vnodes is necessary to avoid conflicts with default content for the slot
    // which might have similar keys. Each vnode will always have a key that
    // starts with a numeric character from compiler. In this case, we add a unique
    // notation for slotted vnodes keys, e.g.: `@foo:1:1`

    if (!isUndefined$1(vnode.key)) {
      vnode.key = `@${slotName}:${vnode.key}`;
    }

    ArrayPush$1.call(vnodes, vnode);
  }

  if (isFalse(vm.isDirty)) {
    // We need to determine if the old allocation is really different from the new one
    // and mark the vm as dirty
    const oldKeys = keys(oldSlots);

    if (oldKeys.length !== keys(cmpSlots).length) {
      markComponentAsDirty(vm);
      return;
    }

    for (let i = 0, len = oldKeys.length; i < len; i += 1) {
      const key = oldKeys[i];

      if (isUndefined$1(cmpSlots[key]) || oldSlots[key].length !== cmpSlots[key].length) {
        markComponentAsDirty(vm);
        return;
      }

      const oldVNodes = oldSlots[key];
      const vnodes = cmpSlots[key];

      for (let j = 0, a = cmpSlots[key].length; j < a; j += 1) {
        if (oldVNodes[j] !== vnodes[j]) {
          markComponentAsDirty(vm);
          return;
        }
      }
    }
  }
}
function runWithBoundaryProtection(vm, owner, pre, job, post) {
  let error;
  pre();

  try {
    job();
  } catch (e) {
    error = Object(e);
  } finally {
    post();

    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);

      if (isUndefined$1(errorBoundaryVm)) {
        throw error; // eslint-disable-line no-unsafe-finally
      }

      resetComponentRoot(vm); // remove offenders

      logOperationStart(6
      /* ErrorCallback */
      , vm); // error boundaries must have an ErrorCallback

      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
      logOperationEnd(6
      /* ErrorCallback */
      , vm);
    }
  }
}
function forceRehydration(vm) {
  // if we must reset the shadowRoot content and render the template
  // from scratch on an active instance, the way to force the reset
  // is by replacing the value of old template, which is used during
  // to determine if the template has changed or not during the rendering
  // process. If the template returned by render() is different from the
  // previous stored template, the styles will be reset, along with the
  // content of the shadowRoot, this way we can guarantee that all children
  // elements will be throw away, and new instances will be created.
  vm.cmpTemplate = () => [];

  if (isFalse(vm.isDirty)) {
    // forcing the vm to rehydrate in the next tick
    markComponentAsDirty(vm);
    scheduleRehydration(vm);
  }
}
function getRenderRoot(vm) {
  return vm.renderMode === 1
  /* Shadow */
  ? vm.cmpRoot : vm.elm;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
const WireMetaMap = new Map();
class WireContextRegistrationEvent extends CustomEvent {
  constructor(adapterToken, {
    setNewContext,
    setDisconnectedCallback
  }) {
    super(adapterToken, {
      bubbles: true,
      composed: true
    });
    defineProperties(this, {
      setNewContext: {
        value: setNewContext
      },
      setDisconnectedCallback: {
        value: setDisconnectedCallback
      }
    });
  }

}

function createFieldDataCallback(vm, name) {
  const {
    cmpFields
  } = vm;
  return value => {
    if (value !== vm.cmpFields[name]) {
      // storing the value in the underlying storage
      cmpFields[name] = value;
      componentValueMutated(vm, name);
    }
  };
}

function createMethodDataCallback(vm, method) {
  return value => {
    // dispatching new value into the wired method
    runWithBoundaryProtection(vm, vm.owner, noop, () => {
      // job
      method.call(vm.component, value);
    }, noop);
  };
}

function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
  let hasPendingConfig = false; // creating the reactive observer for reactive params when needed

  const ro = new ReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true; // collect new config in the micro-task

      Promise.resolve().then(() => {
        hasPendingConfig = false; // resetting current reactive params

        ro.reset(); // dispatching a new config due to a change in the configuration

        computeConfigAndUpdate();
      });
    }
  });

  const computeConfigAndUpdate = () => {
    let config;
    ro.observe(() => config = configCallback(component)); // eslint-disable-next-line lwc-internal/no-invalid-todo
    // TODO: dev-mode validation of config based on the adapter.configSchema
    // @ts-ignore it is assigned in the observe() callback

    callbackWhenConfigIsReady(config);
  };

  return {
    computeConfigAndUpdate,
    ro
  };
}

function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
  const {
    adapter
  } = wireDef;
  const adapterContextToken = getAdapterToken(adapter);

  if (isUndefined$1(adapterContextToken)) {
    return; // no provider found, nothing to be done
  }

  const {
    elm,
    renderer,
    context: {
      wiredConnecting,
      wiredDisconnecting
    }
  } = vm; // waiting for the component to be connected to formally request the context via the token

  ArrayPush$1.call(wiredConnecting, () => {
    // This event is responsible for connecting the host element with another
    // element in the composed path that is providing contextual data. The provider
    // must be listening for a special dom event with the name corresponding to the value of
    // `adapterContextToken`, which will remain secret and internal to this file only to
    // guarantee that the linkage can be forged.
    const contextRegistrationEvent = new WireContextRegistrationEvent(adapterContextToken, {
      setNewContext(newContext) {
        // eslint-disable-next-line lwc-internal/no-invalid-todo
        // TODO: dev-mode validation of config based on the adapter.contextSchema
        callbackWhenContextIsReady(newContext);
      },

      setDisconnectedCallback(disconnectCallback) {
        // adds this callback into the disconnect bucket so it gets disconnected from parent
        // the the element hosting the wire is disconnected
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
      }

    });
    renderer.dispatchEvent(elm, contextRegistrationEvent);
  });
}

function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    dynamic
  } = wireDef;
  const dataCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  let context;
  let connector; // Workaround to pass the component element associated to this wire adapter instance.

  defineProperty(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
    value: dynamic
  });
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    connector = new adapter(dataCallback);
  }, noop);

  const updateConnectorConfig = config => {
    // every time the config is recomputed due to tracking,
    // this callback will be invoked with the new computed config
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      connector.update(config, context);
    }, noop);
  }; // Computes the current wire config and calls the update method on the wire adapter.
  // If it has params, we will need to observe changes in the next tick.


  const {
    computeConfigAndUpdate,
    ro
  } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig); // if the adapter needs contextualization, we need to watch for new context and push it alongside the config

  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      // every time the context is pushed into this component,
      // this callback will be invoked with the new computed context
      if (context !== newContext) {
        context = newContext; // Note: when new context arrives, the config will be recomputed and pushed along side the new
        // context, this is to preserve the identity characteristics, config should not have identity
        // (ever), while context can have identity

        if (vm.state === 1
        /* connected */
        ) {
          computeConfigAndUpdate();
        }
      }
    });
  }

  return {
    // @ts-ignore the boundary protection executes sync, connector is always defined
    connector,
    computeConfigAndUpdate,
    resetConfigWatcher: () => ro.reset()
  };
}

const AdapterToTokenMap = new Map();
function getAdapterToken(adapter) {
  return AdapterToTokenMap.get(adapter);
}
function setAdapterToken(adapter, token) {
  AdapterToTokenMap.set(adapter, token);
}
function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }

  const def = {
    adapter,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function installWireAdapters(vm) {
  const {
    context,
    def: {
      wire
    }
  } = vm;
  const wiredConnecting = context.wiredConnecting = [];
  const wiredDisconnecting = context.wiredDisconnecting = [];

  for (const fieldNameOrMethod in wire) {
    const descriptor = wire[fieldNameOrMethod];
    const wireDef = WireMetaMap.get(descriptor);

    if (undefined !== 'production') {
      assert.invariant(wireDef, `Internal Error: invalid wire definition found.`);
    }

    if (!isUndefined$1(wireDef)) {
      const {
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher
      } = createConnector(vm, fieldNameOrMethod, wireDef);
      const hasDynamicParams = wireDef.dynamic.length > 0;
      ArrayPush$1.call(wiredConnecting, () => {
        connector.connect();

        if (!runtimeFlags.ENABLE_WIRE_SYNC_EMIT) {
          if (hasDynamicParams) {
            Promise.resolve().then(computeConfigAndUpdate);
            return;
          }
        }

        computeConfigAndUpdate();
      });
      ArrayPush$1.call(wiredDisconnecting, () => {
        connector.disconnect();
        resetConfigWatcher();
      });
    }
  }
}
function connectWireAdapters(vm) {
  const {
    wiredConnecting
  } = vm.context;

  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}
function disconnectWireAdapters(vm) {
  const {
    wiredDisconnecting
  } = vm.context;
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function createContextProvider(adapter) {
  let adapterContextToken = getAdapterToken(adapter);

  if (!isUndefined$1(adapterContextToken)) {
    throw new Error(`Adapter already has a context provider.`);
  }

  adapterContextToken = guid();
  setAdapterToken(adapter, adapterContextToken);
  const providers = new WeakSet();
  return (elm, options) => {
    if (providers.has(elm)) {
      throw new Error(`Adapter was already installed on ${elm}.`);
    }

    providers.add(elm);
    const {
      consumerConnectedCallback,
      consumerDisconnectedCallback
    } = options;
    elm.addEventListener(adapterContextToken, evt => {
      const {
        setNewContext,
        setDisconnectedCallback
      } = evt;
      const consumer = {
        provide(newContext) {
          setNewContext(newContext);
        }

      };

      const disconnectCallback = () => {
        if (!isUndefined$1(consumerDisconnectedCallback)) {
          consumerDisconnectedCallback(consumer);
        }
      };

      setDisconnectedCallback(disconnectCallback);
      consumerConnectedCallback(consumer);
      evt.stopImmediatePropagation();
    });
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * EXPERIMENTAL: This function allows you to create a reactive readonly
 * membrane around any object value. This API is subject to change or
 * being removed.
 */

function readonly(obj) {
  if (undefined !== 'production') {
    // TODO [#1292]: Remove the readonly decorator
    if (arguments.length !== 1) {
      assert.fail('@readonly cannot be used as a decorator just yet, use it as a function with one argument to produce a readonly version of the provided value.');
    }
  }

  return reactiveMembrane.getReadOnlyProxy(obj);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let hooksAreSet = false;
function setHooks(hooks) {
  assert.isFalse(hooksAreSet, 'Hooks are already overridden, only one definition is allowed.');
  hooksAreSet = true;
  setSanitizeHtmlContentHook(hooks.sanitizeHtmlContent);
}
/* version: 2.5.11 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const globalStylesheets = create(null);
if (undefined === 'development') {
    // @ts-ignore
    window.__lwcResetGlobalStylesheets = () => {
        for (const key of Object.keys(globalStylesheets)) {
            delete globalStylesheets[key];
        }
    };
}
const globalStylesheetsParentElement = document.head || document.body || document;
// This check for constructable stylesheets is similar to Fast's:
// https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
// See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070
const supportsConstructableStyleSheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) &&
    isArray$1(document.adoptedStyleSheets);
const styleElements = create(null);
const styleSheets = create(null);
const nodesToStyleSheets = new WeakMap();
let getCustomElement, defineCustomElement, HTMLElementConstructor;
function isCustomElementRegistryAvailable() {
    if (typeof customElements === 'undefined') {
        return false;
    }
    try {
        // dereference HTMLElement global because babel wraps globals in compat mode with a
        // _wrapNativeSuper()
        // This is a problem because LWCUpgradableElement extends renderer.HTMLElement which does not
        // get wrapped by babel.
        const HTMLElementAlias = HTMLElement;
        // In case we use compat mode with a modern browser, the compat mode transformation
        // invokes the DOM api with an .apply() or .call() to initialize any DOM api sub-classing,
        // which are not equipped to be initialized that way.
        class clazz extends HTMLElementAlias {
        }
        customElements.define('lwc-test-' + Math.floor(Math.random() * 1000000), clazz);
        new clazz();
        return true;
    }
    catch (_a) {
        return false;
    }
}
function insertConstructableStyleSheet(content, target) {
    // It's important for CSSStyleSheets to be unique based on their content, so that
    // `shadowRoot.adoptedStyleSheets.includes(sheet)` works.
    let styleSheet = styleSheets[content];
    if (isUndefined$1(styleSheet)) {
        styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(content);
        styleSheets[content] = styleSheet;
    }
    if (!target.adoptedStyleSheets.includes(styleSheet)) {
        target.adoptedStyleSheets = [...target.adoptedStyleSheets, styleSheet];
    }
}
function insertStyleElement(content, target) {
    // Avoid inserting duplicate `<style>`s
    let sheets = nodesToStyleSheets.get(target);
    if (isUndefined$1(sheets)) {
        sheets = create(null);
        nodesToStyleSheets.set(target, sheets);
    }
    if (sheets[content]) {
        return;
    }
    sheets[content] = true;
    // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
    // faster to call `cloneNode()` on an existing node than to recreate it every time.
    let elm = styleElements[content];
    if (isUndefined$1(elm)) {
        elm = document.createElement('style');
        elm.type = 'text/css';
        elm.textContent = content;
        styleElements[content] = elm;
    }
    else {
        elm = elm.cloneNode(true);
    }
    target.appendChild(elm);
}
if (isCustomElementRegistryAvailable()) {
    getCustomElement = customElements.get.bind(customElements);
    defineCustomElement = customElements.define.bind(customElements);
    HTMLElementConstructor = HTMLElement;
}
else {
    const registry = create(null);
    const reverseRegistry = new WeakMap();
    defineCustomElement = function define(name, ctor) {
        if (name !== StringToLowerCase.call(name) || registry[name]) {
            throw new TypeError(`Invalid Registration`);
        }
        registry[name] = ctor;
        reverseRegistry.set(ctor, name);
    };
    getCustomElement = function get(name) {
        return registry[name];
    };
    HTMLElementConstructor = function HTMLElement() {
        if (!(this instanceof HTMLElement)) {
            throw new TypeError(`Invalid Invocation`);
        }
        const { constructor } = this;
        const name = reverseRegistry.get(constructor);
        if (!name) {
            throw new TypeError(`Invalid Construction`);
        }
        const elm = document.createElement(name);
        setPrototypeOf(elm, constructor.prototype);
        return elm;
    };
    HTMLElementConstructor.prototype = HTMLElement.prototype;
}
let isHydrating = false;
function setIsHydrating(v) {
    isHydrating = v;
}
const renderer = {
    ssr: false,
    isHydrating() {
        return isHydrating;
    },
    isNativeShadowDefined: _globalThis[KEY__IS_NATIVE_SHADOW_ROOT_DEFINED],
    isSyntheticShadowDefined: hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN),
    createElement(tagName, namespace) {
        return isUndefined$1(namespace)
            ? document.createElement(tagName)
            : document.createElementNS(namespace, tagName);
    },
    createText(content) {
        return document.createTextNode(content);
    },
    createComment(content) {
        return document.createComment(content);
    },
    insert(node, parent, anchor) {
        parent.insertBefore(node, anchor);
    },
    remove(node, parent) {
        parent.removeChild(node);
    },
    nextSibling(node) {
        return node.nextSibling;
    },
    attachShadow(element, options) {
        if (isHydrating) {
            return element.shadowRoot;
        }
        return element.attachShadow(options);
    },
    setText(node, content) {
        node.nodeValue = content;
    },
    getProperty(node, key) {
        return node[key];
    },
    setProperty(node, key, value) {
        if (undefined !== 'production') {
            if (node instanceof Element && !(key in node)) {
                // TODO [#1297]: Move this validation to the compiler
                assert.fail(`Unknown public property "${key}" of element <${node.tagName}>. This is likely a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}".`);
            }
        }
        node[key] = value;
    },
    getAttribute(element, name, namespace) {
        return isUndefined$1(namespace)
            ? element.getAttribute(name)
            : element.getAttributeNS(namespace, name);
    },
    setAttribute(element, name, value, namespace) {
        return isUndefined$1(namespace)
            ? element.setAttribute(name, value)
            : element.setAttributeNS(namespace, name, value);
    },
    removeAttribute(element, name, namespace) {
        if (isUndefined$1(namespace)) {
            element.removeAttribute(name);
        }
        else {
            element.removeAttributeNS(namespace, name);
        }
    },
    addEventListener(target, type, callback, options) {
        target.addEventListener(type, callback, options);
    },
    removeEventListener(target, type, callback, options) {
        target.removeEventListener(type, callback, options);
    },
    dispatchEvent(target, event) {
        return target.dispatchEvent(event);
    },
    getClassList(element) {
        return element.classList;
    },
    setCSSStyleProperty(element, name, value, important) {
        // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
        // represent elements in the engine?
        element.style.setProperty(name, value, important ? 'important' : '');
    },
    getBoundingClientRect(element) {
        return element.getBoundingClientRect();
    },
    querySelector(element, selectors) {
        return element.querySelector(selectors);
    },
    querySelectorAll(element, selectors) {
        return element.querySelectorAll(selectors);
    },
    getElementsByTagName(element, tagNameOrWildCard) {
        return element.getElementsByTagName(tagNameOrWildCard);
    },
    getElementsByClassName(element, names) {
        return element.getElementsByClassName(names);
    },
    getChildren(element) {
        return element.children;
    },
    getChildNodes(element) {
        return element.childNodes;
    },
    getFirstChild(element) {
        return element.firstChild;
    },
    getFirstElementChild(element) {
        return element.firstElementChild;
    },
    getLastChild(element) {
        return element.lastChild;
    },
    getLastElementChild(element) {
        return element.lastElementChild;
    },
    isConnected(node) {
        return node.isConnected;
    },
    insertGlobalStylesheet(content) {
        if (!isUndefined$1(globalStylesheets[content])) {
            return;
        }
        globalStylesheets[content] = true;
        const elm = document.createElement('style');
        elm.type = 'text/css';
        elm.textContent = content;
        globalStylesheetsParentElement.appendChild(elm);
    },
    insertStylesheet(content, target) {
        if (supportsConstructableStyleSheets) {
            insertConstructableStyleSheet(content, target);
        }
        else {
            // Fall back to <style> element
            insertStyleElement(content, target);
        }
    },
    assertInstanceOfHTMLElement(elm, msg) {
        assert.invariant(elm instanceof HTMLElement, msg);
    },
    defineCustomElement,
    getCustomElement,
    HTMLElement: HTMLElementConstructor,
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line lwc-internal/no-global-node
const _Node$1 = Node;
const ConnectingSlot = new WeakMap();
const DisconnectingSlot = new WeakMap();
function callNodeSlot(node, slot) {
    if (undefined !== 'production') {
        assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
    }
    const fn = slot.get(node);
    if (!isUndefined$1(fn)) {
        fn(node);
    }
    return node; // for convenience
}
// Monkey patching Node methods to be able to detect the insertions and removal of root elements
// created via createElement.
const { appendChild, insertBefore, removeChild, replaceChild } = _Node$1.prototype;
assign(_Node$1.prototype, {
    appendChild(newChild) {
        const appendedNode = appendChild.call(this, newChild);
        return callNodeSlot(appendedNode, ConnectingSlot);
    },
    insertBefore(newChild, referenceNode) {
        const insertedNode = insertBefore.call(this, newChild, referenceNode);
        return callNodeSlot(insertedNode, ConnectingSlot);
    },
    removeChild(oldChild) {
        const removedNode = removeChild.call(this, oldChild);
        return callNodeSlot(removedNode, DisconnectingSlot);
    },
    replaceChild(newChild, oldChild) {
        const replacedNode = replaceChild.call(this, newChild, oldChild);
        callNodeSlot(replacedNode, DisconnectingSlot);
        callNodeSlot(newChild, ConnectingSlot);
        return replacedNode;
    },
});
/**
 * EXPERIMENTAL: This function is almost identical to document.createElement with the slightly
 * difference that in the options, you can pass the `is` property set to a Constructor instead of
 * just a string value. The intent is to allow the creation of an element controlled by LWC without
 * having to register the element as a custom element.
 *
 * @example
 * ```
 * const el = createElement('x-foo', { is: FooCtor });
 * ```
 */
function createElement(sel, options) {
    if (!isObject(options) || isNull(options)) {
        throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString$1(options)}".`);
    }
    const Ctor = options.is;
    if (!isFunction$1(Ctor)) {
        throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
    }
    const UpgradableConstructor = getUpgradableConstructor(sel, renderer);
    let wasComponentUpgraded = false;
    // the custom element from the registry is expecting an upgrade callback
    /**
     * Note: if the upgradable constructor does not expect, or throw when we new it
     * with a callback as the first argument, we could implement a more advanced
     * mechanism that only passes that argument if the constructor is known to be
     * an upgradable custom element.
     */
    const element = new UpgradableConstructor((elm) => {
        const def = getComponentInternalDef(Ctor);
        createVM(elm, def, {
            tagName: sel,
            mode: options.mode !== 'closed' ? 'open' : 'closed',
            owner: null,
            renderer,
        });
        ConnectingSlot.set(elm, connectRootElement);
        DisconnectingSlot.set(elm, disconnectRootElement);
        wasComponentUpgraded = true;
    });
    if (!wasComponentUpgraded) {
        /* eslint-disable-next-line no-console */
        console.error(`Unexpected tag name "${sel}". This name is a registered custom element, preventing LWC to upgrade the element.`);
    }
    return element;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function hydrateComponent(element, Ctor, props = {}) {
    if (!isFunction$1(Ctor)) {
        throw new TypeError(`"hydrateComponent" expects a valid component constructor as the second parameter but instead received ${Ctor}.`);
    }
    if (!isObject(props) || isNull(props)) {
        throw new TypeError(`"hydrateComponent" expects an object as the third parameter but instead received ${props}.`);
    }
    const def = getComponentInternalDef(Ctor);
    try {
        // Let the renderer know we are hydrating, so it does not replace the existing shadowRoot
        // and uses the same algo to create the stylesheets as in SSR.
        setIsHydrating(true);
        createVM(element, def, {
            mode: 'open',
            owner: null,
            renderer,
            tagName: element.tagName.toLowerCase(),
        });
        for (const [key, value] of Object.entries(props)) {
            element[key] = value;
        }
        hydrateRootElement(element);
        // set it back since now we finished hydration.
        setIsHydrating(false);
    }
    catch (e) {
        // Fallback: In case there's an error while hydrating, let's log the error, and replace the element with
        //           the client generated DOM.
        /* eslint-disable-next-line no-console */
        console.error('Recovering from error while hydrating: ', e);
        setIsHydrating(false);
        const newElem = createElement(element.tagName, {
            is: Ctor,
            mode: 'open',
        });
        for (const [key, value] of Object.entries(props)) {
            newElem[key] = value;
        }
        element.parentNode.replaceChild(newElem, element);
    }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This function builds a Web Component class from a LWC constructor so it can be
 * registered as a new element via customElements.define() at any given time.
 *
 * @deprecated since version 1.3.11
 *
 * @example
 * ```
 * import { buildCustomElementConstructor } from 'lwc';
 * import Foo from 'ns/foo';
 * const WC = buildCustomElementConstructor(Foo);
 * customElements.define('x-foo', WC);
 * const elm = document.createElement('x-foo');
 * ```
 */
function deprecatedBuildCustomElementConstructor(Ctor) {
    if (undefined !== 'production') {
        /* eslint-disable-next-line no-console */
        console.warn('Deprecated function called: "buildCustomElementConstructor" function is deprecated and it will be removed.' +
            `Use "${Ctor.name}.CustomElementConstructor" static property of the component constructor to access the corresponding custom element constructor instead.`);
    }
    return Ctor.CustomElementConstructor;
}
function buildCustomElementConstructor(Ctor) {
    const def = getComponentInternalDef(Ctor);
    return class extends def.bridge {
        constructor() {
            super();
            createVM(this, def, {
                mode: 'open',
                owner: null,
                tagName: this.tagName,
                renderer,
            });
        }
        connectedCallback() {
            connectRootElement(this);
        }
        disconnectedCallback() {
            disconnectRootElement(this);
        }
    };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * EXPERIMENTAL: This function provides access to the component constructor, given an HTMLElement.
 * This API is subject to change or being removed.
 */
function getComponentConstructor(elm) {
    let ctor = null;
    if (elm instanceof HTMLElement) {
        const vm = getAssociatedVMIfPresent(elm);
        if (!isUndefined$1(vm)) {
            ctor = vm.def.ctor;
        }
    }
    return ctor;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line lwc-internal/no-global-node
const _Node = Node;
/**
 * EXPERIMENTAL: This function detects whether or not a Node is controlled by a LWC template. This
 * API is subject to change or being removed.
 */
function isNodeFromTemplate(node) {
    if (isFalse(node instanceof _Node)) {
        return false;
    }
    // TODO [#1250]: skipping the shadowRoot instances itself makes no sense, we need to revisit
    // this with locker
    if (node instanceof ShadowRoot) {
        return false;
    }
    if (renderer.isSyntheticShadowDefined) {
        // TODO [#1252]: old behavior that is still used by some pieces of the platform,
        // specifically, nodes inserted manually on places where `lwc:dom="manual"` directive is not
        // used, will be considered global elements.
        return !isUndefined$1(node[KEY__SHADOW_RESOLVER]);
    }
    const root = node.getRootNode();
    return root instanceof ShadowRoot;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ComponentConstructorToCustomElementConstructorMap = new Map();
function getCustomElementConstructor(Ctor) {
    if (Ctor === LightningElement) {
        throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
    }
    let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
    if (isUndefined$1(ce)) {
        ce = buildCustomElementConstructor(Ctor);
        ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
    }
    return ce;
}
/**
 * This static getter builds a Web Component class from a LWC constructor so it can be registered
 * as a new element via customElements.define() at any given time. E.g.:
 *
 *      import Foo from 'ns/foo';
 *      customElements.define('x-foo', Foo.CustomElementConstructor);
 *      const elm = document.createElement('x-foo');
 *
 */
defineProperty(LightningElement, 'CustomElementConstructor', {
    get() {
        return getCustomElementConstructor(this);
    },
});
freeze(LightningElement);
seal(LightningElement.prototype);

exports.LightningElement = LightningElement;
exports.__unstable__ProfilerControl = profilerControl;
exports.api = api$1;
exports.buildCustomElementConstructor = deprecatedBuildCustomElementConstructor;
exports.createContextProvider = createContextProvider;
exports.createElement = createElement;
exports.getComponentConstructor = getComponentConstructor;
exports.getComponentDef = getComponentDef;
exports.hydrateComponent = hydrateComponent;
exports.isComponentConstructor = isComponentConstructor;
exports.isNodeFromTemplate = isNodeFromTemplate;
exports.readonly = readonly;
exports.register = register;
exports.registerComponent = registerComponent;
exports.registerDecorators = registerDecorators;
exports.registerTemplate = registerTemplate;
exports.sanitizeAttribute = sanitizeAttribute;
exports.setFeatureFlag = setFeatureFlag;
exports.setFeatureFlagForTest = setFeatureFlagForTest;
exports.setHooks = setHooks;
exports.swapComponent = swapComponent;
exports.swapStyle = swapStyle;
exports.swapTemplate = swapTemplate;
exports.track = track;
exports.unwrap = unwrap;
exports.wire = wire;
/* version: 2.5.11 */


/***/ }),

/***/ "./src/modules/my/app/app.js":
/*!***********************************!*\
  !*** ./src/modules/my/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html */ "./src/modules/my/app/app.html");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js");



class App extends lwc__WEBPACK_IMPORTED_MODULE_1__.LightningElement {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lwc__WEBPACK_IMPORTED_MODULE_1__.registerComponent)(App, {
  tmpl: _app_html__WEBPACK_IMPORTED_MODULE_0__.default
}));

/***/ }),

/***/ "./src/modules/my/greeting/greeting.js":
/*!*********************************************!*\
  !*** ./src/modules/my/greeting/greeting.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js");
/* harmony import */ var _greeting_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting.html */ "./src/modules/my/greeting/greeting.html");


const greetings = ['Hello', 'Bonjour', '你好', 'Hola', 'Привет', 'こんにちは', 'Guten Tag', 'ጤና ይስጥልኝ', 'Ciao', 'नमस्ते', '안녕하세요', 'مرحبا'];
const SPEED_CLASS_MAP = {
  slow: 'fade-slow',
  fast: 'fade-fast',
  medium: 'fade-medium'
};
const DEFAULT_SPEED = 'medium';

class Greeting extends lwc__WEBPACK_IMPORTED_MODULE_0__.LightningElement {
  constructor(...args) {
    super(...args);
    this.animationSpeed = DEFAULT_SPEED;
    this.index = 0;
    this.isAnimating = true;
  }

  set speed(value) {
    if (SPEED_CLASS_MAP[value]) {
      this.animationSpeed = value;
    } else {
      this.animationSpeed = DEFAULT_SPEED;
    }

    this.isAnimating = true;
  } // Return the internal speed property


  get speed() {
    return this.animationSpeed;
  } // Get the current greeting


  get greeting() {
    return greetings[this.index];
  } // Map slow, medium, fast to CSS Animations


  get animationClass() {
    if (this.isAnimating) {
      return SPEED_CLASS_MAP[this.speed];
    }

    return 'hide';
  } //Handle the animation ending, update to next hello


  handleAnimationEnd() {
    this.isAnimating = false;
    this.index = (this.index + 1) % greetings.length;
    setTimeout(() => this.updateGreeting(), 500);
  } // Update to the next greeting and start animating


  updateGreeting() {
    this.isAnimating = true;
  }

}

(0,lwc__WEBPACK_IMPORTED_MODULE_0__.registerDecorators)(Greeting, {
  publicProps: {
    speed: {
      config: 3
    }
  },
  fields: ["animationSpeed", "index", "isAnimating"]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lwc__WEBPACK_IMPORTED_MODULE_0__.registerComponent)(Greeting, {
  tmpl: _greeting_html__WEBPACK_IMPORTED_MODULE_1__.default
}));

/***/ }),

/***/ "./src/modules/my/app/app.css":
/*!************************************!*\
  !*** ./src/modules/my/app/app.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylesheet(useActualHostSelector, token) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".center", shadowSelector, " {text-align: center;}.link", shadowSelector, " {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}.info", shadowSelector, " {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}.code", shadowSelector, " {font-family: monospace;}.container", shadowSelector, " {margin-top: 30px;}img", shadowSelector, " {max-width: 150px;}.greeting", shadowSelector, " {height: 75px;}"].join('');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([stylesheet]);

/***/ }),

/***/ "./src/modules/my/app/app.html":
/*!*************************************!*\
  !*** ./src/modules/my/app/app.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ "./src/modules/my/app/app.css");
/* harmony import */ var _app_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scoped.css?scoped=true */ "./node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js?scoped=true");
/* harmony import */ var my_greeting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! my/greeting */ "./src/modules/my/greeting/greeting.js");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js");






function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, t: api_text} = $api;
  return [api_element("div", {
    classMap: {
      "center": true,
      "greeting": true
    },
    key: 0
  }, [api_custom_element("my-greeting", my_greeting__WEBPACK_IMPORTED_MODULE_2__.default, {
    props: {
      "speed": "medium"
    },
    key: 1
  }, [])]), api_element("div", {
    classMap: {
      "center": true
    },
    key: 2
  }, [api_element("img", {
    attrs: {
      "src": "./resources/lwc.png"
    },
    key: 3
  }, [])]), api_element("div", {
    classMap: {
      "center": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "container": true
    },
    key: 5
  }, [api_element("p", {
    classMap: {
      "info": true
    },
    key: 6
  }, [api_text("Edit "), api_element("strong", {
    classMap: {
      "code": true
    },
    key: 7
  }, [api_text("src/modules/my/app/app.html")]), api_element("br", {
    key: 8
  }, []), api_text("and save for live reload.")])]), api_element("div", {
    key: 9
  }, [api_element("a", {
    classMap: {
      "link": true
    },
    attrs: {
      "href": "https://lwc.dev",
      "target": "_blank"
    },
    key: 10
  }, [api_text("Learn LWC")])])])];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lwc__WEBPACK_IMPORTED_MODULE_3__.registerTemplate)(tmpl));
tmpl.stylesheets = [];


if (_app_css__WEBPACK_IMPORTED_MODULE_0__.default) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _app_css__WEBPACK_IMPORTED_MODULE_0__.default)
}
if (_app_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _app_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default)
}
tmpl.stylesheetToken = "my-app_app"


/***/ }),

/***/ "./src/modules/my/greeting/greeting.css":
/*!**********************************************!*\
  !*** ./src/modules/my/greeting/greeting.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylesheet(useActualHostSelector, token) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".greet", shadowSelector, " {font-size: xx-large;}.fade-fast", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 1s;}.fade-slow", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 5s;}.fade-medium", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 2s;}@keyframes fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " {0% {opacity: 0;}35% {opacity: 1;}65% {opacity: 1;}100% {opacity: 0;}}.hide", shadowSelector, " {opacity: 0;}"].join('');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([stylesheet]);

/***/ }),

/***/ "./src/modules/my/greeting/greeting.html":
/*!***********************************************!*\
  !*** ./src/modules/my/greeting/greeting.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _greeting_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.css */ "./src/modules/my/greeting/greeting.css");
/* harmony import */ var _greeting_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting.scoped.css?scoped=true */ "./node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js?scoped=true");
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js");





function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    className: $cmp.animationClass,
    key: 0,
    on: {
      "animationend": _m0 || ($ctx._m0 = api_bind($cmp.handleAnimationEnd))
    }
  }, [api_element("span", {
    classMap: {
      "greet": true
    },
    key: 1
  }, [api_text(api_dynamic_text($cmp.greeting))])])];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,lwc__WEBPACK_IMPORTED_MODULE_2__.registerTemplate)(tmpl));
tmpl.stylesheets = [];


if (_greeting_css__WEBPACK_IMPORTED_MODULE_0__.default) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _greeting_css__WEBPACK_IMPORTED_MODULE_0__.default)
}
if (_greeting_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _greeting_scoped_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__.default)
}
tmpl.stylesheetToken = "my-greeting_greeting"


/***/ }),

/***/ "./node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js?scoped=true":
/*!*******************************************************************************!*\
  !*** ./node_modules/lwc-webpack-plugin/dist/mocks/empty-style.js?scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.default = undefined;


/***/ }),

/***/ "./node_modules/react-dev-utils/launchEditorEndpoint.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-dev-utils/launchEditorEndpoint.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


// TODO: we might want to make this injectable to support DEV-time non-root URLs.
module.exports = '/__open-stack-frame-in-editor';


/***/ }),

/***/ "./node_modules/react-error-overlay/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-error-overlay/lib/index.js ***!
  \*******************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{var e={162:(e,t,r)=>{e.exports=r(47)},47:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=_(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=c(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function m(){}function v(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(R([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=y.prototype=m.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,l){var u=c(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=c(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:t,done:!0}}return v.prototype=y,u(E,"constructor",y),u(y,"constructor",v),v.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(E),u(E,l,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},268:(e,t)=>{"use strict";t.Wo=function(e){return Array.isArray(e)||(e=[e]),Promise.all(e.map((function(e){return e.then((function(e){return{isFulfilled:!0,isRejected:!1,value:e}})).catch((function(e){return{isFulfilled:!1,isRejected:!0,reason:e}}))})))}},213:(e,t,r)=>{var n=r(728),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function i(){this._array=[],this._set=a?new Map:Object.create(null)}i.fromArray=function(e,t){for(var r=new i,n=0,o=e.length;n<o;n++)r.add(e[n],t);return r},i.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},i.prototype.add=function(e,t){var r=a?e:n.toSetString(e),i=a?this.has(e):o.call(this._set,r),l=this._array.length;i&&!t||this._array.push(e),i||(a?this._set.set(e,l):this._set[r]=l)},i.prototype.has=function(e){if(a)return this._set.has(e);var t=n.toSetString(e);return o.call(this._set,t)},i.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var r=n.toSetString(e);if(o.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')},i.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},i.prototype.toArray=function(){return this._array.slice()},t.I=i},400:(e,t,r)=>{var n=r(923);t.encode=function(e){var t,r="",o=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&o,(o>>>=5)>0&&(t|=32),r+=n.encode(t)}while(o>0);return r},t.decode=function(e,t,r){var o,a,i,l,u=e.length,s=0,c=0;do{if(t>=u)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(a=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));o=!!(32&a),s+=(a&=31)<<c,c+=5}while(o);r.value=(l=(i=s)>>1,1==(1&i)?-l:l),r.rest=t}},923:(e,t)=>{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},216:(e,t)=>{function r(e,n,o,a,i,l){var u=Math.floor((n-e)/2)+e,s=i(o,a[u],!0);return 0===s?u:s>0?n-u>1?r(u,n,o,a,i,l):l==t.LEAST_UPPER_BOUND?n<a.length?n:-1:u:u-e>1?r(e,u,o,a,i,l):l==t.LEAST_UPPER_BOUND?u:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,o,a){if(0===n.length)return-1;var i=r(-1,n.length,e,n,o,a||t.GREATEST_LOWER_BOUND);if(i<0)return-1;for(;i-1>=0&&0===o(n[i],n[i-1],!0);)--i;return i}},188:(e,t,r)=>{var n=r(728);function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,r,o,a,i,l;r=e,o=(t=this._last).generatedLine,a=r.generatedLine,i=t.generatedColumn,l=r.generatedColumn,a>o||a==o&&l>=i||n.compareByGeneratedPositionsInflated(t,r)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.H=o},826:(e,t)=>{function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,o,a){if(o<a){var i=o-1;r(e,(c=o,f=a,Math.round(c+Math.random()*(f-c))),a);for(var l=e[a],u=o;u<a;u++)t(e[u],l)<=0&&r(e,i+=1,u);r(e,i+1,u);var s=i+1;n(e,t,o,s-1),n(e,t,s+1,a)}var c,f}t.U=function(e,t){n(e,t,0,e.length-1)}},771:(e,t,r)=>{var n=r(728),o=r(216),a=r(213).I,i=r(400),l=r(826).U;function u(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new f(t):new s(t)}function s(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),o=n.getArg(t,"sources"),i=n.getArg(t,"names",[]),l=n.getArg(t,"sourceRoot",null),u=n.getArg(t,"sourcesContent",null),s=n.getArg(t,"mappings"),c=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);o=o.map(String).map(n.normalize).map((function(e){return l&&n.isAbsolute(l)&&n.isAbsolute(e)?n.relative(l,e):e})),this._names=a.fromArray(i.map(String),!0),this._sources=a.fromArray(o,!0),this.sourceRoot=l,this.sourcesContent=u,this._mappings=s,this.file=c}function c(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function f(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),o=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var i={line:-1,column:0};this._sections=o.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),o=n.getArg(t,"column");if(r<i.line||r===i.line&&o<i.column)throw new Error("Section offsets must be ordered and non-overlapping.");return i=t,{generatedOffset:{generatedLine:r+1,generatedColumn:o+1},consumer:new u(n.getArg(e,"map"))}}))}u.fromSourceMap=function(e){return s.fromSourceMap(e)},u.prototype._version=3,u.prototype.__generatedMappings=null,Object.defineProperty(u.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),u.prototype.__originalMappings=null,Object.defineProperty(u.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),u.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},u.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.GREATEST_LOWER_BOUND=1,u.LEAST_UPPER_BOUND=2,u.prototype.eachMapping=function(e,t,r){var o,a=t||null;switch(r||u.GENERATED_ORDER){case u.GENERATED_ORDER:o=this._generatedMappings;break;case u.ORIGINAL_ORDER:o=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var i=this.sourceRoot;o.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=i&&(t=n.join(i,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,a)},u.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var a=[],i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(i>=0){var l=this._originalMappings[i];if(void 0===e.column)for(var u=l.originalLine;l&&l.originalLine===u;)a.push({line:n.getArg(l,"generatedLine",null),column:n.getArg(l,"generatedColumn",null),lastColumn:n.getArg(l,"lastGeneratedColumn",null)}),l=this._originalMappings[++i];else for(var s=l.originalColumn;l&&l.originalLine===t&&l.originalColumn==s;)a.push({line:n.getArg(l,"generatedLine",null),column:n.getArg(l,"generatedColumn",null),lastColumn:n.getArg(l,"lastGeneratedColumn",null)}),l=this._originalMappings[++i]}return a},t.SourceMapConsumer=u,s.prototype=Object.create(u.prototype),s.prototype.consumer=u,s.fromSourceMap=function(e){var t=Object.create(s.prototype),r=t._names=a.fromArray(e._names.toArray(),!0),o=t._sources=a.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var i=e._mappings.toArray().slice(),u=t.__generatedMappings=[],f=t.__originalMappings=[],d=0,p=i.length;d<p;d++){var h=i[d],g=new c;g.generatedLine=h.generatedLine,g.generatedColumn=h.generatedColumn,h.source&&(g.source=o.indexOf(h.source),g.originalLine=h.originalLine,g.originalColumn=h.originalColumn,h.name&&(g.name=r.indexOf(h.name)),f.push(g)),u.push(g)}return l(t.__originalMappings,n.compareByOriginalPositions),t},s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),s.prototype._parseMappings=function(e,t){for(var r,o,a,u,s,f=1,d=0,p=0,h=0,g=0,m=0,v=e.length,y=0,b={},w={},x=[],E=[];y<v;)if(";"===e.charAt(y))f++,y++,d=0;else if(","===e.charAt(y))y++;else{for((r=new c).generatedLine=f,u=y;u<v&&!this._charIsMappingSeparator(e,u);u++);if(a=b[o=e.slice(y,u)])y+=o.length;else{for(a=[];y<u;)i.decode(e,y,w),s=w.value,y=w.rest,a.push(s);if(2===a.length)throw new Error("Found a source, but no line and column");if(3===a.length)throw new Error("Found a source and line, but no column");b[o]=a}r.generatedColumn=d+a[0],d=r.generatedColumn,a.length>1&&(r.source=g+a[1],g+=a[1],r.originalLine=p+a[2],p=r.originalLine,r.originalLine+=1,r.originalColumn=h+a[3],h=r.originalColumn,a.length>4&&(r.name=m+a[4],m+=a[4])),E.push(r),"number"==typeof r.originalLine&&x.push(r)}l(E,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=E,l(x,n.compareByOriginalPositions),this.__originalMappings=x},s.prototype._findMapping=function(e,t,r,n,a,i){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return o.search(e,t,a,i)},s.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},s.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(r>=0){var o=this._generatedMappings[r];if(o.generatedLine===t.generatedLine){var a=n.getArg(o,"source",null);null!==a&&(a=this._sources.at(a),null!=this.sourceRoot&&(a=n.join(this.sourceRoot,a)));var i=n.getArg(o,"name",null);return null!==i&&(i=this._names.at(i)),{source:a,line:n.getArg(o,"originalLine",null),column:n.getArg(o,"originalColumn",null),name:i}}}return{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e}))},s.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var o=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},o=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(o>=0){var a=this._originalMappings[o];if(a.source===r.source)return{line:n.getArg(a,"generatedLine",null),column:n.getArg(a,"generatedColumn",null),lastColumn:n.getArg(a,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},f.prototype=Object.create(u.prototype),f.prototype.constructor=u,f.prototype._version=3,Object.defineProperty(f.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),f.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=o.search(t,this._sections,(function(e,t){return e.generatedLine-t.generatedOffset.generatedLine||e.generatedColumn-t.generatedOffset.generatedColumn})),a=this._sections[r];return a?a.consumer.originalPositionFor({line:t.generatedLine-(a.generatedOffset.generatedLine-1),column:t.generatedColumn-(a.generatedOffset.generatedLine===t.generatedLine?a.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},f.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},f.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},f.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var o=r.consumer.generatedPositionFor(e);if(o)return{line:o.line+(r.generatedOffset.generatedLine-1),column:o.column+(r.generatedOffset.generatedLine===o.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},f.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var o=this._sections[r],a=o.consumer._generatedMappings,i=0;i<a.length;i++){var u=a[i],s=o.consumer._sources.at(u.source);null!==o.consumer.sourceRoot&&(s=n.join(o.consumer.sourceRoot,s)),this._sources.add(s),s=this._sources.indexOf(s);var c=o.consumer._names.at(u.name);this._names.add(c),c=this._names.indexOf(c);var f={source:s,generatedLine:u.generatedLine+(o.generatedOffset.generatedLine-1),generatedColumn:u.generatedColumn+(o.generatedOffset.generatedLine===u.generatedLine?o.generatedOffset.generatedColumn-1:0),originalLine:u.originalLine,originalColumn:u.originalColumn,name:c};this.__generatedMappings.push(f),"number"==typeof f.originalLine&&this.__originalMappings.push(f)}l(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),l(this.__originalMappings,n.compareByOriginalPositions)}},433:(e,t,r)=>{var n=r(400),o=r(728),a=r(213).I,i=r(188).H;function l(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new i,this._sourcesContents=null}l.prototype._version=3,l.fromSourceMap=function(e){var t=e.sourceRoot,r=new l({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(n.source=e.source,null!=t&&(n.source=o.relative(t,n.source)),n.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(n.name=e.name)),r.addMapping(n)})),e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&r.setSourceContent(t,n)})),r},l.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),r=o.getArg(e,"original",null),n=o.getArg(e,"source",null),a=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,r,n,a),null!=n&&(n=String(n),this._sources.has(n)||this._sources.add(n)),null!=a&&(a=String(a),this._names.has(a)||this._names.add(a)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:a})},l.prototype.setSourceContent=function(e,t){var r=e;null!=this._sourceRoot&&(r=o.relative(this._sourceRoot,r)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(r)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(r)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},l.prototype.applySourceMap=function(e,t,r){var n=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');n=e.file}var i=this._sourceRoot;null!=i&&(n=o.relative(i,n));var l=new a,u=new a;this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=r&&(t.source=o.join(r,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var s=t.source;null==s||l.has(s)||l.add(s);var c=t.name;null==c||u.has(c)||u.add(c)}),this),this._sources=l,this._names=u,e.sources.forEach((function(t){var n=e.sourceContentFor(t);null!=n&&(null!=r&&(t=o.join(r,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,n))}),this)},l.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))},l.prototype._serializeMappings=function(){for(var e,t,r,a,i=0,l=1,u=0,s=0,c=0,f=0,d="",p=this._mappings.toArray(),h=0,g=p.length;h<g;h++){if(e="",(t=p[h]).generatedLine!==l)for(i=0;t.generatedLine!==l;)e+=";",l++;else if(h>0){if(!o.compareByGeneratedPositionsInflated(t,p[h-1]))continue;e+=","}e+=n.encode(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(a=this._sources.indexOf(t.source),e+=n.encode(a-f),f=a,e+=n.encode(t.originalLine-1-s),s=t.originalLine-1,e+=n.encode(t.originalColumn-u),u=t.originalColumn,null!=t.name&&(r=this._names.indexOf(t.name),e+=n.encode(r-c),c=r)),d+=e}return d},l.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var r=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)},l.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},l.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.h=l},85:(e,t,r)=>{var n=r(433).h,o=r(728),a=/(\r?\n)/,i="$$$isSourceNode$$$";function l(e,t,r,n,o){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==o?null:o,this[i]=!0,null!=n&&this.add(n)}l.fromStringWithSourceMap=function(e,t,r){var n=new l,i=e.split(a),u=0,s=function(){return e()+(e()||"");function e(){return u<i.length?i[u++]:void 0}},c=1,f=0,d=null;return t.eachMapping((function(e){if(null!==d){if(!(c<e.generatedLine)){var t=(r=i[u]).substr(0,e.generatedColumn-f);return i[u]=r.substr(e.generatedColumn-f),f=e.generatedColumn,p(d,t),void(d=e)}p(d,s()),c++,f=0}for(;c<e.generatedLine;)n.add(s()),c++;if(f<e.generatedColumn){var r=i[u];n.add(r.substr(0,e.generatedColumn)),i[u]=r.substr(e.generatedColumn),f=e.generatedColumn}d=e}),this),u<i.length&&(d&&p(d,s()),n.add(i.splice(u).join(""))),t.sources.forEach((function(e){var a=t.sourceContentFor(e);null!=a&&(null!=r&&(e=o.join(r,e)),n.setSourceContent(e,a))})),n;function p(e,t){if(null===e||void 0===e.source)n.add(t);else{var a=r?o.join(r,e.source):e.source;n.add(new l(e.originalLine,e.originalColumn,a,t,e.name))}}},l.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[i]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},l.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[i]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},l.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[i]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},l.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},l.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[i]?r.replaceRight(e,t):"string"==typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},l.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},l.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][i]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(o.fromSetString(n[t]),this.sourceContents[n[t]])},l.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},l.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),o=!1,a=null,i=null,l=null,u=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(a===n.source&&i===n.line&&l===n.column&&u===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),a=n.source,i=n.line,l=n.column,u=n.name,o=!0):o&&(r.addMapping({generated:{line:t.line,column:t.column}}),a=null,o=!1);for(var s=0,c=e.length;s<c;s++)10===e.charCodeAt(s)?(t.line++,t.column=0,s+1===c?(a=null,o=!1):o&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}}},728:(e,t)=>{t.getArg=function(e,t,r){if(t in e)return e[t];if(3===arguments.length)return r;throw new Error('"'+t+'" is a required argument.')};var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,n=/^data:.+\,.+$/;function o(e){var t=e.match(r);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function a(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function i(e){var r=e,n=o(e);if(n){if(!n.path)return e;r=n.path}for(var i,l=t.isAbsolute(r),u=r.split(/\/+/),s=0,c=u.length-1;c>=0;c--)"."===(i=u[c])?u.splice(c,1):".."===i?s++:s>0&&(""===i?(u.splice(c+1,s),s=0):(u.splice(c,2),s--));return""===(r=u.join("/"))&&(r=l?"/":"."),n?(n.path=r,a(n)):r}t.urlParse=o,t.urlGenerate=a,t.normalize=i,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var r=o(t),l=o(e);if(l&&(e=l.path||"/"),r&&!r.scheme)return l&&(r.scheme=l.scheme),a(r);if(r||t.match(n))return t;if(l&&!l.host&&!l.path)return l.host=t,a(l);var u="/"===t.charAt(0)?t:i(e.replace(/\/+$/,"")+"/"+t);return l?(l.path=u,a(l)):u},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(r)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var r=0;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/");if(n<0)return t;if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)};var l=!("__proto__"in Object.create(null));function u(e){return e}function s(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=l?u:function(e){return s(e)?"$"+e:e},t.fromSetString=l?u:function(e){return s(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,r){var n=e.source-t.source;return 0!==n||0!=(n=e.originalLine-t.originalLine)||0!=(n=e.originalColumn-t.originalColumn)||r||0!=(n=e.generatedColumn-t.generatedColumn)||0!=(n=e.generatedLine-t.generatedLine)?n:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine;return 0!==n||0!=(n=e.generatedColumn-t.generatedColumn)||r||0!=(n=e.source-t.source)||0!=(n=e.originalLine-t.originalLine)||0!=(n=e.originalColumn-t.originalColumn)?n:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine;return 0!==r||0!=(r=e.generatedColumn-t.generatedColumn)||0!==(r=c(e.source,t.source))||0!=(r=e.originalLine-t.originalLine)||0!=(r=e.originalColumn-t.originalColumn)?r:c(e.name,t.name)}},125:(e,t,r)=>{r(433).h,t.SourceMapConsumer=r(771).SourceMapConsumer,r(85)},538:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{dismissBuildError:()=>he,dismissRuntimeErrors:()=>ve,reportBuildError:()=>de,reportRuntimeError:()=>pe,setEditorHandler:()=>fe,startReportingRuntimeErrors:()=>ge,stopReportingRuntimeErrors:()=>ye});var e=null;function t(e,t){if(t.error){var r=t.error;r instanceof Error?e(r):e(new Error(r))}}function o(r,n){null===e&&(e=t.bind(void 0,n),r.addEventListener("error",e))}function a(t){null!==e&&(t.removeEventListener("error",e),e=null)}var i=null;function l(e,t){if(null==t||null==t.reason)return e(new Error("Unknown"));var r=t.reason;return r instanceof Error?e(r):e(new Error(r))}function u(e,t){null===i&&(i=l.bind(void 0,t),e.addEventListener("unhandledrejection",i))}function s(e){null!==i&&(e.removeEventListener("unhandledrejection",i),i=null)}var c=!1,f=10;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;if(!c)try{f=Error.stackTraceLimit,Error.stackTraceLimit=e,c=!0}catch(e){}}function p(){if(c)try{Error.stackTraceLimit=f,c=!1}catch(e){}}var h=[],g=function(){"undefined"!=typeof console&&(console.reactStack=function(e){return h.push(e)},console.reactStackEnd=function(e){return h.pop()})},m=function(){"undefined"!=typeof console&&(console.reactStack=void 0,console.reactStackEnd=void 0)},v=function(e,t){if("undefined"!=typeof console){var r=console[e];"function"==typeof r&&(console[e]=function(){try{var e=arguments[0];"string"==typeof e&&h.length>0&&t(e,h[h.length-1])}catch(e){setTimeout((function(){throw e}))}return r.apply(this,arguments)})}};function y(e,t){for(var r,n,o=function(e){return e.split("\n").filter((function(e){return!e.match(/^\s*in/)})).join("\n")}(e),a="",i=0;i<t.length;++i){var l=t[i],u=l.fileName,s=l.lineNumber;if(null!=u&&null!=s&&!(u===r&&"number"==typeof s&&"number"==typeof n&&Math.abs(s-n)<3)){r=u,n=s;var c=t[i].name;a+="in ".concat(c=c||"(anonymous function)"," (at ").concat(u,":").concat(s,")\n")}}return{message:o,stack:a}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function x(e,t,r){return x=w()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&b(o,r.prototype),o},x.apply(null,arguments)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&S(e.prototype,t),r&&S(e,r),e}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var O=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];C(this,e),this.lineNumber=t,this.content=r,this.highlight=n},T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null;C(this,e),t&&0===t.indexOf("Object.")&&(t=t.slice("Object.".length)),"friendlySyntaxErrorLabel"!==t&&"exports.__esModule"!==t&&"<anonymous>"!==t&&t||(t=null),this.functionName=t,this.fileName=r,this.lineNumber=n,this.columnNumber=o,this._originalFunctionName=i,this._originalFileName=l,this._originalLineNumber=u,this._originalColumnNumber=s,this._scriptCode=a,this._originalScriptCode=c}return _(e,[{key:"getFunctionName",value:function(){return this.functionName||"(anonymous function)"}},{key:"getSource",value:function(){var e="";return null!=this.fileName&&(e+=this.fileName+":"),null!=this.lineNumber&&(e+=this.lineNumber+":"),null!=this.columnNumber&&(e+=this.columnNumber+":"),e.slice(0,-1)}},{key:"toString",value:function(){var e=this.getFunctionName(),t=this.getSource();return"".concat(e).concat(t?" (".concat(t,")"):"")}}]),e}();const R=T;var L=/\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;function A(e){return L.exec(e).slice(1).map((function(e){var t=Number(e);return isNaN(t)?e:t}))}var P=/^\s*(at|in)\s.+(:\d+)/,N=/(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;function q(e){return e.filter((function(e){return P.test(e)||N.test(e)})).map((function(e){if(N.test(e)){var t=!1;/ > (eval|Function)/.test(e)&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g,":$1"),t=!0);var r=e.split(/[@]/g),n=r.pop();return x(R,[r.join("@")||(t?"eval":null)].concat(k(A(n))))}-1!==e.indexOf("(eval ")&&(e=e.replace(/(\(eval at [^()]*)|(\),.*$)/g,"")),-1!==e.indexOf("(at ")&&(e=e.replace(/\(at /,"("));var o=e.trim().split(/\s+/g).slice(1),a=o.pop();return x(R,[o.join(" ")||null].concat(k(A(a))))}))}function M(e){if(null==e)throw new Error("You cannot pass a null object.");if("string"==typeof e)return q(e.split("\n"));if(Array.isArray(e))return q(e);if("string"==typeof e.stack)return q(e.stack.split("\n"));throw new Error("The error you provided does not contain a stack trace.")}function D(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,o)}function I(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){D(a,n,o,i,l,"next",e)}function l(e){D(a,n,o,i,l,"throw",e)}i(void 0)}))}}var j=r(162),F=r.n(j),z=r(125),U=function(){function e(t){C(this,e),this.__source_map=t}return _(e,[{key:"getOriginalPosition",value:function(e,t){var r=this.__source_map.originalPositionFor({line:e,column:t});return{line:r.line,column:r.column,source:r.source}}},{key:"getGeneratedPosition",value:function(e,t,r){var n=this.__source_map.generatedPositionFor({source:e,line:t,column:r});return{line:n.line,column:n.column}}},{key:"getSource",value:function(e){return this.__source_map.sourceContentFor(e)}},{key:"getSources",value:function(){return this.__source_map.sources}}]),e}();function B(e,t){for(var r=/\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm,n=null;;){var o=r.exec(t);if(null==o)break;n=o}return n&&n[1]?Promise.resolve(n[1].toString()):Promise.reject("Cannot find a source map directive for ".concat(e,"."))}function H(e,t){return V.apply(this,arguments)}function V(){return(V=I(F().mark((function e(t,r){var n,o,a,i,l,u;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t,r);case 2:if(0!==(n=e.sent).indexOf("data:")){e.next=14;break}if(o=/^data:application\/json;([\w=:"-]+;)*base64,/,a=n.match(o)){e.next=8;break}throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");case 8:return n=n.substring(a[0].length),n=window.atob(n),n=JSON.parse(n),e.abrupt("return",new U(new z.SourceMapConsumer(n)));case 14:return i=t.lastIndexOf("/"),l=t.substring(0,i+1)+n,e.next=18,fetch(l).then((function(e){return e.json()}));case 18:return u=e.sent,e.abrupt("return",new U(new z.SourceMapConsumer(u)));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,r){"string"==typeof r&&(r=r.split("\n"));for(var n=[],o=Math.max(0,e-1-t);o<=Math.min(r.length-1,e-1+t);++o)n.push(new O(o+1,r[o],o===e-1));return n}var Y=r(268);function W(e){return $.apply(this,arguments)}function $(){return $=I(F().mark((function e(t){var r,n,o,a=arguments;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:3,n={},o=[],t.forEach((function(e){var t=e.fileName;null!=t&&-1===o.indexOf(t)&&o.push(t)})),e.next=6,(0,Y.Wo)(o.map(function(){var e=I(F().mark((function e(t){var r,o,a;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0===t.indexOf("webpack-internal:")?"/__get-internal-source?fileName=".concat(encodeURIComponent(t)):t,e.next=3,fetch(r).then((function(e){return e.text()}));case 3:return o=e.sent,e.next=6,H(t,o);case 6:a=e.sent,n[t]={fileSource:o,map:a};case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return e.abrupt("return",t.map((function(e){var t=e.functionName,o=e.fileName,a=e.lineNumber,i=e.columnNumber,l=n[o]||{},u=l.map,s=l.fileSource;if(null==u||null==a)return e;var c=u.getOriginalPosition(a,i),f=c.source,d=c.line,p=c.column,h=null==f?[]:u.getSource(f);return new R(t,o,a,i,G(a,r,s),t,f,d,p,G(d,r,h))})));case 7:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}var Q=r(538),J=r.n(Q);function K(e,t){var r=-1,n=-1;do{++r,n=t.indexOf(e,n+1)}while(-1!==n);return r}function X(e,t){return Z.apply(this,arguments)}function Z(){return Z=I(F().mark((function e(t,r){var n,o,a,i,l=arguments;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>2&&void 0!==l[2]?l[2]:3,o="object"==typeof t?t.contents:null,a="object"==typeof t?t.uri:t,null!=o){e.next=7;break}return e.next=6,fetch(a).then((function(e){return e.text()}));case 6:o=e.sent;case 7:return e.next=9,H(a,o);case 9:return i=e.sent,e.abrupt("return",r.map((function(e){var t=e.functionName,r=e.lineNumber,l=e.columnNumber;if(null!=e._originalLineNumber)return e;var u=e.fileName;if(u&&(u=J().normalize(u.replace(/[\\]+/g,"/"))),null==u)return e;var s=u,c=i.getSources().map((function(e){return e.replace(/[\\]+/g,"/")})).filter((function(e){var t=(e=J().normalize(e)).lastIndexOf(s);return-1!==t&&t===e.length-s.length})).map((function(e){return{token:e,seps:K(J().sep,J().normalize(e)),penalties:K("node_modules",e)+K("~",e)}})).sort((function(e,t){var r=Math.sign(e.seps-t.seps);return 0!==r?r:Math.sign(e.penalties-t.penalties)}));if(c.length<1||null==r)return new R(null,null,null,null,null,t,s,r,l,null);var f=c[0].token,d=i.getGeneratedPosition(f,r,l),p=d.line,h=d.column,g=i.getSource(f);return new R(t,a,p,h||null,G(p,n,o||[]),t,s,r,l,G(r,n,g))})));case 11:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}const ee=function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=M(e);return(e.__unmap_source?X(e.__unmap_source,r,t):W(r,t)).then((function(e){return 0===e.map((function(e){return e._originalFileName})).filter((function(e){return null!=e&&-1===e.indexOf("node_modules")})).length?null:e.filter((function(e){var t=e.functionName;return null==t||-1===t.indexOf("__stack_frame_overlay_proxy_console__")}))}))};var te=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];ee(t,r,3).then((function(n){null!=n&&e({error:t,unhandledRejection:r,contextSize:3,stackFrames:n})})).catch((function(e){console.log("Could not get the stack frames of error:",e)}))}},re={position:"fixed",top:"0",left:"0",width:"100%",height:"100%",border:"none","z-index":2147483647},ne=null,oe=!1,ae=!1,ie=null,le=null,ue=[],se=null,ce=null;function fe(e){ie=e,ne&&be()}function de(e){le=e,be()}function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};se=t,te(me(t))(e)}function he(){le=null,be()}function ge(e){if(null!==ce)throw new Error("Already listening");e.launchEditorEndpoint&&console.warn("Warning: `startReportingRuntimeErrors` doesn’t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "),se=e,ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/static/js/bundle.js",r=te(e);return o(window,(function(e){return r(e,!1)})),u(window,(function(e){return r(e,!0)})),d(),g(),v("error",(function(e,n){var o=y(e,n);r({message:o.message,stack:o.stack,__unmap_source:t},!1)})),function(){p(),s(window),a(window),m()}}(me(e),e.filename)}var me=function(e){return function(t){try{"function"==typeof e.onError&&e.onError.call(null)}finally{if(ue.some((function(e){return e.error===t.error})))return;ue=ue.concat([t]),be()}}};function ve(){ue=[],be()}function ye(){if(null===ce)throw new Error("Not currently listening");se=null;try{ce()}finally{ce=null}}function be(){if(!oe)if(ae)we();else{oe=!0;var e=window.document.createElement("iframe");!function(e,t){for(var r in e.setAttribute("style",""),t)t.hasOwnProperty(r)&&(e.style[r]=t[r])}(e,re),e.onload=function(){var t=e.contentDocument;if(null!=t&&null!=t.body){ne=e;var r=e.contentWindow.document.createElement("script");r.type="text/javascript",r.innerHTML='/*! For license information please see iframe-bundle.js.LICENSE.txt */\n(()=>{var e={5270:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3041:(e,t,r)=>{var n=r(6487);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}},e.exports.default=e.exports,e.exports.__esModule=!0},6487:(e,t,r)=>{var n=r(5270);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},7162:(e,t,r)=>{e.exports=r(2205)},8641:(e,t,r)=>{"use strict";t.rf=u;var n=r(8048),o=!1;function a(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var i=/\\r\\n|[\\n\\r\\u2028\\u2029]/;function l(e,t,r){var n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),a=r||{},i=a.linesAbove,l=void 0===i?2:i,u=a.linesBelow,s=void 0===u?3:u,c=n.line,f=n.column,d=o.line,p=o.column,h=Math.max(c-(l+1),0),g=Math.min(t.length,d+s);-1===c&&(h=0),-1===d&&(g=t.length);var m=d-c,v={};if(m)for(var y=0;y<=m;y++){var b=y+c;if(f)if(0===y){var w=t[b-1].length;v[b]=[f,w-f+1]}else if(y===m)v[b]=[0,p];else{var x=t[b-y].length;v[b]=[0,x]}else v[b]=!0}else v[c]=f===p?!f||[f,0]:[f,p-f];return{start:h,end:g,markerLines:v}}function u(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(r.highlightCode||r.forceColor)&&(0,n.shouldHighlight)(r),u=(0,n.getChalk)(r),s=a(u),c=function(e,t){return o?e(t):t},f=e.split(i),d=l(t,f,r),p=d.start,h=d.end,g=d.markerLines,m=t.start&&"number"===typeof t.start.column,v=String(h).length,y=o?(0,n.default)(e,r):e,b=y.split(i,h).slice(p,h).map((function(e,t){var n=p+1+t,o=" ".concat(n).slice(-v),a=" ".concat(o," |"),i=g[n],l=!g[n+1];if(i){var u="";if(Array.isArray(i)){var f=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\\t]/g," "),d=i[1]||1;u=["\\n ",c(s.gutter,a.replace(/\\d/g," "))," ",f,c(s.marker,"^").repeat(d)].join(""),l&&r.message&&(u+=" "+c(s.message,r.message))}return[c(s.marker,">"),c(s.gutter,a),e.length>0?" ".concat(e):"",u].join("")}return" ".concat(c(s.gutter,a)).concat(e.length>0?" ".concat(e):"")})).join("\\n");return r.message&&!m&&(b="".concat(" ".repeat(v+1)).concat(r.message,"\\n").concat(b)),o?u.reset(b):b}},1714:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isIdentifierStart=s,t.isIdentifierChar=c,t.isIdentifierName=function(e){for(var t=!0,r=0;r<e.length;r++){var n=e.charCodeAt(r);if(55296===(64512&n)&&r+1<e.length){var o=e.charCodeAt(++r);56320===(64512&o)&&(n=65536+((1023&n)<<10)+(1023&o))}if(t){if(t=!1,!s(n))return!1}else if(!c(n))return!1}return!t};var r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",o=new RegExp("["+r+"]"),a=new RegExp("["+r+n+"]");r=n=null;var i=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],l=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function u(e,t){for(var r=65536,n=0,o=t.length;n<o;n+=2){if((r+=t[n])>e)return!1;if((r+=t[n+1])>=e)return!0}return!1}function s(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&o.test(String.fromCharCode(e)):u(e,i)))}function c(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&a.test(String.fromCharCode(e)):u(e,i)||u(e,l))))}},3012:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isIdentifierName",{enumerable:!0,get:function(){return n.isIdentifierName}}),Object.defineProperty(t,"isIdentifierChar",{enumerable:!0,get:function(){return n.isIdentifierChar}}),Object.defineProperty(t,"isIdentifierStart",{enumerable:!0,get:function(){return n.isIdentifierStart}}),Object.defineProperty(t,"isReservedWord",{enumerable:!0,get:function(){return o.isReservedWord}}),Object.defineProperty(t,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return o.isStrictBindOnlyReservedWord}}),Object.defineProperty(t,"isStrictBindReservedWord",{enumerable:!0,get:function(){return o.isStrictBindReservedWord}}),Object.defineProperty(t,"isStrictReservedWord",{enumerable:!0,get:function(){return o.isStrictReservedWord}}),Object.defineProperty(t,"isKeyword",{enumerable:!0,get:function(){return o.isKeyword}});var n=r(1714),o=r(2562)},2562:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isReservedWord=l,t.isStrictReservedWord=u,t.isStrictBindOnlyReservedWord=s,t.isStrictBindReservedWord=function(e,t){return u(e,t)||s(e)},t.isKeyword=function(e){return o.has(e)};var r=["implements","interface","let","package","private","protected","public","static","yield"],n=["eval","arguments"],o=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),a=new Set(r),i=new Set(n);function l(e,t){return t&&"await"===e||"enum"===e}function u(e,t){return l(e,t)||a.has(e)}function s(e){return i.has(e)}},8048:(e,t,r)=>{"use strict";var n=r(3041).default,o=r(7162);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(m(t)){var r=v(t),n=s(r);return g(n,e)}return e},t.getChalk=v,t.shouldHighlight=m;var a=r(690),i=r(3012),l=r(4043),u=new Set(["as","async","from","get","of","set"]);function s(e){return{keyword:e.cyan,capitalized:e.yellow,jsxIdentifier:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}var c,f=/\\r\\n|[\\n\\r\\u2028\\u2029]/,d=/^[()[\\]{}]$/,p=/^[a-z][\\w-]*$/i,h=function(e,t,r){if("name"===e.type){if((0,i.isKeyword)(e.value)||(0,i.isStrictReservedWord)(e.value,!0)||u.has(e.value))return"keyword";if(p.test(e.value)&&("<"===r[t-1]||"</"==r.substr(t-2,2)))return"jsxIdentifier";if(e.value[0]!==e.value[0].toLowerCase())return"capitalized"}return"punctuator"===e.type&&d.test(e.value)?"bracket":"invalid"!==e.type||"@"!==e.value&&"#"!==e.value?e.type:"punctuator"};function g(e,t){var r,o="",a=n(c(t));try{var i=function(){var t=r.value,n=t.type,a=t.value,i=e[n];o+=i?a.split(f).map((function(e){return i(e)})).join("\\n"):a};for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}return o}function m(e){return!!l.supportsColor||e.forceColor}function v(e){return e.forceColor?new l.constructor({enabled:!0,level:1}):l}c=o.mark((function e(t){var r,n;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=a.default.exec(t))){e.next=6;break}return n=a.matchToToken(r),e.next=4,{type:h(n,r.index,t),value:n.value};case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)}))},2611:(e,t,r)=>{"use strict";e=r.nmd(e);var n=r(1444),o=function(e,t){return function(){var r=e.apply(n,arguments);return"[".concat(r+t,"m")}},a=function(e,t){return function(){var r=e.apply(n,arguments);return"[".concat(38+t,";5;").concat(r,"m")}},i=function(e,t){return function(){var r=e.apply(n,arguments);return"[".concat(38+t,";2;").concat(r[0],";").concat(r[1],";").concat(r[2],"m")}};Object.defineProperty(e,"exports",{enumerable:!0,get:function(){var e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.grey=t.color.gray;for(var r=0,l=Object.keys(t);r<l.length;r++){for(var u=l[r],s=t[u],c=0,f=Object.keys(s);c<f.length;c++){var d=f[c],p=s[d];t[d]={open:"[".concat(p[0],"m"),close:"[".concat(p[1],"m")},s[d]=t[d],e.set(p[0],p[1])}Object.defineProperty(t,u,{value:s,enumerable:!1}),Object.defineProperty(t,"codes",{value:e,enumerable:!1})}var h=function(e){return e},g=function(e,t,r){return[e,t,r]};t.color.close="[39m",t.bgColor.close="[49m",t.color.ansi={ansi:o(h,0)},t.color.ansi256={ansi256:a(h,0)},t.color.ansi16m={rgb:i(g,0)},t.bgColor.ansi={ansi:o(h,10)},t.bgColor.ansi256={ansi256:a(h,10)},t.bgColor.ansi16m={rgb:i(g,10)};for(var m=0,v=Object.keys(n);m<v.length;m++){var y=v[m];if("object"===typeof n[y]){var b=n[y];"ansi16"===y&&(y="ansi"),"ansi16"in b&&(t.color.ansi[y]=o(b.ansi16,0),t.bgColor.ansi[y]=o(b.ansi16,10)),"ansi256"in b&&(t.color.ansi256[y]=a(b.ansi256,0),t.bgColor.ansi256[y]=a(b.ansi256,10)),"rgb"in b&&(t.color.ansi16m[y]=i(b.rgb,0),t.bgColor.ansi16m[y]=i(b.rgb,10))}}return t}})},4043:(e,t,r)=>{"use strict";var n=r(3041).default,o=r(2865),a=r(2611),i=r(5215).stdout,l=r(7093),u="win32"===process.platform&&!({NODE_ENV:"production"}.TERM||"").toLowerCase().startsWith("xterm"),s=["ansi","ansi","ansi256","ansi16m"],c=new Set(["gray"]),f=Object.create(null);function d(e,t){t=t||{};var r=i?i.level:0;e.level=void 0===t.level?r:t.level,e.enabled="enabled"in t?t.enabled:e.level>0}function p(e){if(!this||!(this instanceof p)||this.template){var t={};return d(t,e),t.template=function(){var e=[].slice.call(arguments);return _.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,p.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=p,t.template}d(this,e)}u&&(a.blue.open="[94m");for(var h=function(){var e=m[g];a[e].closeRe=new RegExp(o(a[e].close),"g"),f[e]={get:function(){var t=a[e];return S.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}},g=0,m=Object.keys(a);g<m.length;g++)h();f.visible={get:function(){return S.call(this,this._styles||[],!0,"visible")}},a.color.closeRe=new RegExp(o(a.color.close),"g");for(var v=function(){var e=b[y];if(c.has(e))return"continue";f[e]={get:function(){var t=this.level;return function(){var r=a.color[s[t]][e].apply(null,arguments),n={open:r,close:a.color.close,closeRe:a.color.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},y=0,b=Object.keys(a.color.ansi);y<b.length;y++)v();a.bgColor.closeRe=new RegExp(o(a.bgColor.close),"g");for(var w=function(){var e=k[x];if(c.has(e))return"continue";var t="bg"+e[0].toUpperCase()+e.slice(1);f[t]={get:function(){var t=this.level;return function(){var r=a.bgColor[s[t]][e].apply(null,arguments),n={open:r,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return S.call(this,this._styles?this._styles.concat(n):[n],this._empty,e)}}}},x=0,k=Object.keys(a.bgColor.ansi);x<k.length;x++)w();var E=Object.defineProperties((function(){}),f);function S(e,t,r){var n=function e(){return T.apply(e,arguments)};n._styles=e,n._empty=t;var o=this;return Object.defineProperty(n,"level",{enumerable:!0,get:function(){return o.level},set:function(e){o.level=e}}),Object.defineProperty(n,"enabled",{enumerable:!0,get:function(){return o.enabled},set:function(e){o.enabled=e}}),n.hasGrey=this.hasGrey||"gray"===r||"grey"===r,n.__proto__=E,n}function T(){var e=arguments,t=e.length,r=String(arguments[0]);if(0===t)return"";if(t>1)for(var o=1;o<t;o++)r+=" "+e[o];if(!this.enabled||this.level<=0||!r)return this._empty?"":r;var i=a.dim.open;u&&this.hasGrey&&(a.dim.open="");var l,s=n(this._styles.slice().reverse());try{for(s.s();!(l=s.n()).done;){var c=l.value;r=(r=c.open+r.replace(c.closeRe,c.open)+c.close).replace(/\\r?\\n/g,"".concat(c.close,"$&").concat(c.open))}}catch(e){s.e(e)}finally{s.f()}return a.dim.open=i,r}function _(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(" ");for(var r=[].slice.call(arguments,2),n=[t.raw[0]],o=1;o<t.length;o++)n.push(String(r[o-1]).replace(/[{}\\\\]/g,"\\\\$&")),n.push(String(t.raw[o]));return l(e,n.join(""))}Object.defineProperties(p.prototype,f),e.exports=p(),e.exports.supportsColor=i,e.exports.default=e.exports},7093:(e,t,r)=>{"use strict";var n=r(3041).default,o=/(?:\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.))|(?:\\{(~)?(\\w+(?:\\([^)]*\\))?(?:\\.\\w+(?:\\([^)]*\\))?)*)(?:[ \\t]|(?=\\r?\\n)))|(\\})|((?:.|[\\r\\n\\f])+?)/gi,a=/(?:^|\\.)(\\w+)(?:\\(([^)]*)\\))?/g,i=/^([\'"])((?:\\\\.|(?!\\1)[^\\\\])*)\\1$/,l=/\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.)|([^\\\\])/gi,u=new Map([["n","\\n"],["r","\\r"],["t","\\t"],["b","\\b"],["f","\\f"],["v","\\v"],["0","\\0"],["\\\\","\\\\"],["e",""],["a",""]]);function s(e){return"u"===e[0]&&5===e.length||"x"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):u.get(e)||e}function c(e,t){var r,o,a=[],u=t.trim().split(/\\s*,\\s*/g),c=n(u);try{for(c.s();!(o=c.n()).done;){var f=o.value;if(isNaN(f)){if(!(r=f.match(i)))throw new Error("Invalid Chalk template style argument: ".concat(f," (in style \'").concat(e,"\')"));a.push(r[2].replace(l,(function(e,t,r){return t?s(t):r})))}else a.push(Number(f))}}catch(e){c.e(e)}finally{c.f()}return a}function f(e){a.lastIndex=0;for(var t,r=[];null!==(t=a.exec(e));){var n=t[1];if(t[2]){var o=c(n,t[2]);r.push([n].concat(o))}else r.push([n])}return r}function d(e,t){var r,o={},a=n(t);try{for(a.s();!(r=a.n()).done;){var i,l=r.value,u=n(l.styles);try{for(u.s();!(i=u.n()).done;){var s=i.value;o[s[0]]=l.inverse?null:s.slice(1)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){a.e(e)}finally{a.f()}for(var c=e,f=0,d=Object.keys(o);f<d.length;f++){var p=d[f];if(Array.isArray(o[p])){if(!(p in c))throw new Error("Unknown Chalk style: ".concat(p));c=o[p].length>0?c[p].apply(c,o[p]):c[p]}}return c}e.exports=function(e,t){var r=[],n=[],a=[];if(t.replace(o,(function(t,o,i,l,u,c){if(o)a.push(s(o));else if(l){var p=a.join("");a=[],n.push(0===r.length?p:d(e,r)(p)),r.push({inverse:i,styles:f(l)})}else if(u){if(0===r.length)throw new Error("Found extraneous } in Chalk template literal");n.push(d(e,r)(a.join(""))),a=[],r.pop()}else a.push(c)})),n.push(a.join("")),r.length>0){var i="Chalk template literal is missing ".concat(r.length," closing bracket").concat(1===r.length?"":"s"," (`}`)");throw new Error(i)}return n.join("")}},4601:(e,t,r)=>{var n=r(509),o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);var i=e.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw new Error("missing channels property: "+l);if(!("labels"in i[l]))throw new Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw new Error("channel and label counts mismatch: "+l);var u=i[l].channels,s=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:u}),Object.defineProperty(i[l],"labels",{value:s})}i.rgb.hsl=function(e){var t,r,n=e[0]/255,o=e[1]/255,a=e[2]/255,i=Math.min(n,o,a),l=Math.max(n,o,a),u=l-i;return l===i?t=0:n===l?t=(o-a)/u:o===l?t=2+(a-n)/u:a===l&&(t=4+(n-o)/u),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+l)/2,[t,100*(l===i?0:r<=.5?u/(l+i):u/(2-l-i)),100*r]},i.rgb.hsv=function(e){var t,r,n,o,a,i=e[0]/255,l=e[1]/255,u=e[2]/255,s=Math.max(i,l,u),c=s-Math.min(i,l,u),f=function(e){return(s-e)/6/c+.5};return 0===c?o=a=0:(a=c/s,t=f(i),r=f(l),n=f(u),i===s?o=n-r:l===s?o=1/3+t-n:u===s&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*s]},i.rgb.hwb=function(e){var t=e[0],r=e[1],n=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(r,n))),100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},i.rgb.cmyk=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-o)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-o-t)/(1-t)||0),100*t]},i.rgb.keyword=function(e){var t=o[e];if(t)return t;var r,a,i,l=1/0;for(var u in n)if(n.hasOwnProperty(u)){var s=n[u],c=(a=e,i=s,Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)+Math.pow(a[2]-i[2],2));c<l&&(l=c,r=u)}return r},i.keyword.rgb=function(e){return n[e]},i.rgb.xyz=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},i.rgb.lab=function(e){var t=i.rgb.xyz(e),r=t[0],n=t[1],o=t[2];return n/=100,o/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]},i.hsl.rgb=function(e){var t,r,n,o,a,i=e[0]/360,l=e[1]/100,u=e[2]/100;if(0===l)return[a=255*u,a,a];t=2*u-(r=u<.5?u*(1+l):u+l-u*l),o=[0,0,0];for(var s=0;s<3;s++)(n=i+1/3*-(s-1))<0&&n++,n>1&&n--,a=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,o[s]=255*a;return o},i.hsl.hsv=function(e){var t=e[0],r=e[1]/100,n=e[2]/100,o=r,a=Math.max(n,.01);return r*=(n*=2)<=1?n:2-n,o*=a<=1?a:2-a,[t,100*(0===n?2*o/(a+o):2*r/(n+r)),100*((n+r)/2)]},i.hsv.rgb=function(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,o=Math.floor(t)%6,a=t-Math.floor(t),i=255*n*(1-r),l=255*n*(1-r*a),u=255*n*(1-r*(1-a));switch(n*=255,o){case 0:return[n,u,i];case 1:return[l,n,i];case 2:return[i,n,u];case 3:return[i,l,n];case 4:return[u,i,n];case 5:return[n,i,l]}},i.hsv.hsl=function(e){var t,r,n,o=e[0],a=e[1]/100,i=e[2]/100,l=Math.max(i,.01);return n=(2-a)*i,r=a*l,[o,100*(r=(r/=(t=(2-a)*l)<=1?t:2-t)||0),100*(n/=2)]},i.hwb.rgb=function(e){var t,r,n,o,a,i,l,u=e[0]/360,s=e[1]/100,c=e[2]/100,f=s+c;switch(f>1&&(s/=f,c/=f),n=6*u-(t=Math.floor(6*u)),0!==(1&t)&&(n=1-n),o=s+n*((r=1-c)-s),t){default:case 6:case 0:a=r,i=o,l=s;break;case 1:a=o,i=r,l=s;break;case 2:a=s,i=r,l=o;break;case 3:a=s,i=o,l=r;break;case 4:a=o,i=s,l=r;break;case 5:a=r,i=s,l=o}return[255*a,255*i,255*l]},i.cmyk.rgb=function(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},i.xyz.rgb=function(e){var t,r,n,o=e[0]/100,a=e[1]/100,i=e[2]/100;return r=-.9689*o+1.8758*a+.0415*i,n=.0557*o+-.204*a+1.057*i,t=(t=3.2406*o+-1.5372*a+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(e){var t,r,n,o=e[0];t=e[1]/500+(r=(o+16)/116),n=r-e[2]/200;var a=Math.pow(r,3),i=Math.pow(t,3),l=Math.pow(n,3);return r=a>.008856?a:(r-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,[t*=95.047,r*=100,n*=108.883]},i.lab.lch=function(e){var t,r=e[0],n=e[1],o=e[2];return(t=360*Math.atan2(o,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+o*o),t]},i.lch.lab=function(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]},i.rgb.ansi16=function(e){var t=e[0],r=e[1],n=e[2],o=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(o=Math.round(o/50)))return 30;var a=30+(Math.round(n/255)<<2|Math.round(r/255)<<1|Math.round(t/255));return 2===o&&(a+=60),a},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var r;return e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255]},i.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var r=t[0];3===t[0].length&&(r=r.split("").map((function(e){return e+e})).join(""));var n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(e){var t,r=e[0]/255,n=e[1]/255,o=e[2]/255,a=Math.max(Math.max(r,n),o),i=Math.min(Math.min(r,n),o),l=a-i;return t=l<=0?0:a===r?(n-o)/l%6:a===n?2+(o-r)/l:4+(r-n)/l+4,t/=6,[360*(t%=1),100*l,100*(l<1?i/(1-l):0)]},i.hsl.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=1,o=0;return(n=r<.5?2*t*r:2*t*(1-r))<1&&(o=(r-.5*n)/(1-n)),[e[0],100*n,100*o]},i.hsv.hcg=function(e){var t=e[1]/100,r=e[2]/100,n=t*r,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.hcg.rgb=function(e){var t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];var o,a=[0,0,0],i=t%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=u,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=u,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=u}return o=(1-r)*n,[255*(r*a[0]+o),255*(r*a[1]+o),255*(r*a[2]+o)]},i.hcg.hsv=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t),n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},i.hcg.hsl=function(e){var t=e[1]/100,r=e[2]/100*(1-t)+.5*t,n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},i.hcg.hwb=function(e){var t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},i.hwb.hcg=function(e){var t=e[1]/100,r=1-e[2]/100,n=r-t,o=0;return n<1&&(o=(r-n)/(1-n)),[e[0],100*n,100*o]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},1444:(e,t,r)=>{var n=r(4601),o=r(1595),a={};Object.keys(n).forEach((function(e){a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});var t=o(e);Object.keys(t).forEach((function(r){var n=t[r];a[e][r]=function(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var r=e(t);if("object"===typeof r)for(var n=r.length,o=0;o<n;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=a},1595:(e,t,r)=>{var n=r(4601);function o(e){var t=function(){for(var e={},t=Object.keys(n),r=t.length,o=0;o<r;o++)e[t[o]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;)for(var o=r.pop(),a=Object.keys(n[o]),i=a.length,l=0;l<i;l++){var u=a[l],s=t[u];-1===s.distance&&(s.distance=t[o].distance+1,s.parent=o,r.unshift(u))}return t}function a(e,t){return function(r){return t(e(r))}}function i(e,t){for(var r=[t[e].parent,e],o=n[t[e].parent][e],i=t[e].parent;t[i].parent;)r.unshift(t[i].parent),o=a(n[t[i].parent][i],o),i=t[i].parent;return o.conversion=r,o}e.exports=function(e){for(var t=o(e),r={},n=Object.keys(t),a=n.length,l=0;l<a;l++){var u=n[l];null!==t[u].parent&&(r[u]=i(u,t))}return r}},509:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},2865:e=>{"use strict";var t=/[|\\\\{}()[\\]^$+*?.]/g;e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\\\$&")}},5215:e=>{"use strict";e.exports={stdout:!1,stderr:!1}},2434:e=>{"use strict";var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var r=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0,this.decorations=[]}return t(e,null,[{key:"escapeForHtml",value:function(t){return(new e).escapeForHtml(t)}},{key:"linkify",value:function(t){return(new e).linkify(t)}},{key:"ansiToHtml",value:function(t,r){return(new e).ansiToHtml(t,r)}},{key:"ansiToJson",value:function(t,r){return(new e).ansiToJson(t,r)}},{key:"ansiToText",value:function(t){return(new e).ansiToText(t)}}]),t(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(r[e][t].color);for(var n=[0,95,135,175,215,255],o=function(e,t,r){return n[e]+", "+n[t]+", "+n[r]},a=0;a<6;++a)for(var i=0;i<6;++i)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(o(a,i,l));for(var u=8,s=0;s<24;++s,u+=10)this.PALETTE_COLORS.push(o(u,u,u))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>]/gm,(function(e){return"&"==e?"&amp;":"<"==e?"&lt;":">"==e?"&gt;":""}))}},{key:"linkify",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,(function(e){return\'<a href="\'+e+\'">\'+e+"</a>"}))}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,r){var n=this,o=e.split(/\\033\\[/),a=o.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=o.map((function(e){return n.processChunk(e,t,r)}));if(t&&t.json){var l=this.processChunkJson("");return l.content=a,l.clearLine=t.clearLine,i.unshift(l),t.remove_empty&&(i=i.filter((function(e){return!e.isEmpty()}))),i}return i.unshift(a),i.join("")}},{key:"processChunkJson",value:function(e,t,n){var o=(t="undefined"==typeof t?{}:t).use_classes="undefined"!=typeof t.use_classes&&t.use_classes,a=t.key=o?"class":"color",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:!1,clearLine:t.clearLine,decoration:null,decorations:[],was_processed:!1,isEmpty:function(){return!i.content}},l=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!l)return i;i.content=l[4];var u=l[2].split(";");if(""!==l[1]||"m"!==l[3])return i;if(!n)return i;for(var s=this;u.length>0;){var c=u.shift(),f=parseInt(c);if(isNaN(f)||0===f)s.fg=s.bg=null,s.decorations=[];else if(1===f)s.decorations.push("bold");else if(2===f)s.decorations.push("dim");else if(3===f)s.decorations.push("italic");else if(4===f)s.decorations.push("underline");else if(5===f)s.decorations.push("blink");else if(7===f)s.decorations.push("reverse");else if(8===f)s.decorations.push("hidden");else if(9===f)s.decorations.push("strikethrough");else if(21===f)s.removeDecoration("bold");else if(22===f)s.removeDecoration("bold"),s.removeDecoration("dim");else if(23===f)s.removeDecoration("italic");else if(24===f)s.removeDecoration("underline");else if(25===f)s.removeDecoration("blink");else if(27===f)s.removeDecoration("reverse");else if(28===f)s.removeDecoration("hidden");else if(29===f)s.removeDecoration("strikethrough");else if(39===f)s.fg=null;else if(49===f)s.bg=null;else if(f>=30&&f<38)s.fg=r[0][f%10][a];else if(f>=90&&f<98)s.fg=r[1][f%10][a];else if(f>=40&&f<48)s.bg=r[0][f%10][a];else if(f>=100&&f<108)s.bg=r[1][f%10][a];else if(38===f||48===f){var d=38===f;if(u.length>=1){var p=u.shift();if("5"===p&&u.length>=1){var h=parseInt(u.shift());if(h>=0&&h<=255)if(o){var g=h>=16?"ansi-palette-"+h:r[h>7?1:0][h%8].class;d?s.fg=g:s.bg=g}else this.PALETTE_COLORS||s.setupPalette(),d?s.fg=this.PALETTE_COLORS[h]:s.bg=this.PALETTE_COLORS[h]}else if("2"===p&&u.length>=3){var m=parseInt(u.shift()),v=parseInt(u.shift()),y=parseInt(u.shift());if(m>=0&&m<=255&&v>=0&&v<=255&&y>=0&&y<=255){var b=m+", "+v+", "+y;o?d?(s.fg="ansi-truecolor",s.fg_truecolor=b):(s.bg="ansi-truecolor",s.bg_truecolor=b):d?s.fg=b:s.bg=b}}}}}if(null===s.fg&&null===s.bg&&0===s.decorations.length)return i;return i.fg=s.fg,i.bg=s.bg,i.fg_truecolor=s.fg_truecolor,i.bg_truecolor=s.bg_truecolor,i.decorations=s.decorations,i.decoration=s.decorations.slice(-1).pop()||null,i.was_processed=!0,i}},{key:"processChunk",value:function(e,t,n){var o=this;t=t||{};var a=this.processChunkJson(e,t,n),i=t.use_classes;if(a.decorations=a.decorations.filter((function(e){if("reverse"===e){a.fg||(a.fg=r[0][7][i?"class":"color"]),a.bg||(a.bg=r[0][0][i?"class":"color"]);var t=a.fg;a.fg=a.bg,a.bg=t;var n=a.fg_truecolor;return a.fg_truecolor=a.bg_truecolor,a.bg_truecolor=n,a.isInverted=!0,!1}return!0})),t.json)return a;if(a.isEmpty())return"";if(!a.was_processed)return a.content;var l=[],u=[],s=[],c={},f=function(e){var t=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&t.push("data-"+r+\'="\'+o.escapeForHtml(e[r])+\'"\');return t.length>0?" "+t.join(" "):""};return a.isInverted&&(c["ansi-is-inverted"]="true"),a.fg&&(i?(l.push(a.fg+"-fg"),null!==a.fg_truecolor&&(c["ansi-truecolor-fg"]=a.fg_truecolor,a.fg_truecolor=null)):l.push("color:rgb("+a.fg+")")),a.bg&&(i?(l.push(a.bg+"-bg"),null!==a.bg_truecolor&&(c["ansi-truecolor-bg"]=a.bg_truecolor,a.bg_truecolor=null)):l.push("background-color:rgb("+a.bg+")")),a.decorations.forEach((function(e){i?u.push("ansi-"+e):"bold"===e?u.push("font-weight:bold"):"dim"===e?u.push("opacity:0.5"):"italic"===e?u.push("font-style:italic"):"hidden"===e?u.push("visibility:hidden"):"strikethrough"===e?s.push("line-through"):s.push(e)})),s.length&&u.push("text-decoration:"+s.join(" ")),i?\'<span class="\'+l.concat(u).join(" ")+\'"\'+f(c)+">"+a.content+"</span>":\'<span style="\'+l.concat(u).join(";")+\'"\'+f(c)+">"+a.content+"</span>"}},{key:"removeDecoration",value:function(e){var t=this.decorations.indexOf(e);t>=0&&this.decorations.splice(t,1)}}]),e}();e.exports=n},2457:(e,t,r)=>{"use strict";function n(e){a.length||(o(),!0),a[a.length]=e}e.exports=n;var o,a=[],i=0;function l(){for(;i<a.length;){var e=i;if(i+=1,a[e].call(),i>1024){for(var t=0,r=a.length-i;t<r;t++)a[t]=a[t+i];a.length-=i,i=0}}a.length=0,i=0,!1}var u,s,c,f="undefined"!==typeof r.g?r.g:self,d=f.MutationObserver||f.WebKitMutationObserver;function p(e){return function(){var t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}"function"===typeof d?(u=1,s=new d(l),c=document.createTextNode(""),s.observe(c,{characterData:!0}),o=function(){u=-u,c.data=u}):o=p(l),n.requestFlush=o,n.makeRequestCallFromTimer=p},6438:(e,t,r)=>{var n=r(4323),o=r(8936),a=r(7429),i=n.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not a function")}},4887:(e,t,r)=>{var n=r(4323),o=r(1568),a=r(7429),i=n.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not a constructor")}},4846:(e,t,r)=>{var n=r(4323),o=r(8936),a=n.String,i=n.TypeError;e.exports=function(e){if("object"==typeof e||o(e))return e;throw i("Can\'t set "+a(e)+" as a prototype")}},149:(e,t,r)=>{var n=r(8036),o=r(5313),a=r(8734),i=n("unscopables"),l=Array.prototype;void 0==l[i]&&a.f(l,i,{configurable:!0,value:o(null)}),e.exports=function(e){l[i][e]=!0}},2874:(e,t,r)=>{var n=r(4323),o=r(2038),a=n.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw a("Incorrect invocation")}},5561:(e,t,r)=>{var n=r(4323),o=r(1784),a=n.String,i=n.TypeError;e.exports=function(e){if(o(e))return e;throw i(a(e)+" is not an object")}},7826:(e,t,r)=>{var n=r(8244);e.exports=n((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},8602:(e,t,r)=>{"use strict";var n=r(4323),o=r(2604),a=r(8011),i=r(4234),l=r(5554),u=r(5271),s=r(1568),c=r(1472),f=r(8212),d=r(7481),p=r(1913),h=n.Array;e.exports=function(e){var t=i(e),r=s(this),n=arguments.length,g=n>1?arguments[1]:void 0,m=void 0!==g;m&&(g=o(g,n>2?arguments[2]:void 0));var v,y,b,w,x,k,E=p(t),S=0;if(!E||this==h&&u(E))for(v=c(t),y=r?new this(v):h(v);v>S;S++)k=m?g(t[S],S):t[S],f(y,S,k);else for(x=(w=d(t,E)).next,y=r?new this:[];!(b=a(x,w)).done;S++)k=m?l(w,g,[b.value,S],!0):b.value,f(y,S,k);return y.length=S,y}},3336:(e,t,r)=>{var n=r(2653),o=r(921),a=r(1472),i=function(e){return function(t,r,i){var l,u=n(t),s=a(u),c=o(i,s);if(e&&r!=r){for(;s>c;)if((l=u[c++])!=l)return!0}else for(;s>c;c++)if((e||c in u)&&u[c]===r)return e||c||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},5241:(e,t,r)=>{var n=r(2604),o=r(4471),a=r(13),i=r(4234),l=r(1472),u=r(4264),s=o([].push),c=function(e){var t=1==e,r=2==e,o=3==e,c=4==e,f=6==e,d=7==e,p=5==e||f;return function(h,g,m,v){for(var y,b,w=i(h),x=a(w),k=n(g,m),E=l(x),S=0,T=v||u,_=t?T(h,E):r||d?T(h,0):void 0;E>S;S++)if((p||S in x)&&(b=k(y=x[S],S,w),e))if(t)_[S]=b;else if(b)switch(e){case 3:return!0;case 5:return y;case 6:return S;case 2:s(_,y)}else switch(e){case 4:return!1;case 7:s(_,y)}return f?-1:o||c?c:_}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},5460:(e,t,r)=>{var n=r(8244),o=r(8036),a=r(7790),i=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8942:(e,t,r)=>{var n=r(4323),o=r(921),a=r(1472),i=r(8212),l=n.Array,u=Math.max;e.exports=function(e,t,r){for(var n=a(e),s=o(t,n),c=o(void 0===r?n:r,n),f=l(u(c-s,0)),d=0;s<c;s++,d++)i(f,d,e[s]);return f.length=d,f}},3707:(e,t,r)=>{var n=r(4471);e.exports=n([].slice)},1431:(e,t,r)=>{var n=r(4323),o=r(8997),a=r(1568),i=r(1784),l=r(8036)("species"),u=n.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(a(t)&&(t===u||o(t.prototype))||i(t)&&null===(t=t[l]))&&(t=void 0)),void 0===t?u:t}},4264:(e,t,r)=>{var n=r(1431);e.exports=function(e,t){return new(n(e))(0===t?0:t)}},5554:(e,t,r)=>{var n=r(5561),o=r(6907);e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(t){o(e,"throw",t)}}},9274:(e,t,r)=>{var n=r(8036)("iterator"),o=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){o=!0}};i[n]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(e){}return r}},2708:(e,t,r)=>{var n=r(4471),o=n({}.toString),a=n("".slice);e.exports=function(e){return a(o(e),8,-1)}},782:(e,t,r)=>{var n=r(4323),o=r(7452),a=r(8936),i=r(2708),l=r(8036)("toStringTag"),u=n.Object,s="Arguments"==i(function(){return arguments}());e.exports=o?i:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=u(e),l))?r:s?i(t):"Object"==(n=i(t))&&a(t.callee)?"Arguments":n}},8216:(e,t,r)=>{"use strict";var n=r(8011),o=r(6438),a=r(5561);e.exports=function(){for(var e=a(this),t=o(e.add),r=0,i=arguments.length;r<i;r++)n(t,e,arguments[r]);return e}},5424:(e,t,r)=>{"use strict";var n=r(8011),o=r(6438),a=r(5561);e.exports=function(){for(var e,t=a(this),r=o(t.delete),i=!0,l=0,u=arguments.length;l<u;l++)e=n(r,t,arguments[l]),i=i&&e;return!!i}},2858:(e,t,r)=>{"use strict";var n=r(2604),o=r(8011),a=r(6438),i=r(4887),l=r(7478),u=[].push;e.exports=function(e){var t,r,s,c,f=arguments.length,d=f>1?arguments[1]:void 0;return i(this),(t=void 0!==d)&&a(d),void 0==e?new this:(r=[],t?(s=0,c=n(d,f>2?arguments[2]:void 0),l(e,(function(e){o(u,r,c(e,s++))}))):l(e,u,{that:r}),new this(r))}},2256:(e,t,r)=>{"use strict";var n=r(3707);e.exports=function(){return new this(n(arguments))}},4674:(e,t,r)=>{"use strict";var n=r(8734).f,o=r(5313),a=r(4342),i=r(2604),l=r(2874),u=r(7478),s=r(5498),c=r(3208),f=r(6122),d=r(3289).fastKey,p=r(9523),h=p.set,g=p.getterFor;e.exports={getConstructor:function(e,t,r,s){var c=e((function(e,n){l(e,p),h(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=n&&u(n,e[s],{that:e,AS_ENTRIES:r})})),p=c.prototype,m=g(t),v=function(e,t,r){var n,o,a=m(e),i=y(e,t);return i?i.value=r:(a.last=i={index:o=d(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),f?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},y=function(e,t){var r,n=m(e),o=d(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(p,{clear:function(){for(var e=m(this),t=e.index,r=e.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=this,r=m(t),n=y(t,e);if(n){var o=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),r.first==n&&(r.first=o),r.last==n&&(r.last=a),f?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=m(this),n=i(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!y(this,e)}}),a(p,r?{get:function(e){var t=y(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),f&&n(p,"size",{get:function(){return m(this).size}}),c},setStrong:function(e,t,r){var n=t+" Iterator",o=g(t),a=g(n);s(e,t,(function(e,t){h(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=a(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(t)}}},7088:(e,t,r)=>{"use strict";var n=r(7443),o=r(4323),a=r(4471),i=r(5257),l=r(7842),u=r(3289),s=r(7478),c=r(2874),f=r(8936),d=r(1784),p=r(8244),h=r(9274),g=r(3107),m=r(849);e.exports=function(e,t,r){var v=-1!==e.indexOf("Map"),y=-1!==e.indexOf("Weak"),b=v?"set":"add",w=o[e],x=w&&w.prototype,k=w,E={},S=function(e){var t=a(x[e]);l(x,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(y&&!d(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return y&&!d(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!d(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(i(e,!f(w)||!(y||x.forEach&&!p((function(){(new w).entries().next()})))))k=r.getConstructor(t,e,v,b),u.enable();else if(i(e,!0)){var T=new k,_=T[b](y?{}:-0,1)!=T,C=p((function(){T.has(1)})),O=h((function(e){new w(e)})),P=!y&&p((function(){for(var e=new w,t=5;t--;)e[b](t,t);return!e.has(-0)}));O||((k=t((function(e,t){c(e,x);var r=m(new w,e,k);return void 0!=t&&s(t,r[b],{that:r,AS_ENTRIES:v}),r}))).prototype=x,x.constructor=k),(C||P)&&(S("delete"),S("has"),v&&S("get")),(P||_)&&S(b),y&&x.clear&&delete x.clear}return E[e]=k,n({global:!0,forced:k!=w},E),g(k,e),y||r.setStrong(k,e,v),k}},1881:(e,t,r)=>{var n=r(4554),o=r(4875),a=r(2850),i=r(8734);e.exports=function(e,t){for(var r=o(t),l=i.f,u=a.f,s=0;s<r.length;s++){var c=r[s];n(e,c)||l(e,c,u(t,c))}}},1681:(e,t,r)=>{var n=r(8244);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2081:(e,t,r)=>{"use strict";var n=r(5847).IteratorPrototype,o=r(5313),a=r(1536),i=r(3107),l=r(4729),u=function(){return this};e.exports=function(e,t,r){var s=t+" Iterator";return e.prototype=o(n,{next:a(1,r)}),i(e,s,!1,!0),l[s]=u,e}},1193:(e,t,r)=>{var n=r(6122),o=r(8734),a=r(1536);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},1536:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8212:(e,t,r)=>{"use strict";var n=r(4626),o=r(8734),a=r(1536);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},5498:(e,t,r)=>{"use strict";var n=r(7443),o=r(8011),a=r(173),i=r(9489),l=r(8936),u=r(2081),s=r(5461),c=r(4599),f=r(3107),d=r(1193),p=r(7842),h=r(8036),g=r(4729),m=r(5847),v=i.PROPER,y=i.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,x=h("iterator"),k="keys",E="values",S="entries",T=function(){return this};e.exports=function(e,t,r,i,h,m,_){u(r,t,i);var C,O,P,R=function(e){if(e===h&&D)return D;if(!w&&e in L)return L[e];switch(e){case k:case E:case S:return function(){return new r(this,e)}}return function(){return new r(this)}},A=t+" Iterator",q=!1,L=e.prototype,N=L[x]||L["@@iterator"]||h&&L[h],D=!w&&N||R(h),I="Array"==t&&L.entries||N;if(I&&(C=s(I.call(new e)))!==Object.prototype&&C.next&&(a||s(C)===b||(c?c(C,b):l(C[x])||p(C,x,T)),f(C,A,!0,!0),a&&(g[A]=T)),v&&h==E&&N&&N.name!==E&&(!a&&y?d(L,"name",E):(q=!0,D=function(){return o(N,this)})),h)if(O={values:R(E),keys:m?D:R(k),entries:R(S)},_)for(P in O)(w||q||!(P in L))&&p(L,P,O[P]);else n({target:t,proto:!0,forced:w||q},O);return a&&!_||L[x]===D||p(L,x,D,{name:h}),g[t]=D,O}},3092:(e,t,r)=>{var n=r(4400),o=r(4554),a=r(2220),i=r(8734).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},6122:(e,t,r)=>{var n=r(8244);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7586:(e,t,r)=>{var n=r(4323),o=r(1784),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},4587:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},9017:(e,t,r)=>{var n=r(7586)("span").classList,o=n&&n.constructor&&n.constructor.prototype;e.exports=o===Object.prototype?void 0:o},7438:(e,t,r)=>{var n=r(1850);e.exports=n("navigator","userAgent")||""},7790:(e,t,r)=>{var n,o,a=r(4323),i=r(7438),l=a.process,u=a.Deno,s=l&&l.versions||u&&u.version,c=s&&s.v8;c&&(o=(n=c.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\\/(\\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\\/(\\d+)/))&&(o=+n[1]),e.exports=o},3267:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7443:(e,t,r)=>{var n=r(4323),o=r(2850).f,a=r(1193),i=r(7842),l=r(361),u=r(1881),s=r(5257);e.exports=function(e,t){var r,c,f,d,p,h=e.target,g=e.global,m=e.stat;if(r=g?n:m?n[h]||l(h,{}):(n[h]||{}).prototype)for(c in t){if(d=t[c],f=e.noTargetGet?(p=o(r,c))&&p.value:r[c],!s(g?c:h+(m?".":"#")+c,e.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&a(d,"sham",!0),i(r,c,d,e)}}},8244:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},8614:(e,t,r)=>{var n=r(8244);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},9667:e=>{var t=Function.prototype,r=t.apply,n=t.bind,o=t.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?o.bind(r):function(){return o.apply(r,arguments)})},2604:(e,t,r)=>{var n=r(4471),o=r(6438),a=n(n.bind);e.exports=function(e,t){return o(e),void 0===t?e:a?a(e,t):function(){return e.apply(t,arguments)}}},8011:e=>{var t=Function.prototype.call;e.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},9489:(e,t,r)=>{var n=r(6122),o=r(4554),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,l=o(a,"name"),u=l&&"something"===function(){}.name,s=l&&(!n||n&&i(a,"name").configurable);e.exports={EXISTS:l,PROPER:u,CONFIGURABLE:s}},4471:e=>{var t=Function.prototype,r=t.bind,n=t.call,o=r&&r.bind(n);e.exports=r?function(e){return e&&o(n,e)}:function(e){return e&&function(){return n.apply(e,arguments)}}},1850:(e,t,r)=>{var n=r(4323),o=r(8936),a=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e]):n[e]&&n[e][t]}},1913:(e,t,r)=>{var n=r(782),o=r(2339),a=r(4729),i=r(8036)("iterator");e.exports=function(e){if(void 0!=e)return o(e,i)||o(e,"@@iterator")||a[n(e)]}},7481:(e,t,r)=>{var n=r(4323),o=r(8011),a=r(6438),i=r(5561),l=r(7429),u=r(1913),s=n.TypeError;e.exports=function(e,t){var r=arguments.length<2?u(e):t;if(a(r))return i(o(r,e));throw s(l(e)+" is not iterable")}},6611:(e,t,r)=>{var n=r(8011);e.exports=function(e){return n(Map.prototype.entries,e)}},2339:(e,t,r)=>{var n=r(6438);e.exports=function(e,t){var r=e[t];return null==r?void 0:n(r)}},2196:(e,t,r)=>{var n=r(8011);e.exports=function(e){return n(Set.prototype.values,e)}},4323:(e,t,r)=>{var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},4554:(e,t,r)=>{var n=r(4471),o=r(4234),a=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(o(e),t)}},2260:e=>{e.exports={}},5685:(e,t,r)=>{var n=r(1850);e.exports=n("document","documentElement")},9951:(e,t,r)=>{var n=r(6122),o=r(8244),a=r(7586);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},13:(e,t,r)=>{var n=r(4323),o=r(4471),a=r(8244),i=r(2708),l=n.Object,u=o("".split);e.exports=a((function(){return!l("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?u(e,""):l(e)}:l},849:(e,t,r)=>{var n=r(8936),o=r(1784),a=r(4599);e.exports=function(e,t,r){var i,l;return a&&n(i=t.constructor)&&i!==r&&o(l=i.prototype)&&l!==r.prototype&&a(e,l),e}},3436:(e,t,r)=>{var n=r(4471),o=r(8936),a=r(4946),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(e){return i(e)}),e.exports=a.inspectSource},3289:(e,t,r)=>{var n=r(7443),o=r(4471),a=r(2260),i=r(1784),l=r(4554),u=r(8734).f,s=r(9043),c=r(5580),f=r(9114),d=r(4397),p=r(8614),h=!1,g=d("meta"),m=0,v=function(e){u(e,g,{value:{objectID:"O"+m++,weakData:{}}})},y=e.exports={enable:function(){y.enable=function(){},h=!0;var e=s.f,t=o([].splice),r={};r[g]=1,e(r).length&&(s.f=function(r){for(var n=e(r),o=0,a=n.length;o<a;o++)if(n[o]===g){t(n,o,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!l(e,g)){if(!f(e))return"F";if(!t)return"E";v(e)}return e[g].objectID},getWeakData:function(e,t){if(!l(e,g)){if(!f(e))return!0;if(!t)return!1;v(e)}return e[g].weakData},onFreeze:function(e){return p&&h&&f(e)&&!l(e,g)&&v(e),e}};a[g]=!0},9523:(e,t,r)=>{var n,o,a,i=r(751),l=r(4323),u=r(4471),s=r(1784),c=r(1193),f=r(4554),d=r(4946),p=r(5237),h=r(2260),g="Object already initialized",m=l.TypeError,v=l.WeakMap;if(i||d.state){var y=d.state||(d.state=new v),b=u(y.get),w=u(y.has),x=u(y.set);n=function(e,t){if(w(y,e))throw new m(g);return t.facade=e,x(y,e,t),t},o=function(e){return b(y,e)||{}},a=function(e){return w(y,e)}}else{var k=p("state");h[k]=!0,n=function(e,t){if(f(e,k))throw new m(g);return t.facade=e,c(e,k,t),t},o=function(e){return f(e,k)?e[k]:{}},a=function(e){return f(e,k)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return r}}}},5271:(e,t,r)=>{var n=r(8036),o=r(4729),a=n("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},8997:(e,t,r)=>{var n=r(2708);e.exports=Array.isArray||function(e){return"Array"==n(e)}},8936:e=>{e.exports=function(e){return"function"==typeof e}},1568:(e,t,r)=>{var n=r(4471),o=r(8244),a=r(8936),i=r(782),l=r(1850),u=r(3436),s=function(){},c=[],f=l("Reflect","construct"),d=/^\\s*(?:class|function)\\b/,p=n(d.exec),h=!d.exec(s),g=function(e){if(!a(e))return!1;try{return f(s,c,e),!0}catch(e){return!1}};e.exports=!f||o((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?function(e){if(!a(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return h||!!p(d,u(e))}:g},5257:(e,t,r)=>{var n=r(8244),o=r(8936),a=/#|\\.prototype\\./,i=function(e,t){var r=u[l(e)];return r==c||r!=s&&(o(t)?n(t):!!t)},l=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},1784:(e,t,r)=>{var n=r(8936);e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},173:e=>{e.exports=!1},985:(e,t,r)=>{var n=r(4323),o=r(1850),a=r(8936),i=r(2038),l=r(6005),u=n.Object;e.exports=l?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return a(t)&&i(t.prototype,u(e))}},7478:(e,t,r)=>{var n=r(4323),o=r(2604),a=r(8011),i=r(5561),l=r(7429),u=r(5271),s=r(1472),c=r(2038),f=r(7481),d=r(1913),p=r(6907),h=n.TypeError,g=function(e,t){this.stopped=e,this.result=t},m=g.prototype;e.exports=function(e,t,r){var n,v,y,b,w,x,k,E=r&&r.that,S=!(!r||!r.AS_ENTRIES),T=!(!r||!r.IS_ITERATOR),_=!(!r||!r.INTERRUPTED),C=o(t,E),O=function(e){return n&&p(n,"normal",e),new g(!0,e)},P=function(e){return S?(i(e),_?C(e[0],e[1],O):C(e[0],e[1])):_?C(e,O):C(e)};if(T)n=e;else{if(!(v=d(e)))throw h(l(e)+" is not iterable");if(u(v)){for(y=0,b=s(e);b>y;y++)if((w=P(e[y]))&&c(m,w))return w;return new g(!1)}n=f(e,v)}for(x=n.next;!(k=a(x,n)).done;){try{w=P(k.value)}catch(e){p(n,"throw",e)}if("object"==typeof w&&w&&c(m,w))return w}return new g(!1)}},6907:(e,t,r)=>{var n=r(8011),o=r(5561),a=r(2339);e.exports=function(e,t,r){var i,l;o(e);try{if(!(i=a(e,"return"))){if("throw"===t)throw r;return r}i=n(i,e)}catch(e){l=!0,i=e}if("throw"===t)throw r;if(l)throw i;return o(i),r}},5847:(e,t,r)=>{"use strict";var n,o,a,i=r(8244),l=r(8936),u=r(5313),s=r(5461),c=r(7842),f=r(8036),d=r(173),p=f("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(o=s(s(a)))!==Object.prototype&&(n=o):h=!0),void 0==n||i((function(){var e={};return n[p].call(e)!==e}))?n={}:d&&(n=u(n)),l(n[p])||c(n,p,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}},4729:e=>{e.exports={}},1472:(e,t,r)=>{var n=r(9631);e.exports=function(e){return n(e.length)}},5046:(e,t,r)=>{var n=r(7790),o=r(8244);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},751:(e,t,r)=>{var n=r(4323),o=r(8936),a=r(3436),i=n.WeakMap;e.exports=o(i)&&/native code/.test(a(i))},5313:(e,t,r)=>{var n,o=r(5561),a=r(649),i=r(3267),l=r(2260),u=r(5685),s=r(7586),c=r(5237),f=c("IE_PROTO"),d=function(){},p=function(e){return"<script>"+e+"</"+"script>"},h=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}var e,t;g="undefined"!=typeof document?document.domain&&n?h(n):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):h(n);for(var r=i.length;r--;)delete g.prototype[i[r]];return g()};l[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(d.prototype=o(e),r=new d,d.prototype=null,r[f]=e):r=g(),void 0===t?r:a(r,t)}},649:(e,t,r)=>{var n=r(6122),o=r(8734),a=r(5561),i=r(2653),l=r(9246);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=i(t),u=l(t),s=u.length,c=0;s>c;)o.f(e,r=u[c++],n[r]);return e}},8734:(e,t,r)=>{var n=r(4323),o=r(6122),a=r(9951),i=r(5561),l=r(4626),u=n.TypeError,s=Object.defineProperty;t.f=o?s:function(e,t,r){if(i(e),t=l(t),i(r),a)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},2850:(e,t,r)=>{var n=r(6122),o=r(8011),a=r(2589),i=r(1536),l=r(2653),u=r(4626),s=r(4554),c=r(9951),f=Object.getOwnPropertyDescriptor;t.f=n?f:function(e,t){if(e=l(e),t=u(t),c)try{return f(e,t)}catch(e){}if(s(e,t))return i(!o(a.f,e,t),e[t])}},5580:(e,t,r)=>{var n=r(2708),o=r(2653),a=r(9043).f,i=r(8942),l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return l&&"Window"==n(e)?function(e){try{return a(e)}catch(e){return i(l)}}(e):a(o(e))}},9043:(e,t,r)=>{var n=r(8662),o=r(3267).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},229:(e,t)=>{t.f=Object.getOwnPropertySymbols},5461:(e,t,r)=>{var n=r(4323),o=r(4554),a=r(8936),i=r(4234),l=r(5237),u=r(1681),s=l("IE_PROTO"),c=n.Object,f=c.prototype;e.exports=u?c.getPrototypeOf:function(e){var t=i(e);if(o(t,s))return t[s];var r=t.constructor;return a(r)&&t instanceof r?r.prototype:t instanceof c?f:null}},9114:(e,t,r)=>{var n=r(8244),o=r(1784),a=r(2708),i=r(7826),l=Object.isExtensible,u=n((function(){l(1)}));e.exports=u||i?function(e){return!!o(e)&&((!i||"ArrayBuffer"!=a(e))&&(!l||l(e)))}:l},2038:(e,t,r)=>{var n=r(4471);e.exports=n({}.isPrototypeOf)},8662:(e,t,r)=>{var n=r(4471),o=r(4554),a=r(2653),i=r(3336).indexOf,l=r(2260),u=n([].push);e.exports=function(e,t){var r,n=a(e),s=0,c=[];for(r in n)!o(l,r)&&o(n,r)&&u(c,r);for(;t.length>s;)o(n,r=t[s++])&&(~i(c,r)||u(c,r));return c}},9246:(e,t,r)=>{var n=r(8662),o=r(3267);e.exports=Object.keys||function(e){return n(e,o)}},2589:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},4599:(e,t,r)=>{var n=r(4471),o=r(5561),a=r(4846);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return o(r),a(n),t?e(r,n):r.__proto__=n,r}}():void 0)},9974:(e,t,r)=>{"use strict";var n=r(7452),o=r(782);e.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},8306:(e,t,r)=>{var n=r(4323),o=r(8011),a=r(8936),i=r(1784),l=n.TypeError;e.exports=function(e,t){var r,n;if("string"===t&&a(r=e.toString)&&!i(n=o(r,e)))return n;if(a(r=e.valueOf)&&!i(n=o(r,e)))return n;if("string"!==t&&a(r=e.toString)&&!i(n=o(r,e)))return n;throw l("Can\'t convert object to primitive value")}},4875:(e,t,r)=>{var n=r(1850),o=r(4471),a=r(9043),i=r(229),l=r(5561),u=o([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=a.f(l(e)),r=i.f;return r?u(t,r(e)):t}},4400:(e,t,r)=>{var n=r(4323);e.exports=n},4342:(e,t,r)=>{var n=r(7842);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},7842:(e,t,r)=>{var n=r(4323),o=r(8936),a=r(4554),i=r(1193),l=r(361),u=r(3436),s=r(9523),c=r(9489).CONFIGURABLE,f=s.get,d=s.enforce,p=String(String).split("String");(e.exports=function(e,t,r,u){var s,f=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,g=!!u&&!!u.noTargetGet,m=u&&void 0!==u.name?u.name:t;o(r)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\\(([^)]*)\\)/,"$1")+"]"),(!a(r,"name")||c&&r.name!==m)&&i(r,"name",m),(s=d(r)).source||(s.source=p.join("string"==typeof m?m:""))),e!==n?(f?!g&&e[t]&&(h=!0):delete e[t],h?e[t]=r:i(e,t,r)):h?e[t]=r:l(t,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},556:(e,t,r)=>{var n=r(4323).TypeError;e.exports=function(e){if(void 0==e)throw n("Can\'t call method on "+e);return e}},8787:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},361:(e,t,r)=>{var n=r(4323),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},3208:(e,t,r)=>{"use strict";var n=r(1850),o=r(8734),a=r(8036),i=r(6122),l=a("species");e.exports=function(e){var t=n(e),r=o.f;i&&t&&!t[l]&&r(t,l,{configurable:!0,get:function(){return this}})}},3107:(e,t,r)=>{var n=r(8734).f,o=r(4554),a=r(8036)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},5237:(e,t,r)=>{var n=r(1033),o=r(4397),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},4946:(e,t,r)=>{var n=r(4323),o=r(361),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},1033:(e,t,r)=>{var n=r(173),o=r(4946);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8272:(e,t,r)=>{var n=r(5561),o=r(4887),a=r(8036)("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[a])?t:o(r)}},8648:(e,t,r)=>{var n=r(4471),o=r(2927),a=r(2404),i=r(556),l=n("".charAt),u=n("".charCodeAt),s=n("".slice),c=function(e){return function(t,r){var n,c,f=a(i(t)),d=o(r),p=f.length;return d<0||d>=p?e?"":void 0:(n=u(f,d))<55296||n>56319||d+1===p||(c=u(f,d+1))<56320||c>57343?e?l(f,d):n:e?s(f,d,d+2):c-56320+(n-55296<<10)+65536}};e.exports={codeAt:c(!1),charAt:c(!0)}},921:(e,t,r)=>{var n=r(2927),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},2653:(e,t,r)=>{var n=r(13),o=r(556);e.exports=function(e){return n(o(e))}},2927:e=>{var t=Math.ceil,r=Math.floor;e.exports=function(e){var n=+e;return n!==n||0===n?0:(n>0?r:t)(n)}},9631:(e,t,r)=>{var n=r(2927),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},4234:(e,t,r)=>{var n=r(4323),o=r(556),a=n.Object;e.exports=function(e){return a(o(e))}},1475:(e,t,r)=>{var n=r(4323),o=r(8011),a=r(1784),i=r(985),l=r(2339),u=r(8306),s=r(8036),c=n.TypeError,f=s("toPrimitive");e.exports=function(e,t){if(!a(e)||i(e))return e;var r,n=l(e,f);if(n){if(void 0===t&&(t="default"),r=o(n,e,t),!a(r)||i(r))return r;throw c("Can\'t convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4626:(e,t,r)=>{var n=r(1475),o=r(985);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},7452:(e,t,r)=>{var n={};n[r(8036)("toStringTag")]="z",e.exports="[object z]"===String(n)},2404:(e,t,r)=>{var n=r(4323),o=r(782),a=n.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},7429:(e,t,r)=>{var n=r(4323).String;e.exports=function(e){try{return n(e)}catch(e){return"Object"}}},4397:(e,t,r)=>{var n=r(4471),o=0,a=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+a,36)}},6005:(e,t,r)=>{var n=r(5046);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},2220:(e,t,r)=>{var n=r(8036);t.f=n},8036:(e,t,r)=>{var n=r(4323),o=r(1033),a=r(4554),i=r(4397),l=r(5046),u=r(6005),s=o("wks"),c=n.Symbol,f=c&&c.for,d=u?c:c&&c.withoutSetter||i;e.exports=function(e){if(!a(s,e)||!l&&"string"!=typeof s[e]){var t="Symbol."+e;l&&a(c,e)?s[e]=c[e]:s[e]=u&&f?f(t):d(t)}return s[e]}},5185:(e,t,r)=>{"use strict";var n=r(7443),o=r(4323),a=r(8244),i=r(8997),l=r(1784),u=r(4234),s=r(1472),c=r(8212),f=r(4264),d=r(5460),p=r(8036),h=r(7790),g=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",y=o.TypeError,b=h>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),w=d("concat"),x=function(e){if(!l(e))return!1;var t=e[g];return void 0!==t?!!t:i(e)};n({target:"Array",proto:!0,forced:!b||!w},{concat:function(e){var t,r,n,o,a,i=u(this),l=f(i,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(x(a=-1===t?i:arguments[t])){if(d+(o=s(a))>m)throw y(v);for(r=0;r<o;r++,d++)r in a&&c(l,d,a[r])}else{if(d>=m)throw y(v);c(l,d++,a)}return l.length=d,l}})},7925:(e,t,r)=>{var n=r(7443),o=r(8602);n({target:"Array",stat:!0,forced:!r(9274)((function(e){Array.from(e)}))},{from:o})},4801:(e,t,r)=>{"use strict";var n=r(2653),o=r(149),a=r(4729),i=r(9523),l=r(5498),u="Array Iterator",s=i.set,c=i.getterFor(u);e.exports=l(Array,"Array",(function(e,t){s(this,{type:u,target:n(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},100:(e,t,r)=>{var n=r(4323);r(3107)(n.JSON,"JSON",!0)},1537:(e,t,r)=>{"use strict";r(7088)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(4674))},1168:(e,t,r)=>{r(3107)(Math,"Math",!0)},3782:(e,t,r)=>{var n=r(7452),o=r(7842),a=r(9974);n||o(Object.prototype,"toString",a,{unsafe:!0})},3763:(e,t,r)=>{"use strict";r(7088)("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(4674))},8955:(e,t,r)=>{"use strict";var n=r(8648).charAt,o=r(2404),a=r(9523),i=r(5498),l="String Iterator",u=a.set,s=a.getterFor(l);i(String,"String",(function(e){u(this,{type:l,string:o(e),index:0})}),(function(){var e,t=s(this),r=t.string,o=t.index;return o>=r.length?{value:void 0,done:!0}:(e=n(r,o),t.index+=e.length,{value:e,done:!1})}))},4658:(e,t,r)=>{r(3092)("asyncIterator")},5998:(e,t,r)=>{"use strict";var n=r(7443),o=r(6122),a=r(4323),i=r(4471),l=r(4554),u=r(8936),s=r(2038),c=r(2404),f=r(8734).f,d=r(1881),p=a.Symbol,h=p&&p.prototype;if(o&&u(p)&&(!("description"in h)||void 0!==p().description)){var g={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=s(h,this)?new p(e):void 0===e?p():p(e);return""===e&&(g[t]=!0),t};d(m,p),m.prototype=h,h.constructor=m;var v="Symbol(test)"==String(p("test")),y=i(h.toString),b=i(h.valueOf),w=/^Symbol\\((.*)\\)[^)]+$/,x=i("".replace),k=i("".slice);f(h,"description",{configurable:!0,get:function(){var e=b(this),t=y(e);if(l(g,e))return"";var r=v?k(t,7,-1):x(t,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},4711:(e,t,r)=>{r(3092)("hasInstance")},7105:(e,t,r)=>{r(3092)("isConcatSpreadable")},1034:(e,t,r)=>{r(3092)("iterator")},1522:(e,t,r)=>{"use strict";var n=r(7443),o=r(4323),a=r(1850),i=r(9667),l=r(8011),u=r(4471),s=r(173),c=r(6122),f=r(5046),d=r(8244),p=r(4554),h=r(8997),g=r(8936),m=r(1784),v=r(2038),y=r(985),b=r(5561),w=r(4234),x=r(2653),k=r(4626),E=r(2404),S=r(1536),T=r(5313),_=r(9246),C=r(9043),O=r(5580),P=r(229),R=r(2850),A=r(8734),q=r(2589),L=r(3707),N=r(7842),D=r(1033),I=r(5237),j=r(2260),M=r(4397),F=r(8036),z=r(2220),U=r(3092),B=r(3107),V=r(9523),H=r(5241).forEach,W=I("hidden"),G="Symbol",$=F("toPrimitive"),Q=V.set,Y=V.getterFor(G),K=Object.prototype,X=o.Symbol,J=X&&X.prototype,Z=o.TypeError,ee=o.QObject,te=a("JSON","stringify"),re=R.f,ne=A.f,oe=O.f,ae=q.f,ie=u([].push),le=D("symbols"),ue=D("op-symbols"),se=D("string-to-symbol-registry"),ce=D("symbol-to-string-registry"),fe=D("wks"),de=!ee||!ee.prototype||!ee.prototype.findChild,pe=c&&d((function(){return 7!=T(ne({},"a",{get:function(){return ne(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=re(K,t);n&&delete K[t],ne(e,t,r),n&&e!==K&&ne(K,t,n)}:ne,he=function(e,t){var r=le[e]=T(J);return Q(r,{type:G,tag:e,description:t}),c||(r.description=t),r},ge=function(e,t,r){e===K&&ge(ue,t,r),b(e);var n=k(t);return b(r),p(le,n)?(r.enumerable?(p(e,W)&&e[W][n]&&(e[W][n]=!1),r=T(r,{enumerable:S(0,!1)})):(p(e,W)||ne(e,W,S(1,{})),e[W][n]=!0),pe(e,n,r)):ne(e,n,r)},me=function(e,t){b(e);var r=x(t),n=_(r).concat(we(r));return H(n,(function(t){c&&!l(ve,r,t)||ge(e,t,r[t])})),e},ve=function(e){var t=k(e),r=l(ae,this,t);return!(this===K&&p(le,t)&&!p(ue,t))&&(!(r||!p(this,t)||!p(le,t)||p(this,W)&&this[W][t])||r)},ye=function(e,t){var r=x(e),n=k(t);if(r!==K||!p(le,n)||p(ue,n)){var o=re(r,n);return!o||!p(le,n)||p(r,W)&&r[W][n]||(o.enumerable=!0),o}},be=function(e){var t=oe(x(e)),r=[];return H(t,(function(e){p(le,e)||p(j,e)||ie(r,e)})),r},we=function(e){var t=e===K,r=oe(t?ue:x(e)),n=[];return H(r,(function(e){!p(le,e)||t&&!p(K,e)||ie(n,le[e])})),n};(f||(N(J=(X=function(){if(v(J,this))throw Z("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,t=M(e),r=function e(r){this===K&&l(e,ue,r),p(this,W)&&p(this[W],t)&&(this[W][t]=!1),pe(this,t,S(1,r))};return c&&de&&pe(K,t,{configurable:!0,set:r}),he(t,e)}).prototype,"toString",(function(){return Y(this).tag})),N(X,"withoutSetter",(function(e){return he(M(e),e)})),q.f=ve,A.f=ge,R.f=ye,C.f=O.f=be,P.f=we,z.f=function(e){return he(F(e),e)},c&&(ne(J,"description",{configurable:!0,get:function(){return Y(this).description}}),s||N(K,"propertyIsEnumerable",ve,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:X}),H(_(fe),(function(e){U(e)})),n({target:G,stat:!0,forced:!f},{for:function(e){var t=E(e);if(p(se,t))return se[t];var r=X(t);return se[t]=r,ce[r]=t,r},keyFor:function(e){if(!y(e))throw Z(e+" is not a symbol");if(p(ce,e))return ce[e]},useSetter:function(){de=!0},useSimple:function(){de=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!c},{create:function(e,t){return void 0===t?T(e):me(T(e),t)},defineProperty:ge,defineProperties:me,getOwnPropertyDescriptor:ye}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:be,getOwnPropertySymbols:we}),n({target:"Object",stat:!0,forced:d((function(){P.f(1)}))},{getOwnPropertySymbols:function(e){return P.f(w(e))}}),te)&&n({target:"JSON",stat:!0,forced:!f||d((function(){var e=X();return"[null]"!=te([e])||"{}"!=te({a:e})||"{}"!=te(Object(e))}))},{stringify:function(e,t,r){var n=L(arguments),o=t;if((m(t)||void 0!==e)&&!y(e))return h(t)||(t=function(e,t){if(g(o)&&(t=l(o,this,e,t)),!y(t))return t}),n[1]=t,i(te,null,n)}});if(!J[$]){var xe=J.valueOf;N(J,$,(function(e){return l(xe,this)}))}B(X,G),j[W]=!0},9227:(e,t,r)=>{r(3092)("match")},9385:(e,t,r)=>{r(3092)("replace")},9764:(e,t,r)=>{r(3092)("search")},3264:(e,t,r)=>{r(3092)("species")},1257:(e,t,r)=>{r(3092)("split")},6435:(e,t,r)=>{r(3092)("toPrimitive")},681:(e,t,r)=>{r(3092)("toStringTag")},7313:(e,t,r)=>{r(3092)("unscopables")},3035:(e,t,r)=>{"use strict";r(7443)({target:"Map",proto:!0,real:!0,forced:r(173)},{deleteAll:r(5424)})},2481:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(6611),u=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return!u(r,(function(e,r,o){if(!n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},673:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(2604),l=r(8011),u=r(6438),s=r(5561),c=r(8272),f=r(6611),d=r(7478);o({target:"Map",proto:!0,real:!0,forced:n},{filter:function(e){var t=s(this),r=f(t),n=i(e,arguments.length>1?arguments[1]:void 0),o=new(c(t,a("Map"))),p=u(o.set);return d(r,(function(e,r){n(r,e,t)&&l(p,o,e,r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},5837:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(6611),u=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return u(r,(function(e,r,o){if(n(r,e,t))return o(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},4756:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(6611),u=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return u(r,(function(e,r,o){if(n(r,e,t))return o(r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},471:(e,t,r)=>{r(7443)({target:"Map",stat:!0},{from:r(2858)})},6692:(e,t,r)=>{"use strict";var n=r(7443),o=r(8011),a=r(4471),i=r(6438),l=r(7481),u=r(7478),s=a([].push);n({target:"Map",stat:!0},{groupBy:function(e,t){i(t);var r=l(e),n=new this,a=i(n.has),c=i(n.get),f=i(n.set);return u(r,(function(e){var r=t(e);o(a,n,r)?s(o(c,n,r),e):o(f,n,r,[e])}),{IS_ITERATOR:!0}),n}})},5853:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(5561),i=r(6611),l=r(8787),u=r(7478);o({target:"Map",proto:!0,real:!0,forced:n},{includes:function(e){return u(i(a(this)),(function(t,r,n){if(l(r,e))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},7415:(e,t,r)=>{"use strict";var n=r(7443),o=r(8011),a=r(7478),i=r(6438);n({target:"Map",stat:!0},{keyBy:function(e,t){var r=new this;i(t);var n=i(r.set);return a(e,(function(e){o(n,r,t(e),e)})),r}})},4837:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(6611),l=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return l(i(a(this)),(function(t,r,n){if(r===e)return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},4285:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(2604),l=r(8011),u=r(6438),s=r(5561),c=r(8272),f=r(6611),d=r(7478);o({target:"Map",proto:!0,real:!0,forced:n},{mapKeys:function(e){var t=s(this),r=f(t),n=i(e,arguments.length>1?arguments[1]:void 0),o=new(c(t,a("Map"))),p=u(o.set);return d(r,(function(e,r){l(p,o,n(r,e,t),r)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},9932:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(2604),l=r(8011),u=r(6438),s=r(5561),c=r(8272),f=r(6611),d=r(7478);o({target:"Map",proto:!0,real:!0,forced:n},{mapValues:function(e){var t=s(this),r=f(t),n=i(e,arguments.length>1?arguments[1]:void 0),o=new(c(t,a("Map"))),p=u(o.set);return d(r,(function(e,r){l(p,o,e,n(r,e,t))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),o}})},5843:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(6438),i=r(5561),l=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var t=i(this),r=a(t.set),n=arguments.length,o=0;o<n;)l(arguments[o++],r,{that:t,AS_ENTRIES:!0});return t}})},1080:(e,t,r)=>{r(7443)({target:"Map",stat:!0},{of:r(2256)})},7074:(e,t,r)=>{"use strict";var n=r(7443),o=r(4323),a=r(173),i=r(5561),l=r(6438),u=r(6611),s=r(7478),c=o.TypeError;n({target:"Map",proto:!0,real:!0,forced:a},{reduce:function(e){var t=i(this),r=u(t),n=arguments.length<2,o=n?void 0:arguments[1];if(l(e),s(r,(function(r,a){n?(n=!1,o=a):o=e(o,a,r,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw c("Reduce of empty map with no initial value");return o}})},7992:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(6611),u=r(7478);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return u(r,(function(e,r,o){if(n(r,e,t))return o()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},6443:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(4323),i=r(8011),l=r(5561),u=r(6438),s=a.TypeError;o({target:"Map",proto:!0,real:!0,forced:n},{update:function(e,t){var r=l(this),n=u(r.get),o=u(r.has),a=u(r.set),c=arguments.length;u(t);var f=i(o,r,e);if(!f&&c<3)throw s("Updating absent value");var d=f?i(n,r,e):u(c>2?arguments[2]:void 0)(e,r);return i(a,r,e,t(d,e,r)),r}})},1061:(e,t,r)=>{"use strict";r(7443)({target:"Set",proto:!0,real:!0,forced:r(173)},{addAll:r(8216)})},1675:(e,t,r)=>{"use strict";r(7443)({target:"Set",proto:!0,real:!0,forced:r(173)},{deleteAll:r(5424)})},3860:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(8011),l=r(6438),u=r(5561),s=r(8272),c=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(e){var t=u(this),r=new(s(t,a("Set")))(t),n=l(r.delete);return c(e,(function(e){i(n,r,e)})),r}})},8088:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(2196),u=r(7478);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return!u(r,(function(e,r){if(!n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},7041:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(8011),l=r(6438),u=r(5561),s=r(2604),c=r(8272),f=r(2196),d=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(e){var t=u(this),r=f(t),n=s(e,arguments.length>1?arguments[1]:void 0),o=new(c(t,a("Set"))),p=l(o.add);return d(r,(function(e){n(e,e,t)&&i(p,o,e)}),{IS_ITERATOR:!0}),o}})},3922:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(2196),u=r(7478);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return u(r,(function(e,r){if(n(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},156:(e,t,r)=>{r(7443)({target:"Set",stat:!0},{from:r(2858)})},8946:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(8011),l=r(6438),u=r(5561),s=r(8272),c=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(e){var t=u(this),r=new(s(t,a("Set"))),n=l(t.has),o=l(r.add);return c(e,(function(e){i(n,t,e)&&i(o,r,e)})),r}})},9492:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(8011),i=r(6438),l=r(5561),u=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(e){var t=l(this),r=i(t.has);return!u(e,(function(e,n){if(!0===a(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},1402:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(8011),l=r(6438),u=r(8936),s=r(5561),c=r(7481),f=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(e){var t=c(this),r=s(e),n=r.has;return u(n)||(r=new(a("Set"))(e),n=l(r.has)),!f(t,(function(e,t){if(!1===i(n,r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},9787:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(8011),i=r(6438),l=r(5561),u=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(e){var t=l(this),r=i(t.has);return!u(e,(function(e,n){if(!1===a(r,t,e))return n()}),{INTERRUPTED:!0}).stopped}})},6024:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(4471),i=r(5561),l=r(2404),u=r(2196),s=r(7478),c=a([].join),f=[].push;o({target:"Set",proto:!0,real:!0,forced:n},{join:function(e){var t=i(this),r=u(t),n=void 0===e?",":l(e),o=[];return s(r,f,{that:o,IS_ITERATOR:!0}),c(o,n)}})},2681:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(2604),l=r(8011),u=r(6438),s=r(5561),c=r(8272),f=r(2196),d=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(e){var t=s(this),r=f(t),n=i(e,arguments.length>1?arguments[1]:void 0),o=new(c(t,a("Set"))),p=u(o.add);return d(r,(function(e){l(p,o,n(e,e,t))}),{IS_ITERATOR:!0}),o}})},2632:(e,t,r)=>{r(7443)({target:"Set",stat:!0},{of:r(2256)})},1463:(e,t,r)=>{"use strict";var n=r(7443),o=r(4323),a=r(173),i=r(6438),l=r(5561),u=r(2196),s=r(7478),c=o.TypeError;n({target:"Set",proto:!0,real:!0,forced:a},{reduce:function(e){var t=l(this),r=u(t),n=arguments.length<2,o=n?void 0:arguments[1];if(i(e),s(r,(function(r){n?(n=!1,o=r):o=e(o,r,r,t)}),{IS_ITERATOR:!0}),n)throw c("Reduce of empty set with no initial value");return o}})},5691:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(5561),i=r(2604),l=r(2196),u=r(7478);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(e){var t=a(this),r=l(t),n=i(e,arguments.length>1?arguments[1]:void 0);return u(r,(function(e,r){if(n(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},7705:(e,t,r)=>{"use strict";var n=r(173),o=r(7443),a=r(1850),i=r(8011),l=r(6438),u=r(5561),s=r(8272),c=r(7478);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(e){var t=u(this),r=new(s(t,a("Set")))(t),n=l(r.delete),o=l(r.add);return c(e,(function(e){i(n,r,e)||i(o,r,e)})),r}})},5154:(e,t,r)=>{"use strict";var n=r(7443),o=r(173),a=r(1850),i=r(6438),l=r(5561),u=r(8272),s=r(7478);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(e){var t=l(this),r=new(u(t,a("Set")))(t);return s(e,i(r.add),{that:r}),r}})},8458:(e,t,r)=>{r(3092)("dispose")},620:(e,t,r)=>{r(3092)("observable")},7987:(e,t,r)=>{r(3092)("patternMatch")},8151:(e,t,r)=>{var n=r(4323),o=r(4587),a=r(9017),i=r(4801),l=r(1193),u=r(8036),s=u("iterator"),c=u("toStringTag"),f=i.values,d=function(e,t){if(e){if(e[s]!==f)try{l(e,s,f)}catch(t){e[s]=f}if(e[c]||l(e,c,t),o[t])for(var r in i)if(e[r]!==i[r])try{l(e,r,i[r])}catch(t){e[r]=i[r]}}};for(var p in o)d(n[p]&&n[p].prototype,p);d(a,"DOMTokenList")},3624:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(7656),a=r(2920),i=r(7630),l=n(n({},o.namedReferences),{all:o.namedReferences.html5}),u={specialChars:/[<>\'"&]/g,nonAscii:/(?:[<>\'"&\\u0080-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g,nonAsciiPrintable:/(?:[<>\'"&\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g,extensive:/(?:[\\x01-\\x0c\\x0e-\\x1f\\x21-\\x2c\\x2e-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7d\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g},s={mode:"specialChars",level:"all",numeric:"decimal"};t.encode=function(e,t){var r=void 0===(c=(a=void 0===t?s:t).mode)?"specialChars":c,n=void 0===(h=a.numeric)?"decimal":h,o=a.level;if(!e)return"";var a,c,f=u[r],d=l[void 0===o?"all":o].characters,p="hexadecimal"===n;if(f.lastIndex=0,a=f.exec(e)){c="";var h=0;do{h!==a.index&&(c+=e.substring(h,a.index));var g=d[o=a[0]];if(!g){var m=o.length>1?i.getCodePoint(o,0):o.charCodeAt(0);g=(p?"&#x"+m.toString(16):"&#"+m)+";"}c+=g,h=a.index+o.length}while(a=f.exec(e));h!==e.length&&(c+=e.substring(h))}else c=e;return c};var c={scope:"body",level:"all"},f=/&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);/g,d=/&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,p={xml:{strict:f,attribute:d,body:o.bodyRegExps.xml},html4:{strict:f,attribute:d,body:o.bodyRegExps.html4},html5:{strict:f,attribute:d,body:o.bodyRegExps.html5}},h=n(n({},p),{all:p.html5}),g=String.fromCharCode,m=g(65533),v={level:"all"};t.decodeEntity=function(e,t){var r=void 0===(n=(void 0===t?v:t).level)?"all":n;if(!e)return"";var n=e,o=(e[e.length-1],l[r].entities[e]);if(o)n=o;else if("&"===e[0]&&"#"===e[1]){var u=e[2],s="x"==u||"X"==u?parseInt(e.substr(3),16):parseInt(e.substr(2));n=s>=1114111?m:s>65535?i.fromCodePoint(s):g(a.numericUnicodeMap[s]||s)}return n},t.decode=function(e,t){var r=void 0===t?c:t,n=r.level,o=void 0===n?"all":n,u=r.scope,s=void 0===u?"xml"===o?"strict":"body":u;if(!e)return"";var f=h[o][s],d=l[o].entities,p="attribute"===s,v="strict"===s;f.lastIndex=0;var y,b=f.exec(e);if(b){y="";var w=0;do{w!==b.index&&(y+=e.substring(w,b.index));var x=b[0],k=x,E=x[x.length-1];if(p&&"="===E)k=x;else if(v&&";"!==E)k=x;else{var S=d[x];if(S)k=S;else if("&"===x[0]&&"#"===x[1]){var T=x[2],_="x"==T||"X"==T?parseInt(x.substr(3),16):parseInt(x.substr(2));k=_>=1114111?m:_>65535?i.fromCodePoint(_):g(a.numericUnicodeMap[_]||_)}}y+=k,w=b.index+x.length}while(b=f.exec(e));w!==e.length&&(y+=e.substring(w))}else y=e;return y}},7656:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyRegExps={xml:/&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g},t.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":\'"\',"&apos;":"\'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"\'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":\'"\',"&quot;":\'"\',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"\'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;",ª:"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;",µ:"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;",º:"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;",À:"&Agrave;",Á:"&Aacute;",Â:"&Acirc;",Ã:"&Atilde;",Ä:"&Auml;",Å:"&Aring;",Æ:"&AElig;",Ç:"&Ccedil;",È:"&Egrave;",É:"&Eacute;",Ê:"&Ecirc;",Ë:"&Euml;",Ì:"&Igrave;",Í:"&Iacute;",Î:"&Icirc;",Ï:"&Iuml;",Ð:"&ETH;",Ñ:"&Ntilde;",Ò:"&Ograve;",Ó:"&Oacute;",Ô:"&Ocirc;",Õ:"&Otilde;",Ö:"&Ouml;","×":"&times;",Ø:"&Oslash;",Ù:"&Ugrave;",Ú:"&Uacute;",Û:"&Ucirc;",Ü:"&Uuml;",Ý:"&Yacute;",Þ:"&THORN;",ß:"&szlig;",à:"&agrave;",á:"&aacute;",â:"&acirc;",ã:"&atilde;",ä:"&auml;",å:"&aring;",æ:"&aelig;",ç:"&ccedil;",è:"&egrave;",é:"&eacute;",ê:"&ecirc;",ë:"&euml;",ì:"&igrave;",í:"&iacute;",î:"&icirc;",ï:"&iuml;",ð:"&eth;",ñ:"&ntilde;",ò:"&ograve;",ó:"&oacute;",ô:"&ocirc;",õ:"&otilde;",ö:"&ouml;","÷":"&divide;",ø:"&oslash;",ù:"&ugrave;",ú:"&uacute;",û:"&ucirc;",ü:"&uuml;",ý:"&yacute;",þ:"&thorn;",ÿ:"&yuml;",\'"\':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;",Œ:"&OElig;",œ:"&oelig;",Š:"&Scaron;",š:"&scaron;",Ÿ:"&Yuml;",ˆ:"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;",ƒ:"&fnof;",Α:"&Alpha;",Β:"&Beta;",Γ:"&Gamma;",Δ:"&Delta;",Ε:"&Epsilon;",Ζ:"&Zeta;",Η:"&Eta;",Θ:"&Theta;",Ι:"&Iota;",Κ:"&Kappa;",Λ:"&Lambda;",Μ:"&Mu;",Ν:"&Nu;",Ξ:"&Xi;",Ο:"&Omicron;",Π:"&Pi;",Ρ:"&Rho;",Σ:"&Sigma;",Τ:"&Tau;",Υ:"&Upsilon;",Φ:"&Phi;",Χ:"&Chi;",Ψ:"&Psi;",Ω:"&Omega;",α:"&alpha;",β:"&beta;",γ:"&gamma;",δ:"&delta;",ε:"&epsilon;",ζ:"&zeta;",η:"&eta;",θ:"&theta;",ι:"&iota;",κ:"&kappa;",λ:"&lambda;",μ:"&mu;",ν:"&nu;",ξ:"&xi;",ο:"&omicron;",π:"&pi;",ρ:"&rho;",ς:"&sigmaf;",σ:"&sigma;",τ:"&tau;",υ:"&upsilon;",φ:"&phi;",χ:"&chi;",ψ:"&psi;",ω:"&omega;",ϑ:"&thetasym;",ϒ:"&upsih;",ϖ:"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;",℘:"&weierp;",ℑ:"&image;",ℜ:"&real;","™":"&trade;",ℵ:"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":\'"\',"&QUOT;":\'"\',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"\'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":\'"\',"&quot;":\'"\',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{Æ:"&AElig;","&":"&amp;",Á:"&Aacute;",Ă:"&Abreve;",Â:"&Acirc;",А:"&Acy;",𝔄:"&Afr;",À:"&Agrave;",Α:"&Alpha;",Ā:"&Amacr;","⩓":"&And;",Ą:"&Aogon;",𝔸:"&Aopf;","⁡":"&af;",Å:"&angst;",𝒜:"&Ascr;","≔":"&coloneq;",Ã:"&Atilde;",Ä:"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;",Б:"&Bcy;","∵":"&because;",ℬ:"&bernou;",Β:"&Beta;",𝔅:"&Bfr;",𝔹:"&Bopf;","˘":"&breve;","≎":"&bump;",Ч:"&CHcy;","©":"&copy;",Ć:"&Cacute;","⋒":"&Cap;",ⅅ:"&DD;",ℭ:"&Cfr;",Č:"&Ccaron;",Ç:"&Ccedil;",Ĉ:"&Ccirc;","∰":"&Cconint;",Ċ:"&Cdot;","¸":"&cedil;","·":"&middot;",Χ:"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;",ℂ:"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;",𝒞:"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;",Ђ:"&DJcy;",Ѕ:"&DScy;",Џ:"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;",Ď:"&Dcaron;",Д:"&Dcy;","∇":"&nabla;",Δ:"&Delta;",𝔇:"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;",ⅆ:"&dd;",𝔻:"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;",𝒟:"&Dscr;",Đ:"&Dstrok;",Ŋ:"&ENG;",Ð:"&ETH;",É:"&Eacute;",Ě:"&Ecaron;",Ê:"&Ecirc;",Э:"&Ecy;",Ė:"&Edot;",𝔈:"&Efr;",È:"&Egrave;","∈":"&isinv;",Ē:"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;",Ę:"&Eogon;",𝔼:"&Eopf;",Ε:"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;",ℰ:"&expectation;","⩳":"&Esim;",Η:"&Eta;",Ë:"&Euml;","∃":"&exist;",ⅇ:"&exponentiale;",Ф:"&Fcy;",𝔉:"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;",𝔽:"&Fopf;","∀":"&forall;",ℱ:"&Fscr;",Ѓ:"&GJcy;",">":"&gt;",Γ:"&Gamma;",Ϝ:"&Gammad;",Ğ:"&Gbreve;",Ģ:"&Gcedil;",Ĝ:"&Gcirc;",Г:"&Gcy;",Ġ:"&Gdot;",𝔊:"&Gfr;","⋙":"&ggg;",𝔾:"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;",𝒢:"&Gscr;","≫":"&gg;",Ъ:"&HARDcy;",ˇ:"&caron;","^":"&Hat;",Ĥ:"&Hcirc;",ℌ:"&Poincareplane;",ℋ:"&hamilt;",ℍ:"&quaternions;","─":"&boxh;",Ħ:"&Hstrok;","≏":"&bumpeq;",Е:"&IEcy;",Ĳ:"&IJlig;",Ё:"&IOcy;",Í:"&Iacute;",Î:"&Icirc;",И:"&Icy;",İ:"&Idot;",ℑ:"&imagpart;",Ì:"&Igrave;",Ī:"&Imacr;",ⅈ:"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;",Į:"&Iogon;",𝕀:"&Iopf;",Ι:"&Iota;",ℐ:"&imagline;",Ĩ:"&Itilde;",І:"&Iukcy;",Ï:"&Iuml;",Ĵ:"&Jcirc;",Й:"&Jcy;",𝔍:"&Jfr;",𝕁:"&Jopf;",𝒥:"&Jscr;",Ј:"&Jsercy;",Є:"&Jukcy;",Х:"&KHcy;",Ќ:"&KJcy;",Κ:"&Kappa;",Ķ:"&Kcedil;",К:"&Kcy;",𝔎:"&Kfr;",𝕂:"&Kopf;",𝒦:"&Kscr;",Љ:"&LJcy;","<":"&lt;",Ĺ:"&Lacute;",Λ:"&Lambda;","⟪":"&Lang;",ℒ:"&lagran;","↞":"&twoheadleftarrow;",Ľ:"&Lcaron;",Ļ:"&Lcedil;",Л:"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;",𝔏:"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;",Ŀ:"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;",𝕃:"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;",Ł:"&Lstrok;","≪":"&ll;","⤅":"&Map;",М:"&Mcy;"," ":"&MediumSpace;",ℳ:"&phmmat;",𝔐:"&Mfr;","∓":"&mp;",𝕄:"&Mopf;",Μ:"&Mu;",Њ:"&NJcy;",Ń:"&Nacute;",Ň:"&Ncaron;",Ņ:"&Ncedil;",Н:"&Ncy;","​":"&ZeroWidthSpace;","\\n":"&NewLine;",𝔑:"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;",ℕ:"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;",𝒩:"&Nscr;",Ñ:"&Ntilde;",Ν:"&Nu;",Œ:"&OElig;",Ó:"&Oacute;",Ô:"&Ocirc;",О:"&Ocy;",Ő:"&Odblac;",𝔒:"&Ofr;",Ò:"&Ograve;",Ō:"&Omacr;",Ω:"&ohm;",Ο:"&Omicron;",𝕆:"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;",𝒪:"&Oscr;",Ø:"&Oslash;",Õ:"&Otilde;","⨷":"&Otimes;",Ö:"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;",П:"&Pcy;",𝔓:"&Pfr;",Φ:"&Phi;",Π:"&Pi;","±":"&pm;",ℙ:"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;",𝒫:"&Pscr;",Ψ:"&Psi;",\'"\':"&quot;",𝔔:"&Qfr;",ℚ:"&rationals;",𝒬:"&Qscr;","⤐":"&drbkarow;","®":"&reg;",Ŕ:"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;",Ř:"&Rcaron;",Ŗ:"&Rcedil;",Р:"&Rcy;",ℜ:"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;",Ρ:"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;",ℝ:"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;",ℛ:"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;",Щ:"&SHCHcy;",Ш:"&SHcy;",Ь:"&SOFTcy;",Ś:"&Sacute;","⪼":"&Sc;",Š:"&Scaron;",Ş:"&Scedil;",Ŝ:"&Scirc;",С:"&Scy;",𝔖:"&Sfr;","↑":"&uparrow;",Σ:"&Sigma;","∘":"&compfn;",𝕊:"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;",𝒮:"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;",Þ:"&THORN;","™":"&trade;",Ћ:"&TSHcy;",Ц:"&TScy;","\\t":"&Tab;",Τ:"&Tau;",Ť:"&Tcaron;",Ţ:"&Tcedil;",Т:"&Tcy;",𝔗:"&Tfr;","∴":"&therefore;",Θ:"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;",𝕋:"&Topf;","⃛":"&tdot;",𝒯:"&Tscr;",Ŧ:"&Tstrok;",Ú:"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;",Ў:"&Ubrcy;",Ŭ:"&Ubreve;",Û:"&Ucirc;",У:"&Ucy;",Ű:"&Udblac;",𝔘:"&Ufr;",Ù:"&Ugrave;",Ū:"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;",Ų:"&Uogon;",𝕌:"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;",ϒ:"&upsih;",Υ:"&Upsilon;",Ů:"&Uring;",𝒰:"&Uscr;",Ũ:"&Utilde;",Ü:"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;",В:"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;",𝔙:"&Vfr;",𝕍:"&Vopf;",𝒱:"&Vscr;","⊪":"&Vvdash;",Ŵ:"&Wcirc;","⋀":"&xwedge;",𝔚:"&Wfr;",𝕎:"&Wopf;",𝒲:"&Wscr;",𝔛:"&Xfr;",Ξ:"&Xi;",𝕏:"&Xopf;",𝒳:"&Xscr;",Я:"&YAcy;",Ї:"&YIcy;",Ю:"&YUcy;",Ý:"&Yacute;",Ŷ:"&Ycirc;",Ы:"&Ycy;",𝔜:"&Yfr;",𝕐:"&Yopf;",𝒴:"&Yscr;",Ÿ:"&Yuml;",Ж:"&ZHcy;",Ź:"&Zacute;",Ž:"&Zcaron;",З:"&Zcy;",Ż:"&Zdot;",Ζ:"&Zeta;",ℨ:"&zeetrf;",ℤ:"&integers;",𝒵:"&Zscr;",á:"&aacute;",ă:"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;",â:"&acirc;",а:"&acy;",æ:"&aelig;",𝔞:"&afr;",à:"&agrave;",ℵ:"&aleph;",α:"&alpha;",ā:"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;",ą:"&aogon;",𝕒:"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","\'":"&apos;",å:"&aring;",𝒶:"&ascr;","*":"&midast;",ã:"&atilde;",ä:"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;",б:"&bcy;","„":"&ldquor;","⦰":"&bemptyv;",β:"&beta;",ℶ:"&beth;","≬":"&twixt;",𝔟:"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;",𝕓:"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;",𝒷:"&bscr;","⁏":"&bsemi;","\\\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;",ć:"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;",č:"&ccaron;",ç:"&ccedil;",ĉ:"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;",ċ:"&cdot;","⦲":"&cemptyv;","¢":"&cent;",𝔠:"&cfr;",ч:"&chcy;","✓":"&checkmark;",χ:"&chi;","○":"&cir;","⧃":"&cirE;",ˆ:"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;",𝕔:"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;",𝒸:"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;",ℸ:"&daleth;","‐":"&hyphen;","⤏":"&rBarr;",ď:"&dcaron;",д:"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;",δ:"&delta;","⦱":"&demptyv;","⥿":"&dfisht;",𝔡:"&dfr;","♦":"&diams;",ϝ:"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;",ђ:"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;",𝕕:"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;",𝒹:"&dscr;",ѕ:"&dscy;","⧶":"&dsol;",đ:"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;",џ:"&dzcy;","⟿":"&dzigrarr;",é:"&eacute;","⩮":"&easter;",ě:"&ecaron;","≖":"&eqcirc;",ê:"&ecirc;","≕":"&eqcolon;",э:"&ecy;",ė:"&edot;","≒":"&fallingdotseq;",𝔢:"&efr;","⪚":"&eg;",è:"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;",ℓ:"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;",ē:"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;",ŋ:"&eng;"," ":"&ensp;",ę:"&eogon;",𝕖:"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;",ε:"&epsilon;",ϵ:"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;",ℯ:"&escr;",η:"&eta;",ð:"&eth;",ë:"&euml;","€":"&euro;","!":"&excl;",ф:"&fcy;","♀":"&female;",ﬃ:"&ffilig;",ﬀ:"&fflig;",ﬄ:"&ffllig;",𝔣:"&ffr;",ﬁ:"&filig;",fj:"&fjlig;","♭":"&flat;",ﬂ:"&fllig;","▱":"&fltns;",ƒ:"&fnof;",𝕗:"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;",𝒻:"&fscr;","⪌":"&gtreqqless;",ǵ:"&gacute;",γ:"&gamma;","⪆":"&gtrapprox;",ğ:"&gbreve;",ĝ:"&gcirc;",г:"&gcy;",ġ:"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;",𝔤:"&gfr;",ℷ:"&gimel;",ѓ:"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;",𝕘:"&gopf;",ℊ:"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;",ъ:"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;",ℏ:"&plankv;",ĥ:"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;",𝔥:"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;",𝕙:"&hopf;","―":"&horbar;",𝒽:"&hscr;",ħ:"&hstrok;","⁃":"&hybull;",í:"&iacute;",î:"&icirc;",и:"&icy;",е:"&iecy;","¡":"&iexcl;",𝔦:"&ifr;",ì:"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;",ĳ:"&ijlig;",ī:"&imacr;",ı:"&inodot;","⊷":"&imof;",Ƶ:"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;",ё:"&iocy;",į:"&iogon;",𝕚:"&iopf;",ι:"&iota;","¿":"&iquest;",𝒾:"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;",ĩ:"&itilde;",і:"&iukcy;",ï:"&iuml;",ĵ:"&jcirc;",й:"&jcy;",𝔧:"&jfr;",ȷ:"&jmath;",𝕛:"&jopf;",𝒿:"&jscr;",ј:"&jsercy;",є:"&jukcy;",κ:"&kappa;",ϰ:"&varkappa;",ķ:"&kcedil;",к:"&kcy;",𝔨:"&kfr;",ĸ:"&kgreen;",х:"&khcy;",ќ:"&kjcy;",𝕜:"&kopf;",𝓀:"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;",ĺ:"&lacute;","⦴":"&laemptyv;",λ:"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;",ľ:"&lcaron;",ļ:"&lcedil;",л:"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;",𝔩:"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;",љ:"&ljcy;","⥫":"&llhard;","◺":"&lltri;",ŀ:"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;",𝕝:"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;",𝓁:"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;",ł:"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;",м:"&mcy;","—":"&mdash;",𝔪:"&mfr;","℧":"&mho;",µ:"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;",𝕞:"&mopf;",𝓂:"&mscr;",μ:"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;",ń:"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;",ŉ:"&napos;","♮":"&natural;","⩃":"&ncap;",ň:"&ncaron;",ņ:"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;",н:"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;",𝔫:"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;",њ:"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;",𝕟:"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;",𝓃:"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;",ñ:"&ntilde;",ν:"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;",ó:"&oacute;",ô:"&ocirc;",о:"&ocy;",ő:"&odblac;","⨸":"&odiv;","⦼":"&odsold;",œ:"&oelig;","⦿":"&ofcir;",𝔬:"&ofr;","˛":"&ogon;",ò:"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;",ō:"&omacr;",ω:"&omega;",ο:"&omicron;","⦶":"&omid;",𝕠:"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;",ℴ:"&oscr;",ª:"&ordf;",º:"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;",ø:"&oslash;","⊘":"&osol;",õ:"&otilde;","⨶":"&otimesas;",ö:"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;",п:"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;",𝔭:"&pfr;",φ:"&phi;",ϕ:"&varphi;","☎":"&phone;",π:"&pi;",ϖ:"&varpi;",ℎ:"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;",𝕡:"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;",𝓅:"&pscr;",ψ:"&psi;"," ":"&puncsp;",𝔮:"&qfr;",𝕢:"&qopf;","⁗":"&qprime;",𝓆:"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;",ŕ:"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;",ř:"&rcaron;",ŗ:"&rcedil;",р:"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;",𝔯:"&rfr;","⥬":"&rharul;",ρ:"&rho;",ϱ:"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;",𝕣:"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;",𝓇:"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;",ś:"&sacute;","⪴":"&scE;","⪸":"&succapprox;",š:"&scaron;",ş:"&scedil;",ŝ:"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;",с:"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;",𝔰:"&sfr;","♯":"&sharp;",щ:"&shchcy;",ш:"&shcy;","­":"&shy;",σ:"&sigma;",ς:"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;",ь:"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;",𝕤:"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;",𝓈:"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;",ß:"&szlig;","⌖":"&target;",τ:"&tau;",ť:"&tcaron;",ţ:"&tcedil;",т:"&tcy;","⌕":"&telrec;",𝔱:"&tfr;",θ:"&theta;",ϑ:"&vartheta;",þ:"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;",𝕥:"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;",𝓉:"&tscr;",ц:"&tscy;",ћ:"&tshcy;",ŧ:"&tstrok;","⥣":"&uHar;",ú:"&uacute;",ў:"&ubrcy;",ŭ:"&ubreve;",û:"&ucirc;",у:"&ucy;",ű:"&udblac;","⥾":"&ufisht;",𝔲:"&ufr;",ù:"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;",ū:"&umacr;",ų:"&uogon;",𝕦:"&uopf;",υ:"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;",ů:"&uring;","◹":"&urtri;",𝓊:"&uscr;","⋰":"&utdot;",ũ:"&utilde;",ü:"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;",в:"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;",𝔳:"&vfr;",𝕧:"&vopf;",𝓋:"&vscr;","⦚":"&vzigzag;",ŵ:"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;",℘:"&wp;",𝔴:"&wfr;",𝕨:"&wopf;",𝓌:"&wscr;",𝔵:"&xfr;",ξ:"&xi;","⋻":"&xnis;",𝕩:"&xopf;",𝓍:"&xscr;",ý:"&yacute;",я:"&yacy;",ŷ:"&ycirc;",ы:"&ycy;","¥":"&yen;",𝔶:"&yfr;",ї:"&yicy;",𝕪:"&yopf;",𝓎:"&yscr;",ю:"&yucy;",ÿ:"&yuml;",ź:"&zacute;",ž:"&zcaron;",з:"&zcy;",ż:"&zdot;",ζ:"&zeta;",𝔷:"&zfr;",ж:"&zhcy;","⇝":"&zigrarr;",𝕫:"&zopf;",𝓏:"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}}},2920:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}},7630:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromCodePoint=String.fromCodePoint||function(e){return String.fromCharCode(Math.floor((e-65536)/1024)+55296,(e-65536)%1024+56320)},t.getCodePoint=String.prototype.codePointAt?function(e,t){return e.codePointAt(t)}:function(e,t){return 1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536},t.highSurrogateFrom=55296,t.highSurrogateTo=56319},690:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=/(([\'"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\\'"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyus]{1,6}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0],closed:void 0};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},9934:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,u=o(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))r.call(i,c)&&(u[c]=i[c]);if(t){l=t(i);for(var f=0;f<l.length;f++)n.call(i,l[f])&&(u[l[f]]=i[l[f]])}}return u}},3495:function(e){(function(){var t,r,n,o,a,i;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},r=process.hrtime,o=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},2009:(e,t,r)=>{"use strict";var n=r(2457);function o(){}var a=null,i={};function l(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor\'s argument is not a function");this._U=0,this._V=0,this._W=null,this._X=null,e!==o&&p(e,this)}function u(e,t){for(;3===e._V;)e=e._W;if(l._Y&&l._Y(e),0===e._V)return 0===e._U?(e._U=1,void(e._X=t)):1===e._U?(e._U=2,void(e._X=[e._X,t])):void e._X.push(t);!function(e,t){n((function(){var r=1===e._V?t.onFulfilled:t.onRejected;if(null!==r){var n=function(e,t){try{return e(t)}catch(e){return a=e,i}}(r,e._W);n===i?c(t.promise,a):s(t.promise,n)}else 1===e._V?s(t.promise,e._W):c(t.promise,e._W)}))}(e,t)}function s(e,t){if(t===e)return c(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var r=function(e){try{return e.then}catch(e){return a=e,i}}(t);if(r===i)return c(e,a);if(r===e.then&&t instanceof l)return e._V=3,e._W=t,void f(e);if("function"===typeof r)return void p(r.bind(t),e)}e._V=1,e._W=t,f(e)}function c(e,t){e._V=2,e._W=t,l._Z&&l._Z(e,t),f(e)}function f(e){if(1===e._U&&(u(e,e._X),e._X=null),2===e._U){for(var t=0;t<e._X.length;t++)u(e,e._X[t]);e._X=null}}function d(e,t,r){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=r}function p(e,t){var r=!1,n=function(e,t,r){try{e(t,r)}catch(e){return a=e,i}}(e,(function(e){r||(r=!0,s(t,e))}),(function(e){r||(r=!0,c(t,e))}));r||n!==i||(r=!0,c(t,a))}e.exports=l,l._Y=null,l._Z=null,l._0=o,l.prototype.then=function(e,t){if(this.constructor!==l)return function(e,t,r){return new e.constructor((function(n,a){var i=new l(o);i.then(n,a),u(e,new d(t,r,i))}))}(this,e,t);var r=new l(o);return u(this,new d(e,t,r)),r}},83:(e,t,r)=>{"use strict";var n=r(2009);e.exports=n;var o=c(!0),a=c(!1),i=c(null),l=c(void 0),u=c(0),s=c("");function c(e){var t=new n(n._0);return t._V=1,t._W=e,t}n.resolve=function(e){if(e instanceof n)return e;if(null===e)return i;if(void 0===e)return l;if(!0===e)return o;if(!1===e)return a;if(0===e)return u;if(""===e)return s;if("object"===typeof e||"function"===typeof e)try{var t=e.then;if("function"===typeof t)return new n(t.bind(e))}catch(e){return new n((function(t,r){r(e)}))}return c(e)};var f=function(e){return"function"===typeof Array.from?(f=Array.from,Array.from(e)):(f=function(e){return Array.prototype.slice.call(e)},Array.prototype.slice.call(e))};n.all=function(e){var t=f(e);return new n((function(e,r){if(0===t.length)return e([]);var o=t.length;function a(i,l){if(l&&("object"===typeof l||"function"===typeof l)){if(l instanceof n&&l.then===n.prototype.then){for(;3===l._V;)l=l._W;return 1===l._V?a(i,l._W):(2===l._V&&r(l._W),void l.then((function(e){a(i,e)}),r))}var u=l.then;if("function"===typeof u)return void new n(u.bind(l)).then((function(e){a(i,e)}),r)}t[i]=l,0===--o&&e(t)}for(var i=0;i<t.length;i++)a(i,t[i])}))},n.reject=function(e){return new n((function(t,r){r(e)}))},n.race=function(e){return new n((function(t,r){f(e).forEach((function(e){n.resolve(e).then(t,r)}))}))},n.prototype.catch=function(e){return this.then(null,e)}},7247:(e,t,r)=>{"use strict";var n=r(2009),o=[ReferenceError,TypeError,RangeError],a=!1;function i(){a=!1,n._Y=null,n._Z=null}function l(e,t){return t.some((function(t){return e instanceof t}))}t.disable=i,t.enable=function(e){e=e||{},a&&i();a=!0;var t=0,r=0,u={};function s(t){(e.allRejections||l(u[t].error,e.whitelist||o))&&(u[t].displayId=r++,e.onUnhandled?(u[t].logged=!0,e.onUnhandled(u[t].displayId,u[t].error)):(u[t].logged=!0,function(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):"),((t&&(t.stack||t))+"").split("\\n").forEach((function(e){console.warn("  "+e)}))}(u[t].displayId,u[t].error)))}n._Y=function(t){2===t._V&&u[t._1]&&(u[t._1].logged?function(t){u[t].logged&&(e.onHandled?e.onHandled(u[t].displayId,u[t].error):u[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+u[t].displayId+"):"),console.warn(\'  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id \'+u[t].displayId+".")))}(t._1):clearTimeout(u[t._1].timeout),delete u[t._1])},n._Z=function(e,r){0===e._U&&(e._1=t++,u[e._1]={displayId:null,error:r,timeout:setTimeout(s.bind(null,e._1),l(r,o)?100:2e3),logged:!1})}}},6597:(e,t,r)=>{for(var n=r(3495),o="undefined"===typeof window?r.g:window,a=["moz","webkit"],i="AnimationFrame",l=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],s=0;!l&&s<a.length;s++)l=o[a[s]+"Request"+i],u=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!l||!u){var c=0,f=0,d=[];l=function(e){if(0===d.length){var t=n(),r=Math.max(0,16.666666666666668-(t-c));c=r+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return d.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}},2015:(e,t,r)=>{"use strict";var n=r(6346),o=r(9934),a=r(7425);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!n)throw Error(i(227));var l=new Set,u={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,p=Object.prototype.hasOwnProperty,h={},g={};function m(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){v[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];v[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){v[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){v[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){v[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){v[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){v[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){v[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){v[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function w(e,t,r,n){var o=v.hasOwnProperty(t)?v[t]:null;(null!==o?0===o.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,r,n){if(null===t||"undefined"===typeof t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?function(e){return!!p.call(g,e)||!p.call(h,e)&&(d.test(e)?g[e]=!0:(h[e]=!0,!1))}(t)&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,b);v[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,b);v[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,b);v[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){v[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),v.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){v[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=60103,E=60106,S=60107,T=60108,_=60114,C=60109,O=60110,P=60112,R=60113,A=60120,q=60115,L=60116,N=60121,D=60128,I=60129,j=60130,M=60131;if("function"===typeof Symbol&&Symbol.for){var F=Symbol.for;k=F("react.element"),E=F("react.portal"),S=F("react.fragment"),T=F("react.strict_mode"),_=F("react.profiler"),C=F("react.provider"),O=F("react.context"),P=F("react.forward_ref"),R=F("react.suspense"),A=F("react.suspense_list"),q=F("react.memo"),L=F("react.lazy"),N=F("react.block"),F("react.scope"),D=F("react.opaque.id"),I=F("react.debug_trace_mode"),j=F("react.offscreen"),M=F("react.legacy_hidden")}var z,U="function"===typeof Symbol&&Symbol.iterator;function B(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=U&&e[U]||e["@@iterator"])?e:null}function V(e){if(void 0===z)try{throw Error()}catch(e){var t=e.stack.trim().match(/\\n( *(at )?)/);z=t&&t[1]||""}return"\\n"+z+e}var H=!1;function W(e,t){if(!e||H)return"";H=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}else{try{throw Error()}catch(e){n=e}e()}}catch(e){if(e&&n&&"string"===typeof e.stack){for(var o=e.stack.split("\\n"),a=n.stack.split("\\n"),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(1!==i||1!==l)do{if(i--,0>--l||o[i]!==a[l])return"\\n"+o[i].replace(" at new "," at ")}while(1<=i&&0<=l);break}}}finally{H=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?V(e):""}function G(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1);case 11:return e=W(e.type.render,!1);case 22:return e=W(e.type._render,!1);case 1:return e=W(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case E:return"Portal";case _:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case q:return $(e.type);case N:return $(e._render);case L:t=e._payload,e=e._init;try{return $(e(t))}catch(e){}}return null}function Q(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Y(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=Y(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){n=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Y(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Z(e,t){var r=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ee(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=Q(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&w(e,"checked",t,!1)}function re(e,t){te(e,t);var r=Q(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,r):t.hasOwnProperty("defaultValue")&&oe(e,t.type,Q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ne(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function oe(e,t,r){"number"===t&&J(e.ownerDocument)===e||(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}function ae(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function ie(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Q(r),t=null,o=0;o<e.length;o++){if(e[o].value===r)return e[o].selected=!0,void(n&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function le(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(i(92));if(Array.isArray(r)){if(!(1>=r.length))throw Error(i(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:Q(r)}}function se(e,t){var r=Q(t.value),n=Q(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function ce(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var fe="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?pe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ge,me,ve=(me=function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((ge=ge||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ge.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction((function(){return me(e,t)}))}:me);function ye(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var be={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];function xe(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||be.hasOwnProperty(e)&&be[e]?(""+t).trim():t+"px"}function ke(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),o=xe(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}Object.keys(be).forEach((function(e){we.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),be[t]=be[e]}))}));var Ee=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(e,t){if(t){if(Ee[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function Te(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function _e(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Oe=null,Pe=null;function Re(e){if(e=no(e)){if("function"!==typeof Ce)throw Error(i(280));var t=e.stateNode;t&&(t=ao(t),Ce(e.stateNode,e.type,t))}}function Ae(e){Oe?Pe?Pe.push(e):Pe=[e]:Oe=e}function qe(){if(Oe){var e=Oe,t=Pe;if(Pe=Oe=null,Re(e),t)for(e=0;e<t.length;e++)Re(t[e])}}function Le(e,t){return e(t)}function Ne(e,t,r,n,o){return e(t,r,n,o)}function De(){}var Ie=Le,je=!1,Me=!1;function Fe(){null===Oe&&null===Pe||(De(),qe())}function ze(e,t){var r=e.stateNode;if(null===r)return null;var n=ao(r);if(null===n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}if(e)return null;if(r&&"function"!==typeof r)throw Error(i(231,t,typeof r));return r}var Ue=!1;if(f)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){Ue=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch(me){Ue=!1}function Ve(e,t,r,n,o,a,i,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(r,s)}catch(e){this.onError(e)}}var He=!1,We=null,Ge=!1,$e=null,Qe={onError:function(e){He=!0,We=e}};function Ye(e,t,r,n,o,a,i,l,u){He=!1,We=null,Ve.apply(Qe,arguments)}function Ke(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(r=t.return),e=t.return}while(e)}return 3===t.tag?r:null}function Xe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Je(e){if(Ke(e)!==e)throw Error(i(188))}function Ze(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ke(e)))throw Error(i(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(n=o.return)){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Je(o),e;if(a===n)return Je(o),t;a=a.sibling}throw Error(i(188))}if(r.return!==n.return)r=o,n=a;else{for(var l=!1,u=o.child;u;){if(u===r){l=!0,r=o,n=a;break}if(u===n){l=!0,n=o,r=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===r){l=!0,r=a,n=o;break}if(u===n){l=!0,n=a,r=o;break}u=u.sibling}if(!l)throw Error(i(189))}}if(r.alternate!==n)throw Error(i(190))}if(3!==r.tag)throw Error(i(188));return r.stateNode.current===r?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var r=e.alternate;null!==t;){if(t===e||t===r)return!0;t=t.return}return!1}var tt,rt,nt,ot,at=!1,it=[],lt=null,ut=null,st=null,ct=new Map,ft=new Map,dt=[],pt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ht(e,t,r,n,o){return{blockedOn:e,domEventName:t,eventSystemFlags:16|r,nativeEvent:o,targetContainers:[n]}}function gt(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":ct.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ft.delete(t.pointerId)}}function mt(e,t,r,n,o,a){return null===e||e.nativeEvent!==a?(e=ht(t,r,n,o,a),null!==t&&(null!==(t=no(t))&&rt(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function vt(e){var t=ro(e.target);if(null!==t){var r=Ke(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=Xe(r)))return e.blockedOn=t,void ot(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){nt(r)}))}))}else if(3===t&&r.stateNode.hydrate)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=no(r))&&rt(t),e.blockedOn=r,!1;t.shift()}return!0}function bt(e,t,r){yt(e)&&r.delete(t)}function wt(){for(at=!1;0<it.length;){var e=it[0];if(null!==e.blockedOn){null!==(e=no(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var r=Zt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r){e.blockedOn=r;break}t.shift()}null===e.blockedOn&&it.shift()}null!==lt&&yt(lt)&&(lt=null),null!==ut&&yt(ut)&&(ut=null),null!==st&&yt(st)&&(st=null),ct.forEach(bt),ft.forEach(bt)}function xt(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wt)))}function kt(e){function t(t){return xt(t,e)}if(0<it.length){xt(it[0],e);for(var r=1;r<it.length;r++){var n=it[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==lt&&xt(lt,e),null!==ut&&xt(ut,e),null!==st&&xt(st,e),ct.forEach(t),ft.forEach(t),r=0;r<dt.length;r++)(n=dt[r]).blockedOn===e&&(n.blockedOn=null);for(;0<dt.length&&null===(r=dt[0]).blockedOn;)vt(r),null===r.blockedOn&&dt.shift()}function Et(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var St={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionend:Et("Transition","TransitionEnd")},Tt={},_t={};function Ct(e){if(Tt[e])return Tt[e];if(!St[e])return e;var t,r=St[e];for(t in r)if(r.hasOwnProperty(t)&&t in _t)return Tt[e]=r[t];return e}f&&(_t=document.createElement("div").style,"AnimationEvent"in window||(delete St.animationend.animation,delete St.animationiteration.animation,delete St.animationstart.animation),"TransitionEvent"in window||delete St.transitionend.transition);var Ot=Ct("animationend"),Pt=Ct("animationiteration"),Rt=Ct("animationstart"),At=Ct("transitionend"),qt=new Map,Lt=new Map,Nt=["abort","abort",Ot,"animationEnd",Pt,"animationIteration",Rt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",At,"transitionEnd","waiting","waiting"];function Dt(e,t){for(var r=0;r<e.length;r+=2){var n=e[r],o=e[r+1];o="on"+(o[0].toUpperCase()+o.slice(1)),Lt.set(n,t),qt.set(n,o),s(o,[n])}}(0,a.unstable_now)();var It=8;function jt(e){if(0!==(1&e))return It=15,1;if(0!==(2&e))return It=14,2;if(0!==(4&e))return It=13,4;var t=24&e;return 0!==t?(It=12,t):0!==(32&e)?(It=11,32):0!==(t=192&e)?(It=10,t):0!==(256&e)?(It=9,256):0!==(t=3584&e)?(It=8,t):0!==(4096&e)?(It=7,4096):0!==(t=4186112&e)?(It=6,t):0!==(t=62914560&e)?(It=5,t):67108864&e?(It=4,67108864):0!==(134217728&e)?(It=3,134217728):0!==(t=805306368&e)?(It=2,t):0!==(1073741824&e)?(It=1,1073741824):(It=8,e)}function Mt(e,t){var r=e.pendingLanes;if(0===r)return It=0;var n=0,o=0,a=e.expiredLanes,i=e.suspendedLanes,l=e.pingedLanes;if(0!==a)n=a,o=It=15;else if(0!==(a=134217727&r)){var u=a&~i;0!==u?(n=jt(u),o=It):0!==(l&=a)&&(n=jt(l),o=It)}else 0!==(a=r&~i)?(n=jt(a),o=It):0!==l&&(n=jt(l),o=It);if(0===n)return 0;if(n=r&((0>(n=31-Ht(n))?0:1<<n)<<1)-1,0!==t&&t!==n&&0===(t&i)){if(jt(t),o<=It)return t;It=o}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)o=1<<(r=31-Ht(t)),n|=e[r],t&=~o;return n}function Ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function zt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Ut(24&~t))?zt(10,t):e;case 10:return 0===(e=Ut(192&~t))?zt(8,t):e;case 8:return 0===(e=Ut(3584&~t))&&(0===(e=Ut(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Ut(805306368&~t))&&(t=268435456),t}throw Error(i(358,e))}function Ut(e){return e&-e}function Bt(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Vt(e,t,r){e.pendingLanes|=t;var n=t-1;e.suspendedLanes&=n,e.pingedLanes&=n,(e=e.eventTimes)[t=31-Ht(t)]=r}var Ht=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Wt(e)/Gt|0)|0},Wt=Math.log,Gt=Math.LN2;var $t=a.unstable_UserBlockingPriority,Qt=a.unstable_runWithPriority,Yt=!0;function Kt(e,t,r,n){je||De();var o=Jt,a=je;je=!0;try{Ne(o,e,t,r,n)}finally{(je=a)||Fe()}}function Xt(e,t,r,n){Qt($t,Jt.bind(null,e,t,r,n))}function Jt(e,t,r,n){var o;if(Yt)if((o=0===(4&t))&&0<it.length&&-1<pt.indexOf(e))e=ht(null,e,t,r,n),it.push(e);else{var a=Zt(e,t,r,n);if(null===a)o&&gt(e,n);else{if(o){if(-1<pt.indexOf(e))return e=ht(a,e,t,r,n),void it.push(e);if(function(e,t,r,n,o){switch(t){case"focusin":return lt=mt(lt,e,t,r,n,o),!0;case"dragenter":return ut=mt(ut,e,t,r,n,o),!0;case"mouseover":return st=mt(st,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return ct.set(a,mt(ct.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,ft.set(a,mt(ft.get(a)||null,e,t,r,n,o)),!0}return!1}(a,e,t,r,n))return;gt(e,n)}Dn(e,t,n,null,r)}}}function Zt(e,t,r,n){var o=_e(n);if(null!==(o=ro(o))){var a=Ke(o);if(null===a)o=null;else{var i=a.tag;if(13===i){if(null!==(o=Xe(a)))return o;o=null}else if(3===i){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null)}}return Dn(e,t,n,o,r),null}var er=null,tr=null,rr=null;function nr(){if(rr)return rr;var e,t,r=tr,n=r.length,o="value"in er?er.value:er.textContent,a=o.length;for(e=0;e<n&&r[e]===o[e];e++);var i=n-e;for(t=1;t<=i&&r[n-t]===o[a-t];t++);return rr=o.slice(e,1<t?1-t:void 0)}function or(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function ar(){return!0}function ir(){return!1}function lr(e){function t(t,r,n,o,a){for(var i in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(o):o[i]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ar:ir,this.isPropagationStopped=ir,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var ur,sr,cr,fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dr=lr(fr),pr=o({},fr,{view:0,detail:0}),hr=lr(pr),gr=o({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&"mousemove"===e.type?(ur=e.screenX-cr.screenX,sr=e.screenY-cr.screenY):sr=ur=0,cr=e),ur)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),mr=lr(gr),vr=lr(o({},gr,{dataTransfer:0})),yr=lr(o({},pr,{relatedTarget:0})),br=lr(o({},fr,{animationName:0,elapsedTime:0,pseudoElement:0})),wr=o({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xr=lr(wr),kr=lr(o({},fr,{data:0})),Er={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _r(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Tr[e])&&!!t[e]}function Cr(){return _r}var Or=o({},pr,{key:function(e){if(e.key){var t=Er[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=or(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?or(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?or(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pr=lr(Or),Rr=lr(o({},gr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ar=lr(o({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr})),qr=lr(o({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Lr=o({},gr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nr=lr(Lr),Dr=[9,13,27,32],Ir=f&&"CompositionEvent"in window,jr=null;f&&"documentMode"in document&&(jr=document.documentMode);var Mr=f&&"TextEvent"in window&&!jr,Fr=f&&(!Ir||jr&&8<jr&&11>=jr),zr=String.fromCharCode(32),Ur=!1;function Br(e,t){switch(e){case"keyup":return-1!==Dr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hr=!1;var Wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wr[e.type]:"textarea"===t}function $r(e,t,r,n){Ae(n),0<(t=jn(t,"onChange")).length&&(r=new dr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Qr=null,Yr=null;function Kr(e){Pn(e,0)}function Xr(e){if(X(oo(e)))return e}function Jr(e,t){if("change"===e)return t}var Zr=!1;if(f){var en;if(f){var tn="oninput"in document;if(!tn){var rn=document.createElement("div");rn.setAttribute("oninput","return;"),tn="function"===typeof rn.oninput}en=tn}else en=!1;Zr=en&&(!document.documentMode||9<document.documentMode)}function nn(){Qr&&(Qr.detachEvent("onpropertychange",on),Yr=Qr=null)}function on(e){if("value"===e.propertyName&&Xr(Yr)){var t=[];if($r(t,Yr,e,_e(e)),e=Kr,je)e(t);else{je=!0;try{Le(e,t)}finally{je=!1,Fe()}}}}function an(e,t,r){"focusin"===e?(nn(),Yr=r,(Qr=t).attachEvent("onpropertychange",on)):"focusout"===e&&nn()}function ln(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xr(Yr)}function un(e,t){if("click"===e)return Xr(t)}function sn(e,t){if("input"===e||"change"===e)return Xr(t)}var cn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},fn=Object.prototype.hasOwnProperty;function dn(e,t){if(cn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++)if(!fn.call(t,r[n])||!cn(e[r[n]],t[r[n]]))return!1;return!0}function pn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hn(e,t){var r,n=pn(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pn(n)}}function gn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?gn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function mn(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var r="string"===typeof t.contentWindow.location.href}catch(e){r=!1}if(!r)break;t=J((e=t.contentWindow).document)}return t}function vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var yn=f&&"documentMode"in document&&11>=document.documentMode,bn=null,wn=null,xn=null,kn=!1;function En(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;kn||null==bn||bn!==J(n)||("selectionStart"in(n=bn)&&vn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},xn&&dn(xn,n)||(xn=n,0<(n=jn(wn,"onSelect")).length&&(t=new dr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=bn)))}Dt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Dt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Dt(Nt,2);for(var Sn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Tn=0;Tn<Sn.length;Tn++)Lt.set(Sn[Tn],0);c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cn=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function On(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,o,a,l,u,s){if(Ye.apply(this,arguments),He){if(!He)throw Error(i(198));var c=We;He=!1,We=null,Ge||(Ge=!0,$e=c)}}(n,t,void 0,e),e.currentTarget=null}function Pn(e,t){t=0!==(4&t);for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break e;On(o,l,s),a=u}else for(i=0;i<n.length;i++){if(u=(l=n[i]).instance,s=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break e;On(o,l,s),a=u}}}if(Ge)throw e=$e,Ge=!1,$e=null,e}function Rn(e,t){var r=io(t),n=e+"__bubble";r.has(n)||(Nn(t,e,2,!1),r.add(n))}var An="_reactListening"+Math.random().toString(36).slice(2);function qn(e){e[An]||(e[An]=!0,l.forEach((function(t){Cn.has(t)||Ln(t,!1,e,null),Ln(t,!0,e,null)})))}function Ln(e,t,r,n){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=r;if("selectionchange"===e&&9!==r.nodeType&&(a=r.ownerDocument),null!==n&&!t&&Cn.has(e)){if("scroll"!==e)return;o|=2,a=n}var i=io(a),l=e+"__"+(t?"capture":"bubble");i.has(l)||(t&&(o|=4),Nn(a,e,o,t),i.add(l))}function Nn(e,t,r,n){var o=Lt.get(t);switch(void 0===o?2:o){case 0:o=Kt;break;case 1:o=Xt;break;default:o=Jt}r=o.bind(null,t,r,e),o=void 0,!Ue||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),n?void 0!==o?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):void 0!==o?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Dn(e,t,r,n,o){var a=n;if(0===(1&t)&&0===(2&t)&&null!==n)e:for(;;){if(null===n)return;var i=n.tag;if(3===i||4===i){var l=n.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===i)for(i=n.return;null!==i;){var u=i.tag;if((3===u||4===u)&&((u=i.stateNode.containerInfo)===o||8===u.nodeType&&u.parentNode===o))return;i=i.return}for(;null!==l;){if(null===(i=ro(l)))return;if(5===(u=i.tag)||6===u){n=a=i;continue e}l=l.parentNode}}n=n.return}!function(e,t,r){if(Me)return e(t,r);Me=!0;try{Ie(e,t,r)}finally{Me=!1,Fe()}}((function(){var n=a,o=_e(r),i=[];e:{var l=qt.get(e);if(void 0!==l){var u=dr,s=e;switch(e){case"keypress":if(0===or(r))break e;case"keydown":case"keyup":u=Pr;break;case"focusin":s="focus",u=yr;break;case"focusout":s="blur",u=yr;break;case"beforeblur":case"afterblur":u=yr;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=vr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=Ar;break;case Ot:case Pt:case Rt:u=br;break;case At:u=qr;break;case"scroll":u=hr;break;case"wheel":u=Nr;break;case"copy":case"cut":case"paste":u=xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=Rr}var c=0!==(4&t),f=!c&&"scroll"===e,d=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=n;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==d&&(null!=(g=ze(h,d))&&c.push(In(h,g,p)))),f)break;h=h.return}0<c.length&&(l=new u(l,s,null,r,o),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!==(16&t)||!(s=r.relatedTarget||r.fromElement)||!ro(s)&&!s[eo])&&(u||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=n,null!==(s=(s=r.relatedTarget||r.toElement)?ro(s):null)&&(s!==(f=Ke(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null,s=n),u!==s)){if(c=mr,g="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Rr,g="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?l:oo(u),p=null==s?l:oo(s),(l=new c(g,h+"leave",u,r,o)).target=f,l.relatedTarget=p,g=null,ro(o)===n&&((c=new c(d,h+"enter",s,r,o)).target=p,c.relatedTarget=f,g=c),f=g,u&&s)e:{for(d=s,h=0,p=c=u;p;p=Mn(p))h++;for(p=0,g=d;g;g=Mn(g))p++;for(;0<h-p;)c=Mn(c),h--;for(;0<p-h;)d=Mn(d),p--;for(;h--;){if(c===d||null!==d&&c===d.alternate)break e;c=Mn(c),d=Mn(d)}c=null}else c=null;null!==u&&Fn(i,l,u,c,!1),null!==s&&null!==f&&Fn(i,f,s,c,!0)}if("select"===(u=(l=n?oo(n):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var m=Jr;else if(Gr(l))if(Zr)m=sn;else{m=ln;var v=an}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=un);switch(m&&(m=m(e,n))?$r(i,m,r,o):(v&&v(e,l,n),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&oe(l,"number",l.value)),v=n?oo(n):window,e){case"focusin":(Gr(v)||"true"===v.contentEditable)&&(bn=v,wn=n,xn=null);break;case"focusout":xn=wn=bn=null;break;case"mousedown":kn=!0;break;case"contextmenu":case"mouseup":case"dragend":kn=!1,En(i,r,o);break;case"selectionchange":if(yn)break;case"keydown":case"keyup":En(i,r,o)}var y;if(Ir)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hr?Br(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(Fr&&"ko"!==r.locale&&(Hr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hr&&(y=nr()):(tr="value"in(er=o)?er.value:er.textContent,Hr=!0)),0<(v=jn(n,b)).length&&(b=new kr(b,e,null,r,o),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Vr(r))&&(b.data=y))),(y=Mr?function(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return 32!==t.which?null:(Ur=!0,zr);case"textInput":return(e=t.data)===zr&&Ur?null:e;default:return null}}(e,r):function(e,t){if(Hr)return"compositionend"===e||!Ir&&Br(e,t)?(e=nr(),rr=tr=er=null,Hr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fr&&"ko"!==t.locale?null:t.data}}(e,r))&&(0<(n=jn(n,"onBeforeInput")).length&&(o=new kr("onBeforeInput","beforeinput",null,r,o),i.push({event:o,listeners:n}),o.data=y))}Pn(i,t)}))}function In(e,t,r){return{instance:e,listener:t,currentTarget:r}}function jn(e,t){for(var r=t+"Capture",n=[];null!==e;){var o=e,a=o.stateNode;5===o.tag&&null!==a&&(o=a,null!=(a=ze(e,r))&&n.unshift(In(e,a,o)),null!=(a=ze(e,t))&&n.push(In(e,a,o))),e=e.return}return n}function Mn(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Fn(e,t,r,n,o){for(var a=t._reactName,i=[];null!==r&&r!==n;){var l=r,u=l.alternate,s=l.stateNode;if(null!==u&&u===n)break;5===l.tag&&null!==s&&(l=s,o?null!=(u=ze(r,a))&&i.unshift(In(r,u,l)):o||null!=(u=ze(r,a))&&i.push(In(r,u,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}function zn(){}var Un=null,Bn=null;function Vn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Hn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Wn="function"===typeof setTimeout?setTimeout:void 0,Gn="function"===typeof clearTimeout?clearTimeout:void 0;function $n(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Qn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Yn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var Kn=0;var Xn=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Xn,Zn="__reactProps$"+Xn,eo="__reactContainer$"+Xn,to="__reactEvents$"+Xn;function ro(e){var t=e[Jn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[eo]||r[Jn]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=Yn(e);null!==e;){if(r=e[Jn])return r;e=Yn(e)}return t}r=(e=r).parentNode}return null}function no(e){return!(e=e[Jn]||e[eo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function oo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ao(e){return e[Zn]||null}function io(e){var t=e[to];return void 0===t&&(t=e[to]=new Set),t}var lo=[],uo=-1;function so(e){return{current:e}}function co(e){0>uo||(e.current=lo[uo],lo[uo]=null,uo--)}function fo(e,t){uo++,lo[uo]=e.current,e.current=t}var po={},ho=so(po),go=so(!1),mo=po;function vo(e,t){var r=e.type.contextTypes;if(!r)return po;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o,a={};for(o in r)a[o]=t[o];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function yo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function bo(){co(go),co(ho)}function wo(e,t,r){if(ho.current!==po)throw Error(i(168));fo(ho,t),fo(go,r)}function xo(e,t,r){var n=e.stateNode;if(e=t.childContextTypes,"function"!==typeof n.getChildContext)return r;for(var a in n=n.getChildContext())if(!(a in e))throw Error(i(108,$(t)||"Unknown",a));return o({},r,n)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||po,mo=ho.current,fo(ho,e),fo(go,go.current),!0}function Eo(e,t,r){var n=e.stateNode;if(!n)throw Error(i(169));r?(e=xo(e,t,mo),n.__reactInternalMemoizedMergedChildContext=e,co(go),co(ho),fo(ho,e)):co(go),fo(go,r)}var So=null,To=null,_o=a.unstable_runWithPriority,Co=a.unstable_scheduleCallback,Oo=a.unstable_cancelCallback,Po=a.unstable_shouldYield,Ro=a.unstable_requestPaint,Ao=a.unstable_now,qo=a.unstable_getCurrentPriorityLevel,Lo=a.unstable_ImmediatePriority,No=a.unstable_UserBlockingPriority,Do=a.unstable_NormalPriority,Io=a.unstable_LowPriority,jo=a.unstable_IdlePriority,Mo={},Fo=void 0!==Ro?Ro:function(){},zo=null,Uo=null,Bo=!1,Vo=Ao(),Ho=1e4>Vo?Ao:function(){return Ao()-Vo};function Wo(){switch(qo()){case Lo:return 99;case No:return 98;case Do:return 97;case Io:return 96;case jo:return 95;default:throw Error(i(332))}}function Go(e){switch(e){case 99:return Lo;case 98:return No;case 97:return Do;case 96:return Io;case 95:return jo;default:throw Error(i(332))}}function $o(e,t){return e=Go(e),_o(e,t)}function Qo(e,t,r){return e=Go(e),Co(e,t,r)}function Yo(){if(null!==Uo){var e=Uo;Uo=null,Oo(e)}Ko()}function Ko(){if(!Bo&&null!==zo){Bo=!0;var e=0;try{var t=zo;$o(99,(function(){for(;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}})),zo=null}catch(t){throw null!==zo&&(zo=zo.slice(e+1)),Co(Lo,Yo),t}finally{Bo=!1}}}var Xo=x.ReactCurrentBatchConfig;function Jo(e,t){if(e&&e.defaultProps){for(var r in t=o({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}return t}var Zo=so(null),ea=null,ta=null,ra=null;function na(){ra=ta=ea=null}function oa(e){var t=Zo.current;co(Zo),e.type._context._currentValue=t}function aa(e,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)===t){if(null===r||(r.childLanes&t)===t)break;r.childLanes|=t}else e.childLanes|=t,null!==r&&(r.childLanes|=t);e=e.return}}function ia(e,t){ea=e,ra=ta=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ji=!0),e.firstContext=null)}function la(e,t){if(ra!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(ra=e,t=1073741823),t={context:e,observedBits:t,next:null},null===ta){if(null===ea)throw Error(i(308));ta=t,ea.dependencies={lanes:0,firstContext:t,responders:null}}else ta=ta.next=t;return e._currentValue}var ua=!1;function sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function ca(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function da(e,t){if(null!==(e=e.updateQueue)){var r=(e=e.shared).pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}}function pa(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var o=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===a?o=a=i:a=a.next=i,r=r.next}while(null!==r);null===a?o=a=t:a=a.next=t}else o=a=t;return r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},void(e.updateQueue=r)}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ha(e,t,r,n){var a=e.updateQueue;ua=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(null!==u){a.shared.pending=null;var s=u,c=s.next;s.next=null,null===l?i=c:l.next=c,l=s;var f=e.alternate;if(null!==f){var d=(f=f.updateQueue).lastBaseUpdate;d!==l&&(null===d?f.firstBaseUpdate=c:d.next=c,f.lastBaseUpdate=s)}}if(null!==i){for(d=a.baseState,l=0,f=c=s=null;;){u=i.lane;var p=i.eventTime;if((n&u)===u){null!==f&&(f=f.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var h=e,g=i;switch(u=t,p=r,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,u);break e}d=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null===(u="function"===typeof(h=g.payload)?h.call(p,d,u):h)||void 0===u)break e;d=o({},d,u);break e;case 2:ua=!0}}null!==i.callback&&(e.flags|=32,null===(u=a.effects)?a.effects=[i]:u.push(i))}else p={eventTime:p,lane:u,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===f?(c=f=p,s=d):f=f.next=p,l|=u;if(null===(i=i.next)){if(null===(u=a.shared.pending))break;i=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}null===f&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=f,Ul|=l,e.lanes=l,e.memoizedState=d}}function ga(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(null!==o){if(n.callback=null,n=r,"function"!==typeof o)throw Error(i(191,o));o.call(n)}}}var ma=(new n.Component).refs;function va(e,t,r,n){r=null===(r=r(n,t=e.memoizedState))||void 0===r?t:o({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var ya={isMounted:function(e){return!!(e=e._reactInternals)&&Ke(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=du(),o=pu(e),a=fa(n,o);a.payload=t,void 0!==r&&null!==r&&(a.callback=r),da(e,a),hu(e,o,n)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=du(),o=pu(e),a=fa(n,o);a.tag=1,a.payload=t,void 0!==r&&null!==r&&(a.callback=r),da(e,a),hu(e,o,n)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=du(),n=pu(e),o=fa(r,n);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),da(e,o),hu(e,n,r)}};function ba(e,t,r,n,o,a,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,a,i):!t.prototype||!t.prototype.isPureReactComponent||(!dn(r,n)||!dn(o,a))}function wa(e,t,r){var n=!1,o=po,a=t.contextType;return"object"===typeof a&&null!==a?a=la(a):(o=yo(t)?mo:ho.current,a=(n=null!==(n=t.contextTypes)&&void 0!==n)?vo(e,o):po),t=new t(r,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function xa(e,t,r,n){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function ka(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=ma,sa(e);var a=t.contextType;"object"===typeof a&&null!==a?o.context=la(a):(a=yo(t)?mo:ho.current,o.context=vo(e,a)),ha(e,r,o,n),o.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(va(e,t,a,r),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ya.enqueueReplaceState(o,o.state,null),ha(e,r,o,n),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4)}var Ea=Array.isArray;function Sa(e,t,r){if(null!==(e=r.ref)&&"function"!==typeof e&&"object"!==typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(i(309));var n=r.stateNode}if(!n)throw Error(i(147,e));var o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=n.refs;t===ma&&(t=n.refs={}),null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Ta(e,t){if("textarea"!==e.type)throw Error(i(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function _a(e){function t(t,r){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=r,t.lastEffect=r):t.firstEffect=t.lastEffect=r,r.nextEffect=null,r.flags=8}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Gu(e,t)).index=0,e.sibling=null,e}function a(t,r,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<r?(t.flags=2,r):n:(t.flags=2,r):r}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function u(e,t,r,n){return null===t||6!==t.tag?((t=Ku(r,e.mode,n)).return=e,t):((t=o(t,r)).return=e,t)}function s(e,t,r,n){return null!==t&&t.elementType===r.type?((n=o(t,r.props)).ref=Sa(e,t,r),n.return=e,n):((n=$u(r.type,r.key,r.props,null,e.mode,n)).ref=Sa(e,t,r),n.return=e,n)}function c(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?((t=Xu(r,e.mode,n)).return=e,t):((t=o(t,r.children||[])).return=e,t)}function f(e,t,r,n,a){return null===t||7!==t.tag?((t=Qu(r,e.mode,n,a)).return=e,t):((t=o(t,r)).return=e,t)}function d(e,t,r){if("string"===typeof t||"number"===typeof t)return(t=Ku(""+t,e.mode,r)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(r=$u(t.type,t.key,t.props,null,e.mode,r)).ref=Sa(e,null,t),r.return=e,r;case E:return(t=Xu(t,e.mode,r)).return=e,t}if(Ea(t)||B(t))return(t=Qu(t,e.mode,r,null)).return=e,t;Ta(e,t)}return null}function p(e,t,r,n){var o=null!==t?t.key:null;if("string"===typeof r||"number"===typeof r)return null!==o?null:u(e,t,""+r,n);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return r.key===o?r.type===S?f(e,t,r.props.children,n,o):s(e,t,r,n):null;case E:return r.key===o?c(e,t,r,n):null}if(Ea(r)||B(r))return null!==o?null:f(e,t,r,n,null);Ta(e,r)}return null}function h(e,t,r,n,o){if("string"===typeof n||"number"===typeof n)return u(t,e=e.get(r)||null,""+n,o);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return e=e.get(null===n.key?r:n.key)||null,n.type===S?f(t,e,n.props.children,o,n.key):s(t,e,n,o);case E:return c(t,e=e.get(null===n.key?r:n.key)||null,n,o)}if(Ea(n)||B(n))return f(t,e=e.get(r)||null,n,o,null);Ta(t,n)}return null}function g(o,i,l,u){for(var s=null,c=null,f=i,g=i=0,m=null;null!==f&&g<l.length;g++){f.index>g?(m=f,f=null):m=f.sibling;var v=p(o,f,l[g],u);if(null===v){null===f&&(f=m);break}e&&f&&null===v.alternate&&t(o,f),i=a(v,i,g),null===c?s=v:c.sibling=v,c=v,f=m}if(g===l.length)return r(o,f),s;if(null===f){for(;g<l.length;g++)null!==(f=d(o,l[g],u))&&(i=a(f,i,g),null===c?s=f:c.sibling=f,c=f);return s}for(f=n(o,f);g<l.length;g++)null!==(m=h(f,o,g,l[g],u))&&(e&&null!==m.alternate&&f.delete(null===m.key?g:m.key),i=a(m,i,g),null===c?s=m:c.sibling=m,c=m);return e&&f.forEach((function(e){return t(o,e)})),s}function m(o,l,u,s){var c=B(u);if("function"!==typeof c)throw Error(i(150));if(null==(u=c.call(u)))throw Error(i(151));for(var f=c=null,g=l,m=l=0,v=null,y=u.next();null!==g&&!y.done;m++,y=u.next()){g.index>m?(v=g,g=null):v=g.sibling;var b=p(o,g,y.value,s);if(null===b){null===g&&(g=v);break}e&&g&&null===b.alternate&&t(o,g),l=a(b,l,m),null===f?c=b:f.sibling=b,f=b,g=v}if(y.done)return r(o,g),c;if(null===g){for(;!y.done;m++,y=u.next())null!==(y=d(o,y.value,s))&&(l=a(y,l,m),null===f?c=y:f.sibling=y,f=y);return c}for(g=n(o,g);!y.done;m++,y=u.next())null!==(y=h(g,o,m,y.value,s))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),l=a(y,l,m),null===f?c=y:f.sibling=y,f=y);return e&&g.forEach((function(e){return t(o,e)})),c}return function(e,n,a,u){var s="object"===typeof a&&null!==a&&a.type===S&&null===a.key;s&&(a=a.props.children);var c="object"===typeof a&&null!==a;if(c)switch(a.$$typeof){case k:e:{for(c=a.key,s=n;null!==s;){if(s.key===c){if(7===s.tag){if(a.type===S){r(e,s.sibling),(n=o(s,a.props.children)).return=e,e=n;break e}}else if(s.elementType===a.type){r(e,s.sibling),(n=o(s,a.props)).ref=Sa(e,s,a),n.return=e,e=n;break e}r(e,s);break}t(e,s),s=s.sibling}a.type===S?((n=Qu(a.props.children,e.mode,u,a.key)).return=e,e=n):((u=$u(a.type,a.key,a.props,null,e.mode,u)).ref=Sa(e,n,a),u.return=e,e=u)}return l(e);case E:e:{for(s=a.key;null!==n;){if(n.key===s){if(4===n.tag&&n.stateNode.containerInfo===a.containerInfo&&n.stateNode.implementation===a.implementation){r(e,n.sibling),(n=o(n,a.children||[])).return=e,e=n;break e}r(e,n);break}t(e,n),n=n.sibling}(n=Xu(a,e.mode,u)).return=e,e=n}return l(e)}if("string"===typeof a||"number"===typeof a)return a=""+a,null!==n&&6===n.tag?(r(e,n.sibling),(n=o(n,a)).return=e,e=n):(r(e,n),(n=Ku(a,e.mode,u)).return=e,e=n),l(e);if(Ea(a))return g(e,n,a,u);if(B(a))return m(e,n,a,u);if(c&&Ta(e,a),"undefined"===typeof a&&!s)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(i(152,$(e.type)||"Component"))}return r(e,n)}}var Ca=_a(!0),Oa=_a(!1),Pa={},Ra=so(Pa),Aa=so(Pa),qa=so(Pa);function La(e){if(e===Pa)throw Error(i(174));return e}function Na(e,t){switch(fo(qa,t),fo(Aa,e),fo(Ra,Pa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:he(null,"");break;default:t=he(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}co(Ra),fo(Ra,t)}function Da(){co(Ra),co(Aa),co(qa)}function Ia(e){La(qa.current);var t=La(Ra.current),r=he(t,e.type);t!==r&&(fo(Aa,e),fo(Ra,r))}function ja(e){Aa.current===e&&(co(Ra),co(Aa))}var Ma=so(0);function Fa(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=null,Ua=null,Ba=!1;function Va(e,t){var r=Hu(5,null,null,0);r.elementType="DELETED",r.type="DELETED",r.stateNode=t,r.return=e,r.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=r,e.lastEffect=r):e.firstEffect=e.lastEffect=r}function Ha(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function Wa(e){if(Ba){var t=Ua;if(t){var r=t;if(!Ha(e,t)){if(!(t=Qn(r.nextSibling))||!Ha(e,t))return e.flags=-1025&e.flags|2,Ba=!1,void(za=e);Va(za,r)}za=e,Ua=Qn(t.firstChild)}else e.flags=-1025&e.flags|2,Ba=!1,za=e}}function Ga(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;za=e}function $a(e){if(e!==za)return!1;if(!Ba)return Ga(e),Ba=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Hn(t,e.memoizedProps))for(t=Ua;t;)Va(e,t),t=Qn(t.nextSibling);if(Ga(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var r=e.data;if("/$"===r){if(0===t){Ua=Qn(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}Ua=null}}else Ua=za?Qn(e.stateNode.nextSibling):null;return!0}function Qa(){Ua=za=null,Ba=!1}var Ya=[];function Ka(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var Xa=x.ReactCurrentDispatcher,Ja=x.ReactCurrentBatchConfig,Za=0,ei=null,ti=null,ri=null,ni=!1,oi=!1;function ai(){throw Error(i(321))}function ii(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!cn(e[r],t[r]))return!1;return!0}function li(e,t,r,n,o,a){if(Za=a,ei=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=null===e||null===e.memoizedState?Li:Ni,e=r(n,o),oi){a=0;do{if(oi=!1,!(25>a))throw Error(i(301));a+=1,ri=ti=null,t.updateQueue=null,Xa.current=Di,e=r(n,o)}while(oi)}if(Xa.current=qi,t=null!==ti&&null!==ti.next,Za=0,ri=ti=ei=null,ni=!1,t)throw Error(i(300));return e}function ui(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ri?ei.memoizedState=ri=e:ri=ri.next=e,ri}function si(){if(null===ti){var e=ei.alternate;e=null!==e?e.memoizedState:null}else e=ti.next;var t=null===ri?ei.memoizedState:ri.next;if(null!==t)ri=t,ti=e;else{if(null===e)throw Error(i(310));e={memoizedState:(ti=e).memoizedState,baseState:ti.baseState,baseQueue:ti.baseQueue,queue:ti.queue,next:null},null===ri?ei.memoizedState=ri=e:ri=ri.next=e}return ri}function ci(e,t){return"function"===typeof t?t(e):t}function fi(e){var t=si(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=ti,o=n.baseQueue,a=r.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}n.baseQueue=o=a,r.pending=null}if(null!==o){o=o.next,n=n.baseState;var u=l=a=null,s=o;do{var c=s.lane;if((Za&c)===c)null!==u&&(u=u.next={lane:0,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),n=s.eagerReducer===e?s.eagerState:e(n,s.action);else{var f={lane:c,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};null===u?(l=u=f,a=n):u=u.next=f,ei.lanes|=c,Ul|=c}s=s.next}while(null!==s&&s!==o);null===u?a=n:u.next=l,cn(n,t.memoizedState)||(ji=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}return[t.memoizedState,r.dispatch]}function di(e){var t=si(),r=t.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(null!==o){r.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);cn(a,t.memoizedState)||(ji=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function pi(e,t,r){var n=t._getVersion;n=n(t._source);var o=t._workInProgressVersionPrimary;if(null!==o?e=o===n:(e=e.mutableReadLanes,(e=(Za&e)===e)&&(t._workInProgressVersionPrimary=n,Ya.push(t))),e)return r(t._source);throw Ya.push(t),Error(i(350))}function hi(e,t,r,n){var o=Ll;if(null===o)throw Error(i(349));var a=t._getVersion,l=a(t._source),u=Xa.current,s=u.useState((function(){return pi(o,t,r)})),c=s[1],f=s[0];s=ri;var d=e.memoizedState,p=d.refs,h=p.getSnapshot,g=d.source;d=d.subscribe;var m=ei;return e.memoizedState={refs:p,source:t,subscribe:n},u.useEffect((function(){p.getSnapshot=r,p.setSnapshot=c;var e=a(t._source);if(!cn(l,e)){e=r(t._source),cn(f,e)||(c(e),e=pu(m),o.mutableReadLanes|=e&o.pendingLanes),e=o.mutableReadLanes,o.entangledLanes|=e;for(var n=o.entanglements,i=e;0<i;){var u=31-Ht(i),s=1<<u;n[u]|=e,i&=~s}}}),[r,t,n]),u.useEffect((function(){return n(t._source,(function(){var e=p.getSnapshot,r=p.setSnapshot;try{r(e(t._source));var n=pu(m);o.mutableReadLanes|=n&o.pendingLanes}catch(e){r((function(){throw e}))}}))}),[t,n]),cn(h,r)&&cn(g,t)&&cn(d,n)||((e={pending:null,dispatch:null,lastRenderedReducer:ci,lastRenderedState:f}).dispatch=c=Ai.bind(null,ei,e),s.queue=e,s.baseQueue=null,f=pi(o,t,r),s.memoizedState=s.baseState=f),f}function gi(e,t,r){return hi(si(),e,t,r)}function mi(e){var t=ui();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e}).dispatch=Ai.bind(null,ei,e),[t.memoizedState,e]}function vi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=ei.updateQueue)?(t={lastEffect:null},ei.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function yi(e){return e={current:e},ui().memoizedState=e}function bi(){return si().memoizedState}function wi(e,t,r,n){var o=ui();ei.flags|=e,o.memoizedState=vi(1|t,r,void 0,void 0===n?null:n)}function xi(e,t,r,n){var o=si();n=void 0===n?null:n;var a=void 0;if(null!==ti){var i=ti.memoizedState;if(a=i.destroy,null!==n&&ii(n,i.deps))return void vi(t,r,a,n)}ei.flags|=e,o.memoizedState=vi(1|t,r,a,n)}function ki(e,t){return wi(516,4,e,t)}function Ei(e,t){return xi(516,4,e,t)}function Si(e,t){return xi(4,2,e,t)}function Ti(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function _i(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,xi(4,2,Ti.bind(null,t,e),r)}function Ci(){}function Oi(e,t){var r=si();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ii(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Pi(e,t){var r=si();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&ii(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ri(e,t){var r=Wo();$o(98>r?98:r,(function(){e(!0)})),$o(97<r?97:r,(function(){var r=Ja.transition;Ja.transition=1;try{e(!1),t()}finally{Ja.transition=r}}))}function Ai(e,t,r){var n=du(),o=pu(e),a={lane:o,action:r,eagerReducer:null,eagerState:null,next:null},i=t.pending;if(null===i?a.next=a:(a.next=i.next,i.next=a),t.pending=a,i=e.alternate,e===ei||null!==i&&i===ei)oi=ni=!0;else{if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var l=t.lastRenderedState,u=i(l,r);if(a.eagerReducer=i,a.eagerState=u,cn(u,l))return}catch(e){}hu(e,o,n)}}var qi={readContext:la,useCallback:ai,useContext:ai,useEffect:ai,useImperativeHandle:ai,useLayoutEffect:ai,useMemo:ai,useReducer:ai,useRef:ai,useState:ai,useDebugValue:ai,useDeferredValue:ai,useTransition:ai,useMutableSource:ai,useOpaqueIdentifier:ai,unstable_isNewReconciler:!1},Li={readContext:la,useCallback:function(e,t){return ui().memoizedState=[e,void 0===t?null:t],e},useContext:la,useEffect:ki,useImperativeHandle:function(e,t,r){return r=null!==r&&void 0!==r?r.concat([e]):null,wi(4,2,Ti.bind(null,t,e),r)},useLayoutEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var r=ui();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=ui();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Ai.bind(null,ei,e),[n.memoizedState,e]},useRef:yi,useState:mi,useDebugValue:Ci,useDeferredValue:function(e){var t=mi(e),r=t[0],n=t[1];return ki((function(){var t=Ja.transition;Ja.transition=1;try{n(e)}finally{Ja.transition=t}}),[e]),r},useTransition:function(){var e=mi(!1),t=e[0];return yi(e=Ri.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,r){var n=ui();return n.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:r},hi(n,e,t,r)},useOpaqueIdentifier:function(){if(Ba){var e=!1,t=function(e){return{$$typeof:D,toString:e,valueOf:e}}((function(){throw e||(e=!0,r("r:"+(Kn++).toString(36))),Error(i(355))})),r=mi(t)[1];return 0===(2&ei.mode)&&(ei.flags|=516,vi(5,(function(){r("r:"+(Kn++).toString(36))}),void 0,null)),t}return mi(t="r:"+(Kn++).toString(36)),t},unstable_isNewReconciler:!1},Ni={readContext:la,useCallback:Oi,useContext:la,useEffect:Ei,useImperativeHandle:_i,useLayoutEffect:Si,useMemo:Pi,useReducer:fi,useRef:bi,useState:function(){return fi(ci)},useDebugValue:Ci,useDeferredValue:function(e){var t=fi(ci),r=t[0],n=t[1];return Ei((function(){var t=Ja.transition;Ja.transition=1;try{n(e)}finally{Ja.transition=t}}),[e]),r},useTransition:function(){var e=fi(ci)[0];return[bi().current,e]},useMutableSource:gi,useOpaqueIdentifier:function(){return fi(ci)[0]},unstable_isNewReconciler:!1},Di={readContext:la,useCallback:Oi,useContext:la,useEffect:Ei,useImperativeHandle:_i,useLayoutEffect:Si,useMemo:Pi,useReducer:di,useRef:bi,useState:function(){return di(ci)},useDebugValue:Ci,useDeferredValue:function(e){var t=di(ci),r=t[0],n=t[1];return Ei((function(){var t=Ja.transition;Ja.transition=1;try{n(e)}finally{Ja.transition=t}}),[e]),r},useTransition:function(){var e=di(ci)[0];return[bi().current,e]},useMutableSource:gi,useOpaqueIdentifier:function(){return di(ci)[0]},unstable_isNewReconciler:!1},Ii=x.ReactCurrentOwner,ji=!1;function Mi(e,t,r,n){t.child=null===e?Oa(t,null,r,n):Ca(t,e.child,r,n)}function Fi(e,t,r,n,o){r=r.render;var a=t.ref;return ia(t,o),n=li(e,t,r,n,a,o),null===e||ji?(t.flags|=1,Mi(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,al(e,t,o))}function zi(e,t,r,n,o,a){if(null===e){var i=r.type;return"function"!==typeof i||Wu(i)||void 0!==i.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=$u(r.type,null,n,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ui(e,t,i,n,o,a))}return i=e.child,0===(o&a)&&(o=i.memoizedProps,(r=null!==(r=r.compare)?r:dn)(o,n)&&e.ref===t.ref)?al(e,t,a):(t.flags|=1,(e=Gu(i,n)).ref=t.ref,e.return=t,t.child=e)}function Ui(e,t,r,n,o,a){if(null!==e&&dn(e.memoizedProps,n)&&e.ref===t.ref){if(ji=!1,0===(a&o))return t.lanes=e.lanes,al(e,t,a);0!==(16384&e.flags)&&(ji=!0)}return Hi(e,t,r,n,a)}function Bi(e,t,r){var n=t.pendingProps,o=n.children,a=null!==e?e.memoizedState:null;if("hidden"===n.mode||"unstable-defer-without-hiding"===n.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},ku(t,r);else{if(0===(1073741824&r))return e=null!==a?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},ku(t,e),null;t.memoizedState={baseLanes:0},ku(t,null!==a?a.baseLanes:r)}else null!==a?(n=a.baseLanes|r,t.memoizedState=null):n=r,ku(t,n);return Mi(e,t,o,r),t.child}function Vi(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=128)}function Hi(e,t,r,n,o){var a=yo(r)?mo:ho.current;return a=vo(t,a),ia(t,o),r=li(e,t,r,n,a,o),null===e||ji?(t.flags|=1,Mi(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~o,al(e,t,o))}function Wi(e,t,r,n,o){if(yo(r)){var a=!0;ko(t)}else a=!1;if(ia(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),wa(t,r,n),ka(t,r,n,o),n=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,s=r.contextType;"object"===typeof s&&null!==s?s=la(s):s=vo(t,s=yo(r)?mo:ho.current);var c=r.getDerivedStateFromProps,f="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;f||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==n||u!==s)&&xa(t,i,n,s),ua=!1;var d=t.memoizedState;i.state=d,ha(t,n,i,o),u=t.memoizedState,l!==n||d!==u||go.current||ua?("function"===typeof c&&(va(t,r,c,n),u=t.memoizedState),(l=ua||ba(t,r,l,n,d,u,s))?(f||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4)):("function"===typeof i.componentDidMount&&(t.flags|=4),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=s,n=l):("function"===typeof i.componentDidMount&&(t.flags|=4),n=!1)}else{i=t.stateNode,ca(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:Jo(t.type,l),i.props=s,f=t.pendingProps,d=i.context,"object"===typeof(u=r.contextType)&&null!==u?u=la(u):u=vo(t,u=yo(r)?mo:ho.current);var p=r.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==f||d!==u)&&xa(t,i,n,u),ua=!1,d=t.memoizedState,i.state=d,ha(t,n,i,o);var h=t.memoizedState;l!==f||d!==h||go.current||ua?("function"===typeof p&&(va(t,r,p,n),h=t.memoizedState),(s=ua||ba(t,r,s,n,d,h,u))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(n,h,u),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(n,h,u)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=u,n=s):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),n=!1)}return Gi(e,t,r,n,a,o)}function Gi(e,t,r,n,o,a){Vi(e,t);var i=0!==(64&t.flags);if(!n&&!i)return o&&Eo(t,r,!1),al(e,t,a);n=t.stateNode,Ii.current=t;var l=i&&"function"!==typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&i?(t.child=Ca(t,e.child,null,a),t.child=Ca(t,null,l,a)):Mi(e,t,l,a),t.memoizedState=n.state,o&&Eo(t,r,!0),t.child}function $i(e){var t=e.stateNode;t.pendingContext?wo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&wo(0,t.context,!1),Na(e,t.containerInfo)}var Qi,Yi,Ki,Xi={dehydrated:null,retryLane:0};function Ji(e,t,r){var n,o=t.pendingProps,a=Ma.current,i=!1;return(n=0!==(64&t.flags))||(n=(null===e||null!==e.memoizedState)&&0!==(2&a)),n?(i=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),fo(Ma,1&a),null===e?(void 0!==o.fallback&&Wa(t),e=o.children,a=o.fallback,i?(e=Zi(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Xi,e):"number"===typeof o.unstable_expectedLoadTime?(e=Zi(t,e,a,r),t.child.memoizedState={baseLanes:r},t.memoizedState=Xi,t.lanes=33554432,e):((r=Yu({mode:"visible",children:e},t.mode,r,null)).return=t,t.child=r)):(e.memoizedState,i?(o=tl(e,t,o.children,o.fallback,r),i=t.child,a=e.child.memoizedState,i.memoizedState=null===a?{baseLanes:r}:{baseLanes:a.baseLanes|r},i.childLanes=e.childLanes&~r,t.memoizedState=Xi,o):(r=el(e,t,o.children,r),t.memoizedState=null,r))}function Zi(e,t,r,n){var o=e.mode,a=e.child;return t={mode:"hidden",children:t},0===(2&o)&&null!==a?(a.childLanes=0,a.pendingProps=t):a=Yu(t,o,0,null),r=Qu(r,o,n,null),a.return=e,r.return=e,a.sibling=r,e.child=a,r}function el(e,t,r,n){var o=e.child;return e=o.sibling,r=Gu(o,{mode:"visible",children:r}),0===(2&t.mode)&&(r.lanes=n),r.return=t,r.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=r}function tl(e,t,r,n,o){var a=t.mode,i=e.child;e=i.sibling;var l={mode:"hidden",children:r};return 0===(2&a)&&t.child!==i?((r=t.child).childLanes=0,r.pendingProps=l,null!==(i=r.lastEffect)?(t.firstEffect=r.firstEffect,t.lastEffect=i,i.nextEffect=null):t.firstEffect=t.lastEffect=null):r=Gu(i,l),null!==e?n=Gu(e,n):(n=Qu(n,a,o,null)).flags|=2,n.return=t,r.return=t,r.sibling=n,t.child=r,n}function rl(e,t){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),aa(e.return,t)}function nl(e,t,r,n,o,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o,lastEffect:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o,i.lastEffect=a)}function ol(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Mi(e,t,n.children,r),0!==(2&(n=Ma.current)))n=1&n|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&rl(e,r);else if(19===e.tag)rl(e,r);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(fo(Ma,n),0===(2&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;null!==r;)null!==(e=r.alternate)&&null===Fa(e)&&(o=r),r=r.sibling;null===(r=o)?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),nl(t,!1,o,r,a,t.lastEffect);break;case"backwards":for(r=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Fa(e)){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}nl(t,!0,r,null,a,t.lastEffect);break;case"together":nl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function al(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),Ul|=t.lanes,0!==(r&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(r=Gu(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Gu(e,e.pendingProps)).return=t;r.sibling=null}return t.child}return null}function il(e,t){if(!Ba)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ll(e,t,r){var n=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return yo(t.type)&&bo(),null;case 3:return Da(),co(go),co(ho),Ka(),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||($a(t)?t.flags|=4:n.hydrate||(t.flags|=256)),null;case 5:ja(t);var a=La(qa.current);if(r=t.type,null!==e&&null!=t.stateNode)Yi(e,t,r,n),e.ref!==t.ref&&(t.flags|=128);else{if(!n){if(null===t.stateNode)throw Error(i(166));return null}if(e=La(Ra.current),$a(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Jn]=t,n[Zn]=l,r){case"dialog":Rn("cancel",n),Rn("close",n);break;case"iframe":case"object":case"embed":Rn("load",n);break;case"video":case"audio":for(e=0;e<_n.length;e++)Rn(_n[e],n);break;case"source":Rn("error",n);break;case"img":case"image":case"link":Rn("error",n),Rn("load",n);break;case"details":Rn("toggle",n);break;case"input":ee(n,l),Rn("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Rn("invalid",n);break;case"textarea":ue(n,l),Rn("invalid",n)}for(var s in Se(r,l),e=null,l)l.hasOwnProperty(s)&&(a=l[s],"children"===s?"string"===typeof a?n.textContent!==a&&(e=["children",a]):"number"===typeof a&&n.textContent!==""+a&&(e=["children",""+a]):u.hasOwnProperty(s)&&null!=a&&"onScroll"===s&&Rn("scroll",n));switch(r){case"input":K(n),ne(n,l,!0);break;case"textarea":K(n),ce(n);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(n.onclick=zn)}n=e,t.updateQueue=n,null!==n&&(t.flags|=4)}else{switch(s=9===a.nodeType?a:a.ownerDocument,e===fe&&(e=pe(r)),e===fe?"script"===r?((e=s.createElement("div")).innerHTML="<script><\\/script>",e=e.removeChild(e.firstChild)):"string"===typeof n.is?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),"select"===r&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Jn]=t,e[Zn]=n,Qi(e,t),t.stateNode=e,s=Te(r,n),r){case"dialog":Rn("cancel",e),Rn("close",e),a=n;break;case"iframe":case"object":case"embed":Rn("load",e),a=n;break;case"video":case"audio":for(a=0;a<_n.length;a++)Rn(_n[a],e);a=n;break;case"source":Rn("error",e),a=n;break;case"img":case"image":case"link":Rn("error",e),Rn("load",e),a=n;break;case"details":Rn("toggle",e),a=n;break;case"input":ee(e,n),a=Z(e,n),Rn("invalid",e);break;case"option":a=ae(e,n);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=o({},n,{value:void 0}),Rn("invalid",e);break;case"textarea":ue(e,n),a=le(e,n),Rn("invalid",e);break;default:a=n}Se(r,a);var c=a;for(l in c)if(c.hasOwnProperty(l)){var f=c[l];"style"===l?ke(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&ve(e,f):"children"===l?"string"===typeof f?("textarea"!==r||""!==f)&&ye(e,f):"number"===typeof f&&ye(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(u.hasOwnProperty(l)?null!=f&&"onScroll"===l&&Rn("scroll",e):null!=f&&w(e,l,f,s))}switch(r){case"input":K(e),ne(e,n,!1);break;case"textarea":K(e),ce(e);break;case"option":null!=n.value&&e.setAttribute("value",""+Q(n.value));break;case"select":e.multiple=!!n.multiple,null!=(l=n.value)?ie(e,!!n.multiple,l,!1):null!=n.defaultValue&&ie(e,!!n.multiple,n.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=zn)}Vn(r,n)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Ki(0,t,e.memoizedProps,n);else{if("string"!==typeof n&&null===t.stateNode)throw Error(i(166));r=La(qa.current),La(Ra.current),$a(t)?(n=t.stateNode,r=t.memoizedProps,n[Jn]=t,n.nodeValue!==r&&(t.flags|=4)):((n=(9===r.nodeType?r:r.ownerDocument).createTextNode(n))[Jn]=t,t.stateNode=n)}return null;case 13:return co(Ma),n=t.memoizedState,0!==(64&t.flags)?(t.lanes=r,t):(n=null!==n,r=!1,null===e?void 0!==t.memoizedProps.fallback&&$a(t):r=null!==e.memoizedState,n&&!r&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&Ma.current)?0===Ml&&(Ml=3):(0!==Ml&&3!==Ml||(Ml=4),null===Ll||0===(134217727&Ul)&&0===(134217727&Bl)||yu(Ll,Dl))),(n||r)&&(t.flags|=4),null);case 4:return Da(),null===e&&qn(t.stateNode.containerInfo),null;case 10:return oa(t),null;case 19:if(co(Ma),null===(n=t.memoizedState))return null;if(l=0!==(64&t.flags),null===(s=n.rendering))if(l)il(n,!1);else{if(0!==Ml||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(null!==(s=Fa(e))){for(t.flags|=64,il(n,!1),null!==(l=s.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===n.lastEffect&&(t.firstEffect=null),t.lastEffect=n.lastEffect,n=r,r=t.child;null!==r;)e=n,(l=r).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(s=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return fo(Ma,1&Ma.current|2),t.child}e=e.sibling}null!==n.tail&&Ho()>Gl&&(t.flags|=64,l=!0,il(n,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Fa(s))){if(t.flags|=64,l=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),il(n,!0),null===n.tail&&"hidden"===n.tailMode&&!s.alternate&&!Ba)return null!==(t=t.lastEffect=n.lastEffect)&&(t.nextEffect=null),null}else 2*Ho()-n.renderingStartTime>Gl&&1073741824!==r&&(t.flags|=64,l=!0,il(n,!1),t.lanes=33554432);n.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=n.last)?r.sibling=s:t.child=s,n.last=s)}return null!==n.tail?(r=n.tail,n.rendering=r,n.tail=r.sibling,n.lastEffect=t.lastEffect,n.renderingStartTime=Ho(),r.sibling=null,t=Ma.current,fo(Ma,l?1&t|2:1&t),r):null;case 23:case 24:return Eu(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==n.mode&&(t.flags|=4),null}throw Error(i(156,t.tag))}function ul(e){switch(e.tag){case 1:yo(e.type)&&bo();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(Da(),co(go),co(ho),Ka(),0!==(64&(t=e.flags)))throw Error(i(285));return e.flags=-4097&t|64,e;case 5:return ja(e),null;case 13:return co(Ma),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return co(Ma),null;case 4:return Da(),null;case 10:return oa(e),null;case 23:case 24:return Eu(),null;default:return null}}function sl(e,t){try{var r="",n=t;do{r+=G(n),n=n.return}while(n);var o=r}catch(e){o="\\nError generating stack: "+e.message+"\\n"+e.stack}return{value:e,source:t,stack:o}}function cl(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}Qi=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Yi=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,La(Ra.current);var i,l=null;switch(r){case"input":a=Z(e,a),n=Z(e,n),l=[];break;case"option":a=ae(e,a),n=ae(e,n),l=[];break;case"select":a=o({},a,{value:void 0}),n=o({},n,{value:void 0}),l=[];break;case"textarea":a=le(e,a),n=le(e,n),l=[];break;default:"function"!==typeof a.onClick&&"function"===typeof n.onClick&&(e.onclick=zn)}for(f in Se(r,n),r=null,a)if(!n.hasOwnProperty(f)&&a.hasOwnProperty(f)&&null!=a[f])if("style"===f){var s=a[f];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else"dangerouslySetInnerHTML"!==f&&"children"!==f&&"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(u.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var c=n[f];if(s=null!=a?a[f]:void 0,n.hasOwnProperty(f)&&c!==s&&(null!=c||null!=s))if("style"===f)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(l||(l=[]),l.push(f,r)),r=c;else"dangerouslySetInnerHTML"===f?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(l=l||[]).push(f,c)):"children"===f?"string"!==typeof c&&"number"!==typeof c||(l=l||[]).push(f,""+c):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&(u.hasOwnProperty(f)?(null!=c&&"onScroll"===f&&Rn("scroll",e),l||s===c||(l=[])):"object"===typeof c&&null!==c&&c.$$typeof===D?c.toString():(l=l||[]).push(f,c))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}},Ki=function(e,t,r,n){r!==n&&(t.flags|=4)};var fl="function"===typeof WeakMap?WeakMap:Map;function dl(e,t,r){(r=fa(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Kl||(Kl=!0,Xl=n),cl(0,t)},r}function pl(e,t,r){(r=fa(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"===typeof n){var o=t.value;r.payload=function(){return cl(0,t),n(o)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(r.callback=function(){"function"!==typeof n&&(null===Jl?Jl=new Set([this]):Jl.add(this),cl(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),r}var hl="function"===typeof WeakSet?WeakSet:Set;function gl(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(t){zu(e,t)}else t.current=null}function ml(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var r=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?r:Jo(t.type,r),n),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&$n(t.stateNode.containerInfo))}throw Error(i(163))}function vl(e,t,r){switch(r.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3===(3&e.tag)){var n=e.create;e.destroy=n()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=r.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var o=e;n=o.next,0!==(4&(o=o.tag))&&0!==(1&o)&&(ju(r,e),Iu(r,e)),e=n}while(e!==t)}return;case 1:return e=r.stateNode,4&r.flags&&(null===t?e.componentDidMount():(n=r.elementType===r.type?t.memoizedProps:Jo(r.type,t.memoizedProps),e.componentDidUpdate(n,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=r.updateQueue)&&ga(r,t,e));case 3:if(null!==(t=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 5:case 1:e=r.child.stateNode}ga(r,t,e)}return;case 5:return e=r.stateNode,void(null===t&&4&r.flags&&Vn(r.type,r.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===r.memoizedState&&(r=r.alternate,null!==r&&(r=r.memoizedState,null!==r&&(r=r.dehydrated,null!==r&&kt(r)))))}throw Error(i(163))}function yl(e,t){for(var r=e;;){if(5===r.tag){var n=r.stateNode;if(t)"function"===typeof(n=n.style).setProperty?n.setProperty("display","none","important"):n.display="none";else{n=r.stateNode;var o=r.memoizedProps.style;o=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null,n.style.display=xe("display",o)}}else if(6===r.tag)r.stateNode.nodeValue=t?"":r.memoizedProps;else if((23!==r.tag&&24!==r.tag||null===r.memoizedState||r===e)&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function bl(e,t){if(To&&"function"===typeof To.onCommitFiberUnmount)try{To.onCommitFiberUnmount(So,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e=e.next;do{var n=r,o=n.destroy;if(n=n.tag,void 0!==o)if(0!==(4&n))ju(t,r);else{n=t;try{o()}catch(e){zu(n,e)}}r=r.next}while(r!==e)}break;case 1:if(gl(t),"function"===typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){zu(t,e)}break;case 5:gl(t);break;case 4:Tl(e,t)}}function wl(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function xl(e){return 5===e.tag||3===e.tag||4===e.tag}function kl(e){e:{for(var t=e.return;null!==t;){if(xl(t))break e;t=t.return}throw Error(i(160))}var r=t;switch(t=r.stateNode,r.tag){case 5:var n=!1;break;case 3:case 4:t=t.containerInfo,n=!0;break;default:throw Error(i(161))}16&r.flags&&(ye(t,""),r.flags&=-17);e:t:for(r=e;;){for(;null===r.sibling;){if(null===r.return||xl(r.return)){r=null;break e}r=r.return}for(r.sibling.return=r.return,r=r.sibling;5!==r.tag&&6!==r.tag&&18!==r.tag;){if(2&r.flags)continue t;if(null===r.child||4===r.tag)continue t;r.child.return=r,r=r.child}if(!(2&r.flags)){r=r.stateNode;break e}}n?El(e,r,t):Sl(e,r,t)}function El(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?8===r.nodeType?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(8===r.nodeType?(t=r.parentNode).insertBefore(e,r):(t=r).appendChild(e),null!==(r=r._reactRootContainer)&&void 0!==r||null!==t.onclick||(t.onclick=zn));else if(4!==n&&null!==(e=e.child))for(El(e,t,r),e=e.sibling;null!==e;)El(e,t,r),e=e.sibling}function Sl(e,t,r){var n=e.tag,o=5===n||6===n;if(o)e=o?e.stateNode:e.stateNode.instance,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&null!==(e=e.child))for(Sl(e,t,r),e=e.sibling;null!==e;)Sl(e,t,r),e=e.sibling}function Tl(e,t){for(var r,n,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(r=a.stateNode,a.tag){case 5:n=!1;break e;case 3:case 4:r=r.containerInfo,n=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,s=u;;)if(bl(l,s),null!==s.child&&4!==s.tag)s.child.return=s,s=s.child;else{if(s===u)break e;for(;null===s.sibling;){if(null===s.return||s.return===u)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,n=!0,o.child.return=o,o=o.child;continue}}else if(bl(e,o),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function _l(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var n=r=r.next;do{3===(3&n.tag)&&(e=n.destroy,n.destroy=void 0,void 0!==e&&e()),n=n.next}while(n!==r)}return;case 1:case 12:case 17:return;case 5:if(null!=(r=t.stateNode)){n=t.memoizedProps;var o=null!==e?e.memoizedProps:n;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(r[Zn]=n,"input"===e&&"radio"===n.type&&null!=n.name&&te(r,n),Te(e,o),t=Te(e,n),o=0;o<a.length;o+=2){var l=a[o],u=a[o+1];"style"===l?ke(r,u):"dangerouslySetInnerHTML"===l?ve(r,u):"children"===l?ye(r,u):w(r,l,u,t)}switch(e){case"input":re(r,n);break;case"textarea":se(r,n);break;case"select":e=r._wrapperState.wasMultiple,r._wrapperState.wasMultiple=!!n.multiple,null!=(a=n.value)?ie(r,!!n.multiple,a,!1):e!==!!n.multiple&&(null!=n.defaultValue?ie(r,!!n.multiple,n.defaultValue,!0):ie(r,!!n.multiple,n.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(i(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((r=t.stateNode).hydrate&&(r.hydrate=!1,kt(r.containerInfo)));case 13:return null!==t.memoizedState&&(Wl=Ho(),yl(t.child,!0)),void Cl(t);case 19:return void Cl(t);case 23:case 24:return void yl(t,null!==t.memoizedState)}throw Error(i(163))}function Cl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new hl),t.forEach((function(t){var n=Bu.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))}))}}function Ol(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Pl=Math.ceil,Rl=x.ReactCurrentDispatcher,Al=x.ReactCurrentOwner,ql=0,Ll=null,Nl=null,Dl=0,Il=0,jl=so(0),Ml=0,Fl=null,zl=0,Ul=0,Bl=0,Vl=0,Hl=null,Wl=0,Gl=1/0;function $l(){Gl=Ho()+500}var Ql,Yl=null,Kl=!1,Xl=null,Jl=null,Zl=!1,eu=null,tu=90,ru=[],nu=[],ou=null,au=0,iu=null,lu=-1,uu=0,su=0,cu=null,fu=!1;function du(){return 0!==(48&ql)?Ho():-1!==lu?lu:lu=Ho()}function pu(e){if(0===(2&(e=e.mode)))return 1;if(0===(4&e))return 99===Wo()?1:2;if(0===uu&&(uu=zl),0!==Xo.transition){0!==su&&(su=null!==Hl?Hl.pendingLanes:0),e=uu;var t=4186112&~su;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Wo(),0!==(4&ql)&&98===e?e=zt(12,uu):e=zt(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),uu),e}function hu(e,t,r){if(50<au)throw au=0,iu=null,Error(i(185));if(null===(e=gu(e,t)))return null;Vt(e,t,r),e===Ll&&(Bl|=t,4===Ml&&yu(e,Dl));var n=Wo();1===t?0!==(8&ql)&&0===(48&ql)?bu(e):(mu(e,r),0===ql&&($l(),Yo())):(0===(4&ql)||98!==n&&99!==n||(null===ou?ou=new Set([e]):ou.add(e)),mu(e,r)),Hl=e}function gu(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}function mu(e,t){for(var r=e.callbackNode,n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Ht(l),s=1<<u,c=a[u];if(-1===c){if(0===(s&n)||0!==(s&o)){c=t,jt(s);var f=It;a[u]=10<=f?c+250:6<=f?c+5e3:-1}}else c<=t&&(e.expiredLanes|=s);l&=~s}if(n=Mt(e,e===Ll?Dl:0),t=It,0===n)null!==r&&(r!==Mo&&Oo(r),e.callbackNode=null,e.callbackPriority=0);else{if(null!==r){if(e.callbackPriority===t)return;r!==Mo&&Oo(r)}15===t?(r=bu.bind(null,e),null===zo?(zo=[r],Uo=Co(Lo,Ko)):zo.push(r),r=Mo):14===t?r=Qo(99,bu.bind(null,e)):(r=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(i(358,e))}}(t),r=Qo(r,vu.bind(null,e))),e.callbackPriority=t,e.callbackNode=r}}function vu(e){if(lu=-1,su=uu=0,0!==(48&ql))throw Error(i(327));var t=e.callbackNode;if(Du()&&e.callbackNode!==t)return null;var r=Mt(e,e===Ll?Dl:0);if(0===r)return null;var n=r,o=ql;ql|=16;var a=_u();for(Ll===e&&Dl===n||($l(),Su(e,n));;)try{Pu();break}catch(t){Tu(e,t)}if(na(),Rl.current=a,ql=o,null!==Nl?n=0:(Ll=null,Dl=0,n=Ml),0!==(zl&Bl))Su(e,0);else if(0!==n){if(2===n&&(ql|=64,e.hydrate&&(e.hydrate=!1,$n(e.containerInfo)),0!==(r=Ft(e))&&(n=Cu(e,r))),1===n)throw t=Fl,Su(e,0),yu(e,r),mu(e,Ho()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=r,n){case 0:case 1:throw Error(i(345));case 2:case 5:qu(e);break;case 3:if(yu(e,r),(62914560&r)===r&&10<(n=Wl+500-Ho())){if(0!==Mt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){du(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wn(qu.bind(null,e),n);break}qu(e);break;case 4:if(yu(e,r),(4186112&r)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-Ht(r);a=1<<l,(l=n[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Ho()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pl(r/1960))-r)){e.timeoutHandle=Wn(qu.bind(null,e),r);break}qu(e);break;default:throw Error(i(329))}}return mu(e,Ho()),e.callbackNode===t?vu.bind(null,e):null}function yu(e,t){for(t&=~Vl,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ht(t),n=1<<r;e[r]=-1,t&=~n}}function bu(e){if(0!==(48&ql))throw Error(i(327));if(Du(),e===Ll&&0!==(e.expiredLanes&Dl)){var t=Dl,r=Cu(e,t);0!==(zl&Bl)&&(r=Cu(e,t=Mt(e,t)))}else r=Cu(e,t=Mt(e,0));if(0!==e.tag&&2===r&&(ql|=64,e.hydrate&&(e.hydrate=!1,$n(e.containerInfo)),0!==(t=Ft(e))&&(r=Cu(e,t))),1===r)throw r=Fl,Su(e,0),yu(e,t),mu(e,Ho()),r;return e.finishedWork=e.current.alternate,e.finishedLanes=t,qu(e),mu(e,Ho()),null}function wu(e,t){var r=ql;ql|=1;try{return e(t)}finally{0===(ql=r)&&($l(),Yo())}}function xu(e,t){var r=ql;ql&=-2,ql|=8;try{return e(t)}finally{0===(ql=r)&&($l(),Yo())}}function ku(e,t){fo(jl,Il),Il|=t,zl|=t}function Eu(){Il=jl.current,co(jl)}function Su(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,Gn(r)),null!==Nl)for(r=Nl.return;null!==r;){var n=r;switch(n.tag){case 1:null!==(n=n.type.childContextTypes)&&void 0!==n&&bo();break;case 3:Da(),co(go),co(ho),Ka();break;case 5:ja(n);break;case 4:Da();break;case 13:case 19:co(Ma);break;case 10:oa(n);break;case 23:case 24:Eu()}r=r.return}Ll=e,Nl=Gu(e.current,null),Dl=Il=zl=t,Ml=0,Fl=null,Vl=Bl=Ul=0}function Tu(e,t){for(;;){var r=Nl;try{if(na(),Xa.current=qi,ni){for(var n=ei.memoizedState;null!==n;){var o=n.queue;null!==o&&(o.pending=null),n=n.next}ni=!1}if(Za=0,ri=ti=ei=null,oi=!1,Al.current=null,null===r||null===r.return){Ml=1,Fl=t,Nl=null;break}e:{var a=e,i=r.return,l=r,u=t;if(t=Dl,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==u&&"object"===typeof u&&"function"===typeof u.then){var s=u;if(0===(2&l.mode)){var c=l.alternate;c?(l.updateQueue=c.updateQueue,l.memoizedState=c.memoizedState,l.lanes=c.lanes):(l.updateQueue=null,l.memoizedState=null)}var f=0!==(1&Ma.current),d=i;do{var p;if(p=13===d.tag){var h=d.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var g=d.memoizedProps;p=void 0!==g.fallback&&(!0!==g.unstable_avoidThisFallback||!f)}}if(p){var m=d.updateQueue;if(null===m){var v=new Set;v.add(s),d.updateQueue=v}else m.add(s);if(0===(2&d.mode)){if(d.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var y=fa(-1,1);y.tag=2,da(l,y)}l.lanes|=1;break e}u=void 0,l=t;var b=a.pingCache;if(null===b?(b=a.pingCache=new fl,u=new Set,b.set(s,u)):void 0===(u=b.get(s))&&(u=new Set,b.set(s,u)),!u.has(l)){u.add(l);var w=Uu.bind(null,a,s,l);s.then(w,w)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);u=Error(($(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Ml&&(Ml=2),u=sl(u,l),d=i;do{switch(d.tag){case 3:a=u,d.flags|=4096,t&=-t,d.lanes|=t,pa(d,dl(0,a,t));break e;case 1:a=u;var x=d.type,k=d.stateNode;if(0===(64&d.flags)&&("function"===typeof x.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Jl||!Jl.has(k)))){d.flags|=4096,t&=-t,d.lanes|=t,pa(d,pl(d,a,t));break e}}d=d.return}while(null!==d)}Au(r)}catch(e){t=e,Nl===r&&null!==r&&(Nl=r=r.return);continue}break}}function _u(){var e=Rl.current;return Rl.current=qi,null===e?qi:e}function Cu(e,t){var r=ql;ql|=16;var n=_u();for(Ll===e&&Dl===t||Su(e,t);;)try{Ou();break}catch(t){Tu(e,t)}if(na(),ql=r,Rl.current=n,null!==Nl)throw Error(i(261));return Ll=null,Dl=0,Ml}function Ou(){for(;null!==Nl;)Ru(Nl)}function Pu(){for(;null!==Nl&&!Po();)Ru(Nl)}function Ru(e){var t=Ql(e.alternate,e,Il);e.memoizedProps=e.pendingProps,null===t?Au(e):Nl=t,Al.current=null}function Au(e){var t=e;do{var r=t.alternate;if(e=t.return,0===(2048&t.flags)){if(null!==(r=ll(r,t,Il)))return void(Nl=r);if(24!==(r=t).tag&&23!==r.tag||null===r.memoizedState||0!==(1073741824&Il)||0===(4&r.mode)){for(var n=0,o=r.child;null!==o;)n|=o.lanes|o.childLanes,o=o.sibling;r.childLanes=n}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(r=ul(t)))return r.flags&=2047,void(Nl=r);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Nl=t);Nl=t=e}while(null!==t);0===Ml&&(Ml=5)}function qu(e){var t=Wo();return $o(99,Lu.bind(null,e,t)),null}function Lu(e,t){do{Du()}while(null!==eu);if(0!==(48&ql))throw Error(i(327));var r=e.finishedWork;if(null===r)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null;var n=r.lanes|r.childLanes,o=n,a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;for(var l=e.eventTimes,u=e.expirationTimes;0<a;){var s=31-Ht(a),c=1<<s;o[s]=0,l[s]=-1,u[s]=-1,a&=~c}if(null!==ou&&0===(24&n)&&ou.has(e)&&ou.delete(e),e===Ll&&(Nl=Ll=null,Dl=0),1<r.flags?null!==r.lastEffect?(r.lastEffect.nextEffect=r,n=r.firstEffect):n=r:n=r.firstEffect,null!==n){if(o=ql,ql|=32,Al.current=null,Un=Yt,vn(l=mn())){if("selectionStart"in l)u={start:l.selectionStart,end:l.selectionEnd};else e:if(u=(u=l.ownerDocument)&&u.defaultView||window,(c=u.getSelection&&u.getSelection())&&0!==c.rangeCount){u=c.anchorNode,a=c.anchorOffset,s=c.focusNode,c=c.focusOffset;try{u.nodeType,s.nodeType}catch(e){u=null;break e}var f=0,d=-1,p=-1,h=0,g=0,m=l,v=null;t:for(;;){for(var y;m!==u||0!==a&&3!==m.nodeType||(d=f+a),m!==s||0!==c&&3!==m.nodeType||(p=f+c),3===m.nodeType&&(f+=m.nodeValue.length),null!==(y=m.firstChild);)v=m,m=y;for(;;){if(m===l)break t;if(v===u&&++h===a&&(d=f),v===s&&++g===c&&(p=f),null!==(y=m.nextSibling))break;v=(m=v).parentNode}m=y}u=-1===d||-1===p?null:{start:d,end:p}}else u=null;u=u||{start:0,end:0}}else u=null;Bn={focusedElem:l,selectionRange:u},Yt=!1,cu=null,fu=!1,Yl=n;do{try{Nu()}catch(e){if(null===Yl)throw Error(i(330));zu(Yl,e),Yl=Yl.nextEffect}}while(null!==Yl);cu=null,Yl=n;do{try{for(l=e;null!==Yl;){var b=Yl.flags;if(16&b&&ye(Yl.stateNode,""),128&b){var w=Yl.alternate;if(null!==w){var x=w.ref;null!==x&&("function"===typeof x?x(null):x.current=null)}}switch(1038&b){case 2:kl(Yl),Yl.flags&=-3;break;case 6:kl(Yl),Yl.flags&=-3,_l(Yl.alternate,Yl);break;case 1024:Yl.flags&=-1025;break;case 1028:Yl.flags&=-1025,_l(Yl.alternate,Yl);break;case 4:_l(Yl.alternate,Yl);break;case 8:Tl(l,u=Yl);var k=u.alternate;wl(u),null!==k&&wl(k)}Yl=Yl.nextEffect}}catch(e){if(null===Yl)throw Error(i(330));zu(Yl,e),Yl=Yl.nextEffect}}while(null!==Yl);if(x=Bn,w=mn(),b=x.focusedElem,l=x.selectionRange,w!==b&&b&&b.ownerDocument&&gn(b.ownerDocument.documentElement,b)){null!==l&&vn(b)&&(w=l.start,void 0===(x=l.end)&&(x=w),"selectionStart"in b?(b.selectionStart=w,b.selectionEnd=Math.min(x,b.value.length)):(x=(w=b.ownerDocument||document)&&w.defaultView||window).getSelection&&(x=x.getSelection(),u=b.textContent.length,k=Math.min(l.start,u),l=void 0===l.end?k:Math.min(l.end,u),!x.extend&&k>l&&(u=l,l=k,k=u),u=hn(b,k),a=hn(b,l),u&&a&&(1!==x.rangeCount||x.anchorNode!==u.node||x.anchorOffset!==u.offset||x.focusNode!==a.node||x.focusOffset!==a.offset)&&((w=w.createRange()).setStart(u.node,u.offset),x.removeAllRanges(),k>l?(x.addRange(w),x.extend(a.node,a.offset)):(w.setEnd(a.node,a.offset),x.addRange(w))))),w=[];for(x=b;x=x.parentNode;)1===x.nodeType&&w.push({element:x,left:x.scrollLeft,top:x.scrollTop});for("function"===typeof b.focus&&b.focus(),b=0;b<w.length;b++)(x=w[b]).element.scrollLeft=x.left,x.element.scrollTop=x.top}Yt=!!Un,Bn=Un=null,e.current=r,Yl=n;do{try{for(b=e;null!==Yl;){var E=Yl.flags;if(36&E&&vl(b,Yl.alternate,Yl),128&E){w=void 0;var S=Yl.ref;if(null!==S){var T=Yl.stateNode;Yl.tag,w=T,"function"===typeof S?S(w):S.current=w}}Yl=Yl.nextEffect}}catch(e){if(null===Yl)throw Error(i(330));zu(Yl,e),Yl=Yl.nextEffect}}while(null!==Yl);Yl=null,Fo(),ql=o}else e.current=r;if(Zl)Zl=!1,eu=e,tu=t;else for(Yl=n;null!==Yl;)t=Yl.nextEffect,Yl.nextEffect=null,8&Yl.flags&&((E=Yl).sibling=null,E.stateNode=null),Yl=t;if(0===(n=e.pendingLanes)&&(Jl=null),1===n?e===iu?au++:(au=0,iu=e):au=0,r=r.stateNode,To&&"function"===typeof To.onCommitFiberRoot)try{To.onCommitFiberRoot(So,r,void 0,64===(64&r.current.flags))}catch(e){}if(mu(e,Ho()),Kl)throw Kl=!1,e=Xl,Xl=null,e;return 0!==(8&ql)||Yo(),null}function Nu(){for(;null!==Yl;){var e=Yl.alternate;fu||null===cu||(0!==(8&Yl.flags)?et(Yl,cu)&&(fu=!0):13===Yl.tag&&Ol(e,Yl)&&et(Yl,cu)&&(fu=!0));var t=Yl.flags;0!==(256&t)&&ml(e,Yl),0===(512&t)||Zl||(Zl=!0,Qo(97,(function(){return Du(),null}))),Yl=Yl.nextEffect}}function Du(){if(90!==tu){var e=97<tu?97:tu;return tu=90,$o(e,Mu)}return!1}function Iu(e,t){ru.push(t,e),Zl||(Zl=!0,Qo(97,(function(){return Du(),null})))}function ju(e,t){nu.push(t,e),Zl||(Zl=!0,Qo(97,(function(){return Du(),null})))}function Mu(){if(null===eu)return!1;var e=eu;if(eu=null,0!==(48&ql))throw Error(i(331));var t=ql;ql|=32;var r=nu;nu=[];for(var n=0;n<r.length;n+=2){var o=r[n],a=r[n+1],l=o.destroy;if(o.destroy=void 0,"function"===typeof l)try{l()}catch(e){if(null===a)throw Error(i(330));zu(a,e)}}for(r=ru,ru=[],n=0;n<r.length;n+=2){o=r[n],a=r[n+1];try{var u=o.create;o.destroy=u()}catch(e){if(null===a)throw Error(i(330));zu(a,e)}}for(u=e.current.firstEffect;null!==u;)e=u.nextEffect,u.nextEffect=null,8&u.flags&&(u.sibling=null,u.stateNode=null),u=e;return ql=t,Yo(),!0}function Fu(e,t,r){da(e,t=dl(0,t=sl(r,t),1)),t=du(),null!==(e=gu(e,1))&&(Vt(e,1,t),mu(e,t))}function zu(e,t){if(3===e.tag)Fu(e,e,t);else for(var r=e.return;null!==r;){if(3===r.tag){Fu(r,e,t);break}if(1===r.tag){var n=r.stateNode;if("function"===typeof r.type.getDerivedStateFromError||"function"===typeof n.componentDidCatch&&(null===Jl||!Jl.has(n))){var o=pl(r,e=sl(t,e),1);if(da(r,o),o=du(),null!==(r=gu(r,1)))Vt(r,1,o),mu(r,o);else if("function"===typeof n.componentDidCatch&&(null===Jl||!Jl.has(n)))try{n.componentDidCatch(t,e)}catch(e){}break}}r=r.return}}function Uu(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=du(),e.pingedLanes|=e.suspendedLanes&r,Ll===e&&(Dl&r)===r&&(4===Ml||3===Ml&&(62914560&Dl)===Dl&&500>Ho()-Wl?Su(e,0):Vl|=r),mu(e,t)}function Bu(e,t){var r=e.stateNode;null!==r&&r.delete(t),0===(t=0)&&(0===(2&(t=e.mode))?t=1:0===(4&t)?t=99===Wo()?1:2:(0===uu&&(uu=zl),0===(t=Ut(62914560&~uu))&&(t=4194304))),r=du(),null!==(e=gu(e,t))&&(Vt(e,t,r),mu(e,r))}function Vu(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Hu(e,t,r,n){return new Vu(e,t,r,n)}function Wu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Gu(e,t){var r=e.alternate;return null===r?((r=Hu(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function $u(e,t,r,n,o,a){var l=2;if(n=e,"function"===typeof e)Wu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Qu(r.children,o,a,t);case I:l=8,o|=16;break;case T:l=8,o|=1;break;case _:return(e=Hu(12,r,t,8|o)).elementType=_,e.type=_,e.lanes=a,e;case R:return(e=Hu(13,r,t,o)).type=R,e.elementType=R,e.lanes=a,e;case A:return(e=Hu(19,r,t,o)).elementType=A,e.lanes=a,e;case j:return Yu(r,o,a,t);case M:return(e=Hu(24,r,t,o)).elementType=M,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case O:l=9;break e;case P:l=11;break e;case q:l=14;break e;case L:l=16,n=null;break e;case N:l=22;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Hu(l,r,t,o)).elementType=e,t.type=n,t.lanes=a,t}function Qu(e,t,r,n){return(e=Hu(7,e,n,t)).lanes=r,e}function Yu(e,t,r,n){return(e=Hu(23,e,n,t)).elementType=j,e.lanes=r,e}function Ku(e,t,r){return(e=Hu(6,e,null,t)).lanes=r,e}function Xu(e,t,r){return(t=Hu(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ju(e,t,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=r,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.mutableSourceEagerHydrationData=null}function Zu(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:E,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}function es(e,t,r,n){var o=t.current,a=du(),l=pu(o);e:if(r){t:{if(Ke(r=r._reactInternals)!==r||1!==r.tag)throw Error(i(170));var u=r;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(yo(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(i(171))}if(1===r.tag){var s=r.type;if(yo(s)){r=xo(r,s,u);break e}}r=u}else r=po;return null===t.context?t.context=r:t.pendingContext=r,(t=fa(a,l)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),da(o,t),hu(o,l,a),l}function ts(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function rs(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function ns(e,t){rs(e,t),(e=e.alternate)&&rs(e,t)}function os(e,t,r){var n=null!=r&&null!=r.hydrationOptions&&r.hydrationOptions.mutableSources||null;if(r=new Ju(e,t,null!=r&&!0===r.hydrate),t=Hu(3,null,null,2===t?7:1===t?3:0),r.current=t,t.stateNode=r,sa(t),e[eo]=r.current,qn(8===e.nodeType?e.parentNode:e),n)for(e=0;e<n.length;e++){var o=(t=n[e])._getVersion;o=o(t._source),null==r.mutableSourceEagerHydrationData?r.mutableSourceEagerHydrationData=[t,o]:r.mutableSourceEagerHydrationData.push(t,o)}this._internalRoot=r}function as(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function is(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a._internalRoot;if("function"===typeof o){var l=o;o=function(){var e=ts(i);l.call(e)}}es(t,i,e,o)}else{if(a=r._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var r;r=e.lastChild;)e.removeChild(r);return new os(e,0,t?{hydrate:!0}:void 0)}(r,n),i=a._internalRoot,"function"===typeof o){var u=o;o=function(){var e=ts(i);u.call(e)}}xu((function(){es(t,i,e,o)}))}return ts(i)}function ls(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!as(t))throw Error(i(200));return Zu(e,t,null,r)}Ql=function(e,t,r){var n=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||go.current)ji=!0;else{if(0===(r&n)){switch(ji=!1,t.tag){case 3:$i(t),Qa();break;case 5:Ia(t);break;case 1:yo(t.type)&&ko(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:n=t.memoizedProps.value;var o=t.type._context;fo(Zo,o._currentValue),o._currentValue=n;break;case 13:if(null!==t.memoizedState)return 0!==(r&t.child.childLanes)?Ji(e,t,r):(fo(Ma,1&Ma.current),null!==(t=al(e,t,r))?t.sibling:null);fo(Ma,1&Ma.current);break;case 19:if(n=0!==(r&t.childLanes),0!==(64&e.flags)){if(n)return ol(e,t,r);t.flags|=64}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),fo(Ma,Ma.current),n)break;return null;case 23:case 24:return t.lanes=0,Bi(e,t,r)}return al(e,t,r)}ji=0!==(16384&e.flags)}else ji=!1;switch(t.lanes=0,t.tag){case 2:if(n=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=vo(t,ho.current),ia(t,r),o=li(null,t,n,e,o,r),t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,yo(n)){var a=!0;ko(t)}else a=!1;t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,sa(t);var l=n.getDerivedStateFromProps;"function"===typeof l&&va(t,n,l,e),o.updater=ya,t.stateNode=o,o._reactInternals=t,ka(t,n,e,r),t=Gi(null,t,n,!0,a,r)}else t.tag=0,Mi(null,t,o,r),t=t.child;return t;case 16:o=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=(a=o._init)(o._payload),t.type=o,a=t.tag=function(e){if("function"===typeof e)return Wu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===q)return 14}return 2}(o),e=Jo(o,e),a){case 0:t=Hi(null,t,o,e,r);break e;case 1:t=Wi(null,t,o,e,r);break e;case 11:t=Fi(null,t,o,e,r);break e;case 14:t=zi(null,t,o,Jo(o.type,e),n,r);break e}throw Error(i(306,o,""))}return t;case 0:return n=t.type,o=t.pendingProps,Hi(e,t,n,o=t.elementType===n?o:Jo(n,o),r);case 1:return n=t.type,o=t.pendingProps,Wi(e,t,n,o=t.elementType===n?o:Jo(n,o),r);case 3:if($i(t),n=t.updateQueue,null===e||null===n)throw Error(i(282));if(n=t.pendingProps,o=null!==(o=t.memoizedState)?o.element:null,ca(e,t),ha(t,n,null,r),(n=t.memoizedState.element)===o)Qa(),t=al(e,t,r);else{if((a=(o=t.stateNode).hydrate)&&(Ua=Qn(t.stateNode.containerInfo.firstChild),za=t,a=Ba=!0),a){if(null!=(e=o.mutableSourceEagerHydrationData))for(o=0;o<e.length;o+=2)(a=e[o])._workInProgressVersionPrimary=e[o+1],Ya.push(a);for(r=Oa(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|1024,r=r.sibling}else Mi(e,t,n,r),Qa();t=t.child}return t;case 5:return Ia(t),null===e&&Wa(t),n=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,Hn(n,o)?l=null:null!==a&&Hn(n,a)&&(t.flags|=16),Vi(e,t),Mi(e,t,l,r),t.child;case 6:return null===e&&Wa(t),null;case 13:return Ji(e,t,r);case 4:return Na(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=Ca(t,null,n,r):Mi(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,Fi(e,t,n,o=t.elementType===n?o:Jo(n,o),r);case 7:return Mi(e,t,t.pendingProps,r),t.child;case 8:case 12:return Mi(e,t,t.pendingProps.children,r),t.child;case 10:e:{n=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value;var u=t.type._context;if(fo(Zo,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=cn(u,a)?0:0|("function"===typeof n._calculateChangedBits?n._calculateChangedBits(u,a):1073741823))){if(l.children===o.children&&!go.current){t=al(e,t,r);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var s=u.dependencies;if(null!==s){l=u.child;for(var c=s.firstContext;null!==c;){if(c.context===n&&0!==(c.observedBits&a)){1===u.tag&&((c=fa(-1,r&-r)).tag=2,da(u,c)),u.lanes|=r,null!==(c=u.alternate)&&(c.lanes|=r),aa(u.return,r),s.lanes|=r;break}c=c.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}Mi(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=(a=t.pendingProps).children,ia(t,r),n=n(o=la(o,a.unstable_observedBits)),t.flags|=1,Mi(e,t,n,r),t.child;case 14:return a=Jo(o=t.type,t.pendingProps),zi(e,t,o,a=Jo(o.type,a),n,r);case 15:return Ui(e,t,t.type,t.pendingProps,n,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Jo(n,o),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,yo(n)?(e=!0,ko(t)):e=!1,ia(t,r),wa(t,n,o),ka(t,n,o,r),Gi(null,t,n,!0,e,r);case 19:return ol(e,t,r);case 23:case 24:return Bi(e,t,r)}throw Error(i(156,t.tag))},os.prototype.render=function(e){es(e,this._internalRoot,null,null)},os.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;es(null,e,null,(function(){t[eo]=null}))},tt=function(e){13===e.tag&&(hu(e,4,du()),ns(e,4))},rt=function(e){13===e.tag&&(hu(e,67108864,du()),ns(e,67108864))},nt=function(e){if(13===e.tag){var t=du(),r=pu(e);hu(e,r,t),ns(e,r)}},ot=function(e,t){return t()},Ce=function(e,t,r){switch(t){case"input":if(re(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+\'][type="radio"]\'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ao(n);if(!o)throw Error(i(90));X(n),re(n,o)}}}break;case"textarea":se(e,r);break;case"select":null!=(t=r.value)&&ie(e,!!r.multiple,t,!1)}},Le=wu,Ne=function(e,t,r,n,o){var a=ql;ql|=4;try{return $o(98,e.bind(null,t,r,n,o))}finally{0===(ql=a)&&($l(),Yo())}},De=function(){0===(49&ql)&&(function(){if(null!==ou){var e=ou;ou=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,mu(e,Ho())}))}Yo()}(),Du())},Ie=function(e,t){var r=ql;ql|=2;try{return e(t)}finally{0===(ql=r)&&($l(),Yo())}};var us={Events:[no,oo,ao,Ae,qe,Du,{current:!1}]},ss={findFiberByHostInstance:ro,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},cs={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ze(e))?null:e.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof{}){var fs={};if(!fs.isDisabled&&fs.supportsFiber)try{So=fs.inject(cs),To=fs}catch(me){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=us,t.createPortal=ls,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=Ze(t))?null:e.stateNode},t.flushSync=function(e,t){var r=ql;if(0!==(48&r))return e(t);ql|=1;try{if(e)return $o(99,e.bind(null,t))}finally{ql=r,Yo()}},t.hydrate=function(e,t,r){if(!as(t))throw Error(i(200));return is(null,e,t,!0,r)},t.render=function(e,t,r){if(!as(t))throw Error(i(200));return is(null,e,t,!1,r)},t.unmountComponentAtNode=function(e){if(!as(e))throw Error(i(40));return!!e._reactRootContainer&&(xu((function(){is(null,null,e,!1,(function(){e._reactRootContainer=null,e[eo]=null}))})),!0)},t.unstable_batchedUpdates=wu,t.unstable_createPortal=function(e,t){return ls(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!as(r))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return is(e,t,r,!1,n)},t.version="17.0.2"},2171:(e,t,r)=>{"use strict";!function e(){if("undefined"!==typeof{}&&"function"===typeof{}.checkDCE)try{({}).checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(2015)},5931:(e,t,r)=>{"use strict";var n=r(9934),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,l=60110,u=60112;t.Suspense=60113;var s=60115,c=60116;if("function"===typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),l=f("react.context"),u=f("react.forward_ref"),t.Suspense=f("react.suspense"),s=f("react.memo"),c=f("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function v(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=y.prototype=new v;b.constructor=y,n(b,m.prototype),b.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}var T=/\\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+_(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var c=n+_(l=e[s],s);u+=C(l,t,r,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),s=0;!(l=e.next()).done;)u+=C(l=l.value,t,r,c=n+_(l,s++),i);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function O(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function A(){var e=R.current;if(null===e)throw Error(p(321));return e}var q={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(p(267,e));var a=n({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)x.call(t,c)&&!k.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},6346:(e,t,r)=>{"use strict";e.exports=r(5931)},2205:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=T(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=c(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",g={};function m(){}function v(){}function y(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==r&&n.call(x,a)&&(b=x);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,l){var u=c(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function T(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a \'throw\' method")}return g}var o=c(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:t,done:!0}}return v.prototype=y,u(k,"constructor",y),u(y,"constructor",v),v.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(k),u(k,l,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"===typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},8142:(e,t)=>{"use strict";var r,n,o,a;if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var s=null,c=null,f=function e(){if(null!==s)try{var r=t.unstable_now();s(!0,r),s=null}catch(t){throw setTimeout(e,0),t}};r=function(e){null!==s?setTimeout(r,0,e):(s=e,setTimeout(f,0))},n=function(e,t){c=setTimeout(e,t)},o=function(){clearTimeout(c)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,p=window.clearTimeout;if("undefined"!==typeof console){var h=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn\'t support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof h&&console.error("This browser doesn\'t support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var g=!1,m=null,v=-1,y=5,b=0;t.unstable_shouldYield=function(){return t.unstable_now()>=b},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,x=w.port2;w.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();b=e+y;try{m(!0,e)?x.postMessage(null):(g=!1,m=null)}catch(e){throw x.postMessage(null),e}}else g=!1},r=function(e){m=e,g||(g=!0,x.postMessage(null))},n=function(e,r){v=d((function(){e(t.unstable_now())}),r)},o=function(){p(v),v=-1}}function k(e,t){var r=e.length;e.push(t);e:for(;;){var n=r-1>>>1,o=e[n];if(!(void 0!==o&&0<T(o,t)))break e;e[n]=t,e[r]=o,r=n}}function E(e){return void 0===(e=e[0])?null:e}function S(e){var t=e[0];if(void 0!==t){var r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,o=e.length;n<o;){var a=2*(n+1)-1,i=e[a],l=a+1,u=e[l];if(void 0!==i&&0>T(i,r))void 0!==u&&0>T(u,i)?(e[n]=u,e[l]=r,n=l):(e[n]=i,e[a]=r,n=a);else{if(!(void 0!==u&&0>T(u,r)))break e;e[n]=u,e[l]=r,n=l}}}return t}return null}function T(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var _=[],C=[],O=1,P=null,R=3,A=!1,q=!1,L=!1;function N(e){for(var t=E(C);null!==t;){if(null===t.callback)S(C);else{if(!(t.startTime<=e))break;S(C),t.sortIndex=t.expirationTime,k(_,t)}t=E(C)}}function D(e){if(L=!1,N(e),!q)if(null!==E(_))q=!0,r(I);else{var t=E(C);null!==t&&n(D,t.startTime-e)}}function I(e,r){q=!1,L&&(L=!1,o()),A=!0;var a=R;try{for(N(r),P=E(_);null!==P&&(!(P.expirationTime>r)||e&&!t.unstable_shouldYield());){var i=P.callback;if("function"===typeof i){P.callback=null,R=P.priorityLevel;var l=i(P.expirationTime<=r);r=t.unstable_now(),"function"===typeof l?P.callback=l:P===E(_)&&S(_),N(r)}else S(_);P=E(_)}if(null!==P)var u=!0;else{var s=E(C);null!==s&&n(D,s.startTime-r),u=!1}return u}finally{P=null,R=a,A=!1}}var j=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){q||A||(q=!0,r(I))},t.unstable_getCurrentPriorityLevel=function(){return R},t.unstable_getFirstCallbackNode=function(){return E(_)},t.unstable_next=function(e){switch(R){case 1:case 2:case 3:var t=3;break;default:t=R}var r=R;R=t;try{return e()}finally{R=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=j,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=R;R=e;try{return t()}finally{R=r}},t.unstable_scheduleCallback=function(e,a,i){var l=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?l+i:l:i=l,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:O++,callback:a,priorityLevel:e,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(e.sortIndex=i,k(C,e),null===E(_)&&e===E(C)&&(L?o():L=!0,n(D,i-l))):(e.sortIndex=u,k(_,e),q||A||(q=!0,r(I))),e},t.unstable_wrapCallback=function(e){var t=R;return function(){var r=R;R=t;try{return e.apply(this,arguments)}finally{R=r}}}},7425:(e,t,r)=>{"use strict";e.exports=r(8142)},9853:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Headers:()=>h,Request:()=>x,Response:()=>E,DOMException:()=>T,fetch:()=>_});var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o="URLSearchParams"in n,a="Symbol"in n&&"iterator"in Symbol,i="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),l="FormData"in n,u="ArrayBuffer"in n;if(u)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};function f(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError(\'Invalid character in header field name: "\'+e+\'"\');return e.toLowerCase()}function d(e){return"string"!==typeof e&&(e=String(e)),e}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function g(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function m(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function v(e){var t=new FileReader,r=m(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():u&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=g(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=g(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(v)}),this.text=function(){var e,t,r,n=g(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=m(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l&&(this.formData=function(){return this.text().then(k)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=f(e),t=d(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=d(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),p(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),p(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),p(e)},a&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(e,t){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r,n,o=(t=t||{}).body;if(e instanceof x){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var a=/([?&])_=[^&]*/;if(a.test(this.url))this.url=this.url.replace(a,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function k(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\\+/g," "),o=r.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function E(e,t){if(!(this instanceof E))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},b.call(x.prototype),b.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];E.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})};var T=n.DOMException;try{new T}catch(e){(T=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function _(e,t){return new Promise((function(r,o){var a=new x(e,t);if(a.signal&&a.signal.aborted)return o(new T("Aborted","AbortError"));var l=new XMLHttpRequest;function s(){l.abort()}l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new h,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;setTimeout((function(){r(new E(o,n))}),0)},l.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},l.onabort=function(){setTimeout((function(){o(new T("Aborted","AbortError"))}),0)},l.open(a.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?l.withCredentials=!0:"omit"===a.credentials&&(l.withCredentials=!1),"responseType"in l&&(i?l.responseType="blob":u&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(l.responseType="arraybuffer")),!t||"object"!==typeof t.headers||t.headers instanceof h?a.headers.forEach((function(e,t){l.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){l.setRequestHeader(e,d(t.headers[e]))})),a.signal&&(a.signal.addEventListener("abort",s),l.onreadystatechange=function(){4===l.readyState&&a.signal.removeEventListener("abort",s)}),l.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}_.polyfill=!0,n.fetch||(n.fetch=_,n.Headers=h,n.Request=x,n.Response=E)},8950:(e,t,r)=>{"use strict";r(1522),r(5998),r(4658),r(4711),r(7105),r(1034),r(9227),r(9385),r(9764),r(3264),r(1257),r(6435),r(681),r(7313),r(5185),r(100),r(1168),r(3782),r(8458),r(620),r(7987),r(8151),r(7925),r(8955),"undefined"===typeof Promise&&(r(7247).enable(),self.Promise=r(83)),"undefined"!==typeof window&&r(9853),Object.assign=r(9934)},4037:(e,t,r)=>{"use strict";r(4801),r(1537),r(3782),r(8955),r(3035),r(2481),r(673),r(4756),r(5837),r(471),r(6692),r(5853),r(7415),r(4837),r(4285),r(9932),r(5843),r(1080),r(7074),r(7992),r(6443),r(8151),r(3763),r(1061),r(1675),r(3860),r(8088),r(7041),r(3922),r(156),r(8946),r(9492),r(1402),r(9787),r(6024),r(2681),r(2632),r(1463),r(5691),r(7705),r(5154),r(8950),r(6597).polyfill()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var n={};(()=>{"use strict";r.d(n,{N:()=>he});r(4037);var e=r(6346),t=r(2171),o=function(e){return{position:"relative",display:"inline-flex",flexDirection:"column",height:"100%",width:"1024px",maxWidth:"100%",overflowX:"hidden",overflowY:"auto",padding:"0.5rem",boxSizing:"border-box",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"11px",whiteSpace:"pre-wrap",wordBreak:"break-word",lineHeight:1.5,color:e.color}},a=null;const i=function(t){var r=(0,e.useContext)(he),n=t.shortcutHandler;return(0,e.useEffect)((function(){var e=function(e){n&&n(e.key)};return window.addEventListener("keydown",e),a&&a.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e),a&&a.removeEventListener("keydown",e)}}),[n]),e.createElement("div",{style:o(r),ref:function(e){if(e){var t=e.ownerDocument;a=t.defaultView}}},t.children)};var l=function(e){return{fontFamily:"sans-serif",color:e.footer,marginTop:"0.5rem",flex:"0 0 auto"}};const u=function(t){var r=(0,e.useContext)(he);return e.createElement("div",{style:l(r)},t.line1,e.createElement("br",null),t.line2)};var s=function(e){return{fontSize:"2em",fontFamily:"sans-serif",color:e.headerColor,whiteSpace:"pre-wrap",margin:"0 2rem 0.75rem 0",flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}};const c=function(t){var r=(0,e.useContext)(he);return e.createElement("div",{style:s(r)},t.headerText)};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={position:"relative",display:"block",padding:"0.5em",marginTop:"0.5em",marginBottom:"0.5em",overflowX:"auto",whiteSpace:"pre-wrap",borderRadius:"0.25rem"},g={fontFamily:"Consolas, Menlo, monospace"};const m=function(t){var r=t.main,n=t.codeHTML,o=(0,e.useContext)(he),a=p(p({},h),{},{backgroundColor:o.primaryPreBackground,color:o.primaryPreColor}),i=p(p({},h),{},{backgroundColor:o.secondaryPreBackground,color:o.secondaryPreColor}),l=r?a:i,u={__html:n};return e.createElement("pre",{style:l},e.createElement("code",{style:g,dangerouslySetInnerHTML:u}))};var v=r(2434),y=r.n(v),b=r(3624),w=function(e){return{reset:[e.base05,"transparent"],black:e.base05,red:e.base08,green:e.base0B,yellow:e.base08,blue:e.base0C,magenta:e.base0C,cyan:e.base0E,gray:e.base03,lightgrey:e.base01,darkgrey:e.base03}},x={"ansi-bright-black":"black","ansi-bright-yellow":"yellow","ansi-yellow":"yellow","ansi-bright-green":"green","ansi-green":"green","ansi-bright-cyan":"cyan","ansi-cyan":"cyan","ansi-bright-red":"red","ansi-red":"red","ansi-bright-magenta":"magenta","ansi-magenta":"magenta","ansi-white":"darkgrey"};const k=function(e,t){for(var r=(new(y())).ansiToJson((0,b.encode)(e),{use_classes:!0}),n="",o=!1,a=0;a<r.length;++a)for(var i=r[a],l=i.content,u=i.fg,s=l.split("\\n"),c=0;c<s.length;++c){o||(n+=\'<span data-ansi-line="true">\',o=!0);var f=s[c].replace("\\r",""),d=w(t)[x[u]];null!=d?n+=\'<span style="color: \'+d+\';">\'+f+"</span>":(null!=u&&console.log("Missing color mapping: ",u),n+="<span>"+f+"</span>"),c<s.length-1&&(n+="</span>",o=!1,n+="<br/>")}return o&&(n+="</span>",o=!1),n};var E=/^\\.(\\/[^/\\n ]+)+\\.[^/\\n ]+$/,S=[/^.*\\((\\d+):(\\d+)\\)$/,/^Line (\\d+):.+$/];const T=function(e){for(var t=e.split("\\n"),r="",n=0,o=0,a=0;a<t.length;a++){var i=y().ansiToText(t[a]).trim();if(i){!r&&i.match(E)&&(r=i);for(var l=0;l<S.length;){var u=i.match(S[l]);if(u){n=parseInt(u[1],10),o=parseInt(u[2],10)+1||1;break}l++}if(r&&n)break}}return r&&n?{fileName:r,lineNumber:n,colNumber:o}:null};var _={cursor:"pointer"};const C=function(t){var r=(0,e.useContext)(he),n=t.error,o=t.editorHandler,a=T(n),l=null!==a&&null!==o;return e.createElement(i,null,e.createElement(c,{headerText:"Failed to compile"}),e.createElement("div",{onClick:l&&a?function(){return o(a)}:null,style:l?_:null},e.createElement(m,{main:!0,codeHTML:k(n,r)})),e.createElement(u,{line1:"This error occurred during the build time and cannot be dismissed."}))};function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function q(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function N(e){return N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function D(e,t){if(t&&("object"===N(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return e}(e)}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=L(e);if(t){var o=L(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return D(this,r)}}var j=function(e){return{color:e.closeColor,lineHeight:"1rem",fontSize:"1.5rem",padding:"1rem",cursor:"pointer",position:"absolute",right:0,top:0}};const M=function(t){var r=t.close,n=(0,e.useContext)(he);return e.createElement("span",{title:"Click or press Escape to dismiss.",onClick:r,style:j(n)},"×")};var F={marginBottom:"0.5rem"},z={marginRight:"1em"},U={border:"none",borderRadius:"4px",padding:"3px 6px",cursor:"pointer"},B=function(e){return p(p({},U),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopRightRadius:"0px",borderBottomRightRadius:"0px",marginRight:"1px"})},V=function(e){return p(p({},U),{},{backgroundColor:e.navBackground,color:e.navArrow,borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"})};const H=function(t){var r=(0,e.useContext)(he),n=t.currentError,o=t.totalErrors,a=t.previous,i=t.next;return e.createElement("div",{style:F},e.createElement("span",{style:z},e.createElement("button",{onClick:a,style:B(r)},"←"),e.createElement("button",{onClick:i,style:V(r)},"→")),"".concat(n," of ").concat(o," errors on the page"))};function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){for(;null!=t&&"br"!==t.tagName.toLowerCase();)t=t.nextElementSibling;null!=t&&e.removeChild(t)}var Q=r(8641);const Y=function(t){var r=(0,e.useContext)(he),n=t.lines,o=t.lineNum,a=t.columnNum,i=t.contextSize,l=t.main,u=[],s=1/0;n.forEach((function(e){var t=e.content,r=t.match(/^\\s*/);""!==t&&(s=r&&r[0]?Math.min(s,r[0].length):0)})),n.forEach((function(e){var t=e.content,r=e.lineNumber;isFinite(s)&&(t=t.substring(s)),u[r-1]=t}));var c=(0,Q.rf)(u.join("\\n"),{start:{line:o,column:null==a?0:a-(isFinite(s)?s:0)}},{forceColor:!0,linesAbove:i,linesBelow:i}),f=k(c,r),d=document.createElement("code");d.innerHTML=f,function(e){for(var t=e.childNodes,r=0;r<t.length;++r){var n=t[r];if("span"===n.tagName.toLowerCase()){var o=n.innerText;null!=o&&"|^"===o.replace(/\\s/g,"")&&(n.style.position="absolute",$(e,n))}}}(d);var p=d.childNodes;e:for(var h=0;h<p.length;++h)for(var g=p[h].childNodes,v=0;v<g.length;++v){var y=g[v].innerText;if(null!=y&&-1!==y.indexOf(" "+o+" |"))break e}return e.createElement(m,{main:l,codeHTML:d.innerHTML})};function K(e,t,r,n,o,a,i){var l;if(!i&&e&&"number"===typeof t){var u=/^[/|\\\\].*?[/|\\\\]((src|node_modules)[/|\\\\].*)/.exec(e);l=u&&u[1]?u[1]:e,l+=":"+t,r&&(l+=":"+r)}else n&&"number"===typeof o?(l=n+":"+o,a&&(l+=":"+a)):l="unknown";return l.replace("webpack://",".")}var X=function(e){return{textDecoration:"none",color:e.anchorColor,cursor:"pointer"}},J=function(e){return{marginBottom:"1.5em",color:e.toggleColor,cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",background:e.toggleBackground,fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"}};const Z=function(t){var r=(0,e.useContext)(he),n=G((0,e.useState)(!1),2),o=n[0],a=n[1],i=function(){var e=t.frame,r=e._originalFileName,n=e._originalLineNumber;return r?-1!==r.trim().indexOf(" ")?null:{fileName:r,lineNumber:n||1}:null},l=function(){var e=i();e&&t.editorHandler(e)},u=t.frame,s=t.contextSize,c=t.critical,f=t.showCode,d=u.fileName,p=u.lineNumber,h=u.columnNumber,g=u._scriptCode,m=u._originalFileName,v=u._originalLineNumber,y=u._originalColumnNumber,b=u._originalScriptCode,w=u.getFunctionName(),x=K(m,v,y,d,p,h,o),k=null;f&&(o&&g&&0!==g.length&&null!=p?k={lines:g,lineNum:p,columnNum:h,contextSize:s,main:c}:!o&&b&&0!==b.length&&null!=v&&(k={lines:b,lineNum:v,columnNum:y,contextSize:s,main:c}));var E=null!==i()&&null!==t.editorHandler;return e.createElement("div",null,e.createElement("div",null,w),e.createElement("div",{style:{fontSize:"0.9em",marginBottom:"0.9em"}},e.createElement("span",{style:E?X(r):null,onClick:E?l:null,onKeyDown:E?function(e){"Enter"===e.key&&l()}:null,tabIndex:E?"0":null},x)),k&&e.createElement("span",null,e.createElement("span",{onClick:E?l:null,style:E?{cursor:"pointer"}:null},e.createElement(Y,k)),e.createElement("button",{style:J(r),onClick:function(){a(!o)}},"View "+(o?"source":"compiled"))))};var ee={cursor:"pointer",border:"none",display:"block",width:"100%",textAlign:"left",fontFamily:"Consolas, Menlo, monospace",fontSize:"1em",padding:"0px",lineHeight:"1.5"},te=function(e){return p(p({},ee),{},{color:e.color,background:e.background,marginBottom:"1.5em"})},re=function(e){return p(p({},ee),{},{color:e.color,background:e.background,marginBottom:"0.6em"})};const ne=function(t){var r=(0,e.useContext)(he),n=G((0,e.useState)(!0),2),o=n[0],a=n[1],i=function(){a(!o)},l=t.children.length;return e.createElement("div",null,e.createElement("button",{onClick:i,style:o?te(r):re(r)},(o?"▶":"▼")+" ".concat(l," stack frames were ")+(o?"collapsed.":"expanded.")),e.createElement("div",{style:{display:o?"none":"block"}},t.children,e.createElement("button",{onClick:i,style:re(r)},"▲ ".concat(l," stack frames were expanded."))))};function oe(e){switch(e){case"EvalError":case"InternalError":case"RangeError":case"ReferenceError":case"SyntaxError":case"TypeError":case"URIError":return!0;default:return!1}}var ae={fontSize:"1em",flex:"0 1 auto",minHeight:"0px",overflow:"auto"};const ie=function(t){q(n,t);var r=I(n);function n(){return O(this,n),r.apply(this,arguments)}return R(n,[{key:"renderFrames",value:function(){var t=this.props,r=t.stackFrames,n=t.errorName,o=t.contextSize,a=t.editorHandler,i=[],l=!1,u=[],s=0;return r.forEach((function(t,c){var f=t.fileName,d=function(e,t){return null==e||""===e||-1!==e.indexOf("/~/")||-1!==e.indexOf("/node_modules/")||-1!==e.trim().indexOf(" ")||null==t||""===t}(t._originalFileName,f),p=!oe(n),h=d&&(p||l);d||(l=!0);var g=e.createElement(Z,{key:"frame-"+c,frame:t,contextSize:o,critical:0===c,showCode:!h,editorHandler:a}),m=c===r.length-1;h&&u.push(g),h&&!m||(1===u.length?i.push(u[0]):u.length>1&&(s++,i.push(e.createElement(ne,{key:"bundle-"+s},u))),u=[]),h||i.push(g)})),i}},{key:"render",value:function(){return e.createElement("div",{style:ae},this.renderFrames())}}]),n}(e.Component);var le={display:"flex",flexDirection:"column"};const ue=function(t){var r=t.errorRecord,n=t.editorHandler,o=r.error,a=r.unhandledRejection,i=r.contextSize,l=r.stackFrames,u=a?"Unhandled Rejection ("+o.name+")":o.name,s=o.message,f=s.match(/^\\w*:/)||!u?s:u+": "+s;return f=f.replace(/^Invariant Violation:\\s*/,"").replace(/^Warning:\\s*/,"").replace(" Check the render method","\\n\\nCheck the render method").replace(" Check your code at","\\n\\nCheck your code at"),e.createElement("div",{style:le},e.createElement(c,{headerText:f}),e.createElement(ie,{stackFrames:l,errorName:u,contextSize:i,editorHandler:n}))};const se=function(t){q(n,t);var r=I(n);function n(){var e;O(this,n);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(e=r.call.apply(r,[this].concat(o))).state={currentIndex:0},e.previous=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex>0?e.currentIndex-1:t.errorRecords.length-1}}))},e.next=function(){e.setState((function(e,t){return{currentIndex:e.currentIndex<t.errorRecords.length-1?e.currentIndex+1:0}}))},e.shortcutHandler=function(t){"Escape"===t?e.props.close():"ArrowLeft"===t?e.previous():"ArrowRight"===t&&e.next()},e}return R(n,[{key:"render",value:function(){var t=this.props,r=t.errorRecords,n=t.close,o=r.length;return e.createElement(i,{shortcutHandler:this.shortcutHandler},e.createElement(M,{close:n}),o>1&&e.createElement(H,{currentError:this.state.currentIndex+1,totalErrors:o,previous:this.previous,next:this.next}),e.createElement(ue,{errorRecord:r[this.state.currentIndex],editorHandler:this.props.editorHandler}),e.createElement(u,{line1:"This screen is visible only in development. It will not appear if the app crashes in production.",line2:"Open your browser’s developer console to further inspect this error.  Click the \'X\' or hit ESC to dismiss this message."}))}}]),n}(e.PureComponent);var ce={background:"white",color:"black",headerColor:"#ce1126",primaryPreBackground:"rgba(206, 17, 38, 0.05)",primaryPreColor:"inherit",secondaryPreBackground:"rgba(251, 245, 180, 0.3)",secondaryPreColor:"inherit",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#293238",navBackground:"rgba(206, 17, 38, 0.05)",navArrow:"#ce1126",base01:"#f5f5f5",base03:"#6e6e6e",base05:"#333333",base08:"#881280",base0B:"#1155cc",base0C:"#994500",base0E:"#c80000"},fe={background:"#353535",color:"white",headerColor:"#e83b46",primaryPreBackground:"rgba(206, 17, 38, 0.1)",primaryPreColor:"#fccfcf",secondaryPreBackground:"rgba(251, 245, 180, 0.1)",secondaryPreColor:"#fbf5b4",footer:"#878e91",anchorColor:"#878e91",toggleBackground:"transparent",toggleColor:"#878e91",closeColor:"#ffffff",navBackground:"rgba(206, 17, 38, 0.2)",navArrow:"#ce1126",base01:"#282a2e",base03:"#969896",base05:"#c5c8c6",base08:"#cc6666",base0B:"#b5bd68",base0C:"#8abeb7",base0E:"#b294bb"};var de=null,pe=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?fe:ce,he=(0,e.createContext)();window.updateContent=function(r){var n,o,a,i,l,u=(o=(n=r).currentBuildError,a=n.currentRuntimeErrorRecords,i=n.dismissRuntimeErrors,l=n.editorHandler,o?e.createElement(he.Provider,{value:pe},e.createElement(C,{error:o,editorHandler:l})):a.length>0?e.createElement(he.Provider,{value:pe},e.createElement(se,{errorRecords:a,close:i,editorHandler:l})):null);return null===u?(t.unmountComponentAtNode(de),!1):(t.render(u,de),!0)},document.body.style.margin="0",document.body.style["max-width"]="100vw",function(e,t){for(var r in e.setAttribute("style",""),t)t.hasOwnProperty(r)&&(e.style[r]=t[r])}(de=document.createElement("div"),function(e){return{width:"100%",height:"100%","box-sizing":"border-box","text-align":"center","background-color":e.background}}(pe)),document.body.appendChild(de),window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady()})()})();',t.body.appendChild(r)}},window.document.body.appendChild(e)}}function we(){if(!se)throw new Error("Expected options to be injected.");if(!ne)throw new Error("Iframe has not been created yet.");ne.contentWindow.updateContent({currentBuildError:le,currentRuntimeErrorRecords:ue,dismissRuntimeErrors:ve,editorHandler:ie})||(window.document.body.removeChild(ne),ne=null,ae=!1)}window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__=window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__||{},window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady=function(){ae=!0,oe=!1,we()},"production"===undefined&&console.warn("react-error-overlay is not meant for use in production. You should ensure it is not included in your build to reduce bundle size.")})(),n})()}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************!*\
  !*** ./node_modules/error-overlay-webpack-plugin/lib/entry-basic.js ***!
  \**********************************************************************/


var _reactErrorOverlay = __webpack_require__(/*! react-error-overlay */ "./node_modules/react-error-overlay/lib/index.js");

var _launchEditorEndpoint = _interopRequireDefault(__webpack_require__(/*! react-dev-utils/launchEditorEndpoint */ "./node_modules/react-dev-utils/launchEditorEndpoint.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
(0, _reactErrorOverlay.setEditorHandler)(function (errorLocation) {
  // Keep this sync with errorOverlayMiddleware.js
  fetch(_launchEditorEndpoint["default"] + '?fileName=' + window.encodeURIComponent(errorLocation.fileName) + '&lineNumber=' + window.encodeURIComponent(errorLocation.lineNumber || 1) + '&colNumber=' + window.encodeURIComponent(errorLocation.colNumber || 1));
});
(0, _reactErrorOverlay.startReportingRuntimeErrors)({
  onError: function onError() {
    if (false) {}
  }
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lwc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lwc */ "./node_modules/@lwc/engine-dom/dist/engine-dom.cjs.js");
/* harmony import */ var my_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my/app */ "./src/modules/my/app/app.js");


const app = (0,lwc__WEBPACK_IMPORTED_MODULE_0__.createElement)('my-app', {
  is: my_app__WEBPACK_IMPORTED_MODULE_1__.default
}); // eslint-disable-next-line @lwc/lwc/no-document-query

document.querySelector('#main').appendChild(app);
})();

/******/ })()
;
//# sourceMappingURL=app-2eb5b9fd77be4e11d801.js.map