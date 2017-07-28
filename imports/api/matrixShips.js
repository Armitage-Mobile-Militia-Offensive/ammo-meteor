import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'
import { Accounts } from 'meteor/accounts-base'
import { Mongo } from 'meteor/mongo'
import { User } from './users'

export const MatrixShips = new Mongo.Collection('shipMatrix')

Meteor.methods({
  'shipMatrix.insert'(){
    const user = Meteor.users.findOne({_id: this.userId})
    console.log('User Return', user)
  }
})
