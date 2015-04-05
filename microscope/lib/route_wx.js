wxToken = 'wangsenitrydotoken';
wxAccessToken = '';
wxAppID = 'wx5316ec281e408483';
wxSecret = '66a23511bf2c7cae3d2917a2d1ea3962';
//服务器配置 安全模式 服务器验证
Router.route('/wx', function(){

	this.response.statusCode = 200;
	this.response.setHeader("Content-Type", "application/json");

	var timestamp = this.params.query.timestamp;
	// console.log('timestamp' + timestamp);
	var nonce = this.params.query.nonce;
	// console.log('nonce' + nonce);
	var joinStr = [wxToken,timestamp, nonce].sort().join('');
	// console.log('joinStr' + joinStr);
	var verifyStr = CryptoJS.SHA1(joinStr).toString();
	// console.log('verifyStr' + verifyStr);
	// console.log('signature' + this.params.query.signature);

	if (this.params.query.signature === verifyStr) {
		this.response.end(this.params.query.echostr);
	}else{
		this.response.end('false');
	}

}, {where: 'server'});

//获取微信access_token  需要修改appid和secret的参数
Meteor.startup(function () {
    // code to run on server at startup
    var http = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + wxAppID + '&secret=' + wxSecret;
    Meteor.http.get(http, function (error, result) {
		if(error) {
		    console.log('获取微信access_token FAILED!');
		} else {
		    console.log('获取微信access_token SUCCES');
		    if (result.statusCode === 200) {
		        console.log('Status code = 200!');
		        // console.log(result.content);
		        wxAccessToken = EJSON.parse(result.content).access_token;
		        // console.log(wxAccessToken);
		        //获取微信ip_list
		        get_wx_ip_list();

		        create_group('sensensen');

		    }
		}

	});
 });
//获取微信服务器ip列表
function get_wx_ip_list(){
	var http = 'https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=' + wxAccessToken;
	console.log(http);
	Meteor.http.get(http, function (error, result) {
		if(error) {
		    console.log('获取微信服务器ip列表 FAILED!');
		} else {
		    console.log('获取微信服务器ip列表 SUCCES');
		    if (result.statusCode === 200) {
		        console.log('Status code = 200!');
		        console.log(result.content);		   
		     }
		}
	});
}
//创建微信分组
function create_group(name){
	var http = 'https://api.weixin.qq.com/cgi-bin/groups/create?access_token=' + wxAccessToken;
	HTTP.call("POST", http,
          {
          	data: {
          		"group":{"name":"test"}
          	}
      	  },
          function (error, result) {
            if (error) {
              console.log('create group FAILED!');
              console.log(error);
            }
            else{
            	console.log('create group SUCCES!');
            	console.log(result.content);
            }
          });
	
}
//查询所有分组


//微信get请求
// function wx_get_request(url,callback){
// 	console.log(url);
// 	Meteor.http.get(url, callback);
// }

