var Post = require("../models/post");
const expressValidator = require("express-validator");

exports.home = function(req,res){
    res.render("home", {title: "home", currentUser: req.user})
}

// POST create
exports.post_create_post = [
    expressValidator.body('postContent', 'content must not be empty.').trim().isLength({ min: 1 }),

    // Sanitize fields (using wildcard).
    expressValidator.sanitizeBody('*').escape(),

    (req, res, next) => {
        const errors = expressValidator.validationResult(req);

        const post = new Post({
            content: req.body.postContent,
            author: req.user,
            likes: 0,
            date: new Date()
            })
        if (!errors.isEmpty()) {
            res.render('home', {errors: errors.array()});
            return;
        }
        else {
            post.save(function(err) {
                if (err) { return next(err) }
                res.redirect('/home');
            })
        }
    }
];

// POST edit

// POST delete

// POST like