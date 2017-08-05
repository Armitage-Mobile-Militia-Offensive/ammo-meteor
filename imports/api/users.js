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

Meteor.methods({
  'editaccount.update'(account){
    const user =  Meteor.users.findOne({_id: this.userId})
    const email = user.emails[0].address !== account.email ? account.email : user.emails[0].address
    const username = user.username !== account.email ? account.email : user.username

    if(this.userId === user._id){
      if( email !== user.emails[0].address){
        new SimpleSchema({
          email: {
            type: String,
            label: 'Your email address',
            regEx: SimpleSchema.RegEx.Email
          }
        }).validate({email})
        Accounts.addEmail(this.userId, email)
        Accounts.removeEmail(this.userId, user.emails[0].address)
        Accounts.sendVerificationEmail(this.userId, email)
      }
    }
  }, //Close Edit Account Update method
  'validateEmail'(email){
    new SimpleSchema({
      email: {
        type: String,
        label: 'Your email address',
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({email})
    return true
  } // Close Validate Email method
})
