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

// const prod1 = new Product(
//     "id",
//     "name",
//     "icon_url",
//     "visit_url",
//     "short_desp",
//     "created_on",
//     "created_by"
// );
// const prod2 = new Product(
//     "id",
//     "name",
//     "icon_url",
//     "visit_url",
//     "short_desp",
//     "created_on",
//     "created_by"
// );
// console.log(prod1);

// const comment1 = new Comment("id1", "desp", "created_on", "created_by");
// const comment2 = new Comment("id2", "desp", "created_on", "created_by");
// console.log(comment1);

// prod1.addComment(comment1);
// prod1.addComment(comment2);

// const tag1 = new Tag("id", "tag");
// prod1.addTag(tag1);

// const image1 = new Image("id", "url");
// prod1.addImage(image1);

// prod1.upvotes();
// prod1.upvotes();
// prod1.upvotes();

// // prod1.getComment();
// // console.log(prod1.noOfComments);

// console.log(prod1);

// console.log(Product.prototype === prod1.__proto__);
// console.log(prod2.__proto__.__proto__ === prod1.__proto__.__proto__);
// // object.prototype is top of the chain
// console.log(Product.prototype.isPrototypeOf(prod1));
// console.log(Product.prototype.isPrototypeOf(prod2));
// console.log(Product.prototype.isPrototypeOf(Product));

// console.dir(Product.prototype.constructor);
//.prototype of linked objects
// Product.prototype.type = "Food";
// console.log(prod1.type, prod2.type);
// console.log(prod1.noOfComments);
// //////

// const arr = [1, 2, 3, 4, 5];
// // console.log(arr.prototype); // // undefined
// console.log(arr.__proto__);

module.exports = { Product, Comment, Tag, Image };
