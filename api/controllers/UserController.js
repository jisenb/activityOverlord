/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
//view에 'new.ejs'에 대한 액션을 정의 res.view()를 띄우게된다.
	'new' : function(req, res){
		// res.locals.flash= _.clone(req.session.flash);//2. 쿠케에 대한 오류정보를 우리가 저장할 수 있는
		// 																						//res.locals에 저장해준다.
		// 																						//new . js에서 local flash에 에 대한 에러처리를한다.

    res.locals.flash = req.flash();



		res.view(); //new를 띄워주고
		// req.session.flash={};
		//상대방 flash는 다시 비워줘서 보낸다. 이렇게하지않으면 재요청시
		//한번 오류낫던게 계속 뜰 수 있다.

	},

	create : function (req, res, next){
			//Create a User with the params sent from
			//the sign-up-form -->ejs
			User.create( req.params.all(),function userCreated(err,user){
				//에러를 처리하기위해 에러가 나면, console에 로그를 띄워준다.
				///user/new를 띄워준다.
				if(err){
					console.log(err);
					req.session.flash={// 1. req.session을 유저정보라고 생각했을때, 에러가나면 response를 /user/new로 해준다.

						err: err
					}

					return res.redirect('/user/new');
				}

				//After successfully creating the user
				//redirect to the show action

				res.json(user);
				// req.session.flash={};
			});
	}

};
