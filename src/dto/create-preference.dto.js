"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePreferenceDto = void 0;
var class_validator_1 = require("class-validator");
var CreatePreferenceDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _preferences_decorators;
    var _preferences_initializers = [];
    var _preferences_extraInitializers = [];
    var _marketing_decorators;
    var _marketing_initializers = [];
    var _marketing_extraInitializers = [];
    var _newsletter_decorators;
    var _newsletter_initializers = [];
    var _newsletter_extraInitializers = [];
    var _updates_decorators;
    var _updates_initializers = [];
    var _updates_extraInitializers = [];
    var _frequency_decorators;
    var _frequency_initializers = [];
    var _frequency_extraInitializers = [];
    var _email_decorators_1;
    var _email_initializers_1 = [];
    var _email_extraInitializers_1 = [];
    var _sms_decorators;
    var _sms_initializers = [];
    var _sms_extraInitializers = [];
    var _push_decorators;
    var _push_initializers = [];
    var _push_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePreferenceDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.email = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.preferences = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _preferences_initializers, void 0));
                this.marketing = (__runInitializers(this, _preferences_extraInitializers), __runInitializers(this, _marketing_initializers, void 0));
                this.newsletter = (__runInitializers(this, _marketing_extraInitializers), __runInitializers(this, _newsletter_initializers, void 0));
                this.updates = (__runInitializers(this, _newsletter_extraInitializers), __runInitializers(this, _updates_initializers, void 0));
                this.frequency = (__runInitializers(this, _updates_extraInitializers), __runInitializers(this, _frequency_initializers, void 0));
                this.channels = __runInitializers(this, _frequency_extraInitializers);
                this.email = __runInitializers(this, _email_initializers_1, void 0);
                this.sms = (__runInitializers(this, _email_extraInitializers_1), __runInitializers(this, _sms_initializers, void 0));
                this.push = (__runInitializers(this, _sms_extraInitializers), __runInitializers(this, _push_initializers, void 0));
                __runInitializers(this, _push_extraInitializers);
            }
            return CreatePreferenceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsEmail)()];
            _preferences_decorators = [(0, class_validator_1.IsObject)()];
            _marketing_decorators = [(0, class_validator_1.IsBoolean)()];
            _newsletter_decorators = [(0, class_validator_1.IsBoolean)()];
            _updates_decorators = [(0, class_validator_1.IsBoolean)()];
            _frequency_decorators = [(0, class_validator_1.IsEnum)(['daily', 'weekly', 'monthly', 'never'])];
            _email_decorators_1 = [(0, class_validator_1.IsBoolean)()];
            _sms_decorators = [(0, class_validator_1.IsBoolean)()];
            _push_decorators = [(0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _preferences_decorators, { kind: "field", name: "preferences", static: false, private: false, access: { has: function (obj) { return "preferences" in obj; }, get: function (obj) { return obj.preferences; }, set: function (obj, value) { obj.preferences = value; } }, metadata: _metadata }, _preferences_initializers, _preferences_extraInitializers);
            __esDecorate(null, null, _marketing_decorators, { kind: "field", name: "marketing", static: false, private: false, access: { has: function (obj) { return "marketing" in obj; }, get: function (obj) { return obj.marketing; }, set: function (obj, value) { obj.marketing = value; } }, metadata: _metadata }, _marketing_initializers, _marketing_extraInitializers);
            __esDecorate(null, null, _newsletter_decorators, { kind: "field", name: "newsletter", static: false, private: false, access: { has: function (obj) { return "newsletter" in obj; }, get: function (obj) { return obj.newsletter; }, set: function (obj, value) { obj.newsletter = value; } }, metadata: _metadata }, _newsletter_initializers, _newsletter_extraInitializers);
            __esDecorate(null, null, _updates_decorators, { kind: "field", name: "updates", static: false, private: false, access: { has: function (obj) { return "updates" in obj; }, get: function (obj) { return obj.updates; }, set: function (obj, value) { obj.updates = value; } }, metadata: _metadata }, _updates_initializers, _updates_extraInitializers);
            __esDecorate(null, null, _frequency_decorators, { kind: "field", name: "frequency", static: false, private: false, access: { has: function (obj) { return "frequency" in obj; }, get: function (obj) { return obj.frequency; }, set: function (obj, value) { obj.frequency = value; } }, metadata: _metadata }, _frequency_initializers, _frequency_extraInitializers);
            __esDecorate(null, null, _email_decorators_1, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers_1, _email_extraInitializers_1);
            __esDecorate(null, null, _sms_decorators, { kind: "field", name: "sms", static: false, private: false, access: { has: function (obj) { return "sms" in obj; }, get: function (obj) { return obj.sms; }, set: function (obj, value) { obj.sms = value; } }, metadata: _metadata }, _sms_initializers, _sms_extraInitializers);
            __esDecorate(null, null, _push_decorators, { kind: "field", name: "push", static: false, private: false, access: { has: function (obj) { return "push" in obj; }, get: function (obj) { return obj.push; }, set: function (obj, value) { obj.push = value; } }, metadata: _metadata }, _push_initializers, _push_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePreferenceDto = CreatePreferenceDto;
;
;
timezone: string;
