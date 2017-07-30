import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// Accounts.validateNewUser((user) => {
//   const email = user.emails[0].address;
//
//   new SimpleSchema({
//     email: {
//       type: String,
//       regEx: SimpleSchema.RegEx.Email
//     }
//   }).validate({ email });
//
//   return true;
// });

Meteor.Methods({
  'editaccount.update'(account){
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
  }//Close EditAccount.update method
})
