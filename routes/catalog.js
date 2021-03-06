var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
var post_controller = require('../controllers/postController');
var home_controller = require('../controllers/homeController');
var message_controller = require('../controllers/messageController');

            /// USER ROUTERS ///

router.get('/signup', user_controller.sign_up_get);

router.post('/signup', user_controller.sign_up_post);

router.get('/login', user_controller.login_get);

router.post('/login', user_controller.login_post)

router.get('/logout', user_controller.logout_get);

router.get('/users/:id', user_controller.get_profile);

                ///  HOME PAGE ///

// Get a list of all the posts for the homepage timeline
router.get('/home', home_controller.get_post_list);

// Create a status post
router.post('/posts', post_controller.post_create_post);

// GET page to edit a post
router.get('/posts/:id/edit', post_controller.get_post_edit);

// POST request to edit post
router.post('/posts/:id/edit', post_controller.post_post_edit);

// Delete a post
router.post('/posts/:id/delete', post_controller.post_delete_post);

// Search for friend using first name
router.post('/search', home_controller.search_list);

// redirect to home page
router.get('/', home_controller.get_redirect);

// get list of friend
router.get('/users/:id/friends', home_controller.get_friend_list);

// add like
router.post('/addlike', post_controller.add_like);

// GET Edit profile
router.get('/editprofile', user_controller.edit_profile_get);

// POST Edit profile
router.post('/editprofile', user_controller.edit_profile_post);

            /// PROFILE PAGE ///

// Send a friend request
router.post('/users/:id1/friendrequest/:id2', user_controller.friendrequest_post);

//id1 -> sender, id2 -> reciever
router.post('/users/:id1/friendrequest/:id2/accept', user_controller.friendrequest_accept);

// decline a friend request
router.post('/users/:id1/friendrequest/:id2/decline', user_controller.friendrequest_decline);

// get specific post to leave comment
router.get('/posts/:id', post_controller.get_post);

// create a new comment (id is post id)
router.post('/comments/:id', post_controller.post_create_comment);

// delete a comment 
router.post('/comments/:id/delete', post_controller.post_delete_comment);

            // FIND NEW FRIEND PAGE //

router.get('/findfriends', home_controller.get_user_list);

            // SOCKETIO //
router.get('/message', message_controller.message_list);

router.get('/messagetbd', message_controller.message_tbd);

router.get('/message/:id', message_controller.get_message);

router.post('/message', message_controller.post_message);


module.exports = router;