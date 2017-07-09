import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Site from './site';
export default siteContainer = createContainer(() => {
  const user = Meteor.user()
  return { user } }
  , Site
);
