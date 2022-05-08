const Comment = require('../models/comments.model')
const Project = require('../models/project.model')
const Filter = require('bad-words');
const filter = new Filter();
//CRUD comment 
// the adding process of comment require a content verif
const add = (req, res) => {
  if (!req.body)
    return res.status(400).json("body required")

  // bind the project_id with the comment 
  req.body.Project = req.params.idProject
  // this line aims to hide the bad word by ***
  req.body.content = filter.clean(req.body.content)
  req.body.creator = req.user._id
  Comment.create(req.body)
    .then(result => {
      Project.findByIdAndUpdate(req.params.idProject, { $push: { comments: req.params.idProject } })
        .then(result1 => {
          return res.status(200).json(result)
        })
        .catch(err1 => {

          return res.status(500).json(err1)
        })
    })
    .catch(err => {
      return res.status(500).json(err)
    })
}

const update = (req, res) => {
  if (!req.body)
    return res.status(400).json("body required")

  Comment.updateOne({ _id: req.params.id }, req.body)
    .then(result => {
      return res.status(200).json(result)
    })
    .catch(err => {
      return res.status(500).json(err)
    })
}

// as a adminstrator i can delete comments
const Delete = async (req, res) => {
  // console.log(req.params.id);
  const result = await Comment.findByIdAndDelete(req.params.id)
  if (result)
    return res.status(200).json("comment deleted with success")
  return res.status(500).json("error")

}


const getComment = async (req, res) => {
  const comment = await Comment.findById(req.params.idComment)
  console.log(comment);
}


const getAllComments = async (req, res) => {
  Comment.find({ _id: 0 }, (err, result) => {
    if (err)
        return res.status(500).json(err)
    return res.status(200).json(result)
})
}



const like = (req, res) => {
  Comment.findByIdAndUpdate(req.params.idComment, { $inc: { likes: 1 } })
    .then(result => {
      return res.status(200).json("like affected with success")
    })
    .catch(err => {
      return res.status(500).json(err)
    })
}
const dislike = (req, res) => {
  Comment.findByIdAndUpdate(req.params.idComment, { $inc: { dislikes: 1 } })
    .then(result => {
      return res.status(200).json("dislike affected with success")
    })
    .catch(err => {
      return res.status(500).json(err)
    })
}


const removeByOwner = async (req, res) => {
  const comment = await Comment.findById(req.params.idComment)

  if (JSON.stringify(req.user._id) !== JSON.stringify(comment.creator))
    return res.status(403).json("enable to remove comment because you're not the creator!")
  const result = await Comment.deleteOne({ _id: req.params.idComment })
  if (result)
    return res.status(200).json("comment removed by his own creator with success ")
  return res.status(500).json("error")
}





module.exports = {
  add, update, Delete, getComment, getAllComments ,like, dislike, removeByOwner
}