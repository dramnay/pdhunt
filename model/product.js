class Product {
  comments = [];
  tags = [];
  images = [];
  noOfComments = 0;
  noOfUpvotes = 0;
  // id = 0;
  constructor(
    id,
    name,
    icon_url,
    visit_url,
    short_desp,
    created_on,
    created_by
  ) {
    this.id = id;
    this.name = name;
    this.icon_url = icon_url;
    this.visit_url = visit_url;
    this.short_desp = short_desp;
    this.created_on = created_on;
    this.created_by = created_by;
  }

  addComment(comment) {
    this.comments.push(comment);
    this.noOfComments++;
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  addImage(image) {
    this.images.push(image);
  }

  getComment() {
    console.log(this.comments);
  }

  upvotes() {
    this.noOfUpvotes++;
  }
}
// module.exports(Product);

class Comment {
  constructor(id, desp, created_on, created_by) {
    this.id = id;
    this.desp = desp;
    this.created_on = created_on;
    this.created_by = created_by;
  }
}
// module.exports(Comment);

class Tag {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
// module.exports(Tag);

class Image {
  constructor(id, image) {
    this.id = id;
    this.image = image;
  }
}

module.exports = { Product, Comment, Tag, Image };
