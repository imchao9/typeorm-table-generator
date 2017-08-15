"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const PostDetails_1 = require("./PostDetails");
const PostCategory_1 = require("./PostCategory");
const PostAuthor_1 = require("./PostAuthor");
const PostInformation_1 = require("./PostInformation");
const PostImage_1 = require("./PostImage");
const PostMetadata_1 = require("./PostMetadata");
const typeorm_2 = require("typeorm");
let Post = class Post {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostCategory_1.PostCategory, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "categories", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostDetails_1.PostDetails, details => details.posts, {
        cascadeInsert: true
    }),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "details", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostImage_1.PostImage, image => image.posts, {
        cascadeUpdate: true
    }),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "images", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostMetadata_1.PostMetadata, metadata => metadata.posts),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "metadatas", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostInformation_1.PostInformation, information => information.posts, {
        cascadeInsert: true,
        cascadeUpdate: true
    }),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "informations", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PostAuthor_1.PostAuthor, author => author.posts),
    typeorm_2.JoinTable(),
    __metadata("design:type", Array)
], Post.prototype, "authors", void 0);
Post = __decorate([
    typeorm_1.Entity("sample4_post")
], Post);
exports.Post = Post;
