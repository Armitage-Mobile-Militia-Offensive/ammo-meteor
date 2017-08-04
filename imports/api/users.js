import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// Accounts.validateNewUser((user) => {
//   new SimpleSchema({
//     _id: { type: String },
//     emails: { type: Array },
//     'emails.$': { type: Object },
//     'emails.$.address': { type: String, regEx: SimpleSchema.RegEx.Email },
//     'emails.$.verified': { type: Boolean },
//     'profile': {type: Array},
//     'profile.name': {type: String},
//     'profile.branch': {type: String},
//     'profile.primarySkill': {type: String},
//     'profile.secondarySkill': {type: String},
//     'profile.rank': {type: Number},
//     createdAt: { type: Date },
//     services: { type: Object, blackbox: true }
//   }).validate(user);
//   // Return true to allow user creation to proceed
//   return true;
// })

Meteor.methods({
  editaccountupdate(account){
    const user =  Meteor.users.findOne({_id: this.userId})
    const email = user.emails[0].address !== account.email ? account.email : user.emails[0].address
    const username = user.username !== account.email ? account.email : user.username

    new SimpleSchema({
      email: {
        type: String,
        label: 'Your email address',
        regEx: SimpleSchema.RegEx.Email
      }.validate({email})
    })
    if(this.userId === user._id){
      if( email !== user.emails[0].address){
        Meteor.users.update(Meteor.userId(), {$set: {"profile.secondarySkill": this.refs.secondarySkill.value}})
      }
    }
  }, //Close EditAccount.update method
  'validateEmail'(email){
    new SimpleSchema({
      email: {
        type: String,
        label: 'Your email address',
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({email})
    console.log(`The email: ${email} passed`)
    return true
  }
})
