import { Subject } from 'rxjs';
import { Post } from '../model/post.model';


export class PostsService {

postsSubject = new Subject <any[]>();

private  posts = [
    {
      index: 0,
      title: 'Mon premier post',
      content: 'Lorem Elsass ipsum vielmols, id, libero, kougelhopf commodo leo varius gewurztraminer geht\'s ornare Kabinetpapier s\'guelt elementum condimentum hopla non chambon merci vielmols Richard Schirmeck Yo dû.',
      loveIts: 0,
      createdAt: new Date
    },
    {
      index: 1,
      title: 'Mon deuxième post',
      content: 'Pfourtz ! tellus knack sed Salut bisamme quam. mamsell sagittis gravida Coopé de Truchtersheim Mauris porta semper Heineken météor rossbolla dignissim ante hopla  leo bissame eleifend ac flammekueche Oberschaeffolsheim tellus amet morbi sit ftomi! suspendisse sit Racing. ',
      loveIts: 1,
      createdAt: new Date
    },
    {
      index: 2,
      title: 'Encore un post',
      content: 'Oberschaeffolsheim tristique DNA, wie hoplageiss Strasbourg ornare elit dui Wurschtsalad schnaps rucksack lacus Spätzle et geïz Verdammi picon bière aliquam Gal. ',
      loveIts: -1,
      createdAt: new Date 
    }
  ];

emitPosts() {
  this.postsSubject.next(this.posts.slice());
}

createNewPost(post: Post) {
  this.posts.push(post);
  this.emitPosts();

}

removePost(index: number) {
  this.posts.splice(index, 1);
  this.emitPosts();
}

loveIt(index: number) {
  this.posts[index].loveIts++;
  console.log(this.posts[index].title);
  console.log(`loveNumber: ${ this.posts[index].loveIts }`);
  this.emitPosts();
}

dontLoveIt(index: number) {
  this.posts[index].loveIts--;
  console.log(this.posts[index].title);
  console.log(`loveNumber: ${ this.posts[index].loveIts }`);
  this.emitPosts();
}

}



