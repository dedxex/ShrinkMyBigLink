import {Mongo} from 'meteor/mongo';
import ValidateUrl from 'valid-url';
import { check,Match } from 'meteor/check';
 Meteor.methods({
        'links.insert' : function(url) {
        check(url, Match.Where( url => ValidateUrl.isUri(url)));
        //now we can save url
        const token =Math.random().toString(36).slice(-5);
        //console.log(token);
        Links.insert({ url : url,token : token ,clicks : 0 });
        //console.log(Links.insert( { url, token, clicks : 0 } ));
    }
});
export const Links = new Mongo.Collection('links'); 