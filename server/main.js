import {Links} from '../imports/collections/link';
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';
function handleRoute(req,res,next) {
    const link = Links.findOne( { token : req.params.randomNumber } );
    if(link) {
        Links.update( { $inc : { clicks : 1 }  });
        res.writeHead(307, { 'Location' : link.url });
        res.end();
    }
    else {
        next(); 
    }
}
Meteor.startup( ()=> {
    //startupcode
   const middleware = ConnectRoute(function(router) {
       router.get('/:randomNumber',handleRoute);
   });
   WebApp.connectHandlers.use(middleware);
    Meteor.publish('links',function(){
        return Links.find({});
});
});