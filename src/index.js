/**
 * @fileoverview
 * @author
 * @module notification
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Notification
     * @constructor
     * @extends Base
     */
    function Notification(comConfig) {
        var self = this;
        //调用父类构造函数
        Notification.superclass.constructor.call(self, comConfig);
    }
    S.extend(Notification, Base, /** @lends Notification.prototype*/{

    }, {ATTRS : /** @lends Notification*/{

    }});
    return Notification;
}, {requires:['node', 'base']});



