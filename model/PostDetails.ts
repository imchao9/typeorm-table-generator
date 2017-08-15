import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./Post";

@Entity("sample4_post_details")
export class PostDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "string",
        nullable: true
    })
    authorName: string|null;

    @Column({
        type: "string",
        nullable: true
    })
    comment: string|null;

    @Column({
        type: "string",
        nullable: true
    })
    metadata: string|null;

    @ManyToMany(type => Post, post => post.details, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    posts: Post[];

}
