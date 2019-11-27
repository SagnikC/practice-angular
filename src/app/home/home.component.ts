import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allBlogs =[
    {
      "blogId": "1",
      "lastModified": "2017-10-28T12:20:47.854Z",
      "created": "2017-10-20712:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body ",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
