var weixinToken = 'wangsenitrydotoken';
var weixinAccessToken = '';
var weixinAppID = 'wx5316ec281e408483';
var weixinSecret = '66a23511bf2c7cae3d2917a2d1ea3962';

WeixinMessage = new Mongo.Collection('weixin_message');

if(Meteor.isServer) {

    // Global API configuration
    Restivus.configure({
        useAuth: true,
        prettyJson: true
    });

    // Generates: GET, POST, DELETE on /api/items and GET, PUT, DELETE on
    // /api/items/:id for Items collection
    Restivus.addCollection(WeixinMessage);

    // weixin验证
    Restivus.addRoute('weixin_auth', {authRequired: false}, {
        get: function () {
            this.response.statusCode = 200;
            this.response.setHeader("Content-Type", "application/json");
            var timestamp = this.params.query.timestamp;
            var nonce = this.params.query.nonce;
            var joinStr = [weixinToken,timestamp, nonce].sort().join('');
            var verifyStr = CryptoJS.SHA1(joinStr).toString();
            if (this.params.query.signature === verifyStr) {
                var echoStr = this.params.query.echostr;
                console.log('微信验证成功');
                this.response.end(echoStr);
                this.done();
            }else{
                this.response.end('false');
                this.done();
            }
        }
    });
    //获取微信access_token
    ////获取微信access_token  需要修改appid和secret的参数
    Meteor.startup(function () {
        // code to run on server at startup
        var http = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + weixinAppID + '&secret=' + weixinSecret;
        Meteor.http.get(http, function (error, result) {
            if(error) {
                console.log('获取微信access_token FAILED!');
            } else {
                console.log('获取微信access_token SUCCES');
                if (result.statusCode === 200) {
                    console.log('Status code = 200!');
                    // console.log(result.content);
                    weixinAccessToken = EJSON.parse(result.content).access_token;
                    // console.log(wxAccessToken);
                    //获取微信ip_list
                    //get_wx_ip_list();
                    //
                    //create_group('sensensen');
                    //
                    //get_wx_group_list();
                    //
                    //get_wx_group_with_openID('op82Ot-3nzBI2u1jxwNWJ_ohSr0g');
                    //
                    //modify_wx_group_name('118','未分组modify');
                    //
                    //remove_openID_to_group('op82Ot-3nzBI2u1jxwNWJ_ohSr0g','118');
                    //
                    //remove_openIDList_to_group(['op82Ot-3nzBI2u1jxwNWJ_ohSr0g'],'2');
                    //
                    //create_menu();
                    //
                    //get_menu();

                }
            }

        });
    });
}