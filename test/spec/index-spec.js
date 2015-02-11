KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('notification', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/notification/1.0.0/']});
